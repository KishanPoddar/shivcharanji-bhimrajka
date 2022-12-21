import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postRequest } from "../../utils/requests";
import validateEmail from "../../utils/validateEmail";
import { UserState } from "../../state/Provider";

const Login = () => {
	const navigate = useNavigate();
	const { setUser } = UserState();
	const [values, setValues] = useState({ email: "", password: "" });

	const handleChange = e => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSignup = async e => {
		e.preventDefault();
		if (!values.email || !values.password) {
			return window.alert("Please validate all the fields");
		}
		if (!validateEmail(values.email)) {
			return window.alert("Please enter a valid e-mail ID");
		}

		const data = await postRequest("/auth/login", values);
		if (data.success) {
			setUser(data.user);
			navigate("/");
		} else {
			setUser(null);
			window.alert(data.message);
		}
	};

	return (
		<form onSubmit={handleSignup}>
			<input
				type="email"
				name="email"
				value={values.email}
				onChange={handleChange}
				placeholder="E-mail"
			/>
			<input
				type="password"
				name="password"
				value={values.password}
				onChange={handleChange}
				placeholder="Password"
			/>
			<button type="submit">Login</button>
			<Link to="/forgot-password">Forgot-password</Link>
		</form>
	);
};

export default Login;
