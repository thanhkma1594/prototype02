export type FileType = 'XLSX' | 'Word' | 'PowerPoint' | 'Text' | 'PDF';
export type FilterType = FileType | 'Folder';

export interface FileItem {
  id: string;
  name: string;
  type: FileType;
  detailsText: string;
}

export interface FolderItem {
  id: string;
  name: string;
  detailsText: string;
}
