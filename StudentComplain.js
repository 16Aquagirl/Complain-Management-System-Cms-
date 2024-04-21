import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const StudentComplain = () => {
    const [msg, setMsg] = useState("");

    const stuid = useSelector((state) => state.stulogin.stuid);

    const submitHandle = () => {
        let mystuid = stuid;
        let url = "http://localhost:4000/stucomplain";
        axios.post(url, { "stuid": mystuid, "complain": msg, "ans": "" }).then((res) => {
            alert("Your complain succesfully Registered!!!");
        });
    }
    return (
        <>
           <div className="complain">
           <h4 class="h4"> Register  Your  Complain</h4>
           <div> Enter Your Message :
            <br />
            <textarea name="stumsg"  value={msg} onChange={(e) => { setMsg(e.target.value) }} />
            <br />
            </div>
            <button className="buttonn" id="btn" onClick={submitHandle}> Submit</button>
           </div>
        </>
    );
}
export default StudentComplain;