import { app } from "@/util/firebase";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const db = getFirestore(app)

export async function addWaitlist(email: string): Promise<string> {
    return new Promise(async (resolve, reject) => {
        const docRef = doc(db, 'waitlist', email.toLowerCase());

        try {
            const result = await setDoc(docRef, {email: email});

            resolve(email);

        } catch (e) {
            reject(e);
        }
    
    });
    
}
