import { CssBaseline } from '@mui/material';

export const metadata = {
	title: 'iot_dashboard',
	description: 'iot-dashboard by IOT-UKRTB college',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru">
			<body>
				<CssBaseline />
				{children}
			</body>
		</html>
	);
}
