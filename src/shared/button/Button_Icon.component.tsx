import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { FC, PropsWithChildren } from 'react';

type ButtonIconBaseProps = Pick<IconButtonProps, 'size' | 'color' | 'disabled' | 'onClick'>;

interface IButton_icon extends PropsWithChildren, ButtonIconBaseProps {}

const Button_Icon: FC<IButton_icon> = ({ children, ...args }) => {
	return <IconButton {...args}>{children}</IconButton>;
};

export default Button_Icon;
