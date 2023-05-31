import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import user from '../img/user.png';

const firebaseConfig = {
  // Ваши данные конфигурации Firebase
  apiKey: "AIzaSyBOFzwJNbw3MeX_CDibsDdzLoHXfpqqAwY",
  authDomain: "backend-e78a5.firebaseapp.com",
  projectId: "backend-e78a5",
  storageBucket: "backend-e78a5.appspot.com",
  messagingSenderId: "236389813481",
  appId: "1:236389813481:web:f73d39f6a77934aa2d7478",
  measurementId: "G-V7R349WFRD"
};

initializeApp(firebaseConfig);
const auth = getAuth();

const GoogleLoginButton = () => {
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // Вход выполнен успешно
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Обработка ошибок при входе
        console.log(error);
      });
  };

  return (
        <img onClick={handleGoogleLogin} src={user} alt="User icon" />
  );
};

export default GoogleLoginButton;
