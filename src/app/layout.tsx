import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Thallium AI 🚀 | O Banco Digital Disruptivo com IA de Ponta ✨',
  description: '🔮 O ecossistema financeiro definitivo movido por inteligência artificial autônoma, gradientes roxos neon, hiper-escalabilidade quântica e zero burocracia! 🚀💎',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#090514] text-[#f3f4f6] antialiased selection:bg-purple-500 selection:text-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
