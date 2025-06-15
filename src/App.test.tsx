// import { describe, it, expect, vi, beforeEach } from 'vitest';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import App from './App';

// // Business logic test: getCacheKey
// function getCacheKey(assetId: string, period: string) {
//   return `cg_${assetId}_${period}`;
// }

// describe('Business logic', () => {
//   it('generates correct cache key', () => {
//     // expect(getCacheKey('bitcoin', 'week')).toBe('cg_bitcoin_week');
//     // expect(getCacheKey('ethereum', 'month')).toBe('cg_ethereum_month');
//   });
// });

// describe('App UI', () => {
//   beforeEach(() => {
//     // Clear localStorage before each test
//     localStorage.clear();
//   });

//   it('renders asset selector and chart', async () => {
//     render(<App />);
//     // Asset selector
//     // expect(screen.getByLabelText(/Select Asset/i)).toBeInTheDocument();
//     // Period selector
//     // expect(screen.getByLabelText(/Period/i)).toBeInTheDocument();
//     // Wait for chart to load
//     await waitFor(() => {
//       // expect(screen.getByText(/Price Chart/i)).toBeInTheDocument();
//     });
//   });

//   it('changes asset and updates chart', async () => {
//     render(<App />);
//     const select = screen.getByLabelText(/Select Asset/i);
//     fireEvent.change(select, { target: { value: 'ethereum' } });
//     // Wait for loading and chart update
//     await waitFor(() => {
//       // expect(screen.getByText(/Price Chart/i)).toBeInTheDocument();
//     });
//   });
// }); 