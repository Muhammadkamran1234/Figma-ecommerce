import Navbar from "./components/navbar";
import Style from "./components/style";
import Editor from "./components/editor";
import BestSeller from "./components/bestseller";
import CardText from "./components/cardtext";
import Green from "./components/green";
import Red from "./components/red";
import Car from "./components/car";
import Footer from './components/footer'






export default function Home (){
  return (
    <div> 
      <Navbar/>
      <Style/>
      <Editor/>
     <BestSeller/>
     <CardText/>
     <Green/>
     <Red/>
     <Car/>
     <Footer/>
    
      
     
    
    </div>
  )
}