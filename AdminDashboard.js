import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { adminlogout } from "./adminSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const AdminDashboard = () => {
  const adminName = useSelector((state) => state.adminuser.adminname);
  const myDispatch = useDispatch();
  const myNav = useNavigate();
  useEffect(() => {
    if (adminName == "") {
      myNav("/");
    }

  }, []);
  const adminLogout = () => {
    myDispatch(adminlogout());
    myNav("/");
  }
  return (
    <>

      <div id="stuinfo"> Welcome {adminName}!</div>
      <div class="d-flex">
        <div id="adminmenu">
          <Link className="linkk" to="adminpage"> Admin Dashboard</Link>
          <Link className="linkk" to="stucomp"> See Student Complain</Link>
          <Link className="linkk" to="adminchnagepassword">Change Password</Link>
          <Link className="linkk" to="/home" onClick={adminLogout}> Logout </Link>
        </div>
        <div class="content1">
          <Outlet />
        </div>
      </div>



    </>
  );
}
export default AdminDashboard;