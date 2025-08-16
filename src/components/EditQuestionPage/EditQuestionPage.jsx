import './EditQuestionPage.css'
import {useParams} from "react-router-dom";
import QuestionForm from "../QuestionForm/QuestionForm.jsx";
import {useFetch} from "../../Hooks/useFetch.js";
import {API_URL} from "../../constans/index.js";
import {useEffect, useState} from "react";
import Loader from "../Loader/Loader.jsx";
import AddQuestionPage from "../../pages/AddQuestionPage/AddQuestionPage.jsx";
import EditQuestion from "./EditQuestion.jsx";

 function EditQuestionPage() {

	const {id} = useParams();
	const [question, setQuestion] = useState(null);

	const [fetchQuestion, isQuestionLoading] = useFetch(async () => {
		const response = await fetch(`${API_URL}/react/${id}`);
		const data = await response.json();
		setQuestion(data)
	})

	useEffect(() => {
		fetchQuestion()
	}, [])



	return (
		<>
			{isQuestionLoading && <Loader />}
			{question && <EditQuestion initialState={question} />}
		</>
	)
}

export default EditQuestionPage;