import { GetCount } from "$lib/firestore";
const ssr = false;
export async function load() {
    return {
        count: await GetCount()
    }
}
