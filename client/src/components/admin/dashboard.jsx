import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserState } from "../../state/Provider";
import { getRequest } from "../../utils/requests";

const Dashboard = () => {
	const { user } = UserState();
	const [totalUsers, setTotalUsers] = useState(0);
	const [totalBhajans, setTotalBhajans] = useState(0);

	const getTotalNumberOfUsers = async () => {
		const data = await getRequest("/user/total");
		if (data.success) {
			setTotalUsers(data.totalUsers);
		}
	};

	const getTotalNumberOfBhajans = async () => {
		const data = await getRequest("/bhajan/total");
		if (data.success) {
			setTotalBhajans(data.totalBhajans);
		}
	};

	useEffect(() => {
		getTotalNumberOfBhajans();
		getTotalNumberOfUsers();
	}, []);

	return (
		<div>
			<h1>Hello admin, {user?.name}</h1>
			<div>
				<h1>
					<Link to="/admin/bhajan/create">Create Bhajan</Link>
				</h1>
				<h2>Total Users in your website : {totalUsers}</h2>
				<Link to="/admin/all-users">See all users</Link>
				<h2>Total Bhajans in your website : {totalBhajans}</h2>
				<Link to="/admin/all-bhajans">See all bhajans</Link>
			</div>
		</div>
	);
};

export default Dashboard;
