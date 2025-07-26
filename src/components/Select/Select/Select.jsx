import './Select.css'

export default function Select({getQuestions}) {

	const handleChange = e => {
		const selected = e.target.value

		const sortMap = {
			'default': 'react',
			'level-asc': 'react?_sort=level',
			'level-desc': 'react?_sort=-level',
			'completed-asc': 'react?_sort=completed',
			'completed-desc': 'react?_sort=-completed',
		};
		const url = sortMap[selected] || 'react';
		getQuestions(url)
	}
	return (<>
			<label for="sort-select"></label>
			<select
				className='select'
				id="sort-select"
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

