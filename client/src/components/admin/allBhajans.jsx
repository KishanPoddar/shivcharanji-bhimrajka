import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteRequest, getRequest } from "../../utils/requests";

const AllBhajans = () => {
	const [bhajans, setBhajans] = useState([]);

	const getAllBhajans = async () => {
		const data = await getRequest("/bhajan/all");
		if (data.success) {
			setBhajans(data.bhajans);
		}
	};

	useEffect(() => {
		getAllBhajans();
	}, []);

	const deleteThisBhajan = async id => {
		const data = await deleteRequest(`/bhajan/${id}`);
		if (data.success) {
			const temporaryBhajans = bhajans.filter(bhajan => bhajan._id !== id);
			setBhajans(temporaryBhajans);
		}
	};

	return (
		<div>
			<div>
				{bhajans.map((bhajan, idx) => (
					<div key={idx}>
						<h1>
							{idx + 1}. {bhajan.title}
						</h1>
						<Link to={`/admin/bhajan/update/${bhajan?._id}`}>Update Bhajan</Link>
						<p>{bhajan.tarj}</p>
						<p>{bhajan.doha}</p>
						{bhajan.image && <img src={bhajan.image} alt="bhajan" width={100} />}
						{bhajan?.bhajanLyrics?.map((lyrics, idx) => (
							<li key={idx}>{lyrics}</li>
						))}
						<button type="button" onClick={() => deleteThisBhajan(bhajan?._id)}>
							Delete this bhajan
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllBhajans;
