import {Component} from 'react'

class Events extends Component{
	state={
		username:""
	}
	state={
		mobilenumber:""
	}
	handleClick=()=>{
		console.log(this.state.username)
	}
	handleClick=()=>{
		console.log(this.state.mobilenumber)
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value

		})
		
	}
	render(){
		return(			
			<div>
			<input
			name="username"
			onChange={this.handleChange}
			placeholder="Enter username"/>
			<input
			name="mobilenumber"
			onChange={this.handleChange}
			placeholder="Enter mobilenumber"/>
			<button onClick={this.handleClick}>Submit</button>
		</div>
			)
	}
}
 
export default Events













