import React from 'react'

interface Props {
	w?: number
	h?: number
	className?: ''
}

export default function SvgGoogle(props: Props) {
	return (
		<svg
			width={props.w || 18}
			height={props.h || 18}
			className={props.className}
			viewBox='0 0 533.5 544.3'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M533.5 278.4a320.07 320.07 0 0 0-4.7-55.3H272.1v104.8h147a126 126 0 0 1-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z'
				fill='#4285f4'
			/>
			<path
				d='M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1a272.19 272.19 0 0 0 243.2 149.9z'
				fill='#34a853'
			/>
			<path
				d='M119.3 324.3a163 163 0 0 1 0-104.2V150H28.9a272.38 272.38 0 0 0 0 244.4z'
				fill='#fbbc04'
			/>
			<path
				d='M272.1 107.7a147.89 147.89 0 0 1 104.4 40.8l77.7-77.7A261.56 261.56 0 0 0 272.1 0 272.1 272.1 0 0 0 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z'
				fill='#ea4335'
			/>
		</svg>
	)
}
