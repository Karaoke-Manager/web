<script>
	import Icon from "$lib/components/Icon.svelte";

	/** @type  {import("./$types").PageData} */
	export let data;

	function toDateString(/** @type {string} */ a) {
		return new Date(a).toDateString().split(" ").slice(1).join(" ");
	}
</script>

<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
			Milestones
		</h2>
		<p class="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl"></p>
	</div>

	<div class="m-auto flex flex-col items-center justify-center gap-10 sm:w-full lg:w-4/5">
		{#each data.milestones as m}
			{@const percent = Math.floor((m.closed_issues / (m.closed_issues + m.open_issues)) * 100)}
			<div class="relative w-full space-y-4 rounded-lg p-6 shadow dark:border-gray-700 dark:bg-gray-800">
				<a
					href="https://github.com/Karaoke-Manager/karman/milestone/{m.number}"
					class="absolute right-2 top-2 md:hidden"
					role="button"
				>
					<Icon name="link" class="h-5 w-5 text-gray-500 dark:text-gray-400" />
				</a>

				<span
					class="inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-300"
				>
					{m.due_on ? toDateString(m.due_on) : "No due date"}
				</span>
				{#if m.updated_at}
					<span
						class="inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-300"
					>
						<b>Updated:&nbsp;</b>{toDateString(m.updated_at)}
					</span>
				{/if}
				{#if m.created_at}
					<span
						class="inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-300"
					>
						<b>Created:&nbsp;</b>{toDateString(m.created_at)}
					</span>
				{/if}
				{#if m.closed_at}
					<span
						class="inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-300"
					>
						<b>Closed:&nbsp;</b>{toDateString(m.closed_at)}
					</span>
				{/if}
				{#if m.creator && m.creator.login}
					<span
						class="inline-flex items-center rounded bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-300"
					>
						{m.creator.login}
					</span>
				{/if}

				<h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
					{m.title}
				</h3>
				<div class="flex flex-col gap-10 xl:flex-row xl:gap-28">
					<p class="basis-2/5 text-lg font-normal text-gray-500 dark:text-gray-400">
						{m.description}
					</p>
					<div class="basis-3/5">
						<div class="w-full rounded-full bg-gray-200 dark:bg-gray-700">
							<div class="h-4 rounded-full bg-primary-700 dark:bg-primary-600" style="width: {percent}%"></div>
						</div>
						<span class="mr-6 text-lg font-normal text-gray-500 dark:text-gray-400">
							{percent}% completed
						</span>
						<span class="mr-6 text-lg font-normal text-green-400 dark:text-green-800">
							{m.closed_issues} closed
						</span>
						<span class="text-lg font-normal text-red-400 dark:text-red-900">
							{m.open_issues} open
						</span>
					</div>
				</div>
				<a
					href="https://github.com/Karaoke-Manager/karman/milestone/{m.number}"
					class=" hidden items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 md:inline-flex"
					role="button"
				>
					View Milestone
					<Icon name="arrow-right" class="-mr-1 ml-2 h-5 w-5" />
				</a>
			</div>
		{/each}
	</div>
</div>
