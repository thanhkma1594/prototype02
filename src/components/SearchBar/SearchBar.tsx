import styles from './SearchBar.module.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export function SearchBar({ value, onChange, onSearch }: SearchBarProps) {
  return (
    <form
      className={styles.search}
      role="search"
      onSubmit={(event) => {
        event.preventDefault();
        onSearch();
      }}
    >
      <img src="/assets/search.svg" alt="" aria-hidden="true" />
      <input
        aria-label="Search files by name"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Enter file name"
        autoComplete="off"
      />
      {value ? (
        <button className={styles.clear} type="button" onClick={() => onChange('')} aria-label="Clear search keyword">
          ×
        </button>
      ) : null}
    </form>
  );
}
