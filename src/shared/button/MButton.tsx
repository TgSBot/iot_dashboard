import Button from '@mui/material/Button';
import { FC, PropsWithChildren } from 'react';

type PropsButton = {
	variant: 'contained' | 'text' | 'outlined';
	color: 'blue' | 'green';
};

export interface IButton extends PropsWithChildren, PropsButton {}

const MButton: FC<IButton> = ({ children, variant, color }) => {
	return (
		<Button
			variant={variant}
			sx={{
				color: variant === 'contained' ? 'white' : color,
				borderColor: color,
				backgroundColor: variant === 'contained' ? color : '',
				':hover': color,
			}}
		>
			{children}
		</Button>
	);
};

export default MButton;
