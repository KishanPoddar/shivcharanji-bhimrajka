import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postRequest } from "../../utils/requests";

const ResetPassword = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [values, setValues] = useState({ password: "", confirmPassword: "" });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        if (values.password !== values.confirmPassword) {
            return window.alert("Password fields should match");
        }
        const data = await postRequest(`/auth/reset-password/${id}`, {
            password: values.password
        });
        if (data.success) {
            navigate("/login");
        } else {
            window.alert(data.message);
        }
    };

    return (
        <>
            <div className="h-[94vh] w-full bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden">
                <div className="mt-[12vh] flex flex-col items-center">
                    <span className="sm:text-7xl text-4xl font-lora font-semibold">
                        Reset Password
                    </span>
                    <form
                        onSubmit={handlePasswordReset}
                        className="mt-3 flex flex-col font-varela-round text-lg sm:w-96 w-56"
                    >
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
						<button type="submit" className=" mt-3 button !bg-lightcoral" >
                            Reset
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;
