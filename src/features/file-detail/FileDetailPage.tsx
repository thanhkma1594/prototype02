import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AppShell } from '../../components/AppShell/AppShell';
import { StatusBar } from '../../components/StatusBar/StatusBar';
import { files } from '../../mocks/files';
import styles from './FileDetailPage.module.css';

export function FileDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const exists = files.some((file) => file.id === id);

  const goBack = () => {
    if (location.state?.fromFiles) navigate(-1);
    else navigate('/files');
  };

  return (
    <AppShell>
      <StatusBar />
      <header className={styles.header}>
        <button type="button" onClick={goBack} aria-label="Back to files">
          <span aria-hidden="true">‹</span>
          Back
        </button>
        <h1>Thông tin chi tiết</h1>
        <span className={styles.spacer} aria-hidden="true" />
      </header>
      {!exists ? <p className={styles.fallback}>Không tìm thấy tệp.</p> : null}
    </AppShell>
  );
}
