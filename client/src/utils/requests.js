const API_URL = "http://localhost:4000/api"; // change it to production url once hosted

export const getRequest = async url => {
	try {
		const response = await fetch(`${API_URL}${url}`, {
			method: "GET",
			credentials: "include",
		});
		const data = await response.json();

		return data;
	} catch (err) {
		return { success: false, message: err };
	}
};

export const putRequest = async (url, body) => {
	try {
		const response = await fetch(`${API_URL}${url}`, {
			method: "PUT",
			credentials: "include",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		});
		const data = await response.json();

		return data;
	} catch (err) {
		return { success: false, message: err };
	}
};

export const postRequest = async (url, body) => {
	try {
		const response = await fetch(`${API_URL}${url}`, {
			method: "POST",
			credentials: "include",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body),
		});
		const data = await response.json();

		return data;
	} catch (err) {
		return { success: false, message: err };
	}
};

export const deleteRequest = async url => {
	try {
		const response = await fetch(`${API_URL}${url}`, {
			method: "DELETE",
			credentials: "include",
		});
		const data = await response.json();

		return data;
	} catch (err) {
		return { success: false, message: err };
	}
};
