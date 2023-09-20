export type Folder = {
	files: File[];
	folders: { [name: string]: Folder };
};
