import './HomePage.css'
import QuestionCard from "../../components/QuestionCard/QuestionCard.jsx";
import {API_URL} from "../../constans/index.js";
import {useEffect, useMemo, useRef, useState} from "react";
import QuestionCardList
	from "../../components/QuestionCardList/QuestionCardList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import {useFetch} from "../../Hooks/useFetch.js";
import SearchInput from "../../components/SearchInput/SearchInput.jsx";
import Select from "../../components/Select/Select/Select.jsx";
import ControlsContainer
	from "../../components/ControlsContainer/ControlsContainer/ControlsContainer.jsx";
import Button from "../../components/Button/Button.jsx";

export const DEFAULT_PER_PAGE = 10;


export default function HomePage() {

	const [cards, setCards] = useState({});
	const [searchValue, setSearchValue] = useState("");
	const [pageNumber, setPageNumber] = useState('1');


	const onSearchChangeHandler = (e) => {
		setSearchValue(e.target.value)
	}

	const paginationHandler = (e) => {
		if (e.target.tagName.toLowerCase() === "button") {
			setPageNumber(e.target.textContent)
			controlsContainerRef.current.scrollIntoView({behavior: "smooth"});
		}
	}

	const [getQuestions, isLoading, error] = useFetch(async (url) => {
		const response = await fetch(`${API_URL}/${url}`)
		const questions = await response.json();
		setCards(questions);
		return questions;
	})


	const filteredCards = useMemo(() => {
		if (cards?.data) {
			if (searchValue.trim()) {
				return cards.data.filter(card =>
					card.question.toLowerCase().includes(searchValue.trim().toLowerCase())
				)
			} else {
				return cards.data
			}
		}
		return []
	}, [cards, searchValue]);

	const pagination = useMemo(() => {
		const totalCardsCount = cards?.pages || 0;
		return Array(totalCardsCount).fill(0).map((_, i) => i + 1)
	}, [cards])


	useEffect(() => {
		getQuestions(`react?_page=${pageNumber}&_per_page=${DEFAULT_PER_PAGE}`)
	}, [setSearchValue, pageNumber])

	const controlsContainerRef = useRef(null);


	return (
		<>

			<ControlsContainer ref={controlsContainerRef}>
				<SearchInput
					value={searchValue}
					onChange={onSearchChangeHandler}
				/>
				<Select
					pageNumber={pageNumber}
					getQuestions={getQuestions}
				/>
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


				{filteredCards.map((card, index) => (
					<QuestionCard
						key={index}
						card={card}
					/>
				))}

			</QuestionCardList>

			{!isLoading && !error && filteredCards.length === 0 ? (
					<>
						<span className='noCardsInfo'>No cards found</span>
					</>
				) :
				(<div
					className='paginationWrapper'
					onClick={paginationHandler}
				>
					{pagination.map((value, index) => (
						<Button
							isActive={+pageNumber === +value}
							key={index}
						>{value}</Button>)
					)}
				</div>)
			}


		</>
	);
}