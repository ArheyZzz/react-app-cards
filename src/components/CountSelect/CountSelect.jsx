import './CountSelect.css'
import {useId} from "react";

export default function CountSelect({setCardsPerPage,cardsPerPage}) {
	const handleChange = e => {
		const selected = e.target.value

		console.log(selected)
		setCardsPerPage(selected || cardsPerPage)
	}

	const selectId = useId()

	return (<>
			<label for={selectId}></label>
			<select
				className='countSelect'
				id={selectId}
				name="sort"
				value={'s'}
				onChange={handleChange}
			>
				<option value={cardsPerPage}>{cardsPerPage}</option>
				<hr />
				<option value={10}>10</option>
				<option value={20}>20</option>
				<option value={30}>30</option>
				<option value={50}>50</option>
				<option value={100}>100</option>
				<option value={cardsPerPage}>Default</option>
			</select>
		</>
	)
}