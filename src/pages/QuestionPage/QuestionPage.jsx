import './QuestionPage.css'
import {useNavigate, useParams} from "react-router-dom";
import Badge from "../../components/Bage/Badge/Badge.jsx";
import Button from "../../components/Button/Button.jsx";
import {useEffect, useId, useState} from "react";
import {useFetch} from "../../Hooks/useFetch.js";
import {API_URL} from "../../constans/index.js";
import Loader, {SmallLoader} from "../../components/Loader/Loader.jsx";
import {useAuth} from "../../Hooks/isAuth.js";
// import {useEffect, useState} from "react";

export default function QuestionPage() {
	const [card, setCard] = useState(null);
	const [isChecked, setChecked] = useState(false);
	const {id} = useParams();

	const {isAuth} =useAuth();

	const onCheckboxChangeHandler = () => {
		setChecked(!isChecked);
		updateCard(!isChecked);
	}

	const [fetchCard, isCardLoading] = useFetch(async () => {
		const response = await fetch(`${API_URL}/react/${id}`)
		const data = await response.json();
		setCard(data);
	})

	const [updateCard, isCardUpdating] = useFetch(async isChecked => {
		const response = await fetch(`${API_URL}/react/${id}`, {
			method: "PATCH",
			body: JSON.stringify({completed: isChecked})
		})
		const data = await response.json();
		setCard(data);
	})

	useEffect(() => {
		fetchCard()
	}, []);

	useEffect(() => {
		card !== null && setChecked(card.completed)
	}, [card]);


	const navigate = useNavigate();

	const checkboxId = useId()

	return (
		<>
			{isCardLoading && <Loader />}
			{card !== null &&
				<div className='card-container'>
					<div className='cardLabels'>
						<Badge level={card.level}>Level: {card.level}</Badge>
						<Badge completed={card.completed}>{card.completed ? 'Completed' : 'Not Completed'}</Badge>

						{card?.editDate &&
							<p className='card-edit'>Edited: {card.editDate}</p>}
					</div>

					<h5 className='card-title'>{card.question}</h5>
					<p className='card-description'>{card.description}</p>

					<div className='card-answers'>
						<label>short answer:</label>
						<p className='card-answer'>
							{card.answer}
						</p>
					</div>

					<ul className='card-resources'>
						Resources:
						{card.resources.map((link, index) => (
							<a
								href={link}
								target='_blank'
								rel='noopener noreferrer'
							>
								<li key={index}>{link}</li>
							</a>
						))}
					</ul>

					<div className="card-checkbox">
						<input
							type="checkbox"
							id={checkboxId}
							checked={isChecked}
							onChange={onCheckboxChangeHandler}
							disabled={isCardUpdating}
						/>
						<label htmlFor={checkboxId}>mark question as completed</label>
						{isCardUpdating && <SmallLoader />}
					</div>

					{isAuth && 					<Button
						onClick={() => console.log('!!!')}
						OnClick={() => navigate(`/editquestion/${id}`)}
						isChecked={isCardUpdating}
					>Edit
						question
					</Button>}

					<Button
						OnClick={() => navigate(`/`)}
						isChecked={isCardUpdating}
					>
						Back
					</Button>

				</div>
			}
		</>
	)
		;
}