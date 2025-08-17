import './SearchInput.css'
import {useId} from "react";
import {SearchIcon} from "../icons.jsx";


export default function SearchInput({value, onChange}) {
	const inputId = useId()

	return (
		<div className='inputContainer'>
			<label htmlFor={inputId}>
				<SearchIcon className="searchIcon" />
			</label>
			<input
				className='searchInput'
				type='text'
				value={value}
				onChange={onChange}
				id={inputId}
				placeholder='Search...'
			/>
		</div>
	)
}