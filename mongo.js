const { MongoClient } = require("mongodb");
const url= "mongodb://localhost:27017";
const Client = new MongoClient(url);

const database= "login";

const  dbconnect =  async()=>{
    const data= await Client.connect();
    let db= data.db(database);
    const collection= await db.collection('authentication');
    return collection();
}
dbconnect();