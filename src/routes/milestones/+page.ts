import type { PageLoad } from './$types';

export type Milestone = {
    url: string,
    html_url: string,
    labels_url: string,
    id: number,
    node_id: string,
    number: number,
    title: string,
    description: string,
    creator: {
        login: string,
        id: number,
        node_id: string,
        avatar_url: string,
        gravatar_id: string,
        url: string,
        html_url: string,
        followers_url: string,
        following_url: string,
        gists_url: string,
        starred_url: string,
        subscriptions_url: string,
        organizations_url: string,
        repos_url: string,
        events_url: string,
        received_events_url: string,
        type: string,
        site_admin: boolean
    },
    open_issues: number,
    closed_issues: number,
    state: string,
    created_at: string,
    updated_at: string,
    due_on: string,
    closed_at: string
}


export const load: PageLoad = async ({fetch}) => ({
    milestones: await fetch("https://api.github.com/repos/Karaoke-Manager/karman/milestones", {
        headers: {
            "Accept": "application/vnd.github+json"
        }
    }).then(value => value.json())
        .then(value => value as Milestone[])
});