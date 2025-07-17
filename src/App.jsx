import './App.css'
import MainLayout from './components/MainLayout/MainLayout/MainLayout.jsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";

function App() {


    // return (
    //     <MainLayout />
    // )

    return <BrowserRouter>
        <Routes>

            <Route element={<MainLayout />}>
                <Route
                    path='/'
                    element={<HomePage/>}
                />
                <Route
                    path='/forbidden'
                    element={<div>forbidden !!! </div>}
                />
                <Route
                    path='/addquestion'
                    element={<div>add question</div>}
                />

            </Route>

        </Routes>
    </BrowserRouter>
}

export default App
