import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postRequest } from "../../utils/requests";

const ResetPassword = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [values, setValues] = useState({ password: "", confirmPassword: "" });

	const handleChange = e => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handlePasswordReset = async e => {
		e.preventDefault();
		if (values.password !== values.confirmPassword) {
			return window.alert("Password fields should match");
		}
		const data = await postRequest(`/auth/reset-password/${id}`, { password: values.password });
		if (data.success) {
			navigate("/login");
		} else {
			window.alert(data.message);
		}
	};

	return (
		<form onSubmit={handlePasswordReset}>
			<div>
				<input
					type="password"
					name="password"
					value={values.password}
					onChange={handleChange}
					placeholder="Password"
				/>
			</div>
			<div>
				<input
					type="password"
					name="confirmPassword"
					value={values.confirmPassword}
					onChange={handleChange}
					placeholder="Confirm Password"
				/>
			</div>
			<button type="submit">Reset</button>
		</form>
	);
};

export default ResetPassword;
