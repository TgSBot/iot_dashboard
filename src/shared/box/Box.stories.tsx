import type { Meta, StoryObj } from '@storybook/react';

import BoxModified from './Box.component';

const meta: Meta<typeof BoxModified> = {
	title: 'UI/Box/Box',
	component: BoxModified,
	argTypes: {
		component: {
			type: 'string',
			description: 'Переадресация на другой компонент',
		},
		sx: {
			description: 'Стилизация компонента',
		},
		children: {
			type: 'string',
			description: 'Изменение текста кнопки',
			defaultValue: '',
		},
	},
};

export default meta;
type Story = StoryObj<typeof BoxModified>;

export const Default: Story = {
	args: {
		sx: { border: '1px solid green', width: 'fit-content', p: '5px' },
		children: 'Обводка границ',
	},
};
