import type { Meta, StoryObj } from '@storybook/react';

import Button_modified from './Button.component';

const meta: Meta<typeof Button_modified> = {
	title: 'UI/Button',
	component: Button_modified,
	argTypes: {
		variant: {
			type: 'string',
			description: 'Вариант внешнего вида кнопки',
			defaultValue: 'contained',
			options: ['contained', 'text', 'outlined'],
			control: {
				type: 'radio',
			},
		},
		color: {
			type: 'string',
			description: 'Варинат цветовой палитры',
			defaultValue: 'blue',
			options: ['blue', 'green'],
			control: {
				type: 'radio',
			},
		},
		size: {
			type: 'string',
			description: 'Размер кнопки',
			defaultValue: 'medium',
			options: ['small', 'medium', 'large'],
			control: {
				type: 'radio',
			},
		},
		href: {
			type: 'string',
			description: 'Ссылка на страницу',
			defaultValue: '',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button_modified>;

export const Default: Story = {
	args: {
		children: 'Chill me',
		variant: 'outlined',
		color: 'blue',
		size: 'medium',
	},
};

export const Link: Story = {
	args: {
		children: 'Link me',
		variant: 'contained',
		color: 'blue',
		size: 'small',
	},
};
