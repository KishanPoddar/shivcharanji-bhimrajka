import { useState } from "react";
import { postRequest } from "../../utils/requests";
import validateEmail from "../../utils/validateEmail";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");

	const handleForgotPassword = async e => {
		e.preventDefault();
		if (!validateEmail(email)) {
			return window.alert("E-mail format invalid");
		}
		const data = await postRequest("/auth/forgot-password", { email });
		if (data.success) {
			window.alert(
				"Mail sent to this e-mail successfully, please reset your password safely from there",
			);
		}
	};

	return (
		<form onSubmit={handleForgotPassword}>
			<div>
				E-mail :
				<input
					type="email"
					name="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder="Enter your e-mail"
				/>
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default ForgotPassword;
