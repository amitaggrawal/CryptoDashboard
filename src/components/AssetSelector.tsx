import React from 'react';

export type Period = 'week' | 'month' | 'year';
export type Asset = { symbol: string; id: string };

interface AssetSelectorProps {
  assets: Asset[];
  selectedAsset: string;
  period: Period;
  onAssetChange: (id: string) => void;
  onPeriodChange: (period: Period) => void;
}

const AssetSelector: React.FC<AssetSelectorProps> = ({ assets, selectedAsset, period, onAssetChange, onPeriodChange }) => (
  <div style={{ marginBottom: 16 }}>
    <label>
      Select Asset:
      <select value={selectedAsset} onChange={e => onAssetChange(e.target.value)} style={{ marginLeft: 8 }}>
        {assets.map(a => (
          <option key={a.id} value={a.id}>{a.symbol}</option>
        ))}
      </select>
    </label>
    <label style={{ marginLeft: 24 }}>
      Period:
      <select value={period} onChange={e => onPeriodChange(e.target.value as Period)} style={{ marginLeft: 8 }}>
        <option value="week">Last Week</option>
        <option value="month">Last Month</option>
        <option value="year">Last Year</option>
      </select>
    </label>
  </div>
);

export default AssetSelector; 