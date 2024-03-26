import type { Meta, StoryObj } from '@storybook/react';

import TextFieldModified from './TextField.component';

const meta: Meta<typeof TextFieldModified> = {
	title: 'UI/TextField/TextField',
	component: TextFieldModified,
	argTypes: {
		variant: {
			type: 'string',
			description: 'Изменение внешнего вида/типа кнопки',
			options: ['filled', 'outlined', 'standard'],
			defaultValue: 'outlined',
			control: {
				type: 'radio',
			},
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
		disabled: {
			type: 'boolean',
			description: 'Включает/выключает взаимодействие с кнопкой',
			defaultValue: true,
			options: [true, false],
			control: {
				type: 'radio',
			},
		},
		id: {
			type: 'string',
			description: 'Индификатор для input',
		},
		label: {
			type: 'string',
			description: 'Контент label',
		},
		defaultValue: {
			type: 'string',
			description: 'Для не контролируемого компонента',
		},
		InputProps: {
			type: 'function',
			description: 'Ввод атрибутов для Input',
		},
		InputLabelProps: {
			type: 'function',
			description: 'Атрибуты применяемые для InputLabel',
		},
		helperText: {
			type: 'string',
			description: 'Вспомогательный текст',
		},
		required: {
			type: 'boolean',
			description: 'Определяет то, обязательно ли заполнение',
			defaultValue: false,
			options: [false, true],
			control: {
				type: 'radio',
			},
		},
		autoComplete: {
			type: 'string',
			description: 'Помогает в заполнение на мобильных устройствах',
		},
		color: {
			type: 'string',
			description: 'Изменение цвета',
			defaultValue: 'primary',
			options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
			control: {
				type: 'radio',
			},
		},
		multiline: {
			type: 'boolean',
			description: 'Расширяет поле ввода при не достатке свободно места в поле ввода',
			defaultValue: false,
			options: [false, true],
			control: {
				type: 'radio',
			},
		},
		rows: {
			type: 'number',
			description: 'Колличество строк отображаемых при многострочном виде',
		},
		placeholder: {
			type: 'string',
			description: 'Помощь при понимании значения заполнения',
		},
		margin: {
			type: 'string',
			description: 'Отступы',
			defaultValue: 'none',
			options: ['dense', 'none', 'normal'],
			control: {
				type: 'radio',
			},
		},
		fullWidth: {
			type: 'boolean',
			description: 'Значение при котором блок занимает всю свободную область',
			defaultValue: false,
			options: [false, true],
			control: {
				type: 'radio',
			},
		},
		onChange: {
			type: 'function',
			description: 'Возвращает значение',
		},
		value: {
			type: 'string',
			description: 'Устанавливает значение для управляемого компонента',
		},
	},
};

export default meta;
type Story = StoryObj<typeof TextFieldModified>;

export const Default: Story = {
	args: {
		variant: 'outlined',
		placeholder: 'Вводи сюда',
		color: 'primary',
		label: 'Primary',
		type: 'text',
	},
};

export const Password: Story = {
	args: {
		variant: 'outlined',
		placeholder: 'password',
		color: 'secondary',
		type: 'password',
		required: true,
	},
};
