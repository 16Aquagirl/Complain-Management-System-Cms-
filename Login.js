// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import axios from "axios";
// const Login=()=>
// {
//   const myNav= useNavigate();

//   const [input, setInput]= useState({});
//   const handleInput=(e)=>
//   {
//     let name=e.target.name;
//     let value=e.target.value;
//     setInput(values=>({...values, [name]:value}));
//   }

//   const handleSubmit=()=>{
     
//        let url=`http://localhost:4000/students/?email=${input.email}`;
       
//        axios.get(url).then((res)=>{
           
//                   if (res.data.length==1)
//                   {
//                        if (res.data[0].password==input.password)
//                        {
//                     window.localStorage.setItem("user", res.data[0].name);
//                     window.localStorage.setItem("email", res.data[0].email);
                    
//                     myNav("/userlogin");
                      
//                        }
//                        else 
//                        {
//                         alert("Invalid Password");
//                        }
//                   }
//                   else 
//                   {
//                     alert("Invalid Email !!!");
//                   }


//        });

//   }

//     return(
//         <>
//            <h1> User Login Form</h1>
//            Enter email : <input type="email" name="email" value={input.email} onChange={handleInput} />
//            <br />
//            Enter password : <input type="password" value={input.password} name="password" onChange={handleInput} />
//            <br />
//            <button onClick={handleSubmit} >Login</button>
//         </>
//     );
// }


// export default Login;