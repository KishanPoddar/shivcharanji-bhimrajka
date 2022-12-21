import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../../utils/requests";

const GetOneBhajan = () => {
	const { id } = useParams();
	const [bhajan, setBhajan] = useState(null);
	const [error, setError] = useState(false);

	const getAllBhajans = async () => {
		const data = await getRequest(`/bhajan/${id}`);
		console.log(data);
		if (data.success) {
			setError(false);
			setBhajan(data.bhajan);
		} else {
			setError(true);
		}
	};

	useEffect(() => {
		getAllBhajans();
	}, []);

	return (
		<>
			{error ? (
				<div>Show error page</div>
			) : bhajan ? (
				<div>
					<div>
						<h1>{bhajan.title}</h1>
						<p>{bhajan.tarj}</p>
						<p>{bhajan.doha}</p>
						<p>{bhajan.image}</p>
						{bhajan?.lyrics?.map((lyrics, idx) => (
							<li key={idx}>{lyrics}</li>
						))}
					</div>
				</div>
			) : (
				<div>Show loading page</div>
			)}
		</>
	);
};

export default GetOneBhajan;
