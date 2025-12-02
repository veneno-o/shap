// main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalErrorOverlay from './components/GlobalErrorOverlay';
import { Toaster } from 'react-hot-toast';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <App />
      <GlobalErrorOverlay />
      <Toaster />
    </StrictMode>
  );
}
