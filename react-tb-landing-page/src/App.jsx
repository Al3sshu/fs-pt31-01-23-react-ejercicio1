import "./App.css";
import data from "../data.json";
//import Navbar from "./Componentes/Navbar";
//import Header from "./Componentes/Header";
import Bootcamps from "./Componentes/Bootcamps";
import Ciberseguridad from "./Componentes/Ciberseguridad";
import Ds from "./Componentes/Datascience";
import Desarrollo from "./Componentes/Desarrollo";
import Marketing from "./Componentes/Marketing";
import UxUi from "./Componentes/Ux";



console.log (data);




    function Img(){

      return ( <div className= "img"><img  src= "students.jpg" ></img> </div>
        
       
        )
    }
function Navbar(){
  return (
    
    <ul className= "Navbar" > <img className= "logo"  src= "https://uploads-ssl.webflow.com/60780bff57ddc42a6adc1d7e/607eeb4b0517b6659206c10f_thebridgelogo.svg" ></img>
       <li>
        Cursos
    Donde estudiar
    Financiacion y becas
    Empresas e instruccioines
    Sobre nosotros </li></ul> )  }


    

  


function Header() {
  return (
      <header className="header">
          <h1> Acelera tu carrera digital</h1>
          <h2 className="text2"> En una época de cambios y desarrollo tecnológico, tu formación no puede perder el ritmo.<br></br></h2>
          <p>Cuando eliges un bootcamp en The Bridge estás dando el paso definitivo hacia una de las profesiones del <br></br>
              futuro más demandadas en el presente, ya sea Ciberseguridad, <br></br>Data Science, Desarrollo de Software,<br></br> 
              Diseño de Producto UX/UI o Marketing Digital.<br></br> </p>
              <button className="button">Pide Información.</button>
     
      </header>
  )
}

function App() {

  return( <>
    <div> <Navbar /> </div>
    <div className="container">

      <div><Header /></div>
      <div> <Img /> </div>
    </div>

    <div> <Bootcamps /></div>
       <div className="flex-container">
          <div> <Ciberseguridad /> </div>
          <div><Ds /></div>
          <div> <Desarrollo /></div>
    </div>

    <div className="flex-container2" >
       <div > <Marketing /></div>
       <div ><UxUi /></div>
   </div> </>
   
   )
}



export default App;
