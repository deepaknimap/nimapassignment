const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();

const fileUploadPath = path.join(__dirname, "uploads");

if (!fs.existsSync(fileUploadPath)) {
  fs.mkdirSync(fileUploadPath);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, fileUploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}-${
      file.originalname
    }`;
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  // limits: { fileSize: 1 * 1024 * 1024 },
  // fileFilter: (req, file, cb) => {
  //     const allowedType = ["image/png" ,"image/jpg" , "image/jpeg" ]
  //     if (allowedType.includes(file.mimetype)) {
  //     return cb(null, true);
  //     } else {
  //     return cb(new Error("file type should be png , jpg , jpeg"));
  //     }
  // },
}).fields([
  { name: "image", maxCount: 1 },
  { name: "music", maxCount: 1 },
  { name: "other", maxCount: 1 },
  { name: "video", maxCount: 1 },
]);

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res
        .status(400)
        .json({ error: `File should be less than 1MB: ${err.message}` });
    } else if (err) {
      return res
        .status(500)
        .json({ error: `Unknown upload error: ${err.message}` });
    }

    if (!req.files) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    res
      .status(201)
      .json({
        message: "File uploaded successfully",
        file: req.files.filename,
      });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}: http://localhost:${PORT}/`);
});
