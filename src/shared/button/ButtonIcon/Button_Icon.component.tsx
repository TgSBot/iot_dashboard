import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { FC, PropsWithChildren } from 'react';

type ButtonIconBaseProps = Pick<IconButtonProps, 'size' | 'color' | 'disabled' | 'onClick'>;

interface IButton_icon extends PropsWithChildren, ButtonIconBaseProps {}

const ButtonIcon: FC<IButton_icon> = ({ children, ...args }) => {
	return <IconButton {...args}>{children}</IconButton>;
};

export default ButtonIcon;
