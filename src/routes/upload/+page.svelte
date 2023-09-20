<script lang="ts">
	import Icon from "@iconify/svelte";
	import type { FolderType } from "./Types";
	import Folder from "./Folder.svelte";
	import { browser } from "$app/environment";

	const fakeExtension = ".."; // no file will match this. This may help for Safari to allow folder uploads.

	let uploads: FolderType = { files: [], folders: {} };

	let files: FileList;

	let dragging = false;

	$: console.log(dragging);
	$: if (files) {
		for (const file of files) {
			const path = file.webkitRelativePath || file.name;
			const split = path.split("/");
			if (split.length > 1) {
				// ignore root folder if it exists
				split.shift();
			}
			addFileToNestedFolders(split, file, uploads);
		}
	}
	function addFileToNestedFolders(paths: string[], file: File, folder: FolderType) {
		if (paths.length === 1) {
			folder.files.push(file);
			return;
		}

		const nextFolderName = paths.shift() as string; // Cannot be undefined, since 1 is the base condition

		folder.folders[nextFolderName] = folder.folders[nextFolderName] || { files: [], folders: {} };
		addFileToNestedFolders(paths, file, folder.folders[nextFolderName]);
	}

	function handleDrop(event: DragEvent) {
		if (event.dataTransfer) {
			files = event.dataTransfer.files;
		}
		dragging = false;
	}

	function preventOpenFile(event: Event) {
		event.preventDefault();
	}
</script>

<svelte:window
	on:drop={preventOpenFile}
	on:dragover={preventOpenFile}
	on:dragenter={(e) => {
		e.stopPropagation();
		dragging = true;
	}}
/>
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="absolute left-0 top-0 z-50 h-screen w-screen bg-transparent"
	class:hidden={!dragging}
	on:dragleave={(e) => {
		e.stopPropagation();
		dragging = false;
	}}
	on:drop={handleDrop}
></div>
<section class="mx-auto flex h-full w-3/5 flex-shrink-0 flex-col items-center justify-center">
	<div class="flex w-full flex-row gap-2">
		<div class="flex w-full items-center justify-center">
			<label
				for="dropzone-folder"
				class:bg-gray-100={dragging}
				class:dark:border-gray-500={dragging}
				class:dark:bg-gray-500={dragging}
				class="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
			>
				<div class="flex flex-col items-center justify-center pb-6 pt-5">
					<Icon class="h-8 text-gray-500 dark:text-gray-400" icon="fe:folder" width="2rem" />

					<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
						<span class="font-semibold">Click to upload</span> or drag and drop
					</p>
					<p class="text-xs text-gray-500 dark:text-gray-400">Upload Folders</p>
				</div>
				<input
					bind:files
					id="dropzone-folder"
					mozdirectory=""
					webkitdirectory=""
					directory=""
					accept={fakeExtension}
					multiple
					type="file"
					class="hidden"
				/>
			</label>
		</div>
		<div class="flex w-full items-center justify-center">
			<label
				for="dropzone-file"
				class:bg-gray-100={dragging}
				class:dark:border-gray-500={dragging}
				class:dark:bg-gray-500={dragging}
				class="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
			>
				<div class="flex flex-col items-center justify-center pb-6 pt-5">
					<Icon class="h-8 text-gray-500 dark:text-gray-400" icon="fe:file" width="2rem" />

					<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
						<span class="font-semibold">Click to upload</span> or drag and drop
					</p>
					<p class="text-xs text-gray-500 dark:text-gray-400">Upload Files</p>
				</div>
				<input bind:files id="dropzone-file" on:drop={handleDrop} multiple type="file" class="hidden" />
			</label>
		</div>
	</div>

	<br />
	<div class="mr-auto">
		{#key files}
			<Folder
				name="Your Uploads"
				folder={uploads}
				expanded={uploads.files.length !== 0 || Object.keys(uploads.folders).length !== 0}
			/>
		{/key}
	</div>
</section>
