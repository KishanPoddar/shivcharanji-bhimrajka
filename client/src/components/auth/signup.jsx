import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postRequest } from "../../utils/requests";
import validateEmail from "../../utils/validateEmail";
import { UserState } from "../../state/Provider";

const Signup = () => {
    const navigate = useNavigate();
    const { setUser } = UserState();
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (
            !values.confirmPassword ||
            !values.email ||
            !values.name ||
            !values.password
        ) {
            return window.alert("Please validate all the fields");
        }
        if (!validateEmail(values.email)) {
            return window.alert("Please enter a valid e-mail ID");
        }
        if (values.password !== values.confirmPassword) {
            return window.alert("Password fields are not matching");
        }

        const data = await postRequest("/auth/signup", values);
        if (data.success) {
            setUser(data.user);
            navigate("/");
        } else {
            setUser(null);
            window.alert(data.message);
        }
    };

    return (
        <>
            <div className="h-[94vh] w-full bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden">
                <div className="sm:mt-[12vh] mt-[7vh] flex flex-col items-center">
                    <span className="text-7xl font-lora font-semibold">
                        Sign-Up
                    </span>
                    <form onSubmit={handleSignup} className="mt-3 flex flex-col font-varela-round text-lg sm:w-96 w-72">
                        <label className="mt-1">Name:</label>
                        <input
                            type="text"
							name="name"
							value={values.name}
							onChange={handleChange}
                            className="loginRegisterInput"
                            placeholder="Enter your name..."
                        />

                        <label className="mt-1">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Enter your Email..."
                            className="loginRegisterInput"
                        />

                        <label className="mt-1">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            className="loginRegisterInput"
                            placeholder="Enter your password..."
                        />

                        <label className="mt-1">Confirm Password:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            className="loginRegisterInput"
                            placeholder="Confirm your password..."
                        />
						
                        <button type="submit" className=" mt-3 button !bg-lightcoral">
                            Submit
                        </button>

                        <div className="flex flex-col items-center mt-7">
							<span className="text-base">Already have an account?</span>
                            <Link to="/login" className="loginRegisterLink">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
