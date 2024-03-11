import type { Meta, StoryObj } from '@storybook/react';

import MButton from './MButton';

const meta: Meta<typeof MButton> = {
	title: 'UI/Button',
	component: MButton,
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
	},
};

export default meta;
type Story = StoryObj<typeof MButton>;

export const Default: Story = {
	args: {
		children: 'Chill me',
		variant: 'outlined',
		color: 'blue',
	},
};
