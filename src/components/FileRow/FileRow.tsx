import type { FileItem } from '../../types/files';
import { FileTypeIcon } from '../FileTypeIcon/FileTypeIcon';
import styles from './FileRow.module.css';

export function FileRow({ file, onOpen }: { file: FileItem; onOpen: () => void }) {
  return (
    <button className={styles.row} type="button" onClick={onOpen} aria-label={`Open ${file.name}`}>
      <span className={styles.fileIconSlot} aria-hidden="true">
        <FileTypeIcon type={file.type} />
      </span>
      <span className={styles.copy}>
        <span className={styles.name}>{file.name}</span>
        <span className={styles.details}>{file.detailsText}</span>
      </span>
      <span className={styles.more} aria-hidden="true">
        <span className={styles.moreIcon}>
          <img src="/assets/more.svg" alt="" />
        </span>
      </span>
    </button>
  );
}
