import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Create from"./Create";
import NavBar from "./NavBar";
import Update from "./Update";
import SignUp from "./SignUp";
import Login from "./Login";
import{BrowserRouter,Routes,Route,Navigate} from"react-router-dom";
import {app} from "./FirebaseConfig";

function App() {
  return (
    <div className="App">
	<BrowserRouter>
		<NavBar/>
		<Routes>
		<Route path="/" element={<Home/>}/>
		<Route path="/create" element={<Create/>}/>
		<Route path="/update" element={<Update/>}/>
		<Route path="*" element={<Navigate to="/"/>}/>
		<Route path="/signup" element={<SignUp/>}/>
		<Route path="/login" element={<Login/>}/>

		</Routes>

	</BrowserRouter>
	
      
    </div>
  );
}

export default App;
