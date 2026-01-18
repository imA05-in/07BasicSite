import { NavLink } from "react-router-dom";

export default function Header() {
  

  return (
    <header className="bg-amber-50 p-1 border rounded-sm text-black">
        <nav className="flex justify-between items-center px-4">
            <h1 className="text-black text-2xl font-bold">Logo</h1>
            <ul className="flex gap-14">
                <li>
                    <NavLink to="/home"
                    className={({isActive})=>(`${isActive ? "text-orange-600" : ""} hover:text-orange-400`)}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" 
                    className={
                        ({isActive})=>`${isActive ? "text-orange-600" : ""} hover:text-orange-400`
                    }
                    >About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact"
                    className={({isActive})=>`${isActive ? "text-orange-600" : ""} hover:text-orange-400`}
                    >Contact</NavLink>
                </li>
            </ul>


            <div className="flex gap-5">
                <NavLink 
                to="/login"
                className={({isActive})=> `
                ${isActive ? "font-medium":""}
                bg-orange-300 rounded-sm py-0.5 px-2 hover:bg-orange-400 transition
                `}
                >
                    Log In
                </NavLink>

                <NavLink 
                to="/signup"
                className={({isActive})=> `
                ${isActive ? "font-medium":""}
                bg-blue-300 transition rounded-sm py-0.5 px-2 hover:bg-blue-400
                `}
                >
                    Sign Up
                </NavLink>
                
            </div>
        </nav>
    </header>
  );
}
