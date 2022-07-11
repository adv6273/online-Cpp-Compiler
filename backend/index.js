// console.log("hello");
const express = require("express");
const { generateFile } = require("./generateFile");
const {executeCpp}=require("./executeCpp");
const app=express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/',(req,res)=>{
    return res.json({hello:"world!!!!"});
});
app.post("/run",async(req,res)=>{
    // console.log(req.body);

  const { language = "cpp", code } = req.body;

  if(code===undefined){
    return res.status(400).json({success:false,error:"No code found in Body"});
  }
      
  const filepath=await generateFile(language,code);
   // nood
   const output=await executeCpp(filepath)
    return res.json({filepath,output});
})


app.listen(5000, () => {
    console.log(`Listening on port 5000!`);
  });
  