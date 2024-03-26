import { Box, BoxProps } from '@mui/material';
import { SxProps } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';

type BaseBoxProps = Pick<BoxProps, 'component' | 'sx'>;

interface BoxModifiedProps extends PropsWithChildren, BaseBoxProps {
	sx: SxProps;
}

const BoxModified: FC<BoxModifiedProps> = ({ children, sx, ...args }) => {
	return (
		<Box sx={sx} {...args}>
			{children}
		</Box>
	);
};

export default BoxModified;
