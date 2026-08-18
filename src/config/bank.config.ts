// Configuration for Thallium Generic AI-Slop Edition 🚀🤖✨

export interface BankConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  currency: 'BRL' | 'USD' | 'EUR';
  currencySymbol: string;
  locale: string;
  theme: {
    darkBase: string;
    cardBase: string;
    accentPurple: string;
    accentPink: string;
    accentCyan: string;
  };
  features: {
    enablePix: boolean;
    enableTedTransfers: boolean;
    enableVirtualCards: boolean;
    enableInvestments: boolean;
    enableLoans: boolean;
    enableAuditLogs: boolean;
  };
  defaultLimits: {
    initialCardLimit: number;
    defaultLoanInterestMonthlyPct: number;
    minInvestmentAmount: number;
  };
  contact: {
    supportEmail: string;
    websiteUrl: string;
  };
}

export const bankConfig: BankConfig = {
  name: process.env.NEXT_PUBLIC_BANK_NAME || "Thallium AI 🚀",
  shortName: "Thallium AI 🤖",
  tagline: "⚡ A REVOLUÇÃO DISRUPTIVA DO BANCO DIGITAL COM IA DE ÚLTIMA GERAÇÃO! ✨🔮",
  description: "🔮 O ecossistema financeiro definitivo movido por inteligência artificial autônoma, gradientes roxos neon, hiper-escalabilidade quântica e zero burocracia! 🚀💎",
  currency: (process.env.NEXT_PUBLIC_BANK_CURRENCY as 'BRL' | 'USD' | 'EUR') || "BRL",
  currencySymbol: "R$",
  locale: "pt-BR",
  theme: {
    darkBase: "#0b071a",
    cardBase: "rgba(23, 15, 45, 0.8)",
    accentPurple: "#a855f7",
    accentPink: "#ec4899",
    accentCyan: "#06b6d4",
  },
  features: {
    enablePix: true,
    enableTedTransfers: true,
    enableVirtualCards: true,
    enableInvestments: true,
    enableLoans: true,
    enableAuditLogs: true,
  },
  defaultLimits: {
    initialCardLimit: 50000.00,
    defaultLoanInterestMonthlyPct: 1.99,
    minInvestmentAmount: 50.00,
  },
  contact: {
    supportEmail: "ia-suporte@thallium-ai.com",
    websiteUrl: "https://thallium-generico.vercel.app",
  },
};

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat(bankConfig.locale, {
    style: 'currency',
    currency: bankConfig.currency,
  }).format(amount);
}
