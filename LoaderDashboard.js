import { useSelector} from "react-redux";
import Loader from "./Loader";
import StudentDashboard from "./StudentDashboard";
import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";

const LoaderDashboard=()=>
{
    const [isLoading, setIsLoading]= useState(true);
    const stuName=useSelector((state)=>state.stulogin.stuuser);
    const myNav= useNavigate();

    useEffect(()=>{
         
        if (stuName==null)
        {
            myNav("/"); 
        }
  
    }, []);


    setTimeout(()=>{
       setIsLoading(false);
    }, 2000);
    return(
        <>
       {isLoading ? <Loader/> : <StudentDashboard/>} 
        </>
    );
}
export default LoaderDashboard;