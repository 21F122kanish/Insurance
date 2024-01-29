const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/insurance")
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("failed");
})

const newSchema1= new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    passWord:{
        type:Number,
        required:true
    }
})

// const newSchema2= new mongoose.Schema({
//     catagery:{
//         type:String,
//         required:true
//     },
//     productTitle:{
//         type:String,
//         required:true
//     },
//     productDescriptions:{
//         type:String,
//         required:true
//     }
// })

const adminCollections = mongoose.model("AdminCollections",newSchema1)
// const subproductcollection = mongoose.model("SubProduct",newSchema2) 

module.exports = adminCollections
// module.exports = subproductcollection