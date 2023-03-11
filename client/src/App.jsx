import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import ProtectedRoute from "./components/protected/protectedRoute";
import SuperAdminRoute from "./components/protected/superAdminRoute";
import Provider from "./state/Provider";
const Home = lazy(() => import("./components/Pages/Home"));
const Mandir = lazy(() => import("./components/Pages/Mandir"));
const About = lazy(() => import("./components/Pages/About"));
const Bhajan = lazy(() => import("./components/bhajans/getOneBhajan"));
const Signup = lazy(() => import("./components/auth/signup"));
const Login = lazy(() => import("./components/auth/login"));
const ForgotPassword = lazy(() => import("./components/auth/forgotPassword"));
const ResetPassword = lazy(() => import("./components/auth/resetPassword"));
const UpdateUser = lazy(() => import("./components/auth/updateUser"));
const UserDetails = lazy(() => import("./components/auth/userDetails"));
const AdminAllBhajans = lazy(() => import("./components/admin/allBhajans"));
const AdminAllUsers = lazy(() => import("./components/admin/allUsers"));
const AdminCreateBhajan = lazy(() => import("./components/admin/createBhajan"));
const AdminDashboard = lazy(() => import("./components/admin/dashboard"));
const AdminUpdateBhajan = lazy(() => import("./components/admin/updateBhajan"));
const AdminUpdateUser = lazy(() => import("./components/admin/updateUser"));

const App = () => {
	return (
		<div>
			{/* Import loading page instead of the div with loading text */}
			<Suspense fallback={<div>Loading ...</div>}>
				<BrowserRouter>
				<Navbar/>
					<Provider>
						<Routes>
							<Route path="/" element={<Home />} >
								<Route path="category/:id" element={<Home />} />
							</Route>
							<Route path="/bhajan/:id" element={<Bhajan />} />
							<Route path="/mandir" element={<Mandir />} />
							<Route path="/about" element={<About />} />
							<Route path="/signup" element={<Signup />} />
							<Route path="/login" element={<Login />} />
							<Route path="/forgot-password" element={<ForgotPassword />} />
							<Route path="/reset-password/:id" element={<ResetPassword />} />
							 {/* User protected routes */}
							{/* <Route element={<ProtectedRoute />}> */}
								<Route path="/user/update" element={<UpdateUser />} />
								<Route path="update" element={<UserDetails />} />
							{/* </Route> */}
							{/* Admin protected routes */}
							<Route path="admin" element={<ProtectedRoute />}>
								<Route path="dashboard" element={<AdminDashboard />} />
								<Route path="all-bhajans" element={<AdminAllBhajans />} />
								<Route path="bhajan/update/:id" element={<AdminUpdateBhajan />} />
								<Route path="user/update/:id" element={<AdminUpdateUser />} />
								<Route path="bhajan/create" element={<AdminCreateBhajan />} />
							</Route>
							{/* Super admin protected routes */}
							<Route path="admin" element={<SuperAdminRoute />}>
								<Route path="all-users" element={<AdminAllUsers />} /> 
							</Route>
						</Routes>
					</Provider>
				</BrowserRouter>
			</Suspense>
		</div>
	);
};

export default App;
