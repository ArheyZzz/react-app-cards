import './ControlsContainer.css'

export default function ControlsContainer({children, ref}) {

	return (
		<div className="controlsContainer" ref={ref}>
			{children}
		</div>
	)
}