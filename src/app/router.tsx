import { createBrowserRouter } from 'react-router-dom';
import { FileDetailPage } from '../features/file-detail/FileDetailPage';
import { FileListPage } from '../features/file-list/FileListPage';
import { NotFoundPage } from '../features/not-found/NotFoundPage';

export const router = createBrowserRouter([
  { path: '/files', element: <FileListPage /> },
  { path: '/files/:id', element: <FileDetailPage /> },
  { path: '*', element: <NotFoundPage /> },
]);
