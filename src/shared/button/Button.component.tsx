import Button, { ButtonProps } from '@mui/material/Button';
import { FC, PropsWithChildren } from 'react';

type ButtonBaseProps = Pick<
	ButtonProps,
	| 'type'
	| 'variant'
	| 'size'
	| 'color'
	| 'startIcon'
	| 'endIcon'
	| 'disabled'
	| 'href'
	| 'tabIndex'
	| 'onClick'
	| 'component'
>;

export interface IButton extends PropsWithChildren, ButtonBaseProps {}

const Button_modified: FC<IButton> = ({ children, ...args }) => {
	return <Button {...args}>{children}</Button>;
};

export default Button_modified;
