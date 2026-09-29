import type { FolderItem } from '../../../types/files';
import styles from './FolderCard.module.css';

export function FolderCard({ folder, compact = false }: { folder: FolderItem; compact?: boolean }) {
  return (
    <article className={`${styles.card} ${compact ? styles.compact : ''}`} aria-label={`${folder.name}, ${folder.detailsText}`}>
      <img className={styles.background} src="/assets/folder-card-bg.svg" alt="" aria-hidden="true" />
      <div className={styles.documents} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className={styles.label}>
        <strong>{folder.name}</strong>
        <span>{folder.detailsText}</span>
      </div>
    </article>
  );
}
