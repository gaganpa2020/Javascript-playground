import { defaultState} from "./defaultState";
import {connectDB} from "./connect-db";

(async function initializeDB(){
    let db = await connectDB();
    let users = await db.collection(`users`).findOne({id:"U1"});
    if(!users) {
        for (let collectionName in defaultState) {
            let collection = db.collection(collectionName);
            await collection.insertMany(defaultState[collectionName]);
        }
    }
})();