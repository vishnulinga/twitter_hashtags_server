const firebase=require("firebase")

const firebaseApp=firebase.initializeApp({
    
    apiKey: "AIzaSyBXEVvNq5dFHteZQUdDnnsEMlQhpaXcHSo",
    authDomain: "twitter-b3b34.firebaseapp.com",
    databaseURL: "https://twitter-b3b34.firebaseio.com",
    projectId: "twitter-b3b34",
    storageBucket: "twitter-b3b34.appspot.com",
    messagingSenderId: "828079731611",
    appId: "1:828079731611:web:5fb2d38c2d00d3d702273e"
})

const db = firebaseApp.firestore();

module.exports=db