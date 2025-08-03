import './Loader.css'

export default function Loader() {
	return (
		<div className='backDrop'>
			<span className='loader'></span>
		</div>
	);
}

export function SmallLoader() {
	return (
		<span className='small-loader'></span>
	);
}
