// Your web app's Firebase configurationc
const firebaseConfig = {
  apiKey: "AIzaSyDPthlNC38oorbhktIiarI5rUijKs6pc1Q",
  authDomain: "dsa-website-4bde2.firebaseapp.com",
  databaseURL: "https://dsa-website-4bde2-default-rtdb.firebaseio.com",
  projectId: "dsa-website-4bde2",
  storageBucket: "dsa-website-4bde2.appspot.com",
  messagingSenderId: "287386193844",
  appId: "1:287386193844:web:123cab71c59a9407b92ce1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log(firebase);

var database = firebase.database();

export default database;
