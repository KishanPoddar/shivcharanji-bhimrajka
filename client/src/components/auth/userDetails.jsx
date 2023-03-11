import { useNavigate } from "react-router-dom";
import { UserState } from "../../state/Provider";
import { deleteRequest, getRequest } from "../../utils/requests";
import { useEffect, useState } from "react";
import { putRequest } from "../../utils/requests";
import validateEmail from "../../utils/validateEmail";
// import { BiUserCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const UserDetails = () => {
    const { user, setUser } = UserState();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: user?.name || "",
        email: user?.email || ""
    });

    useEffect(() => {
        setValues({ name: user?.name || "", email: user?.email || "" });
    }, [user]);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleUserUpdate = async (e) => {
        e.preventDefault();
        if (!validateEmail(values.email)) {
            return window.alert("Please enter a valid e-mail ID");
        }
        const data = await putRequest("/user");
        if (data.success) {
            setUser(data.user);
            window.alert("Updated successfully");
        }
    };

    const accountDelete = async () => {
        if (window.confirm("Are you sure you want to delete your account")) {
            await deleteRequest("/user");
            setUser(null);
            navigate("/");
        }
    };

    const fireLogout = async () => {
        await getRequest("/auth/logout");
        setUser(null);
        navigate("/");
    };

    return (
        <>
            {/* <div>
                <h1>Hello {user?.name}</h1>
                <h3>Registered email : {user?.email}</h3>
                <button type="button" onClick={fireLogout}>
                    Logout
                </button>
                <button type="button" onClick={accountDelete}>
                    Delete Account
                </button>
            </div> */}

            <div className="flex sm:flex-row flex-col">
                <div className="basis-3/4 p-9">
                    <div className="flex justify-between items-center">
                        <span className="text-3xl mb-2 text-red-500">
                            Hello
                            {/* Hello {user?.name} */}
                        </span>
                    </div>
                    <form onSubmit={handleUserUpdate} className="flex flex-col">
                        {/* <label className="settingsLabel">Profile Picture</label> */}
                        <div className="flex items-center my-3 gap-3">
                            <CgProfile className="h-14 w-14 p-3 rounded-2xl border-2 border-black" />
                        </div>
                        <label className="settingsLabel">Username</label>
                        <input
                            className="settingsInput"
                            type="text"
                            // placeholder={user.name}
                            placeholder="name"
                            onChange={handleChange}
                            values={values.name}
                            name="name"
                        />
                        <label className="settingsLabel">Email</label>
                        <input
                            className="settingsInput"
                            type="email"
                            placeholder="email"
                            onChange={handleChange}
                            values={values.email}
                            name="email"
                        />
                        <button
                            type="submit"
                            className="button w-36 self-center"
                        >
                            Update
                        </button>
                    </form>
                </div>
                <button
                    type="button"
                    onClick={accountDelete}
                    className="button h-10 w-36 self-center text-center !bg-red-500"
                >
                    Delete Account
                </button>
            </div>
        </>
    );
};

export default UserDetails;
