import {useState} from 'react'

function About(){
	const[village,setVillage]=useState("canada");
	const[country,setCountry]=useState("India")
	return(
		<div>
		<h1>{country}</h1>
		<p>{village}</p>
		<input
		  onChange={(e)=>setVillage(e.target.value)}/>
		<p> <input
		  onChange={(e)=>setVillage(e.target.value)}/></p>
		  <button onClick={()=>console.log(village)}>submit</button>
		  </div>
		)
}


export default About