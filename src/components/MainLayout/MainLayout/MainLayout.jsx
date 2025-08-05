import cls from './MainLayout.module.css'
import {Outlet} from "react-router-dom";
import Header from "../../Header/Header.jsx";
import {ToastContainer} from "react-toastify";

export default function MainLayout() {
    const currentYear = new Date().getFullYear()
    return (
       <>
        <div className="cls.mainLayout">

            <Header />

            <div className={cls.mainWrapper}>
                <main className={cls.main}>
                    <Outlet />
                </main>

                <footer className={cls.footer}>
                    React Question Cards Application | {currentYear} <br />
                </footer>
            </div>
        </div>

       <ToastContainer/>
       </>
    )
}

