const mongoose=require("mongoose");
const Chat= require("./models/chat.js");

main()
.then(()=>{
    console.log("Connection Successful");
})

async function main(){
    await mongoose.connect(
        "mongodb://127.0.0.1:27017/Whatsapp"
    );
}
    
let allChats=[
    {
        from:"prince",
        to:"moin",
        msg:"hey Tambaa King",
        Date:new Date()
    },
    {
        from:"Moin",
        to:"prince",
        msg:"hey Motaa jayesh ka ladka",
        Date:new Date()
    },
    {
        from:"shubham",
        to:"prince",
        msg:"abey hathi ghenda swami",
        Date:new Date()
    }
]

Chat.insertMany(allChats);