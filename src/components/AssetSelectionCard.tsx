import React from 'react';
import type { Asset, Period } from '../models/priceModel';

interface AssetSelectionCardProps {
  assets: Asset[];
  selectedAsset: string;
  onAssetChange: (id: string) => void;
  compare: boolean;
  onCompareChange: (checked: boolean) => void;
  compareAsset: string;
  onCompareAssetChange: (id: string) => void;
  period: Period;
  onPeriodChange: (period: Period) => void;
}

const periods: { label: string; value: Period }[] = [
  { label: 'Last Week', value: 'week' },
  { label: 'Last Month', value: 'month' },
  { label: 'Last Year', value: 'year' },
];

const AssetSelectionCard: React.FC<AssetSelectionCardProps> = ({
  assets,
  selectedAsset,
  onAssetChange,
  compare,
  onCompareChange,
  compareAsset,
  onCompareAssetChange,
  period,
  onPeriodChange,
}) => (
  <div className="bg-white rounded-xl shadow-md p-6 mb-8 w-full">
    <h2 className="text-lg font-semibold mb-4 text-center">Select asset and time range</h2>
    <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 mb-4 w-full">
      <div className="flex flex-col md:flex-row md:items-center gap-4 w-full justify-center">
        <select
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={selectedAsset}
          onChange={e => onAssetChange(e.target.value)}
        >
          {assets.map(a => (
            <option key={a.id} value={a.id}>{a.symbol}</option>
          ))}
        </select>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={compare}
            onChange={e => onCompareChange(e.target.checked)}
            className="accent-indigo-500"
          />
          <span>compare with another asset</span>
        </label>
        <select
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-100"
          value={compareAsset}
          onChange={e => onCompareAssetChange(e.target.value)}
          disabled={!compare}
        >
          {assets.filter(a => a.id !== selectedAsset).map(a => (
            <option key={a.id} value={a.id}>{a.symbol}</option>
          ))}
        </select>
        <div className="flex gap-2">
          {periods.map(p => (
            <label key={p.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="period"
                value={p.value}
                checked={period === p.value}
                onChange={() => onPeriodChange(p.value)}
                className="accent-indigo-500"
              />
              <span>{p.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default AssetSelectionCard; 