import { useSelector, useDispatch } from "react-redux";
import { stulogout } from "./stuloginSlice";
import { useNavigate } from "react-router-dom";

import { Link, Outlet } from "react-router-dom";

const StudentDashboard = () => {
  const stuName = useSelector((state) => state.stulogin.stuuser);
  const myDispatch = useDispatch();
  const myNav = useNavigate();
  const stuLogout = () => {
    myDispatch(stulogout());
    myNav("/home");

  }
  return (
    <>
      <div id="stuinfo">
        Welcome {stuName} !
      </div>
      <div class="d-flex">
        <div class="sidebar">
          <Link to="userpage"> Student Profile </Link>
          <Link to="stucomplain"> Write Your Complain </Link>
          <Link to="sturesponse"> Display Response </Link>
          <Link to="stupassword"> Change Password</Link>
          <Link to="/home" onClick={stuLogout}>Logout</Link>
        </div>

        <div class="content1">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default StudentDashboard;