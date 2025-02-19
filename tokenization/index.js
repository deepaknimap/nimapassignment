const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

const users = [
    { id: 1, username: "john", password: "pass123" },
    { id: 2, username: "doe", password: "pass456" }
];

const secretKey = process.env.JWT_SECRET || "supersecretkey";

const generateToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: "1h" });
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user);
    res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
    res.json({ message: "Login successful", token });
});

const authenticateUser = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(403).json({ message: "Access denied" });

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

app.get('/dashboard', authenticateUser, (req, res) => {
    res.json({ message: `Welcome ${req.user.username}`, user: req.user });
});

app.get('/logout', (req, res) => {
    res.clearCookie("token");
    res.json({ message: "Logged out successfully" });
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000/");
});



