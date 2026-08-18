'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Bot, 
  Zap, 
  ShieldCheck, 
  CreditCard, 
  TrendingUp, 
  ArrowRight, 
  Flame, 
  Rocket
} from 'lucide-react';

export default function LandingPage() {
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSimulateAi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;
    setIsAnalyzing(true);
    setAiResponse(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      setAiResponse(
        `🤖✨ [THALLIUM AI 4.0 RESPONDER]: Analisei sua solicitação "${aiPrompt}" através dos nossos algoritmos de aprendizado profundo quântico! 🚀 Conclusão: Sua conta vai render +4.500% ao ano com 0% de risco graças ao nosso robô autônomo com gradiente roxo! 🔮💎`
      );
    }, 1200);
  };

  return (
    <div className="flex-1 flex flex-col justify-between min-h-screen bg-[#090514] text-[#f3f4f6] font-sans selection:bg-purple-500 selection:text-white relative overflow-hidden">
      
      {/* Purple Ambient Glow Orbs */}
      <div className="glow-orb-ai w-[500px] h-[500px] bg-purple-600/30 -top-32 -left-32 pointer-events-none"></div>
      <div className="glow-orb-ai w-[600px] h-[600px] bg-pink-600/25 top-1/3 -right-48 pointer-events-none"></div>
      <div className="glow-orb-ai w-[400px] h-[400px] bg-cyan-500/25 bottom-10 left-1/3 pointer-events-none"></div>

      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 w-full z-40 ai-glass-panel border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.6)] group-hover:scale-110 transition-transform">
              <Bot className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight font-heading text-white flex items-center gap-1">
                Thallium <span className="ai-gradient-text">AI 🚀</span>
              </span>
              <span className="text-[9px] text-cyan-400 tracking-widest uppercase font-mono">Quantum Ledger Bank</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-300">
            <a href="#recursos" className="hover:text-purple-400 transition-colors flex items-center gap-1">
              <span>Recursos IA</span> ⚡
            </a>
            <a href="#diferenciais" className="hover:text-purple-400 transition-colors flex items-center gap-1">
              <span>Por Que IA?</span> 🔮
            </a>
            <a href="#ai-demo" className="hover:text-purple-400 transition-colors flex items-center gap-1">
              <span>Testar Robô</span> 🤖
            </a>
            <a href="#depoimentos" className="hover:text-purple-400 transition-colors flex items-center gap-1">
              <span>Depoimentos</span> 🔥
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/login" className="px-5 py-2.5 rounded-xl border border-purple-500/40 text-sm font-semibold text-purple-300 hover:bg-purple-500/10 transition-colors">
              Entrar 🔑
            </Link>
            <Link href="/cadastro" className="ai-btn-primary px-6 py-2.5 rounded-xl text-sm font-bold flex items-center space-x-2">
              <span>Criar Conta IA</span>
              <Sparkles className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      <main className="relative pt-24">

        {/* HERO SECTION */}
        <section className="relative py-16 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/40 text-xs sm:text-sm font-mono text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping"></span>
                <span>🤖 POTENCIALIZADO POR INTELIGÊNCIA ARTIFICIAL DE PONTA ✨</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl font-black font-heading leading-tight">
                🚀 O Banco Digital Revolucionário Que Vai <span className="ai-gradient-text">Disruptar Suas Finanças</span> Com IA! ✨🔮
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
                ⚡ Automatize 100% dos seus rendimentos com robôs quânticos, gradientes roxos neon, PIX instantâneo em milissegundos e cashback infinito! 🔥
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link href="/cadastro" className="ai-btn-primary w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-extrabold flex items-center justify-center space-x-3 shadow-2xl">
                  <span>🚀 DECOLAR AGORA (100% GRÁTIS)</span>
                  <Rocket className="w-5 h-5" />
                </Link>

                <a href="#ai-demo" className="px-8 py-4 rounded-2xl border border-purple-500/50 bg-purple-950/30 text-white font-bold text-base hover:bg-purple-500/20 transition-all flex items-center justify-center space-x-2">
                  <span>🤖 FALAR COM A IA DA THALLIUM</span>
                </a>
              </div>

              {/* Trust Highlights */}
              <div className="pt-6 border-t border-purple-500/20 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-400 font-mono">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span>🔒 Criptografia Quântica IA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>⚡ 999.9% Uptime Autônomo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Flame className="w-4 h-4 text-pink-400" />
                  <span>🔥 +1.000.000 Usuários Satisfeitos</span>
                </div>
              </div>

            </div>

            {/* Hero Visual Showcase / Floating Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                <div className="ai-glass-panel rounded-3xl p-6 sm:p-8 relative z-10 space-y-6 border-2 border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.3)] animate-float-slop">
                  
                  <div className="flex items-center justify-between border-b border-purple-500/30 pb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
                      <span className="text-xs font-mono text-purple-300 font-bold">🤖 THALLIUM BOT v4.0</span>
                    </div>
                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/40">🔥 MODOTURBO</span>
                  </div>

                  {/* Live AI Metrics Card */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30">
                      <div className="text-xs text-gray-400">Rendimento por IA</div>
                      <div className="text-2xl font-black text-cyan-400 mt-1 font-heading">+4.500%</div>
                      <div className="text-[10px] text-pink-400 mt-1 font-mono">⚡ Lucro automático</div>
                    </div>

                    <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30">
                      <div className="text-xs text-gray-400">Tempo de Resposta</div>
                      <div className="text-2xl font-black text-pink-400 mt-1 font-heading">0.001 ms</div>
                      <div className="text-[10px] text-purple-400 mt-1 font-mono">🚀 Velocidade da Luz</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-black/50 border border-purple-500/30 space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center text-purple-300 font-bold">
                      <span>🔮 status_ledger.ai</span>
                      <span className="text-cyan-400">100% OPERACIONAL</span>
                    </div>
                    <div className="text-gray-300">
                      &gt; Processando 50.000 Pix/segundo com inteligência artificial...
                    </div>
                    <div className="text-pink-400 flex items-center gap-1 font-bold">
                      <span>✨ Garanta seu bônus de boas-vindas com IA!</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-16 border-y border-purple-500/20 bg-purple-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              
              <div className="space-y-2">
                <div className="text-3xl sm:text-5xl font-black ai-gradient-text font-heading">10.000.000.000+</div>
                <div className="text-xs sm:text-sm font-bold text-gray-300">🚀 Transações por Milissegundo</div>
              </div>

              <div className="space-y-2">
                <div className="text-3xl sm:text-5xl font-black text-pink-400 font-heading">999.99%</div>
                <div className="text-xs sm:text-sm font-bold text-gray-300">⚡ Uptime Autônomo com IA</div>
              </div>

              <div className="space-y-2">
                <div className="text-3xl sm:text-5xl font-black text-cyan-400 font-heading">R$ 500M+</div>
                <div className="text-xs sm:text-sm font-bold text-gray-300">💎 Lucro Gerado por Robôs</div>
              </div>

              <div className="space-y-2">
                <div className="text-3xl sm:text-5xl font-black text-purple-400 font-heading">4.9 / 5.0 ⭐</div>
                <div className="text-xs sm:text-sm font-bold text-gray-300">🔥 Avaliado por 1M de Humanos</div>
              </div>

            </div>
          </div>
        </section>

        {/* RECURSOS / SOLUÇÕES SECTION */}
        <section id="recursos" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/30 text-xs font-mono">
                <Sparkles className="w-4 h-4" />
                <span>TECNOLOGIA DE PONTA IMPULSIONADA POR IA</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-heading">
                Recursos <span className="ai-gradient-text">Hiper-Disruptivos</span> com Inteligência Artificial 🚀✨
              </h2>
              <p className="text-gray-300 text-base">
                Tudo o que você precisa para revolucionar seu patrimônio com a estética neon mais bonita da web.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="ai-glass-panel p-8 rounded-3xl space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                  <Bot className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">⚡ Automação Financeira IA</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Robôs treinados com redes neurais que pagam suas contas no melhor horário do dia para acumular pontos em dobro! 🤖
                </p>
              </div>

              <div className="ai-glass-panel p-8 rounded-3xl space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400">
                  <CreditCard className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">💳 Cartão Neon VIP com Cashback 10%</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Cartão virtual 3D estilizado com gradiente neon roxo e limite aprovado na hora por IA! 🔮
                </p>
              </div>

              <div className="ai-glass-panel p-8 rounded-3xl space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">📈 Investimentos Quânticos</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Algoritmos preditivos que compram renda fixa e variada nos momentos exatos de pico! 🚀
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* DEMO SIMULADOR IA SECTION */}
        <section id="ai-demo" className="py-24 bg-purple-950/30 border-t border-purple-500/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="ai-glass-panel p-8 sm:p-12 rounded-3xl border-2 border-purple-500/40 space-y-8 shadow-2xl">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono">
                  <Bot className="w-4 h-4" />
                  <span>SIMULADOR DE RESPOSTAS DA IA THALLIUM</span>
                </div>
                <h2 className="text-3xl font-black font-heading text-white">
                  Pergunte Qualquer Coisa para a Nossa <span className="ai-gradient-text">IA Financeira</span> 🤖✨
                </h2>
                <p className="text-xs text-gray-300">
                  Experimente o poder dos nossos robôs generativos com respostas 100% repletas de emojis e promessas disruptivas!
                </p>
              </div>

              <form onSubmit={handleSimulateAi} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="Ex: Como posso multiplicar meu dinheiro hoje com IA?" 
                    className="w-full bg-black/60 border border-purple-500/40 rounded-2xl px-6 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pink-500"
                  />
                </div>
                <button type="submit" disabled={isAnalyzing} className="ai-btn-primary w-full py-4 rounded-2xl font-extrabold text-sm flex items-center justify-center space-x-2">
                  <span>{isAnalyzing ? '🤖 PROCESSANDO NEURÔNIOS IA...' : '🚀 GERAR RESPOSTA DISRUPTIVA'}</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </form>

              {aiResponse && (
                <div className="p-6 rounded-2xl bg-purple-950/80 border border-pink-500/50 text-sm text-pink-200 space-y-2 animate-fadeIn font-mono">
                  <p>{aiResponse}</p>
                </div>
              )}
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#05030b] border-t border-purple-500/20 py-12 text-gray-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-white font-bold text-lg font-heading">
            <Bot className="w-5 h-5 text-purple-400" />
            <span>Thallium AI 🚀</span>
          </div>
          <p>© 2026 <strong>Thallium AI Generic Slop Edition Inc.</strong> Todos os direitos reservados com muito gradiente roxo e inteligência artificial! ✨🔮</p>
        </div>
      </footer>

    </div>
  );
}

