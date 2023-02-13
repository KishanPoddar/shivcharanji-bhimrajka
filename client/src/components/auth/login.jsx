import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postRequest } from "../../utils/requests";
import validateEmail from "../../utils/validateEmail";
import { UserState } from "../../state/Provider";

const Login = () => {
    const navigate = useNavigate();
    const { setUser } = UserState();
    const [values, setValues] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!values.email || !values.password) {
            return window.alert("Please validate all the fields");
        }
        if (!validateEmail(values.email)) {
            return window.alert("Please enter a valid e-mail ID");
        }

        const data = await postRequest("/auth/login", values);
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
                <div className="mt-[12vh] flex flex-col items-center">
                    <span className="text-7xl font-lora font-semibold">
                        Login
                    </span>
                    <form
                        onSubmit={handleSignup}
                        className="mt-3 flex flex-col font-varela-round text-lg sm:w-90 w-72"
                    >
                        <label className="mt-2">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Enter your Email..."
                            className="loginRegisterInput"
                        />
                        <label className="">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            className="loginRegisterInput"
                            placeholder="Enter your password..."
                        />
                        <button
                            type="submit"
                            className=" mt-3 button !bg-lightcoral"
                        >
                            Login
                        </button>
                        <div className="flex justify-between mt-5 mx-3">
                            <Link to="/signup" className="loginRegisterLink">
                                Signup!
                            </Link>
                            <Link
                                to="/forgot-password"
                                className="loginRegisterLink"
                            >
                                Forgot Password?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
