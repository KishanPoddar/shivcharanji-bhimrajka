import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRequest } from "../../utils/requests";
import { UserState } from "../../state/Provider";

const AdminRoute = ({ children }) => {
	const navigate = useNavigate();
	const { setUser } = UserState();
	const getUser = async () => {
		const data = await getRequest("/user");
		if (!data.success) {
			setUser(null);
			navigate("/login");
		}
		if (data?.user?.role !== "super-admin") {
			setUser(data.user);
			navigate("/");
		}
	};

	useEffect(() => {
		getUser();
		// eslint-disable-next-line
	}, []);

	return <>{children}</>;
};

export default AdminRoute;
