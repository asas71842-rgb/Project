import './globals.css';
import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'BURIRAM TRIP 2026',
  description: 'ระบบสำรวจความประสงค์เข้าร่วมทัศนศึกษา จังหวัดบุรีรัมย์',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={prompt.className}>{children}</body>
    </html>
  );
}
