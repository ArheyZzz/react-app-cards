import './Select.css'
import {useId, useState} from "react";

export default function Select({getQuestions,pageNumber,cardsPerPage}) {

	const[sortBy, setSortBy] = useState("Sort by" )

	const handleChange = e => {
		const selected = e.target.value

		setSortBy(selected)

		const sortMap = {
			'default': `react?_page=${pageNumber}&_per_page=${cardsPerPage}`,
			'Level ↑': `react?_page=${pageNumber}&_per_page=${cardsPerPage}&_sort=level`,
			'Level ↓': `react?_page=${pageNumber}&_per_page=${cardsPerPage}&_sort=-level`,
			'Completed ↑': `react?_page=${pageNumber}&_per_page=${cardsPerPage}&_sort=completed`,
			'Completed ↓': `react?_page=${pageNumber}&_per_page=${cardsPerPage}&_sort=-completed`,
		};
		const url = sortMap[selected] || 'react';
		getQuestions(url)
	}

	const selectId = useId()

	return (<>
			<label for={selectId}></label>
			<select
				className='select'
				id={selectId}
				name="sort"
				value={'s'}
				onChange={handleChange}
			>
				<option value="">{sortBy}</option>
				<hr />
				<option value="Level ↑">Level ↑</option>
				<option value="Level ↓">Level ↓</option>
				<option value="Completed ↑">Completed ↑</option>
				<option value="Completed ↓">Completed ↓</option>
				<option value="default">Default</option>
			</select>
		</>
	)
}

