import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import type { FilterType } from '../types/files';

interface FilesViewState {
  keyword: string;
  selectedType: FilterType | null;
  scrollY: number;
}

interface FilesStateValue extends FilesViewState {
  setKeyword: (keyword: string) => void;
  setSelectedType: (type: FilterType | null) => void;
  setScrollY: (scrollY: number) => void;
}

const FilesStateContext = createContext<FilesStateValue | null>(null);

export function FilesStateProvider({ children }: { children: ReactNode }) {
  const [keyword, setKeyword] = useState('');
  const [selectedType, setSelectedType] = useState<FilterType | null>(null);
  const [scrollY, setScrollY] = useState(0);

  const value = useMemo(
    () => ({ keyword, selectedType, scrollY, setKeyword, setSelectedType, setScrollY }),
    [keyword, selectedType, scrollY],
  );

  return <FilesStateContext.Provider value={value}>{children}</FilesStateContext.Provider>;
}

export function useFilesState() {
  const context = useContext(FilesStateContext);
  if (!context) throw new Error('useFilesState must be used inside FilesStateProvider');
  return context;
}
