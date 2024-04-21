import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const StuPasswordChange = () => {
    const [oldpass, setOldpass] = useState("");
    const [newpass, setNewpass] = useState("");
    const [renewpass, setReNewpass] = useState("");

    const stuid = useSelector((state) => state.stulogin.stuid);

    const submitHandle = () => {
        let url = `http://localhost:4000/students/${stuid}`;
        axios.get(url).then((res) => {

            if (res.data.password === oldpass) {
                if (newpass === renewpass) {
                    axios.patch(url, { password: newpass }).then((res) => {
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
            <div className="stupass">
                <div className="stupass2">
                    <center>
                        <h2 class="h2" id="h1reg">Change Your password</h2>
                        <br/>
                        <div className="distance">
                        <label>Enter Old Password:</label>
                        <input type="text" value={oldpass} name="oldpass" onChange={(e) => { setOldpass(e.target.value) }} />
                       
                        </div>
                        <br/>
                        <div className="distance">
                        <label>Enter New Password:</label>
                        <input type="text" value={newpass} name="newpass" onChange={(e) => { setNewpass(e.target.value) }} />
                        </div>
                        <br/>
                        <div className="distance">
                        <label>Re-Enter New Password:</label>
                        <input type="password" value={renewpass} name="renewpass" onChange={(e) => { setReNewpass(e.target.value) }} />
                        </div>
                        <br/>
                        <button id="btn" onClick={submitHandle}>Submit</button>
                    </center>
                </div>
            </div>
    )
}
export default StuPasswordChange;