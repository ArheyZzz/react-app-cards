import QuestionCard from "../../components/QuestionCard/QuestionCard.jsx";
import {API_URL} from "../../constans/index.js";
import {useEffect, useState} from "react";
import QuestionCardList
	from "../../components/QuestionCardList/QuestionCardList.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import {useFetch} from "../../Hooks/useFetch.js";
import SearchInput from "../../components/SearchInput/SearchInput.jsx";


export default function HomePage() {

	const [cards, setCards] = useState([]);
	const [searchValue, setSearchValue] = useState("");

	const onSearchChangeHandler = (e) => {
		setSearchValue(e.target.value)
		// console.log(e.target.value)
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

	// useMemo(() => {
	//    getQuestions('react')
	// }, []);


	return (
		<>
			<div className='controlsContainer'>
				<SearchInput value={searchValue} onChange={onSearchChangeHandler}/>
			</div>

			<QuestionCardList>

				{isLoading && <Loader />}

				{error && <>
					<span>{error}</span>
					<button onClick={() => window.location.reload()}>Try again
					</button>
				</>}

				{!isLoading && !error && cards.length === 0 && (<>
					<span>No questions found</span>
					<button onClick={() => window.location.reload()}>Try again
					</button>
				</>)}

				{cards.map((card, index) => (<QuestionCard
					key={index}
					card={card}
				/>))}

			</QuestionCardList>

		</>
	);
}