import './Select.css'
import {useId} from "react";
import {DEFAULT_PER_PAGE} from "../../../pages/HomePage/HomePage.jsx";

export default function Select({getQuestions,pageNumber}) {

	const handleChange = e => {
		const selected = e.target.value


		const sortMap = {
			// 'default': 'react?',
			// 'level-asc': 'react?_sort=level',
			// 'level-desc': 'react?_sort=-level',
			// 'completed-asc': 'react?_sort=completed',
			// 'completed-desc': 'react?_sort=-completed',
			'default': `react?_page=${pageNumber}&_per_page=${DEFAULT_PER_PAGE}`,
			'level-asc': `react?_page=${pageNumber}&_per_page=${DEFAULT_PER_PAGE}&_sort=level`,
			'level-desc': `react?_page=${pageNumber}&_per_page=${DEFAULT_PER_PAGE}&_sort=-level`,
			'completed-asc': `react?_page=${pageNumber}&_per_page=${DEFAULT_PER_PAGE}&_sort=completed`,
			'completed-desc': `react?_page=${pageNumber}&_per_page=${DEFAULT_PER_PAGE}&_sort=-completed`,


		};
		const url = sortMap[selected] || 'react';
		console.log(url)
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
				<option value="">Sort by</option>
				<hr />
				<option value="level-asc">Level ↑</option>
				<option value="level-desc">Level ↓</option>
				<option value="completed-asc">Completed ↑</option>
				<option value="completed-desc">Completed ↓</option>
				<option value="default">Default</option>
			</select>
		</>
	)
}

