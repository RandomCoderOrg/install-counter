import { GetCount } from "$lib/firestore";
export async function load() {
    return {
        count: await GetCount()
    }
}
