import Navigation from "./components/Navigation";
import Userlist from "./components/Userlist";
import Footer from "./components/Footer";

function App(){
  return(
    <div>
      <Navigation/>
      <div className="m-16 min-h-screen">
        <Userlist/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;