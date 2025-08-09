const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authControl");
const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile",protect,(req,res)=>{
    res.json({
        message:"Welcome to your profile",
        user:req.user
    })
})

module.exports = router;
