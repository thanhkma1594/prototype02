import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router';
import { FilesStateProvider } from './state/files-state';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FilesStateProvider>
      <RouterProvider router={router} />
    </FilesStateProvider>
  </StrictMode>,
);
