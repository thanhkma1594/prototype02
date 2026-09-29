import type { FilterType } from '../../types/files';
import styles from './FilterBar.module.css';

export function FilterBar({ selectedType, onOpenType }: { selectedType: FilterType | null; onOpenType: () => void }) {
  return (
    <div className={styles.filters} aria-label="File filters">
      <button className={`${styles.chip} ${selectedType ? styles.active : ''}`} type="button" onClick={onOpenType}>
        <span>{selectedType ?? 'Type'}</span>
        <img src="/assets/chevron-down.svg" alt="" />
      </button>
      <span className={styles.chip} aria-disabled="true">
        <span>Category</span>
        <img src="/assets/chevron-down.svg" alt="" />
      </span>
      <span className={styles.chip} aria-disabled="true">
        <span>Date modified</span>
        <img src="/assets/chevron-down.svg" alt="" />
      </span>
    </div>
  );
}
