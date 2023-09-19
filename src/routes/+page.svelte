<script>
	import Icon from "@iconify/svelte";
</script>

<section class="bg-white dark:bg-gray-900">
	<div class="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
		<a
			href="https://github.com/Karaoke-Manager/karman/releases"
			class="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
		>
			<span class="mr-3 rounded-full bg-primary-600 px-4 py-1.5 text-xs text-white">New</span>

			<span class="text-sm font-medium">See what's new</span>
			<Icon class="ml-2" icon="fe:arrow-right" />
		</a>
		<h1
			class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
		>
			Karman
		</h1>
		<p class="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
			The Karaoke Manager
		</p>
		<div class="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
			<a
				href="/"
				class="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
			>
				Learn more
				<Icon class="-mr-1 ml-2 h-5 w-5" icon="majesticons:arrow-right-line" />
			</a>
			<a
				href="/"
				class="rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
			>
				Documentation
			</a>
		</div>
		<div class="mx-auto mt-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
			<span class="font-semibold uppercase text-gray-400">Related Links</span>
			<div class="mt-8 flex flex-wrap items-center justify-center font-semibold text-gray-500 sm:justify-between">
				<a
					href="https://usdx.eu/"
					class="mb-5 mr-5 flex flex-row text-3xl hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
				>
					<Icon class="mr-2 h-10 w-10" icon="mingcute:microphone-line" />
					UltraStar Delux
				</a>
				<a
					href="https://github.com/Karaoke-Manager"
					class="mb-5 mr-5 flex flex-row text-3xl hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
				>
					<Icon class="mr-2 h-10 w-10" icon="fe:github" />
					GitHub
				</a>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
