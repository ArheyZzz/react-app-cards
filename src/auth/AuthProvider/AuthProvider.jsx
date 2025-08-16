import './AuthProvider.css'
import {createContext, useState} from "react";
import {AUTH_STORAGE} from "../../constans/index.js";

export const AuthContext = createContext(null)

export default function AuthProvider({children}) {
	const isLogin = JSON.parse(localStorage.getItem(AUTH_STORAGE)|| false);

	const [isAuth, setIsAuth] = useState(isLogin);


	return (
		<AuthContext.Provider value={{isAuth, setIsAuth}}>
			{children}
		</AuthContext.Provider>
	)
}