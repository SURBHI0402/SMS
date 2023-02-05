import{useState,useRef,useEffect}from"react";
import axios from"axios";
import{useLocation} from"react-router-dom";

function Update(){
	

	const rRno=useRef();
	const{state}=useLocation();
	const{rn,nm}=state;

	const[rno,setRno]=useState("");
	const[name,setName]=useState("");
	const[msg,setMsg]=useState("");

	const hRno=(event)=>{setRno(event.target.value);}
	const hName=(event)=>{setName(event.target.value);}

	useEffect(()=>{
	setName(nm);
	setRno(rn);

	},[]);

	const update=(event)=>{
	event.preventDefault();

	let urladd="http://localhost:9001/update";
	let data={rno,name};
	axios.put(urladd,data)
	.then(res=>{

		if(res.data.modifiedCount==1){
		setMsg("record updated");
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

		if(err.code=="ERR_NETWORK")
		{
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
	<br/>
	<form onSubmit={update}>
	<input type="number" placeholder="Enter new number" onChange={hRno} value={rno} disabled={true} ref={rRno}/>
	<br/><br/>
	<input type="text" placeholder="Enter name" onChange={hName} value={name}/>
	<br/><br/>
	<input type="submit" value="Save"/>
	</form>
	<h2>{msg}</h2>

	</center>
	</>
	);


}
export default Update;