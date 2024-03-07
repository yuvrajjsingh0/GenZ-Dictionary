import { app } from "@/util/firebase";
import { Word } from "@/util/types/Word";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { resolve } from "path";

const db = getFirestore(app)
export async function getWord(word: string): Promise<Word> {
    return new Promise(async (resolve, reject) => {
        const docRef = doc(db, 'words', word);

        try {
            const result = await getDoc(docRef);

            const word: Word = result.data() as Word;
            word.id = result.id;

            resolve(word);
        } catch (e) {
            reject(e);
        }
    
    });
    
}
