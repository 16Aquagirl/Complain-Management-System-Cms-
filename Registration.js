import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
     
const Registration = () => {

	const [input, setInput] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const myNav = useNavigate();


	const handleInput = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setInput(values => ({ ...values, [name]: value }));

	}
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);

		let url = "http://localhost:4000/students";
		axios.post(url, input).then((res) => {
			alert("Succesfully Registered!!!");
			myNav("/home");
		});
	}


	return (
		<>

			{/* {isLoading ? <Loader /> : ""} */}
			<div className="screen__content">
				<div className="container-login">
					<div className="screen">
						<h1 id="h1reg" class="h1 heading"> Registration Form</h1>

						<form className="login">

							<div className="login__field">
								<input type="text" name="name" value={input.name} className="login__input" placeholder="User name" required onChange={handleInput} />
							</div>
							<div className="login__field">
								<input type="text" name="email" value={input.email} className="login__input" placeholder="Email" required onChange={handleInput} />
							</div>
							<div className="login__field">
								<input type="password" name="password" value={input.password} className="login__input" placeholder="Password" required onChange={handleInput} />
							</div>
							<br/>
							<button id="btn" class="btn" onClick={handleSubmit}>Register Now</button>
							<br/>
							<div className="linklog">
								<p> Already a user! <Link to="/home" className="mynav">  Login  </Link> </p>
							</div>

						</form>
					</div>
				</div>
			</div>
		</>
	)
}
export default Registration;