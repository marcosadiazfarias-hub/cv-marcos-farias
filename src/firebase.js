import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyDQ1WrfmZH4msXJRxpQG0zlIpL_YR-T1Ds",
  authDomain: "dev-marcos-farias.firebaseapp.com",
  projectId: "dev-marcos-farias",
  storageBucket: "dev-marcos-farias.firebasestorage.app",
  messagingSenderId: "1088363001122",
  appId: "1:1088363001122:web:13ebece004e370397fe17b",
  measurementId: "G-YR4686FB2Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initAnalytics = async () => {
  try {
    const supported = await isSupported();
    if (supported) {
      return getAnalytics(app);
    }
  } catch (error) {
    console.error("Firebase Analytics não pôde ser inicializado:", error);
  }
  return null;
};
