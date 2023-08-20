import { json } from "@sveltejs/kit";
import { IncrementCount } from "$lib/firestore.js";

export async function GET({request}) {
    try {
        const count = await IncrementCount();
        return json(count);
    } catch (error) {
        return json(error);
    }
}
