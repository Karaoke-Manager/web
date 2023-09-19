<script lang="ts">
	import Icon from "@iconify/svelte";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;
</script>

<section class="bg-gray-50 py-3 dark:bg-gray-900 sm:py-5">
	<div class="mx-auto max-w-screen-2xl px-4 lg:px-12">
		<div class="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
			<div
				class="flex flex-col space-y-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:space-x-4 lg:space-y-0"
			>
				<div class="flex flex-1 items-center space-x-4">
					<h5>
						<span class="text-gray-500">Total Songs:</span>
						<span class="dark:text-white">{data.total}</span>
					</h5>
				</div>
				<div
					class="flex flex-shrink-0 flex-col space-y-3 md:flex-row md:items-center md:space-x-3 md:space-y-0 lg:justify-end"
				>
					<button
						type="button"
						class="flex flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
					>
						<Icon class="mr-2 h-4 w-4" icon="fe:sync" />
						Refresh
					</button>
				</div>
			</div>
			<div class="overflow-x-auto">
				<table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
					<thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" class="px-4 py-3">Title</th>
							<th scope="col" class="px-4 py-3">Artists</th>
							<th scope="col" class="px-4 py-3">Bpm</th>
							<th scope="col" class="px-4 py-3">Year</th>
							<th scope="col" class="px-4 py-3">Singers</th>
						</tr>
					</thead>
					<tbody>
						{#each data.songs as song}
							<tr class="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700">
								<th
									scope="row"
									class="flex items-center whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
								>
									{song.title}
								</th>
								<td class="px-4 py-2">
									{#each song.artists as artist}
										<span
											class="rounded bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300"
											>{artist}</span
										>
									{/each}
								</td>
								<td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
									<div class="flex items-center">
										{song.bpm}
									</div>
								</td>
								<td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">{song.year}</td>
								<td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
									<div class="flex items-center">
										<Icon class="mr-2 h-7 w-7" icon="mingcute:microphone-line" />
										{#if song.duet}
											<Icon class="mr-2 h-7 w-7" icon="mingcute:microphone-line" />
										{/if}
									</div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<nav
				class="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
				aria-label="Table navigation"
			>
				<span class="text-sm font-normal text-gray-500 dark:text-gray-400">
					Showing
					<span class="font-semibold text-gray-900 dark:text-white"
						>{parseInt(data.offset || "0") + 1}-{data.count}</span
					>
					of
					<span class="font-semibold text-gray-900 dark:text-white">{data.total}</span>
				</span>
				<ul class="inline-flex items-stretch -space-x-px">
					<li>
						<a
							href="/songs?page={data.page - 1}"
							class="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white px-3 py-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>
							<Icon class="h-5 w-5" icon="fe:arrow-left" />
						</a>
					</li>
					<li>
						<a
							href="#"
							class="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
							>1</a
						>
					</li>
					<li>
						<a
							href="#"
							class="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
							>2</a
						>
					</li>
					<li>
						<a
							href="#"
							aria-current="page"
							class="z-10 flex items-center justify-center border border-primary-300 bg-primary-50 px-3 py-2 text-sm leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
							>3</a
						>
					</li>
					<li>
						<a
							href="#"
							class="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
							>...</a
						>
					</li>
					<li>
						<a
							href="#"
							class="flex items-center justify-center border border-gray-300 bg-white px-3 py-2 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
							>100</a
						>
					</li>
					<li>
						<a
							href="/songs?page={data.page + 1}"
							class="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white px-3 py-1.5 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>
							<Icon class="h-5 w-5" icon="fe:arrow-right" />
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</section>
