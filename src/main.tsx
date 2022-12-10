import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

async function main() {
  if (import.meta.env.MODE === 'mock') {
    const { configureWorker } = await import('./mocks/browser');
    await configureWorker(import.meta.env.MODE);
  }

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

main();
