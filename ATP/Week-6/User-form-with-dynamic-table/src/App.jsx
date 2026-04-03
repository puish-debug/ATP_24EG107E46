import Navigation from "./components/Navigation";
import UserForm from "./components/UserForm";
import Footer from "./components/Footer";


function App(){
  return(
    <div>
      <Navigation/>
      <div className="m-16 min-h-screen">
        <UserForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;