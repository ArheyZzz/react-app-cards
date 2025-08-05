import './AddQuestionPage.css'
import Button from "../../components/Button/Button.jsx";
import {useActionState} from "react";
import {toast} from "react-toastify";
import {API_URL} from "../../constans/index.js";
import {delayFn} from "../../helpers/delayFn.js";


const createCardAction = async (_prevState, formData) => {
	try {
		await delayFn()

		const newQuestionData = Object.fromEntries(formData);
		const resources =  newQuestionData.resources.trim()
		const isClearForm = newQuestionData.clearForm //fomData.get("clearForm")

		const respoce = await  fetch(`${API_URL}/react`, {
			method: "POST",
			body: JSON.stringify({
				question: newQuestionData.question,
				answer: newQuestionData.answer,
				description: newQuestionData.description,
				resources: resources.lenght ? resources.split('.'): [],
				level: +newQuestionData.level,
				completed: false,
				editDate: undefined,
			}),
		})
			const question = respoce.json()
			toast.success("New question successfully created!")

		return isClearForm ? {} : question;
	} catch (error) {
		toast.error(error.message)
	}
}

export default function AddQuestionPage() {

	const [formState, formAction, isPending] =
		useActionState(createCardAction, {clearForm: true})


	return (<>
			<h1 className='form-title'>Add new question</h1>
			<div className="form-container">
				<form
					action={formAction}
					method="post"
					className="form-question"
				>
					<div className='form-control'>
						<label htmlFor="questionField">Question:</label>
						<textarea
							defaultValue={formState.question}
							name="question"
							id='questionField'
							cols="30"
							rows="2"
							required
							placeholder='please enter a question'
						></textarea>
					</div>
					<div className='form-control'>
						<label htmlFor="answeField">Short Answer:</label>
						<textarea
							defaultValue={formState.answer}
							name="answer"
							id='answeField'
							cols="30"
							rows="2"
							required
							placeholder='please enter a short answer'
						></textarea>
					</div>
					<div className='form-control'>
						<label htmlFor="descriptionField">Description:</label>
						<textarea
							defaultValue={formState.description}
							name="description"
							id='descriptionField'
							cols="30"
							rows="5"
							required
							placeholder='please enter a description'
						></textarea>
					</div>
					<div className='form-control'>
						<label htmlFor="resourcesField">Resources:</label>
						<textarea
							defaultValue={formState.resources}
							name="resources"
							id='resourcesField'
							cols="30"
							rows="2"
							required
							placeholder='please enter resources seprated by commas '
						></textarea>
					</div>

					<div className='form-control'>
						<label htmlFor="levelField">Level:</label>
						<select
							defaultValue={formState.level}
							name="level"
							id="levelField"
							className='form-select'
						>
							<option disabled>Question level</option>
							<hr />
							<option value="1">1 - easiest</option>
							<option value="2">2 - medium</option>
							<option value="3">3 - hardest</option>
						</select>
					</div>

					<label
						htmlFor="clearFormField"
						className='form-clear-control'
					>
						<input
							defaultChecked={formState.clearForm}
							type="checkbox"
							name="clearForm"
							id="clearFormField"
							className='form-checkbox'
						/>
						<span>clear form after submitting?</span>
					</label>

					<Button isDisabled={isPending}>Add question</Button>
				</form>
			</div>

		</>
	)
}