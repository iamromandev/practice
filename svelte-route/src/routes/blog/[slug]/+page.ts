import { error } from "@sveltejs/kit";
import type { PageLoad } from "../$types";

export const load: PageLoad = ({params}) => {
    if (params.slug === "hello-world") {
        return {
            title: 'Hello, World!',
            content: 'This is the first post on my new blog.'  
        }
    }

    error(404, "Page not found");
}