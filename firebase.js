
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCA0Knt3odIxCDJTwNwbN0uRUHV4k79Pfg",
    authDomain: "edunova-53462.firebaseapp.com",
    projectId: "edunova-53462",
    storageBucket: "edunova-53462.firebasestorage.app",
    messagingSenderId: "25338029801",
    appId: "1:25338029801:web:7ad5d909016065b28ba150"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
