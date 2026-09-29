import type { FileItem, FolderItem } from '../types/files';

export const files: FileItem[] = [
  { id: 'invitation', name: 'Thiệp mời tốt nghiệp.docx', type: 'PDF', detailsText: '10KB | 25.07.2023' },
  { id: 'cv-nguyen-minh-tuan', name: 'CV_Nguyen_Minh_Tuan_2026.docx', type: 'PowerPoint', detailsText: '10KB | 25.07.2023' },
  { id: 'work-calendar', name: 'Lich_Lam_Viec_Thang_7_2026.xlsx', type: 'XLSX', detailsText: '10KB | 25.07.2023' },
  { id: 'travel-plan', name: 'Ke_Hoach_Du_Lich_Da_Nang.pptx', type: 'Word', detailsText: '10KB | 25.07.2023' },
  { id: 'rental-contract', name: 'Hop_Dong_Thue_Can_Ho__asifi_2026.docx', type: 'Word', detailsText: '10KB | 25.07.2023' },
  { id: 'family-budget', name: 'Ngan_Sach_Gia_Dinh_Q3_2026.xlsx', type: 'Text', detailsText: '10KB | 25.07.2023' },
  { id: 'report-7234592', name: 'Bao_Cao_7234592.pdf', type: 'PDF', detailsText: '2.4MB | 18.09.2026' },
  { id: 'project-notes', name: 'Project_Notes.txt', type: 'Text', detailsText: '18KB | 02.09.2026' },
];

export const folders: FolderItem[] = [
  { id: 'internal-storage', name: 'Internal Storage', detailsText: '3.2 GB available' },
  { id: 'projects', name: 'Projects', detailsText: '24 files' },
  { id: 'shared-files', name: 'Shared Files', detailsText: '12 files' },
  { id: 'archive', name: 'Archive', detailsText: '8 files' },
];
