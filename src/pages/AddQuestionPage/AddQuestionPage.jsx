import './AddQuestionPage.css'
import Button from "../../components/Button/Button.jsx";
import {useActionState} from "react";
import {toast} from "react-toastify";
import {API_URL} from "../../constans/index.js";
import {delayFn} from "../../helpers/delayFn.js";
import Loader from "../../components/Loader/Loader.jsx";
import QuestionForm from "../../components/QuestionForm/QuestionForm.jsx";


const createCardAction = async (_prevState, formData) => {
	try {
		await delayFn()

		const newQuestionData = Object.fromEntries(formData);
		const resources = newQuestionData.resources.trim()
		const isClearForm = newQuestionData.clearForm //fomData.get("clearForm")

		const respoce = await fetch(`${API_URL}/react`, {
			method: "POST",
			body: JSON.stringify({
				question: newQuestionData.question,
				answer: newQuestionData.answer,
				description: newQuestionData.description,
				resources: resources.lenght ? resources.split('.') : [],
				level: +newQuestionData.level,
				completed: false,
				editDate: undefined,
			}),
		})
		if (!respoce.ok) {
			throw new Error(respoce.statusText);

		}

		const question = respoce.json()
		toast.success("New question successfully created!")

		return isClearForm ? {} : question;
	} catch (error) {
		toast.error(error.message)
		return {}
	}
}

function AddQuestionPage() {

	const [formState, formAction, isPending] =
		useActionState(createCardAction, {clearForm: true})


	return (<>

			{isPending && <Loader />}

			<h1 className='form-title'>Add new question</h1>
			<div className="form-container">
				<QuestionForm
					formAction={formAction}
					formState={formState}
					isPending={isPending}
					submitBtnText="Add Question"
				/>
			</div>

		</>
	)
}

export default AddQuestionPage