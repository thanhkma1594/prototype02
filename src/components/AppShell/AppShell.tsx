import type { ReactNode } from 'react';
import styles from './AppShell.module.css';

export function AppShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <main className={`${styles.shell} ${className}`.trim()}>{children}</main>;
}
