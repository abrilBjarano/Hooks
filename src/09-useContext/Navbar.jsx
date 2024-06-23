import { Link } from "react-router-dom";

export const Navbar = ({ pages }) => {

   return (
      <>
         {
            pages.map( page => (
               <Link to={ page.path } key={ page.path }>{ page.name }</Link>
         ))}
      </>
   )
}
