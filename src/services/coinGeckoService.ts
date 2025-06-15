import type { PriceData } from '../models/priceModel';

export async function fetchCoinGeckoData(assetId: string, days: number): Promise<PriceData[]> {
  const url = `https://api.coingecko.com/api/v3/coins/${assetId}/market_chart?vs_currency=usd&days=${days}&interval=daily`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch data');
  const data = await res.json();
  return data.prices.map(([ts, price]: [number, number]) => ({
    date: new Date(ts).toISOString().slice(0, 10),
    price,
  }));
} 