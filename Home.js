import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { stulogin } from "./stuloginSlice";
import { adminlogin } from "./adminSlice";
const Home = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [usertype, setUsertype] = useState("student");
    const myDispatch = useDispatch();
    const myNav = useNavigate();
    const submitHandle = (e) => {
        if (usertype === "student") {
            e.preventDefault();
            let url = `http://localhost:4000/students?email=${email}`;
            axios.get(url).then((res) => {
                console.log(res.data);
                if (res.data.length === 1) {
                    if (res.data[0].password === password) {
                        let stunm = res.data[0].name;
                        let stuid = res.data[0].id;
                        myDispatch(stulogin({ stunm, stuid }));
                        myNav("/studashboard");
                    }
                    else {
                        alert("Invalid Password");
                    }
                }
                else {
                    alert("Invalid email!")
                }
            });
        }
        else {
            e.preventDefault();
            let url = `http://localhost:4000/adminuser/?email=${email}`;
            axios.get(url).then((res) => {
                if (res.data.length === 1) {
                    if (res.data[0].password === password) {

                        let adminname = res.data[0].name;
                        let adminid = res.data[0].id;

                        myDispatch(adminlogin({ "adname": adminname, "adid": adminid }))

                        myNav("/admindashboard");
                    }
                    else {
                        alert("Password dose not Match!!!");
                    }
                }
                else {
                    alert("Invalid Email!!!");
                }
            });
        }
    }
    const unlock = (e) => {
        e.preventDefault();
        setIsUnlocked((prevIsUnlocked) => !prevIsUnlocked);
        var x = document.getElementById("myInput");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    return (
        <>
            <div class="container" id="container">
                <div className="form-container sign-in">
                    <form>
                        <h1 class="h1 heading">LOGIN  FORM</h1>
                        <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                        <br />
                        <input type="password" name="password" placeholder="Password" value={password} id="myInput" onChange={(e) => { setPassword(e.target.value) }} required />
                        <div className="contain">
                            <button className={`lock ${isUnlocked ? 'unlocked' : ''}`} onClick={unlock} ></button>
                        </div>
                        <select className="dropdown" name="userRoll"
                            value={usertype} onChange={(e) => { setUsertype(e.target.value) }}>
                            <option>Student</option>
                            <option>Admin</option>
                        </select>
                        <button id="btn" onClick={submitHandle}>Sign In</button>
                        <p>New User Register Here! <Link to="/register" className="mynav"> Sign up </Link></p>

                    </form>
                </div>
            </div>
        </>
    )
}
export default Home;