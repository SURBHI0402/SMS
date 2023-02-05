import NavBar from "./NavBar";
import {useState} from "react";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";


function SignUp(){

    const nav=useNavigate();
    const[un,setUn]=useState("");
    const[num,setNum]=useState("");
    const[email,setEmail]=useState("");
    const[pw1,setPw1]=useState("");   
    const[pw2,setPw2]=useState("");
    const[ans,setAns]=useState("");
   

    const hUn=(event)=>{setUn(event.target.value);}
    const hNum=(event)=>{setNum(event.target.value);}
    const hEmail=(event)=>{setEmail(event.target.value);}
    const hPw1=(event)=>{setPw1(event.target.value);}
    const hPw2=(event)=>{setPw2(event.target.value);}


    const save=(event)=>
     {   event.preventDefault();
        if(pw1==pw2)
        {
            const auth=getAuth();
            createUserWithEmailAndPassword(auth,email,pw1)
            .then(res=>nav("/login"))
            .catch(err=>setAns(err))

        }
        else{
            setAns("password dosen't match");
        }


    }

return(

        <>
        <center>
    
            <form onSubmit={save}>
                <h1>SignUp Page</h1>
                <div className="signup">
                <input type="text" placeholder="Enter username" onChange={hUn}></input>
                <br/><br/>
                <input type="number" placeholder="Enter contact number" onChange={hNum}></input>
                <br/><br/>
                <input type="email"  placeholder="Enter email" onChange={hEmail}/>
                <br/><br/>
                <input type="password" placeholder="Enter password" onChange={hPw1}/>
                <br/><br/>
                <input type="password" placeholder="Confirm password" onChange={hPw2}/>
                <br/><br/>
                <input type="submit" value="SignUp"/>
                </div>
            </form>
            <h1>{ans}</h1>

        </center>
        
        
        </>



);

}

export default SignUp;