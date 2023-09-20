export type FolderType = {
	files: File[];
	folders: { [name: string]: FolderType };
};
