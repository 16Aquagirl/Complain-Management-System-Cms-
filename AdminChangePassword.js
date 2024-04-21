
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const AdminChangePassword = () => {
    const [oldpass, setOldpass] = useState("");
    const [newpass, setNewpass] = useState("");
    const [renewpass, setReNewpass] = useState("");

    const adminid = useSelector((state) => state.adminuser.adminid);
    console.log(adminid)

    const submitHandle = () => {
        // e.preventdefault();
        let url = ` http://localhost:4000/adminuser/${adminid}`;
        axios.get(url).then((res) => {


            if (res.data.password == oldpass) {
                if (newpass == renewpass) {
                    axios.patch(url, { "password": newpass }).then((res) => {
                        console.log(res.data.password)
                        alert("Password Succesfully Changed !! ");
                    });
                }
                else {
                    alert("Password Dose not Match!");
                }
            }
            else {
                alert("Your old Password is Incorrect!");
            }
        });
    }
    return (
        <>
            <center>
                <div className="chngepass">
                    <h2 class="h2" id="h1reg">Change Your password</h2>
                    <br/>
                    <form className="change-pass">
                        <label>Enter Current Password</label>
                        <input type="text" className="password" placeholder="Enter Current Password" value={oldpass} name="oldpass" onChange={(e) => { setOldpass(e.target.value) }} />
                        <br /><br /><br />
                        <label>Enter New Password:</label>
                        <input type="text" className="password" placeholder="Enter New Password" value={newpass} name="newpass" onChange={(e) => { setNewpass(e.target.value) }} />
                        <br /><br /><br />
                        <label>Re-Enter New Password:</label>
                        <input type="password" className="password" placeholder="Re-Enter New Password" value={renewpass} name="renewpass" onChange={(e) => { setReNewpass(e.target.value) }} />
                        <br /><br /><br /><br />
                        <button id="btn" onClick={submitHandle}>Submit</button>
                    </form>
                </div>
            </center>
        </>
    )
}
export default AdminChangePassword;