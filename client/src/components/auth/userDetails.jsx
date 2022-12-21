import { useNavigate } from "react-router-dom";
import { UserState } from "../../state/Provider";
import { deleteRequest, getRequest } from "../../utils/requests";

const UserDetails = () => {
	const { user, setUser } = UserState();
	const navigate = useNavigate();

	const accountDelete = async () => {
		await deleteRequest("/user");
		setUser(null);
		navigate("/");
	};

	const fireLogout = async () => {
		await getRequest("/auth/logout");
		setUser(null);
		navigate("/");
	};

	return (
		<div>
			<h1>Hello {user?.name}</h1>
			<h3>Registered email : {user?.email}</h3>
			<button type="button" onClick={fireLogout}>
				Logout
			</button>
			<button type="button" onClick={accountDelete}>
				Delete Account
			</button>
		</div>
	);
};

export default UserDetails;
