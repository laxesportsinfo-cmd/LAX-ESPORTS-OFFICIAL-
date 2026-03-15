import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey:"AIzaSyAz6AP4wuF4Lr0XalJJIRK4F1mkbpesKkI",
authDomain:"lax-esports-site-682e8.firebaseapp.com",
projectId:"lax-esports-site-682e8",
storageBucket:"lax-esports-site-682e8",
messagingSenderId:"282230557159",
appId:"1:282230557159:web:0138878e345a7a5f6b9542"

};

const app=initializeApp(firebaseConfig);

const db=getFirestore(app);

window.registerTeam=async function(){

let team=document.getElementById("teamName").value;

await addDoc(collection(db,"teams"),{

team:team,
time:Date.now()

});

alert("Team Registered");

}
