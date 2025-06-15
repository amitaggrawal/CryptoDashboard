import { getCacheKey, getPeriodDays } from '../models/priceModel';
import type { Period, PriceData } from '../models/priceModel';
import { fetchCoinGeckoData } from '../services/coinGeckoService';

export async function loadPriceData(
  assetId: string,
  period: Period,
  compareAssetId?: string
): Promise<{ main: PriceData[]; compare?: PriceData[] }> {
  const mainPromise = (async () => {
    const cacheKey = getCacheKey(assetId, period);
    const cached = localStorage.getItem(cacheKey);
    if (cached) return JSON.parse(cached);
    const data = await fetchCoinGeckoData(assetId, getPeriodDays(period));
    localStorage.setItem(cacheKey, JSON.stringify(data));
    return data;
  })();

  let comparePromise: Promise<PriceData[]> | undefined;
  if (compareAssetId) {
    comparePromise = (async () => {
      const cacheKey = getCacheKey(compareAssetId, period);
      const cached = localStorage.getItem(cacheKey);
      if (cached) return JSON.parse(cached);
      const data = await fetchCoinGeckoData(compareAssetId, getPeriodDays(period));
      localStorage.setItem(cacheKey, JSON.stringify(data));
      return data;
    })();
  }

  const [main, compare] = await Promise.all([mainPromise, comparePromise]);
  return { main, compare };
} 