const express = require('express')
const cors    = require('cors');
const {MongoClient,ObjectId}= require('mongodb')

const app=express()

app.use(cors())
app.use(express.json())
const client = new MongoClient('mongodb+srv://admin:admin@cluster0.5efdbiy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
client.connect()
const db = client.db('counselling')
const col = db.collection('register')
col.insertOne({'student':"3261"})  


app.post('/register',(req,res)=>{
    console.log(req.body)
    col.insertOne(req.body)
    res.send('Inserted successfully')

})

app.get('/retrieve', async (req,res)=>{
    const result= await col.find().toArray()
    console.log(result)
    res.send(result)
})
app.put('/users/:id',async(req,res)=>{
    const{id}=req.params
    const{name,role,email,password}=req.body
    const result= await col.updateOne({_id: new ObjectId(id)},{$set:{name,role,email,password}})
    res.send('updated')
})
app.delete('/users/:id',async (req,res)=>{
    const {id}=req.params
    const result=await col.deleteOne({_id:new ObjectId(id)})
    res.json({message:"deleted successfully"})
})
app.get('/',(req,res)=>{ 
    res.send("Hello World")

})
app.get('/about',(req,res)=>{
    res.send("<h1>This is about page</h1>")

})

app.listen('8080',()=>{
    console.log('Server is running')})