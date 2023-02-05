const express =require("express");
const cors=require("cors");
const { MongoClient } =require("mongodb");

const app=express();
app.use(cors());
app.use(express.json())


	const url="mongodb://localhost:27017";
	

	app.post("/create",(req,res)=>{

	MongoClient.connect(url,(err,database)=>{
	if(err){
		console.log("server issue",err)}

	else{

	const dbo=database.db("sms1nov22");	
	let data={"_id":req.body.rno,"name":req.body.name};
	dbo.collection("student").insertOne(data,(err,result)=>{
		
		if(err)
			res.send(err);

		else
			res.send(result);
	
	})

	}

	})


	})



	app.get("/read",(req,res)=>{

	MongoClient.connect(url,(err,database)=>{
	if(err){
		console.log("server issue",err)}

	else{

	const dbo=database.db("sms1nov22");	

	dbo.collection("student").find({}).toArray((err,result)=>{
		
		if(err)
		res.send(err);

		else
		res.send(result);
	
	})

	}

	})


	})

	app.delete("/remove",(req,res)=>{

	MongoClient.connect(url,(err,database)=>{
	if(err){
		console.log("server issue",err)}

	else{

		const dbo=database.db("sms1nov22");	
		const data={"_id":req.body.rno};
	
	
	dbo.collection("student").deleteOne(data,(err,result)=>{
		
		if(err)
		res.send(err);

		else
		res.send(result);
	
	})

	}

	})


	})
	app.put("/update",(req,res)=>{

	MongoClient.connect(url,(err,database)=>{
	if(err){
		console.log("server issue",err)}

	else{

		const dbo=database.db("sms1nov22");	
		const data={$set:{"_id":req.body.rno,"name":req.body.name}};
		const roll={"_id":req.body.rno};
	dbo.collection("student").updateOne(roll,data,(err,result)=>{
		
		if(err)
		{
		console.log(err);
		res.send(err);
	}

		else{
		console.log(result);
		res.send(result);
	
	}
	
	})

	}

	})


	})

app.listen(9001,()=>{console.log("ready to server @9001")})

