import { Stack, StackProps as PropsStack } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type StackBaseProps = Pick<
	PropsStack,
	'component' | 'direction' | 'flexDirection' | 'divider' | 'spacing' | 'sx' | 'useFlexGap'
>;

interface StackProps extends PropsWithChildren, StackBaseProps {}

const StackModified: FC<StackProps> = ({ children, ...args }) => {
	return <Stack {...args}>{children}</Stack>;
};

export default StackModified;
