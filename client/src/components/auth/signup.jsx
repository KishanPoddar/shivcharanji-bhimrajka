import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../utils/requests";
import validateEmail from "../../utils/validateEmail";
import { UserState } from "../../state/Provider";

const Signup = () => {
	const navigate = useNavigate();
	const { setUser } = UserState();
	const [values, setValues] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = e => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSignup = async e => {
		e.preventDefault();
		if (!values.confirmPassword || !values.email || !values.name || !values.password) {
			return window.alert("Please validate all the fields");
		}
		if (!validateEmail(values.email)) {
			return window.alert("Please enter a valid e-mail ID");
		}
		if (values.password !== values.confirmPassword) {
			return window.alert("Password fields are not matching");
		}

		const data = await postRequest("/auth/signup", values);
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
				type="text"
				name="name"
				value={values.name}
				onChange={handleChange}
				placeholder="Name"
			/>
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
			<input
				type="password"
				name="confirmPassword"
				value={values.confirmPassword}
				onChange={handleChange}
				placeholder="Confirm Password"
			/>
			<button type="submit">Signup</button>
		</form>
	);
};

export default Signup;
