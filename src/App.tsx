import  { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AssetSelectionCard from './components/AssetSelectionCard';
import ChartCard from './components/ChartCard';
import WalletPerformanceCard from './components/WalletPerformanceCard';
import ChartView from './components/ChartView';
import { ASSETS, type Period } from './models/priceModel';
import { loadPriceData } from './controllers/priceController';
import type { PriceData } from './models/priceModel';

function App() {
  const [selected, setSelected] = useState<string>(ASSETS[0].id);
  const [compare, setCompare] = useState(false);
  const [compareAsset, setCompareAsset] = useState<string>(ASSETS[1]?.id || '');
  const [period, setPeriod] = useState<Period>('week');
  const [mainData, setMainData] = useState<PriceData[] | null>(null);
  const [compareData, setCompareData] = useState<PriceData[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    loadPriceData(
      selected,
      period,
      compare && compareAsset ? compareAsset : undefined
    )
      .then(({ main, compare }) => {
        setMainData(main);
        setCompareData(compare || null);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [selected, period, compare, compareAsset]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 w-full">
        <div className="max-w-4xl mx-auto w-full px-4 flex flex-col gap-8">
          <AssetSelectionCard
            assets={ASSETS}
            selectedAsset={selected}
            onAssetChange={setSelected}
            compare={compare}
            onCompareChange={setCompare}
            compareAsset={compareAsset}
            onCompareAssetChange={setCompareAsset}
            period={period}
            onPeriodChange={setPeriod}
          />
          <ChartCard>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {mainData && (
              <ChartView data={mainData} compareData={compareData} compareAsset={compare ? compareAsset : undefined} />
            )}
          </ChartCard>
          <WalletPerformanceCard />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
