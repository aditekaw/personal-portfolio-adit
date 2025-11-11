/**
 * @copyright aditekaw
 * @license Apache-2.0 className="0"></Apache-2>
 */

/**
 * Node modules
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * Styles
 */
import './index.css';

/**
 * Components
 */
import { App } from '@/App.tsx';
import { Sidebar } from '@/components/Sidebar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10'>
      <Sidebar />
      <App />
    </div>
  </StrictMode>,
);
