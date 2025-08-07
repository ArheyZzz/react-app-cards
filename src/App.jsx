import './App.css'
import MainLayout from './components/MainLayout/MainLayout/MainLayout.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import QuestionPage from "./pages/QuestionPage/QuestionPage.jsx";
import AddQuestionPage from "./pages/AddQuestionPage/AddQuestionPage.jsx";
import AddQuestionPageLazy
	from "./pages/AddQuestionPage/AddQuestionPageLazy.jsx";
import EditQuestionPage
	from "./components/EditQuestionPage/EditQuestionPage.jsx";

function App() {


	// return (
	//     <MainLayout />
	// )

	return <BrowserRouter>
		<Routes>

			<Route element={<MainLayout />}>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/forbidden'
					element={<div>forbidden !!! </div>}
				/>
				<Route
					path='/addquestion'
					element={<AddQuestionPageLazy />}
				/>
				<Route
					path='/question/:id'
					element={<QuestionPage />}
				/>
				<Route
					path='/editquestion/:id'
					element={<EditQuestionPage />}
				/>
				<Route
					path='*'
					element={<NotFoundPage />}
				/>

			</Route>

		</Routes>
	</BrowserRouter>
}

export default App
