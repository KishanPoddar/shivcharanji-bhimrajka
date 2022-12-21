import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteRequest, getRequest } from "../../utils/requests";

const AllUsers = () => {
	const navigate = useNavigate();
	const [users, setUsers] = useState([]);

	const getAllUsers = async () => {
		const data = await getRequest("/user/all");
		if (data.success) {
			setUsers(data.users);
		}
	};

	useEffect(() => {
		getAllUsers();
	}, []);

	const deleteUser = async id => {
		const data = await deleteRequest(`/user/delete/${id}`);
		if (data.success) {
			const tempUsers = users.filter(user => user._id !== id);
			setUsers(tempUsers);
		}
	};

	return (
		<div>
			{users.map((user, idx) => (
				<div key={idx}>
					<h2>
						{idx + 1}. {user?.name}
					</h2>
					<p>{user?.email}</p>
					<p>{user?.role}</p>
					<button
						type="button"
						onClick={() => navigate(`/admin/user/update/${user?._id}`)}
					>
						Update Role
					</button>
					<button type="button" onClick={() => deleteUser(user?._id)}>
						Delete User
					</button>
				</div>
			))}
		</div>
	);
};

export default AllUsers;
