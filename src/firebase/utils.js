import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB_q1TrPxqZXiW_OmQmpEObH4-5GjsZrAs",
    authDomain: "ecommerce-db-5c3ca.firebaseapp.com",
    databaseURL: "https://ecommerce-db-5c3ca.firebaseio.com",
    projectId: "ecommerce-db-5c3ca",
    storageBucket: "ecommerce-db-5c3ca.appspot.com",
    messagingSenderId: "148228074787",
    appId: "1:148228074787:web:ea0e421d54ef84db1e3096",
    measurementId: "G-VV46MJHEV0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

export const createUserProfileDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = fireStore.doc(`users/${user.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = user;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = fireStore.collection(collectionKey);
    const batch = fireStore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            title,
            items,
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id
        }
    });

    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;