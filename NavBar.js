
import {Link} from "react-router-dom";
function NavBar(){

	const email=localStorage.getItem("email");
	return(


	<>
	<center>
	
	<div className="nav">
	{(email==null)&&(<Link to="/signUp">SignUp</Link>)}
	{(email==null)&&(<Link to="/login">Login</Link>)}
	{(email !=null)&&(<Link to="/">Home</Link>)}
	{(email !=null)&&(<Link to="/create">Create</Link>)}
	
	</div>
	</center>
	</>



	);

}
export default NavBar;