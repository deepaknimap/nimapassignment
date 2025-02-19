const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

const user = {
  username: "john@",
  password: 'abcd'
}


const product = [
  {
    "productId": 101,
    "productName": "Laptop",
    "brand": "Dell",
    "price": 899.99
  },
  {
    "productId": 102,
    "productName": "Smartphone",
    "brand": "Apple",
    "price": 999.99
  },
  {
    "productId": 103,
    "productName": "Headphones",
    "brand": "Sony",
    "price": 199.99
  },
  {
    "productId": 104,
    "productName": "Tablet",
    "brand": "Samsung",
    "price": 499.99
  },
  {
    "productId": 105,
    "productName": "Smartwatch",
    "brand": "Fitbit",
    "price": 149.99
  },
  {
    "productId": 106,
    "productName": "Keyboard",
    "brand": "Logitech",
    "price": 49.99
  },
  {
    "productId": 107,
    "productName": "Gaming Mouse",
    "brand": "Razer",
    "price": 79.99
  },
  {
    "productId": 108,
    "productName": "Monitor",
    "brand": "LG",
    "price": 299.99
  },
  {
    "productId": 109,
    "productName": "External Hard Drive",
    "brand": "Seagate",
    "price": 89.99
  },
  {
    "productId": 110,
    "productName": "Wireless Speaker",
    "brand": "JBL",
    "price": 129.99
  }
]


const secret = 'helloworld';


app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
});

app.post('/user/login', (req, res) => {
  const { username, password } = req.body;
  if (user.password === password && user.username === username) {
    let token = jwt.sign(user, secret, { expiresIn: '1h' });

    const option = {
      httpOnly: true,
      maxAge: 1 * 60 * 60 * 1000,
      secure: false,
    }

    res.status(200).cookie('token', token, option).json({
      message: 'login success'
    })
  }
  else {
    console.log('accessed denied');
  }
});

const authenticateUser = (req, res, next) => {
  let { token } = req.cookies;
  if (!token) {
    return res.status(400).json({
      message: "please login first then access api"
    })
  }

   let data = jwt.verify(token , 'helloworld');
   req.user = data;
   next()
}

app.get('/products', authenticateUser, (req, res) => {
  let user = req.user;
  console.log(user);
  res.send(product);
})

app.listen(3000, (req, res) => {
  console.log('http://localhost:3000/');
})