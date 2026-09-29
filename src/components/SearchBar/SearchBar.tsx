import { useState } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export function SearchBar({ value, onChange, onSearch }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <form
      className={styles.search}
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        onSearch();
      }}
    >
      <span className={styles.leadingIcon} aria-hidden="true">
        <img src={isFocused ? '/assets/arrow-left.svg' : '/assets/search.svg'} alt="" />
      </span>
      <input
        aria-label="Search files by name"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Enter file name"
        autoComplete="off"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {value && isFocused ? (
        <button
          className={styles.clear}
          type="button"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => onChange('')}
          aria-label="Clear search keyword"
        >
          <img src="/assets/close-circle.svg" alt="" />
        </button>
      ) : null}
    </form>
  );
}
