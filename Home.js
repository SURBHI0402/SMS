import {useState,useEffect} from"react";
import axios from "axios";
import {useNavigate} from"react-router-dom";

function Home(){
	const nav=useNavigate();

    useEffect(()=>{
        const email=localStorage.getItem("email");
        if(email!=null)
        nav("/login");
    },[]);


	const [info,setInfo]=useState([]);
	const navigate=useNavigate();


	useEffect(()=>{

	let urladd="http://localhost:9001/read";
	axios.get(urladd)
	.then(res=>{setInfo(res.data)})
	.catch(err=>console.log(err))

	},[]);


	const deleteStudent=(rno)=>{

		let urladd="http://localhost:9001/remove";
		axios.delete(urladd,{data:{rno}})
		.then(res=>{

		alert("record deleted");
		window.location.reload();


	})
		.catch(err=>console.log(err));
}

	
	const updateStudent=(rno,name)=>{

	navigate('/update',{state:{rn:rno,nm:name}});
	}

	return(
	<>
	<center>
	<table border="4" style={{width:'50%'}}>
	<tr>
		<th>Rno</th>
		<th>Name</th>
		<th>Delete</th>
		<th>Update</th>
	</tr>

	{

	info.map((e)=>(

	<tr style={{'text-align':'center'}}>
	<td>{e._id}</td>
	<td>{e.name}</td>
	<td><button onClick={()=>{if(window.confirm('are you sure'))deleteStudent(e._id)}}>Delete</button></td>
	<td><button onClick={()=>{updateStudent(e._id,e.name)}}>Update</button></td>
	</tr>
	))



	}


	</table>

	</center>
	</>



	);

}
export default Home;