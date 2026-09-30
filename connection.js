import express from 'express'
import { MongoClient } from 'mongodb';
const app=express();
const url='mongodb://localhost:27017';
app.set('view engine','ejs')
const client=new MongoClient(url)

client.connect().then(async (connection)=>{
    const dbName=connection.db('class')
    const collection=dbName.collection('Students')
    const result=await collection.findOne()//.toArray()
    console.log(result.Name)
    app.get('',(req,resp)=>{
   
 resp.render('gui',{result:result})
})
})



app.listen(4500)