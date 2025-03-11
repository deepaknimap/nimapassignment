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

const upload = multer({storage})


app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.post("/upload", upload.single('pdf')  , (req, res) => {
//   upload(req, res, (err) => {
//     console.log(err);
//     if (err) {
//       return res
//         .status(500)
//         .json({ error: `Unknown upload error: ${err.message}` });
//     }

//     if (!req.files) {
//       return res.status(400).json({ error: "No file uploaded" });
//     }

//     res.status(201).json({
//       message: "File uploaded successfully",
//       file: req.files.filename,
//     });
//   });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}: http://localhost:${PORT}/`);
});
