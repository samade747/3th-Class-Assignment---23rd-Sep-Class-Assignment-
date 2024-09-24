import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import './globals.css';

export const metadata = {
  title: 'My Next.js App',
  description: 'A Next.js app with Navbar, About, Contact, and Footer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
