import { CloudUpload } from '@mui/icons-material';
import type { Meta, StoryObj } from '@storybook/react';

import Button_modified from './Button.component';

const meta: Meta<typeof Button_modified> = {
	title: 'UI/Button/Button',
	component: Button_modified,
	argTypes: {
		children: {
			type: 'string',
			description: 'Изменение текста кнопки',
			defaultValue: '',
		},
		type: {
			type: 'string',
			description: 'Определяет тип кнопки',
			defaultValue: 'button',
			options: ['button', 'menu', 'reset', 'submit'],
			control: {
				type: 'radio',
			},
		},
		variant: {
			type: 'string',
			description: 'Изменение внешнего вида/типа кнопки',
			options: ['text', 'outlined', 'contained'],
			control: {
				type: 'radio',
			},
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
		startIcon: {
			type: 'function',
			description: 'Иконка перед текстом в кнопке',
		},
		endIcon: {
			type: 'function',
			description: 'Иконка после текста в кнопке',
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
		href: {
			type: 'string',
			description: 'Ссылка на URL сайта/внешнего сайта',
		},
		tabIndex: {
			type: 'number',
			description: 'Изменение индексации при нажатии на кнопку Tab',
		},
		onClick: {
			type: 'function',
			description: 'Действие при нажатие кнопки',
		},
		component: {
			type: 'string',
			description: 'Переадресация на другой компонент',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button_modified>;

export const Default: Story = {
	args: {
		children: 'Click me',
		color: 'inherit',
		variant: 'contained',
		size: 'medium',
		disabled: false,
		type: 'button',
	},
};

export const Link: Story = {
	args: {
		children: 'Link me',
		color: 'info',
		variant: 'outlined',
		size: 'small',
		href: '',
		disabled: true,
		type: 'button',
	},
};

export const File: Story = {
	args: {
		children: 'Upload File',
		component: 'label',
		variant: 'contained',
		tabIndex: -1,
		startIcon: <CloudUpload />,
		disabled: false,
		size: 'large',
		type: 'button',
	},
};
