import type { Meta, StoryObj } from '@storybook/react';

import StackModified from './Stack.component';
import BoxModified from '../box/Box.component';
import ButtonModified from '../button/Button/Button.component';

const meta: Meta<typeof StackModified> = {
	title: 'UI/Stack/Stack',
	component: StackModified,
	argTypes: {
		component: {
			description: 'Переадресация на другой компонент',
		},
		sx: {
			description: 'Стилизация компонента',
		},
		children: {
			description: 'Изменение текста кнопки',
		},
		direction: {
			description: 'Определяет flex-direction свойства стиля',
		},
		divider: {
			description: 'Добавляет элемент между каждым дочерним элементом',
		},
		spacing: {
			description: 'Определяет пространство между элементами',
		},
		useFlexGap: {
			description: 'Включает flexbox',
		},
	},
};

export default meta;
type Story = StoryObj<typeof StackModified>;

export const Default: Story = {
	args: {
		direction: 'column',
		children: (
			<ButtonModified variant="outlined" color="primary">
				Hello world
			</ButtonModified>
		),
		useFlexGap: true,
		divider: '|',
		spacing: 0,
	},
};
