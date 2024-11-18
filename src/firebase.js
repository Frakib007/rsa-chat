import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCVG1kj510NZpED5gSs_CsYl1eykXmb_DA",
    authDomain: "rsa-project-75672.firebaseapp.com",
    projectId: "rsa-project-75672",
    databaseURL: "https://rsa-project-75672-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "rsa-project-75672.firebasestorage.app",
    messagingSenderId: "271174860535",
    appId: "1:271174860535:web:67ac81f941549e24525df2"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const messagesRef = ref(db, "messages");
export { ref, push, onValue };