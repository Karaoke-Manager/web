import {readable} from "svelte/store";

type Notification = {
    image: string,
    message: string,
    time: string,
    href: string,
}

const TEST_DATA: Notification[] = [
    {
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
        message: `New message from Bonnie Green: "Hey, what's up? All set for the presentation?"`,
        time: "a few moments ago",
        href: "#"
    },
    {
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
        message: `Jese leos and 5 others started following you.`,
        time: "10 minutes ago",
        href: "#"
    },
    {
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
        message: `Joseph McFall and 141 others love your story. See it and view more stories.`,
        time: "44 minutes ago",
        href: "#"
    },
    {
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
        message: `Leslie Livington mentioned you in a comment: @bonnie.green what do you say?`,
        time: "1 hour ago",
        href: "#"
    },
    {
        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png",
        message: `Robert Brown posted a new video: Glassmorphism - learn how to implement the new design trend.`,
        time: "3 hours ago",
        href: "#"
    }
]


export const notifications = readable(TEST_DATA)