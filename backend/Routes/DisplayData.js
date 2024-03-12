const express=require("express")
const router= express.Router()
router.post("/foodData", (req, res)=>{
    try{
        res.send([global.data.collection_Cat, global.data.collection_Items])
    } catch (error){
        console.error(error.message)
        res.send("server error")
    }
})
module.exports=router; 