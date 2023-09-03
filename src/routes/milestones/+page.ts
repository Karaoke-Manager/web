import type { PageLoad } from './$types';
import type {Milestone} from "./milestone.ts";


export const load: PageLoad = async ({fetch}) => ({
    milestones: await fetch("https://api.github.com/repos/Karaoke-Manager/karman/milestones", {
        headers: {
            "Accept": "application/vnd.github+json"
        }
    }).then(value => value.json())
        .then(value => value as Milestone[])
});