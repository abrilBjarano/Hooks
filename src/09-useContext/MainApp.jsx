import { Navigate, Route, Routes } from "react-router-dom";

import { UserProvider } from "./context/UserProvider";

import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";

export const MainApp = () => {

   const pages = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Login', path: '/login' },
   ];


   return (
      <UserProvider>
         <Navbar pages={ pages } />
         <hr />


         <Routes>
            <Route path="/" element={ <HomePage/> }/>
            <Route path="about" element={ <AboutPage/> }/>
            <Route path="login" element={ <LoginPage/> }/>

            <Route path="/*" element={ <Navigate  to="/about" /> } />
         </Routes>
      </UserProvider>
   )
} 
