/* const mongoose = require ('mongoose');
const Song= require('../../api/songs/songs.model');

require ('dotenv').congif();

const URIDB= process.env.MONGO_DB

cons songs= [
{
    name:"",
    duaration:""
},
{
    name:"",
    duaration:""
},
{
    name:"",
    duaration:""
},
{
    name:"",
    duaration:""
},
{
    name:"",
    duaration:""
},
{
    name:"",
    duaration:""
},
{
    name:"",
    duaration:""
},
{
    name:"",
    duaration:""
},
{
    name:"",
    duaration:""
},
{
    name:"",
    duaration:""
},

]


mongoose.connect(URIDB,{ useNewUrlParser: true,useUnifiedTopology: true}).then(async ()=> {
    const allSongs = await Song.find();
    If (allSongs.length){
        await Song.collection.drop();
        console.log("Todo borrado");
    } 
}).catch((err)=> console.error("Hay un error en el borrado")).then(async()=>{
await Song.insertMany(songs);
console.info("Creado");
}).catch((err)=> console.error("Hay un error en el creado")).finally(()=> mongoose.disconnect()); */