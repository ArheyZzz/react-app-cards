import './QuestionForm.css'
import Button from "../Button/Button.jsx";

export default function QuestionForm(props) {

	const {
		formAction,
		formState,
		isPending,
		submitBtnText
	} = props

// const defaultResources = formState.resources && Array.isArray(formState.resources)
// 	? formState.resources.join(',') : '';  => this is 'defaultValue'

	return (
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

			<Button isDisabled={isPending}>{submitBtnText}</Button>
		</form>
	)
}