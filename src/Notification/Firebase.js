import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDyJ6axUfgY43ChacbGFTKp3BhLUFKqUsE",
  authDomain: "expensify-401ce.firebaseapp.com",
  projectId: "expensify-401ce",
  storageBucket: "expensify-401ce.firebasestorage.app",
  messagingSenderId: "668626190094",
  appId: "1:668626190094:web:5995bde4ca4983872b615f",
  measurementId: "G-9BVWQT70Q6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission);
  if (permission === "granted") {
    console.log("Notification permission granted.");
    const token = await getToken(messaging, {
      vapidKey: "BAYlqm5DMJQkpHALPSueIx7IaHe44_RUrBilSJOrk62FpHWnW65PAHODlI3KfLEbv85At_NzkHS2Ep9kNuGDETY",
    });
    console.log(token);
  }
};
