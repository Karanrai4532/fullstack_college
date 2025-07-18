const mongoose = reqiure("mongoose")

const userschema= mongoose.schema({
 name:{
    type:String
},

password:{
    type:String
},

phonenumber:{
    type:String
},

age:{
    type:Number
},

});

const userModels = mongoose.model("user",userschema);

module.exports={
    connection
}
