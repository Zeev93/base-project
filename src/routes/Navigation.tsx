import { Suspense } from "react"
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"

import logo from '../assets/react.svg'
import { routes } from "./routes"

export const Navigation = () => {
  return (
   <Suspense fallback={ <span> Loading.... </span>}>
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="react logo" />
                <ul>
                    {
                        routes.map( ({to, name}, i) => (
                            <li key={i}><NavLink to={to} className={ ({ isActive }) => isActive? 'nav-active' : '' } >{name}</NavLink></li>
                        ))
                    }
                    
                </ul>
            </nav>    
            <Routes>
                {
                    routes.map( ({path, Component}, i) => (
                        <Route key={i} path={path}  element={ <Component />} />
                    ))
                }
                <Route path="/*" element={<Navigate to="/lazy1" replace/>} />
            </Routes>
        </div>
    </BrowserRouter>
   </Suspense>
  )
}
