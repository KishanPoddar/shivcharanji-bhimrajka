import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRequest } from "../../utils/requests";
import { UserState } from "../../state/Provider";

const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const { setUser } = UserState();

	const getUser = async () => {
		const data = await getRequest("/user");
		if (!data.success) {
			setUser(null);
			navigate("/");
		} else {
			setUser(data.user);
		}
	};

	useEffect(() => {
		getUser();
		// eslint-disable-next-line
	}, []);

	return <>{children}</>;
};

export default ProtectedRoute;
