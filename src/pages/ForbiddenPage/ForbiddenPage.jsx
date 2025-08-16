import './ForbiddenPage.css'
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../Hooks/isAuth.js";
import {useEffect} from "react";


export default function ForbiddenPage() {

	const location = useLocation();
	const navigate = useNavigate();
	const {isAuth} = useAuth();

	console.log('location', location.state);

	const fromPage = location.state?.from || '/'

	useEffect(() => {
		isAuth && navigate(fromPage, {replace: true});
	}, [isAuth]);

	return (

		<h2 className='forbidden-title'>
			Page is forbidden!
		</h2>
	)
}