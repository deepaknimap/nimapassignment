const jwt = require("jsonwebtoken");
// const { checkRefreshToken } = require("../validation/refreshtoken");

module.exports.checkValidUser = (req, res, next) => {
  try {
    let { access_token } = req.cookies;
    console.log(access_token);
    if (!access_token) {
      if (checkRefreshToken(req, res)) {
        next();
      } else {
        return res.status(401).json({
          messsage: "invalid user",
        });
      }
    } else {
      let data = jwt.verify(access_token, "access-token-secret");
      req.body = data;
      next();
    }
  } catch (err) {
    console.log(err.message);
  }
};

const checkRefreshToken = (req, res) => {
  let { refresh_token } = req.cookies;
  if (!refresh_token) {
    return false;
  } else {
    let data = jwt.verify(refresh_token, "refresh-token-secret");
    if (!data) {
      return false;
    }

    let accessToken = jwt.sign({ email : data.email }, "access-token-secret", {
      expiresIn: "1m",
    });

    const accessTokenOptions = {
      httpOnly: true, // Prevents client-side access (XSS protection)
      secure: false, // Required for HTTPS (remove if using localhost)
      sameSite: "Strict", // Helps prevent CSRF attacks
      maxAge: 60 * 1000, // 1 minute
    };

    res.cookie("access_token", accessToken, accessTokenOptions);
    return true;
  }
};
