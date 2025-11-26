require('dotenv').config();

const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));
app.use(express.json());

app.get("/", (req,res) => {
    res.json({
        message: "API is working Successfully",
        status: "Running",
    });
});

app.post("/singup", (req, res) => {
    const { username, email, password, dateOfBirth } = req.body;


    if(!username || username.trim()=== "") {
        return res
        .status(400)
        .json({ success: false, message: "Username is required"});

    }
    if (!email || email.trim()===" ")
        {
        return res 
        .status(400)
        .json({ success: false, message: "Email is requiered"});
    }
    if (!password || password.trim()==="") {
        return res
        .status(400)
        .json({ success: false, message: "Password is requires"});

    }
    if (password.length < 8 || password.length > 20) {
        return res
        .status(400)
        .json({ success: false, message: "Password must be between 8 and 20 characters"});

    }

    return res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: {
            username,
            email,
            datwOfBirth,

        },
        });

    });
    
    

    



app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).json({
        Error: "Something went wrong!",
        message: err.message,
        });
});

app.listen(PORT, () => {
    console.log('sever is running on port ${PORT}')
});
