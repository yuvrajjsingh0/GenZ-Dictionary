import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAyJeCYqI6QFp5BMvoUIRkIy_sx0XCnNj4",
  authDomain: "gen-z-dictionary.firebaseapp.com",
  projectId: "gen-z-dictionary",
  storageBucket: "gen-z-dictionary.appspot.com",
  messagingSenderId: "1180030613",
  appId: "1:1180030613:web:5700e3e13fdde141382d9c",
  measurementId: "G-83GT5JZH90"
};

const app = initializeApp(firebaseConfig);

const analytics = await isSupported() ? getAnalytics(app) : null


export { app, analytics };