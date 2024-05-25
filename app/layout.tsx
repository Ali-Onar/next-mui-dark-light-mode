import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { AppThemeProvider } from '@/hooks/ThemeContext';
import Header from '@/components/Header';
import { Container, CssBaseline } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Nextjs - Material UI Dark / Light Mode',
    description: 'Nextjs - Material UI Dark / Light Mode',
};

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppRouterCacheProvider>
                    <AppThemeProvider>
                        <CssBaseline />
                        <Header />
                        <Container maxWidth="lg">
                            {children}
                        </Container>
                    </AppThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
