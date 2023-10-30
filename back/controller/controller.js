const express = require("express")


exports.exemple = (req,res) => {
    res.status(200).json({msg: "test"})
}
    
