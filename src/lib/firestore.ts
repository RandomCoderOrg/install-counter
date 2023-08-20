import { doc, getFirestore, updateDoc, getDoc } from "firebase/firestore";
import { app } from "./firebase";

const cloudStoreConfig = {
    collection: "pubCount",
    doc: "world",
    field: "count"
}

const db = getFirestore(app);
const docRef = doc(db, cloudStoreConfig.collection, cloudStoreConfig.doc);

async function GetCount() {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log("No such document!");
    }
}

async function IncrementCount() {
    const count= await GetCount()
    // console.log(count.count)
    try {
        await updateDoc(
            docRef,
            {
                //@ts-ignore
                [cloudStoreConfig.field]: count.count + 1
            }
        )
        //@ts-ignore
        return count.count + 1;
    } catch (error) {
        console.log(error)
    }
}

export { GetCount, IncrementCount }
