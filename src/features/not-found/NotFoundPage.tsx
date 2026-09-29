import { Link } from 'react-router-dom';
import { AppShell } from '../../components/AppShell/AppShell';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  return (
    <AppShell className={styles.page}>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/files">Back to My File</Link>
    </AppShell>
  );
}
