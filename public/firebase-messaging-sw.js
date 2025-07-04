// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// Replace 10.13.2 with latest version of the Firebase JS SDK.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');


// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
 apiKey: "AIzaSyDyJ6axUfgY43ChacbGFTKp3BhLUFKqUsE",
  authDomain: "expensify-401ce.firebaseapp.com",
  projectId: "expensify-401ce",
  storageBucket: "expensify-401ce.firebasestorage.app",
  messagingSenderId: "668626190094",
  appId: "1:668626190094:web:5995bde4ca4983872b615f",
  measurementId: "G-9BVWQT70Q6",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
      console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
      );
      // Customize notification here
      const notificationTitle = payload.notification.title;
      const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
      };
     
    
      self.registration.showNotification(notificationTitle, notificationOptions);
    });