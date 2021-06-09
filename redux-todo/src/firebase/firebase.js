import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyAVjDsQ662ridmsOg2hTSXKAa6n5ZDnPwc",
    authDomain: "react-1adde.firebaseapp.com",
    projectId: "react-1adde",
    storageBucket: "react-1adde.appspot.com",
    messagingSenderId: "938363397902",
    appId: "1:938363397902:web:46106b6925c34541b4995f",
    measurementId: "G-LC6QZHD0EZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export const fetchTodo=async(uid)=>{
    var docRef = await firebase.firestore().collection("users").doc(uid);
    var document = await docRef.get()
     if(document.exists){
      return(document.data().tasks)
     }
     else{
       return null
     }
    }

    export const addTask=async(id,task,uid)=>{
      console.log("rasdk",uid);
      var docRef = await firebase.firestore().collection("users").doc(uid);
      var newTask = {id:id,task:task,isCompleted:false}
      docRef.set({"tasks":firebase.firestore.FieldValue.arrayUnion(newTask)},{merge:true})
      }

      export const deleteTask=async(id,uid)=>{
        var docRef = await firebase.firestore().collection("users").doc(uid);
        var document = await docRef.get()
        if(document.exists){
        docRef.update({
          "tasks":document.data().tasks.filter(task=>id!==task.id)
      });
    }   
        }
        export const markAsCompleted=async(id,task,uid)=>{
          var docRef = await firebase.firestore().collection("users").doc(uid);
          var document = await docRef.get();
          var newTask = {id:id,task:task.task,isCompleted:true}
          if(document.exists){
            docRef.update({
              "tasks":document.data().tasks.filter(task=>id!==task.id)
          })
            docRef.update({"tasks":firebase.firestore.FieldValue.arrayUnion(newTask)});
          }
        }
        export const setAsActive=async(id,task,uid)=>{
          var docRef = await firebase.firestore().collection("users").doc(uid);
          var document = await docRef.get();
          var newTask = {id:id,task:task.task,isCompleted:false}
          if(document.exists){
            docRef.update({
              "tasks":document.data().tasks.filter(task=>id!==task.id)
          })
            docRef.update({"tasks":firebase.firestore.FieldValue.arrayUnion(newTask)});
          }
        }
        



  export default firebase;