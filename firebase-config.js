// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCZIozaSxXnVs2HMDYx4UI15SZvB8FrJT0",
  authDomain: "tabungan-77ec7.firebaseapp.com",
  projectId: "tabungan-77ec7",
  storageBucket: "tabungan-77ec7.appspot.com",
  messagingSenderId: "466708761136",
  appId: "1:466708761136:web:360461a2490c296f4d3bf5",
  measurementId: "G-8FHE7ZX1ZE"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
