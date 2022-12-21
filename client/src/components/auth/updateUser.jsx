import { useEffect, useState } from "react";
import { putRequest } from "../../utils/requests";
import validateEmail from "../../utils/validateEmail";
import { UserState } from "../../state/Provider";

const UpdateUser = () => {
	const { user, setUser } = UserState();
	const [values, setValues] = useState({ name: user?.name || "", email: user?.email || "" });

	useEffect(() => {
		setValues({ name: user?.name || "", email: user?.email || "" });
	}, [user]);

	const handleChange = e => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleUserUpdate = async e => {
		e.preventDefault();
		if (!validateEmail(values.email)) {
			return window.alert("Please enter a valid e-mail ID");
		}
		const data = await putRequest("/user");
		if (data.success) {
			setUser(data.user);
			window.alert("Updated successfully");
		}
	};

	return (
		<>
			{user?.name && user?.email ? (
				<form onSubmit={handleUserUpdate}>
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
					<button type="submit">Update</button>
				</form>
			) : (
				<div>Loading ...</div>
			)}
		</>
	);
};

export default UpdateUser;
