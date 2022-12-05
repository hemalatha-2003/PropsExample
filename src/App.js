/*import Demo from './Demo'
import Events from './Events'
import JSX from './JSX'
import StateExample from './StateExample'
//import FuncProps from './FuncProps'*/
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'

function App(){
  return(
    <div>
    <BrowserRouter>
     <Navbar/>
    <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    
   {/*<Events/>
      <JSX/>
      <Demo price="1st price"/>
      <StateExample/>
    */}
       {/* <FuncProps carname="rollsroyce" year="2017"/>
        <h1>hii</h1>*/}
      </div>
          )
        }
  


export default App