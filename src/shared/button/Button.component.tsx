import Button from '@mui/material/Button';
import { FC, PropsWithChildren } from 'react';

export interface IButton extends PropsWithChildren {
	variant: 'contained' | 'text' | 'outlined';
	color: 'blue' | 'green';
	href?: string;
	size: 'small' | 'medium' | 'large';
}

const Button_modified: FC<IButton> = ({ children, variant, color, href, size }) => {
	return (
		<Button
			variant={variant}
			sx={{
				color: variant === 'contained' ? 'white' : color,
				borderColor: color,
				backgroundColor: variant === 'contained' ? color : '',
				':hover': color,
			}}
			href={href}
			size={size}
		>
			{children}
		</Button>
	);
};

export default Button_modified;
