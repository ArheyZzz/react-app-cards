import './HomePage.module.css'
import QuestionCard from "../../components/QuestionCard/QuestionCard.jsx";
import {API_URL} from "../../constans/index.js";
import {useEffect, useMemo, useState} from "react";
import QuestionCardList
	from "../../components/QuestionCardList/QuestionCardList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import {useFetch} from "../../Hooks/useFetch.js";
import SearchInput from "../../components/SearchInput/SearchInput.jsx";
import Select from "../../components/Select/Select/Select.jsx";
import ControlsContainer
	from "../../components/ControlsContainer/ControlsContainer/ControlsContainer.jsx";


export default function HomePage() {

	const [cards, setCards] = useState([]);
	const [searchValue, setSearchValue] = useState("");



	const onSearchChangeHandler = (e) => {
		setSearchValue(e.target.value)
	}

	const [getQuestions, isLoading, error] = useFetch(async (url) => {
		const response = await fetch(`${API_URL}/${url}`)
		const questions = await response.json();
		setCards(questions);
		return questions;
	})

	useEffect(() => {
		getQuestions('react')
	}, [])


	const filteredCards = useMemo(() => {
		return cards.filter(card =>
			card.question.toLowerCase().includes(searchValue.trim().toLowerCase())
		);
	}, [cards, searchValue]);


	return (
		<>

			<ControlsContainer>
				<SearchInput
					value={searchValue}
					onChange={onSearchChangeHandler}
				/>
				<Select getQuestions={getQuestions}/>
			</ControlsContainer>


			<QuestionCardList>

				{isLoading && <Loader />}

				{error && (
					<>
						<span>{error}</span>
						<button onClick={() => window.location.reload()}>Try again
						</button>
					</>
				)}

				{!isLoading && !error && filteredCards.length === 0 && (
					<>
						<span className='noCardsInfo'>No cards found</span>
					</>
				)}

				{filteredCards.map((card, index) => (
					<QuestionCard
						key={index}
						card={card}
					/>
				))}

			</QuestionCardList>

		</>
	);
}