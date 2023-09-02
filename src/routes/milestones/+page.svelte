<script lang="ts">
    import type {PageData} from "./$types";
    import type {Milestone} from "./+page";
    import Icon from "$lib/components/Icon.svelte";

    export let data: PageData;

    let milestones = data.milestones
        .sort((a: Milestone, b: Milestone) => Date.parse(a.updated_at) - Date.parse(b.updated_at))
        .reverse()

    console.log(milestones)

    function progress(milestone: Milestone) {
        let issues = milestone.closed_issues + milestone.open_issues;
        return (milestone.closed_issues / issues) * 100;
    }

    function toDateString(a: string) {
        return new Date(a).toDateString().split(' ').slice(1).join(' ');
    }

</script>


<div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Milestones
        </h2>
        <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">

        </p>
    </div>

    <div class="flex flex-col justify-center sm:w-full lg:w-4/5 items-center m-auto gap-10">
        {#each milestones as milestone}
            {@const percent = Math.floor(progress(milestone))}
            <div class="relative w-full space-y-4 p-6 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <a href="https://github.com/Karaoke-Manager/karman/milestone/{milestone.number}"
                   class="md:hidden absolute right-2 top-2"
                   role="button">
                    <Icon name="link" class="w-5 h-5 text-gray-500 dark:text-gray-400"/>
                </a>


                <span class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    {milestone.due_on ? toDateString(milestone.due_on) : "No due date"}
                </span>
                {#if milestone.updated_at}
                    <span class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        <b>Updated:&nbsp;</b>{toDateString(milestone.updated_at)    }
                    </span>
                {/if}
                {#if milestone.created_at}
                    <span class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        <b>Created:&nbsp;</b>{toDateString(milestone.created_at)    }
                    </span>
                {/if}
                {#if milestone.closed_at}
                    <span class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        <b>Closed:&nbsp;</b>{toDateString(milestone.closed_at)    }
                    </span>
                {/if}
                {#if milestone.creator && milestone.creator.login}
                    <span class="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        {milestone.creator.login}
                    </span>
                {/if}

                <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                    {milestone.title}
                </h3>
                <div class="flex flex-col gap-10 xl:gap-28 xl:flex-row">
                    <p class="basis-2/5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        {milestone.description}
                    </p>
                    <div class="basis-3/5">
                        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div class="bg-primary-700 dark:bg-primary-600 h-4 rounded-full" style="width: {percent}%">
                            </div>
                        </div>
                        <span class="text-lg font-normal dark:text-gray-400 text-gray-500 mr-6 ">
                            {percent}% completed
                        </span>
                        <span class="text-lg font-normal text-green-400 dark:text-green-800  mr-6 ">
                            {milestone.closed_issues} closed
                        </span>
                        <span class="text-lg font-normal text-red-400 dark:text-red-900">
                            {milestone.open_issues} open
                        </span>
                    </div>
                </div>
                <a href="https://github.com/Karaoke-Manager/karman/milestone/{milestone.number}"
                   class=" hidden md:inline-flex text-white bg-primary-700 justify-center hover:bg-primary-800 items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                   role="button">
                    View Milestone
                    <Icon name="arrow-right" class="w-5 h-5 ml-2 -mr-1"/>
                </a>
            </div>
        {/each}
    </div>
</div>
