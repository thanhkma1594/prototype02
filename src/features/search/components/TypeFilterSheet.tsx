import { useEffect, useRef } from 'react';
import type { FilterType } from '../../../types/files';
import styles from './TypeFilterSheet.module.css';

const options: FilterType[] = ['XLSX', 'Word', 'PowerPoint', 'Text', 'PDF', 'Folder'];

interface TypeFilterSheetProps {
  selected: FilterType | null;
  onSelect: (type: FilterType | null) => void;
  onClose: () => void;
}

export function TypeFilterSheet({ selected, onSelect, onClose }: TypeFilterSheetProps) {
  const firstOptionRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    firstOptionRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [onClose]);

  return (
    <div className={styles.layer}>
      <button className={styles.backdrop} type="button" onClick={onClose} aria-label="Close type filter" />
      <section className={styles.sheet} role="dialog" aria-modal="true" aria-labelledby="type-filter-title">
        <div className={styles.handle} aria-hidden="true" />
        <h2 id="type-filter-title">Type</h2>
        <div className={styles.options}>
          {options.map((option, index) => (
            <button
              ref={index === 0 ? firstOptionRef : undefined}
              className={selected === option ? styles.selected : ''}
              type="button"
              key={option}
              onClick={() => onSelect(option)}
            >
              <span>{option}</span>
              {selected === option ? <span className={styles.check}>✓</span> : null}
            </button>
          ))}
        </div>
        {selected ? (
          <button className={styles.clear} type="button" onClick={() => onSelect(null)}>
            Clear filter
          </button>
        ) : null}
      </section>
    </div>
  );
}
