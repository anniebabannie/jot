export type Note = {
  id: string;
  content: string;
  folder_id: string;
};

export type Folder = {
  id: string;
  name: string;
  parent_folder_id?: string;
}