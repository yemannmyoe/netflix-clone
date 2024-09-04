

import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
        getAuth,
        signInWithEmailAndPassword, 
        signOut} from "firebase/auth";
import { addDoc, 
        collection,
        getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyADqp_frCUjsKH-ducsjXyHUr6SHdX-Fp0",
  authDomain: "netflix-clone-c34e4.firebaseapp.com",
  projectId: "netflix-clone-c34e4",
  storageBucket: "netflix-clone-c34e4.appspot.com",
  messagingSenderId: "125132185283",
  appId: "1:125132185283:web:29075248efd37a93b04c76"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
          const res =  await createUserWithEmailAndPassword(auth,email,password);
          const user = res.user;
          await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
          })
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const login = async (email,password)=>{
        try {
           await signInWithEmailAndPassword(auth,email,password);
        } catch (error) {
            console.log(error);
            alert(error); 
        }
}

const logout = ()=>{
    signOut(auth);
}

export {auth,db,login,signup,logout}