import { GetCount } from "$lib/firestore";
import { json } from "@sveltejs/kit";

export async function GET() {
    try {
        const count = await GetCount();
        return json({"downloads": count.count});
    } catch (error) {
        return json(error);
    }
}
