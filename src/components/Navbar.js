import '../App.css'
import{Link} from 'react-router-dom' 

function Navbar(){
	return(
		<div class="nav">
		<Link to="/">Home</Link>
		<Link to="/contact">contact</Link>
		<Link to="/about">About</Link>
		</div>
	)
}
export default Navbar