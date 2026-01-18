import { Header, Footer, Home } from "./components/components";
import './App.css'
import {Outlet} from "react-router-dom"

function App() {


  return (
    <>
    <div className="body h-screen bg-blue-950 text-gray-200 flex flex-col">
    <Header/>
    <Outlet />
    <Footer/>
    </div>
    </>
  )
}

export default App
