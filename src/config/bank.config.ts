// White-Label Configuration for Thallium Generic Banking Platform

export interface BankConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  currency: 'BRL' | 'USD' | 'EUR';
  currencySymbol: string;
  locale: string;
  theme: {
    darkBase: string; // Hex color for main dark background
    cardBase: string; // Hex color for panel backgrounds
    accentGold: string; // Hex color for primary metallic accent
    accentSilver: string; // Hex color for secondary metallic accent
    alertDanger: string; // Hex color for warnings
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
  name: process.env.NEXT_PUBLIC_BANK_NAME || "Thallium Ledger",
  shortName: "Thallium",
  tagline: "Plataforma de Infraestrutura Bancária & Ledger Digital",
  description: "Sistema enterprise de dupla entrada com validação RPC atômica, RLS e segurança de nível bancário.",
  currency: (process.env.NEXT_PUBLIC_BANK_CURRENCY as 'BRL' | 'USD' | 'EUR') || "BRL",
  currencySymbol: "R$",
  locale: "pt-BR",
  theme: {
    darkBase: "#090909",
    cardBase: "#121212",
    accentGold: "#D4AF6A",
    accentSilver: "#B8BDC7",
    alertDanger: "#e11d48",
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
    initialCardLimit: 15000.00,
    defaultLoanInterestMonthlyPct: 5.0,
    minInvestmentAmount: 100.00,
  },
  contact: {
    supportEmail: "suporte@thallium.bank",
    websiteUrl: "https://thallium-generico.vercel.app",
  },
};

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat(bankConfig.locale, {
    style: 'currency',
    currency: bankConfig.currency,
  }).format(amount);
}
