import { useState } from "react";
import { postRequest } from "../../utils/requests";

const CreateBhajan = () => {
	const [values, setValues] = useState({ title: "", tarj: "", doha: "", lyrics: "", image: "" });
	const handleChange = e => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleBhajanCreation = async e => {
		e.preventDefault();
		const data = postRequest(`/bhajan/create`, {
			title: values.title,
			tarj: values.tarj,
			doha: values.doha,
			lyrics: values.lyrics,
			image: values.image,
		});
		if (data.success) {
			setValues({ title: "", tarj: "", doha: "", lyrics: "", image: "" });
			window.alert("Updated successfully");
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

	return (
		<form onSubmit={handleBhajanCreation}>
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
			{values.image && <img src={values.image} alt="bhajan image" width={100} />}
			<button type="submit">Create</button>
		</form>
	);
};

export default CreateBhajan;
