import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppShell } from '../../components/AppShell/AppShell';
import { FileRow } from '../../components/FileRow/FileRow';
import { FilterBar } from '../../components/FilterBar/FilterBar';
import { ListIcon } from '../../components/ListIcon/ListIcon';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { files, folders } from '../../mocks/files';
import { useFilesState } from '../../state/files-state';
import type { FilterType } from '../../types/files';
import { TypeFilterSheet } from '../search/components/TypeFilterSheet';
import { FolderCard } from './components/FolderCard';
import styles from './FileListPage.module.css';

export function FileListPage() {
  const navigate = useNavigate();
  const { keyword, selectedType, scrollY, setKeyword, setSelectedType, setScrollY } = useFilesState();
  const [isTypeSheetOpen, setTypeSheetOpen] = useState(false);
  const normalizedKeyword = keyword.trim().toLocaleLowerCase();
  const hasFilters = Boolean(normalizedKeyword || selectedType);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => window.scrollTo({ top: scrollY }));
    return () => window.cancelAnimationFrame(frame);
  }, [scrollY]);

  const matchedFiles = useMemo(() => {
    if (selectedType === 'Folder') return [];
    return files.filter((file) => {
      const matchesKeyword = !normalizedKeyword || file.name.toLocaleLowerCase().includes(normalizedKeyword);
      const matchesType = !selectedType || file.type === selectedType;
      return matchesKeyword && matchesType;
    });
  }, [normalizedKeyword, selectedType]);

  const matchedFolders = useMemo(
    () => (selectedType === 'Folder' && !normalizedKeyword ? folders : []),
    [normalizedKeyword, selectedType],
  );

  const closeTypeSheet = useCallback(() => setTypeSheetOpen(false), []);

  const selectType = (type: FilterType | null) => {
    setSelectedType(type);
    setTypeSheetOpen(false);
  };

  const openFile = (id: string) => {
    setScrollY(window.scrollY);
    navigate(`/files/${id}`, { state: { fromFiles: true } });
  };

  const hasResults = matchedFiles.length > 0 || matchedFolders.length > 0;

  return (
    <AppShell>
      <header className={styles.header}>
        <h1>My File</h1>
        <span className={styles.add} aria-label="Add (preview only)" role="img">
          <span aria-hidden="true">+</span>
        </span>
      </header>

      <section className={styles.controls} aria-label="Search and filters">
        <SearchBar value={keyword} onChange={setKeyword} onSearch={() => undefined} />
        <FilterBar selectedType={selectedType} onOpenType={() => setTypeSheetOpen(true)} />
      </section>

      {!hasFilters ? (
        <div className={styles.defaultContent}>
          <section aria-labelledby="recent-files-title">
            <div className={`${styles.sectionHeader} ${styles.recentHeader}`}>
              <h2 id="recent-files-title">Recent Files</h2>
              <ListIcon />
            </div>
            {files.length ? (
              <>
                <div className={styles.fileList}>
                  {files.slice(0, 6).map((file) => (
                    <FileRow file={file} onOpen={() => openFile(file.id)} key={file.id} />
                  ))}
                </div>
                <div className={styles.seeAll} aria-label="See all recents (preview only)">See all recents</div>
              </>
            ) : (
              <p className={styles.emptyList}>No recent files.</p>
            )}
          </section>

          <section aria-labelledby="folders-title">
            <div className={styles.sectionHeader}>
              <h2 id="folders-title">Folders</h2>
            </div>
            <div className={styles.folderGrid}>
              {folders.map((folder) => <FolderCard folder={folder} key={folder.id} />)}
            </div>
          </section>
        </div>
      ) : (
        <section className={styles.results} aria-live="polite" aria-label="Search results">
          {hasResults ? (
            <>
              {normalizedKeyword ? <p className={styles.queryLabel}>Search for “{keyword.trim()}”</p> : null}
              <div className={styles.fileList}>
                {matchedFiles.map((file) => (
                  <FileRow file={file} onOpen={() => openFile(file.id)} key={file.id} />
                ))}
              </div>
              {matchedFolders.length ? (
                <div className={styles.folderGrid}>
                  {matchedFolders.map((folder) => <FolderCard folder={folder} key={folder.id} />)}
                </div>
              ) : null}
            </>
          ) : (
            <div className={styles.noResults}>
              <img src="/assets/empty-files.svg" alt="" />
              <p>No Files Found</p>
            </div>
          )}
        </section>
      )}

      {isTypeSheetOpen ? (
        <TypeFilterSheet selected={selectedType} onSelect={selectType} onClose={closeTypeSheet} />
      ) : null}
    </AppShell>
  );
}
