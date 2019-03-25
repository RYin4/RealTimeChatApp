import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCQlvCsmTYuP56DJENOySzBdm9JN158_8Q",
    authDomain: "chatapp-69e4c.firebaseapp.com",
    databaseURL: "https://chatapp-69e4c.firebaseio.com",
    projectId: "chatapp-69e4c",
    storageBucket: "",
    messagingSenderId: "338423599093"
};
const firebaseApp = firebase.initializeApp(config);

firebaseApp.firestore().settings({timestampsInSnapshots: true});

export default firebaseApp.firestore();



