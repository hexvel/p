'use client'

import Image from 'next/image'

type ButtonProps = {
	type: 'button' | 'submit'
	icon?: string
	children?: React.ReactNode
	variant: 'btn_dark_green' | 'btn_green' | 'btn_white_text'
}

const Button = ({ type, icon, children, variant }: ButtonProps) => {
	return (
		<button
			className={`flexCenter gap-3 rounded-full border ${variant}`}
			type='button'
		>
			{icon && <Image src={icon} alt={type} width={24} height={24} />}
			<label className='bold-16 whitespace-nowrap'>{children}</label>
		</button>
	)
}

export default Button
