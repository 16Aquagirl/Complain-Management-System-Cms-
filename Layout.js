import logo from "./images/cms.jpg";
import { Link, Outlet } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";


const Layout = () => {
  return (
    <>
      <nav class="navbar">
        <div className="d-flex content">
          <button class="navbar-toggler" id="burgermenu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <li><img src={logo} width="70px" /></li>
          <h2 class="h2" id="cms">Complain Management System</h2>

        </div>
          <button class="lightbt collapse navbar-collapse" id="navbarSupportedContent">Contact</button>
      
      </nav>
      <Outlet />
    </>
  )
}
export default Layout;