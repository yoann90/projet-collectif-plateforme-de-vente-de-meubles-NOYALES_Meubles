const {mongoose } = require("mongoose")
//ajout plugin pour unique mail
const muv = require("mongoose-unique-validator")

const userSchema = mongoose.Schema({
firstname : {type: String ,required:true },
lastname : {type: String ,required:true },
login : {type: String ,required:true,unique:true },
email: {type:String ,required: true,unique:true},
password : {type: String ,required: true },
role:{type:String ,default:"User",required:false}
})

mongoose.plugin(muv)

let User = mongoose.model("User" , userSchema)

module.exports = User