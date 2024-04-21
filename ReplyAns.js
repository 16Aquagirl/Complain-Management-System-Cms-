import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const ReplyAns = () => {
  const { id } = useParams();

  const [msg, setMsg] = useState("");

  const sendReply = () => {
    let url = `http://localhost:4000/stucomplain/${id}`;

    axios.patch(url, { ans: msg }).then(() => {
      alert("Answer Reply Succesfull!!!");
    });
  }

  return (
    <>
      <center>
        <div className="rply">
          <h3 class="h3"> Replay Student Answer {id} </h3>

          Enter Reply

          <br />
          <textarea value={msg} onChange={(e) => { setMsg(e.target.value) }} />
          <br />
          <button id="btn" onClick={sendReply}> Send Reply</button>

        </div>
      </center>
    </>
  );
}


export default ReplyAns;