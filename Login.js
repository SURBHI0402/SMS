
import {useState,useEffect} from "react";
import{getAuth,signInWithEmailAndPassword} from "firebase/auth";
import{useNavigate}from "react-router-dom";
function Login(){

    const nav=useNavigate();

    useEffect(()=>{
        const email=localStorage.getItem("email");
        if(email!=null)
        nav("/");
    },[]);


    const[email,setEmail]=useState("");
    const[pw,setPw]=useState("");
    const[ans,setAns]=useState("");

    const hEmail=(event)=>{setEmail(event.target.value);}
    const hPw=(event)=>{setPw(event.target.value);}

    const accept=(event)=>{

        event.preventDefault();
        const auth=getAuth();
        signInWithEmailAndPassword(auth,email,pw)
        .then(res=>nav("/",{state:{res:email}}))
        .catch(err=>setAns("issue"+err))

        }
    

return(
    <>
    <center>
     
    <form onSubmit={accept}>
        <h1>Login Page</h1>
        <input type="email" placeholder="Enter email" onChange={hEmail}/>
        <br/><br/>
        <input type="passowrd" placeholder="Enter passowrd" onChange={hPw}/>
        <br/><br/>
        <input type="submit" value="Save"/>
    </form>
    <h1>{ans}</h1>
    </center>
    
    
    </>


);


}
export default Login;