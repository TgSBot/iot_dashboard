import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FC } from 'react';

type TextFieldBaseProps = Pick<
	TextFieldProps,
	| 'variant'
	| 'label'
	| 'defaultValue'
	| 'disabled'
	| 'id'
	| 'InputProps'
	| 'InputLabelProps'
	| 'helperText'
	| 'required'
	| 'type'
	| 'autoComplete'
	| 'multiline'
	| 'rows'
	| 'placeholder'
	| 'margin'
	| 'fullWidth'
	| 'onChange'
	| 'value'
	| 'color'
>;

interface ITextField extends TextFieldBaseProps {}

const TextFieldModified: FC<ITextField> = ({ ...args }) => {
	return <TextField {...args} />;
};

export default TextFieldModified;
