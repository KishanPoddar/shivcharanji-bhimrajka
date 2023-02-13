import { useState } from "react";
import { Link } from "react-router-dom";
import { postRequest } from "../../utils/requests";
import validateEmail from "../../utils/validateEmail";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");

	const handleForgotPassword = async (e) => {
		e.preventDefault();
		if (!validateEmail(email)) {
			return window.alert("E-mail format invalid");
		}
		const data = await postRequest("/auth/forgot-password", { email });
		if (data.success) {
			window.alert(
				"Mail sent to this e-mail successfully, please reset your password safely from there"
			);
		}
	};

	return (
		<>
            <div className="h-[94vh] w-full bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden">
                <div className="mt-[12vh] flex flex-col items-center">
                    <span className="sm:text-7xl text-5xl font-lora font-semibold">
                        Forgot Password
                    </span>
                    <form onSubmit={handleForgotPassword} className="mt-3 flex flex-col font-varela-round text-lg sm:w-96 w-72">
                        <label className="mt-2">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your Email..."
                            className="loginRegisterInput"
                        />

                        <button type="submit" className=" mt-3 button !bg-lightcoral">
                            Submit
                        </button>

                        <div className="flex justify-between mt-5 mx-3">
                            <Link to="/signup" className="loginRegisterLink">Signup!</Link>
                            <Link to="/login" className="loginRegisterLink">Login!</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
	);
};

export default ForgotPassword;
