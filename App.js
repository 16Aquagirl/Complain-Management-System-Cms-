import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Registration from "./Registration";
import StudentDashboard from "./StudentDashboard";
import LoaderDashboard from "./LoaderDashboard";
import StudentComplain from "./StudentComplain";
import AdminDashboard from "./AdminDashboard";
import SeeComplain from "./SeeCoplain";
import AdminChangePassword from "./AdminChangePassword";
import ReplyAns from "./ReplyAns";
import SeeStuAnswer from "./SeeStuAnswer";
import StuPasswordChange from "./Changepassword";
import UserPage from "./UserPage";
import AdminPage from "./Adminpage";
import About from "./About";
import Contact from "./Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="register" element={<Registration />} />
            <Route path="/studashboard" element={<LoaderDashboard />}>
              <Route exact path="userpage" element={<UserPage />} />
              <Route exact path="stucomplain" element={<StudentComplain />} />
              <Route exact path="sturesponse" element={<SeeStuAnswer />} />
              <Route exact path="stupassword" element={<StuPasswordChange />} />
            </Route>

            <Route path="admindashboard" element={<AdminDashboard />} >
              <Route path="adminpage" element={<AdminPage />} />
              <Route path="stucomp" element={<SeeComplain />} />
              <Route path="adminchnagepassword" element={<AdminChangePassword />} />
              <Route path="repans/:id" element={<ReplyAns />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;