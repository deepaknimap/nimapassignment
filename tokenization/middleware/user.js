const jwt = require("jsonwebtoken");
module.exports.userAuthentication = async(req, res, next) => {
  try {
    let { access_token, refresh_token } = req.cookies;
    if (!access_token) {
      if (!refresh_token) {
        return res.send(
          "please login first then try to get protected data there are not access or refresh token both are expire"
        );
      }
    let flag  =  verifyRefreshToken(req, res , refresh_token);
    console.log(flag);
    if(flag){
         return  res.status(201).json({msg : "now you can access data make new req"})
    }
    else{
      return  res.status(401).json({msg : "login first then do you facing something worng try to login"})
    }
    }
    let data = jwt.verify(`${access_token}`, process.env.access_token_secret);
    req.body = data;
    next();
  } catch (error) {
    res.send("please enter valid token");
  }
};

const verifyRefreshToken =  (req, res, token) => {
  try {
     jwt.verify(token, process.env.refresh_token_secret);

    let accessToken = jwt.sign({ email : "dipak@gmail.com" }, process.env.access_token_secret, {
      expiresIn: "1m",
    });


    const accessTokenOptions = {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 1 * 60 * 1000,
    };
    
    res.cookie('access_token' , accessToken , accessTokenOptions );
    return true;
  } catch (error) {
    return false;
  }
};
