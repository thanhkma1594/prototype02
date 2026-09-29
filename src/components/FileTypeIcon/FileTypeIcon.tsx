import type { FileType } from '../../types/files';
import styles from './FileTypeIcon.module.css';

const iconByType: Record<FileType, string> = {
  XLSX: '/assets/file-xls.svg',
  PDF: '/assets/file-pdf.svg',
  Word: '/assets/file-docx.svg',
  Text: '/assets/file-txt.svg',
  PowerPoint: '/assets/file-ppt.svg',
};

export function FileTypeIcon({ type }: { type: FileType }) {
  return <img className={styles.icon} src={iconByType[type]} alt="" aria-hidden="true" />;
}
