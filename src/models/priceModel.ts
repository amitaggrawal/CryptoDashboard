export type PriceData = {
  date: string;
  price: number;
};

export type Period = 'week' | 'month' | 'year';
export type Asset = { symbol: string; id: string };

export const ASSETS: Asset[] = [
  { symbol: 'BTC', id: 'bitcoin' },
  { symbol: 'ETH', id: 'ethereum' },
  { symbol: 'SOL', id: 'solana' },
  { symbol: 'BNB', id: 'binancecoin' },
  { symbol: 'XRP', id: 'ripple' },
];

export function getPeriodDays(period: Period): number {
  switch (period) {
    case 'week': return 7;
    case 'month': return 30;
    case 'year': return 365;
    default: return 7;
  }
}

export function getCacheKey(assetId: string, period: Period): string {
  return `cg_${assetId}_${period}`;
} 