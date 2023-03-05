// import { useEffect, useState } from "react";
// import { putRequest } from "../../utils/requests";
// import validateEmail from "../../utils/validateEmail";
// import { UserState } from "../../state/Provider";

const UpdateUser = () => {
	// const { user, setUser } = UserState();
	// const [values, setValues] = useState({ name: user?.name || "", email: user?.email || "" });

	// useEffect(() => {
	// 	setValues({ name: user?.name || "", email: user?.email || "" });
	// }, [user]);

	// const handleChange = e => {
	// 	setValues({ ...values, [e.target.name]: e.target.value });
	// };

	// const handleUserUpdate = async e => {
	// 	e.preventDefault();
	// 	if (!validateEmail(values.email)) {
	// 		return window.alert("Please enter a valid e-mail ID");
	// 	}
	// 	const data = await putRequest("/user");
	// 	if (data.success) {
	// 		setUser(data.user);
	// 		window.alert("Updated successfully");
	// 	}
	// };

	return (
		<>
		<div>hello</div>
			{/* {user?.name && user?.email ? (
				<form onSubmit={handleUserUpdate}>
					<input
						type="text"
						name="name"
						value={values.name}
						onChange={handleChange}
						placeholder="Name"
					/>
					<input
						type="email"
						name="email"
						value={values.email}
						onChange={handleChange}
						placeholder="E-mail"
					/>
					<button type="submit">Update</button>
				</form>
			) : (
				<div>Loading ...</div>
			)} */}

			{/* <div className="h-[94vh] w-full bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden">
                <div className="sm:mt-[12vh] mt-[7vh] flex flex-col items-center">
                    <span className="sm:text-7xl text-[2.75rem] font-lora font-semibold">
                        Update Details
                    </span>
                    <form onSubmit={handleUserUpdate} className="mt-3 flex flex-col font-varela-round text-lg sm:w-96 w-72"
                    >
						<label className="mt-1">Name:</label>
                        <input
                            type="text"
							name="name"
							value={values.name}
							onChange={handleChange}
                            className="loginRegisterInput"
                            placeholder="Enter your name..."
                        />

                        <label className="mt-2">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Enter your Email..."
                            className="loginRegisterInput"
                        />
                        <button
                            type="submit"
                            className=" mt-3 button !bg-lightcoral"
                        >
                            Update
                        </button> */}
                        {/* <div className="flex justify-between mt-5 mx-3">
                            <Link to="/signup" className="loginRegisterLink">
                                Signup!
                            </Link>
                            <Link
                                to="/forgot-password"
                                className="loginRegisterLink"
                            >
                                Forgot Password?
                            </Link>
                        </div> */}
                    {/* </form>
                </div>
            </div> */}
		</>
	);
};

export default UpdateUser;
