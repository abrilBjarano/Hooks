import { Link, useLocation } from "react-router-dom";

export const Navbar = ({ pages }) => {

   const location = useLocation();

   return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
         <div className="container-fluid">

            <a className="navbar-brand">useContext</a>

            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav">

                  {
                     pages.map( page => (
                        <li className="navbar-item" key={ page.name }>

                           <Link 
                              className={`nav-link ${ location.pathname === page.path ? 'active' : '' }`} 
                              to={page.path}
                           >

                              {page.name}

                           </Link>

                        </li>
                  ))}

               </ul>
            </div>
         </div>
      </nav>
   )
}