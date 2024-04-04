import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';

import { Toaster } from '@/components/ui/toaster';
import { Inter } from 'next/font/google';

import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HexCam',
  description: 'Video calling webapp',
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: '/icons/logo.svg',
            socialButtonsVariant: 'iconButton',
          },
          variables: {
            colorText: '#ffffff',
            colorPrimary: '#0E78F9',
            colorBackground: '#1c1f2e',
            colorInputBackground: '#252a41',
            colorInputText: '#ffffff',
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
