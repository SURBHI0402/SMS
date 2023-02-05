import {useState, useRef,useEffect} from"react";
import axios from"axios";
import { useNavigate } from "react-router-dom";

function Create(){
	const nav=useNavigate();

    useEffect(()=>{
        const email=localStorage.getItem("email");
        if(email!=null)
        nav("/login");
    },[]);
	const rRno=useRef();
	const [rno,setRno]=useState("");
	const [name,setName]=useState("");
	const [msg,setMsg]=useState("");

	const hRno=(event)=>{setRno(event.target.value);}

	const hName=(event)=>{setName(event.target.value);}

	const save=(event)=>{

	event.preventDefault();
	let urladd="http://localhost:9001/create";
	let data={rno,name};
	axios.post(urladd,data)
	.then(res=>{

		if(res.data.insertedId){

			setMsg("reacord inserted");
			setRno("");
			setName("");
			rRno.current.focus();
	}
	

	else{

		setMsg("record already exists");
		setRno("");
		setName("");
		rRno.current.focus();

	}


	})
	.catch(err=>{

		if(err.code=="ERR_NETWORK"){

	
		setMsg("SERVER ISSUE");
		setRno("");
		setName("");
		rRno.current.focus();


	}



	})

	}

	return(

	

	<>
	<center>
		<h1>Add Students</h1>
	<br/>
	<form onSubmit={save}>
	<input type="number" placeholder="Enter roll number" onChange={hRno} value={rno} ref={rRno}/>
	<br/><br/>
	<input type="text" placeholder="Enter name"onChange={hName} value={name}/>
	<br/><br/>
	
	<input type="submit" value="Save"/>
	</form>

	<h2>{msg}</h2>
	</center>
	</>



	);

}
export default Create;