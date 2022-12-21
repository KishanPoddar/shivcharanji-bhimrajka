import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest, putRequest } from "../../utils/requests";

const UpdateUser = () => {
	const { id } = useParams();
	const [user, setUser] = useState({});

	const getUser = async () => {
		const data = await getRequest(`/user/${id}`);
		if (data.success) {
			setUser(data.user);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	const handleChange = e => {
		setUser({ ...user, role: e.target.value });
	};

	const changeRole = async e => {
		e.preventDefault();

		if (!user?.role) {
			return;
		}

		const data = putRequest(`/user/role/${id}`, { role: user?.role });
		if (data.success) {
			window.alert(`User role updated to ${user?.role} successfully`);
		}
	};

	return (
		<form onSubmit={changeRole}>
			<h1>{user?.name}</h1>
			<p>{user?.email}</p>
			<select name="role" value={user?.role} onChange={handleChange}>
				<option value="">-- Select --</option>
				<option value="user">User</option>
				<option value="admin">Admin</option>
			</select>
			<button type="submit">Update role</button>
		</form>
	);
};

export default UpdateUser;
