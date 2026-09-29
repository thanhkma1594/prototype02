import styles from './StatusBar.module.css';

export function StatusBar() {
  return (
    <div className={styles.bar} aria-hidden="true">
      <span>9:41</span>
      <img src="/assets/status.svg" alt="" />
    </div>
  );
}
