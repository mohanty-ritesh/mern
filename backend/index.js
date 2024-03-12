const express=require("express")
const app=express();
const port=3000;
const mongoDB = require("./db");
mongoDB();
app.use((req, res, next)=>{
    res.setHeader("Acess-Control-Allow-Origin", "http://localhost:5173")
    res.header(
        "Acess-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.get('/', (req, res)=>{
    res.send("Hello")
})
// middleware
app.use(express.json())
app.use('/api', require("./Routes/CreateUsers")) //app.use for middelwere
app.use('/api', require("./Routes/DisplayData")) //app.use for middelwere
app.listen(port, ()=>{
    console.log(`listening at port:${port}`);
})