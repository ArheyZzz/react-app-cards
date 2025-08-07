import './EditQuestionPage.css'
import {useActionState} from "react";
import Loader from "../Loader/Loader.jsx";
import QuestionForm from "../QuestionForm/QuestionForm.jsx";
import {delayFn} from "../../helpers/delayFn.js";
import {API_URL} from "../../constans/index.js";
import {toast} from "react-toastify";
import {dateFormat} from "../../helpers/dateFormat.js";
import {useFetch} from "../../Hooks/useFetch.js";
import {useNavigate} from "react-router-dom";

function EditQuestion({initialState = {}}) {

	const navigate = useNavigate();

	const editCardAction = async (_prevState, formData) => {
		try {
			await delayFn()
			const newQuestionData = Object.fromEntries(formData);
			const resources = newQuestionData.resources.trim()
			const isClearForm = newQuestionData.clearForm //fomData.get("clearForm")
			const questionId = newQuestionData.questionID;

			const respoce = await fetch(`${API_URL}/react/${questionId}`, {
				method: "PATCH",
				body: JSON.stringify({
					question: newQuestionData.question,
					answer: newQuestionData.answer,
					description: newQuestionData.description,
					resources: resources.lenght ? resources.split('.') : [],
					level: +newQuestionData.level,
					completed: false,
					editDate: dateFormat(new Date()),
				}),
			})
			if (!respoce.ok) {
				throw new Error(respoce.statusText);

			}

			const question = respoce.json()
			toast.success("The question is edited successfully!")

			return isClearForm ? {} : question;
		} catch (error) {
			toast.error(error.message)
			return {}
		}
	}

	const [formState, formAction, isPending] =
		useActionState(editCardAction, {...initialState, clearForm: false})

	const [removeQuestion, isQuestionRemoving] = useFetch(async () => {
		await fetch(`${API_URL}/react/${initialState.id}`, {
			method: "DELETE",
		});
		toast.success("The question has been successfully removed!")
		navigate('/')
	})

	const onRemoveQuestionHandler = async () => {
		const isRemove = confirm("Are you sure you want to remove this question?");
		isRemove && removeQuestion()
	}


	return (<>

			{(isPending || isQuestionRemoving)  && <Loader />}

			<h1 className='form-title'>Edit question</h1>
			<div className="form-container">
				<button
					className='remove-question-button'
					disabled={(isPending || isQuestionRemoving)}
					onClick={onRemoveQuestionHandler}
				>
					X
				</button>
				<QuestionForm
					formAction={formAction}
					formState={formState}
					isPending={(isPending || isQuestionRemoving)}
					submitBtnText="Edit Question"
				/>
			</div>

		</>
	)
}

export default EditQuestion;