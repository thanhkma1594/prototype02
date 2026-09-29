import styles from './ListIcon.module.css';

export function ListIcon() {
  return (
    <span className={styles.slot} aria-hidden="true">
      <span className={styles.icon}>
        <img className={styles.topLeft} src="/assets/list-cell.svg" alt="" />
        <img className={styles.topRight} src="/assets/list-cell.svg" alt="" />
        <img className={styles.bottomRow} src="/assets/list-row.svg" alt="" />
      </span>
    </span>
  );
}
