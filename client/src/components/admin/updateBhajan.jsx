import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRequest, putRequest } from "../../utils/requests";

const UpdateBhajan = () => {
	const { id } = useParams();
	const [values, setValues] = useState({ title: "", tarj: "", doha: "", lyrics: "", image: "" });
	const [previousImage, setPreviousImage] = useState("");
	const getBhajanDetails = async () => {
		const data = await getRequest(`/bhajan/${id}`);
		if (data.success) {
			const { title, tarj, doha, lyrics, image } = data.bhajan;
			const updatedLyrics = lyrics.join("\n");
			setValues({ title, tarj, doha, lyrics: updatedLyrics, image });
			setPreviousImage(image);
		}
	};

	const handleProfilePicture = e => {
		const picture = e.target.files[0];
		if (!picture) {
			return;
		}

		const reader = new FileReader();
		reader.readAsDataURL(picture);
		reader.onload = () => {
			setValues({ ...values, image: String(reader.result) });
		};
	};

	useEffect(() => {
		getBhajanDetails();
		// eslint-disable-next-line
	}, []);

	const handleChange = e => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleUpdate = async e => {
		e.preventDefault();
		const data = putRequest(`/bhajan/${id}`, {
			title: values.title,
			tarj: values.tarj,
			doha: values.doha,
			lyrics: values.lyrics,
			image: values.image === previousImage ? "" : values.image,
		});
		if (data.success) {
			window.alert("Updated successfully");
		}
	};

	return (
		<form onSubmit={handleUpdate}>
			<div>
				Title :
				<input
					type="text"
					name="title"
					placeholder="Enter title for this bhajan"
					value={values.title}
					onChange={handleChange}
				/>
			</div>
			<div>
				Tarj :
				<input
					type="text"
					name="tarj"
					placeholder="Enter a tarj"
					value={values.tarj}
					onChange={handleChange}
				/>
			</div>
			<div>
				Doha :
				<input
					type="text"
					name="doha"
					placeholder="Enter a doha"
					value={values.doha}
					onChange={handleChange}
				/>
			</div>
			<div>
				Lyrics :
				<textarea name="lyrics" value={values.lyrics} onChange={handleChange}></textarea>
			</div>
			<div>
				Image :
				<input
					type="file"
					accept="image/*"
					name="image"
					id="image"
					onChange={handleProfilePicture}
				/>
			</div>
			{values.image && <img src={values.image} alt="bhajan" width={100} />}
			<button type="submit">Update</button>
		</form>
	);
};

export default UpdateBhajan;
