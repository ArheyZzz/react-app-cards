import './Badge.css'

export default function Badge({children, completed, level}) {


	const levelMap = {
		1: 'primary',
		2: 'warning',
		3: 'alert',
	};

	const complexity = levelMap[level] || '';
	const classNames = ['badge', completed ? 'success' : 'primary',
		complexity].join(' ');


	return (
		<div
			className={classNames}
		>
			{children}
		</div>
	)
}
