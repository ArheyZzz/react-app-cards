import './App.css'
import MainLayout from './components/MainLayout/MainLayout/MainLayout.jsx'
import {
	BrowserRouter,
	Navigate,
	Outlet,
	Route,
	Routes,
	useLocation
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import QuestionPage from "./pages/QuestionPage/QuestionPage.jsx";
import AddQuestionPageLazy
	from "./pages/AddQuestionPage/AddQuestionPageLazy.jsx";
import AuthProvider from "./auth/AuthProvider/AuthProvider.jsx";
import {useAuth} from "./Hooks/isAuth.js";
import ForbiddenPage from "./pages/ForbiddenPage/ForbiddenPage.jsx";
import EditQuestionPageLazy
	from "./components/EditQuestionPage/EditQuestionPageLazy.jsx";
import ThemeProvider from "./theme/ThemeProvider.jsx";


const ProtectedRoutes = () => {
	const {isAuth} = useAuth();
	const location = useLocation();
	return isAuth ? <Outlet />
		:
		<Navigate
			state={{from: location.pathname}}
			to='/forbidden'
			replace={true}
		/>
}


function App() {

	// return (
	//     <MainLayout />
	// )

	return (

		<ThemeProvider>
			<AuthProvider>

				<BrowserRouter>
					<Routes>

						<Route element={<MainLayout />}>
							<Route
								path='/'
								element={<HomePage />}
							/>
							<Route
								path='/forbidden'
								element={<div><ForbiddenPage /></div>}
							/>
							<Route
								path='/question/:id'
								element={<QuestionPage />}
							/>
							<Route
								path='*'
								element={<NotFoundPage />}
							/>

							<Route element={<ProtectedRoutes />}>
								<Route
									path='/addquestion'
									element={<AddQuestionPageLazy />}
								/>
								<Route
									path='/editquestion/:id'
									element={<EditQuestionPageLazy />}
								/>
							</Route>


						</Route>

					</Routes>
				</BrowserRouter>

			</AuthProvider>
		</ThemeProvider>
	)
}

export default App
