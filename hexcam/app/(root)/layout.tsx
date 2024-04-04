import StreamVideoProvider from '@/providers/StreamClientProvider';

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
