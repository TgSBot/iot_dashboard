import { ArrowForwardIos, Delete } from '@mui/icons-material';
import type { Meta, StoryObj } from '@storybook/react';

import Button_Icon from './Button_Icon.component';

const meta: Meta<typeof Button_Icon> = {
	title: 'UI/Button/Button_Icon',
	component: Button_Icon,
	argTypes: {
		children: {
			type: 'function',
			description: 'Иконка кнопки',
		},
		size: {
			type: 'string',
			description: 'Изменение размера кнопки',
			options: ['small', 'medium', 'large'],
			control: {
				type: 'radio',
			},
		},
		color: {
			type: 'string',
			description: 'Изменение цвета кнопки',
			defaultValue: 'inherit',
			options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
			control: {
				type: 'radio',
			},
		},
		disabled: {
			type: 'boolean',
			description: 'Включает/выключает взаимодействие с кнопкой',
			defaultValue: true,
			options: [true, false],
			control: {
				type: 'radio',
			},
		},
		onClick: {
			type: 'function',
			description: 'Действие при нажатие кнопки',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button_Icon>;

export const Default: Story = {
	args: {
		children: <Delete fontSize="inherit" />,
		color: 'inherit',
		size: 'medium',
		disabled: false,
	},
};

export const ArrowForward: Story = {
	args: {
		children: <ArrowForwardIos fontSize="inherit" />,
		color: 'default',
		size: 'small',
		disabled: false,
	},
};
