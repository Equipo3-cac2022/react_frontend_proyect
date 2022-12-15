import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from './Firebase.js'
  
export const register = async({email, password})=>{
  console.log('e,p', email, password)
    const resp = await firebase.auth()
      .createUserWithEmailAndPassword(email, password);
    return resp.user;
}
  
export const login = async({email, password})=>{
  console.log('e,p', email, password)
    const res = await firebase.auth()
      .signInWithEmailAndPassword(email, password);
    return res.user;
}