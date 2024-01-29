const express = require("express")
const cors = require("cors")
const adminCollections = require("./mongo")
// const subproductcollection = require("./mongo")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})

app.post("/sendadminData",async(req,res)=>{
    const {userName}=req.body
    const {passWord}=req.body
    try {
        await adminCollections.insertMany([{userName:userName,passWord:passWord}])
    } catch (e) {
        console.log(e)
    }
})

// app.post("/sendsubproductData",async(req,res)=>{
//     const {catagery}=req.body
//     const {productTitle}=req.body
//     const {productDescriptions}=req.body
//     try{
//         await subproductcollection.insertMany([{catagery:catagery,productTitle:productTitle,productDescriptions:productDescriptions}])
//     }catch(e){
// console.log(e)
//     }
// })

app.post("/",async(req,res)=>{
    const {userName,passWord} = req.body

    const data={
        userName:userName,
        passWord:passWord
    }
    await adminCollections.insertMany([data])
})

app.listen(8000,()=>{
    console.log("Port connect")
})

