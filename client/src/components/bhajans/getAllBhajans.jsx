import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRequest } from "../../utils/requests";

const GetAllBhajans = () => {
	const [bhajans, setBhajans] = useState([]);

	const getAllBhajans = async () => {
		const data = await getRequest("/bhajan/all");
		if (data.success) {
			setBhajans(data.bhajans);
		} else {
			window.alert(data.message);
		}
	};

	useEffect(() => {
		getAllBhajans();
	}, []);

	return (
		<div>
			{bhajans.map((bhajan, idx) => (
				<div key={idx}>
					<h1>
						{idx + 1}. {bhajan.title}
					</h1>
					<Link to={`/bhajan/${bhajan._id}`}>Go to bhajan</Link>
					<p>{bhajan.tarj}</p>
					<p>{bhajan.doha}</p>
					<p>{bhajan.image}</p>
					{bhajan?.bhajanLyrics?.map((lyrics, idx) => (
						<li key={idx}>{lyrics}</li>
					))}
				</div>
			))}
		</div>
		// <>
		// <div>hello</div>
		// </>

	);
};

export default GetAllBhajans;
