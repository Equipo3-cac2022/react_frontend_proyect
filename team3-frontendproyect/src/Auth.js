import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from './Firebase.js'
  
export const register = async({email, password})=>{
  console.log('register e,p', email, password)
    const res = await firebase.auth()
      .createUserWithEmailAndPassword(email, password);
      console.log('register res', res)
    return res.user;
}

export const login = async({email, password})=>{
  console.log('signin e,p', email, password)
    const res = await firebase.auth()
      .signInWithEmailAndPassword(email, password);
      console.log('login res', res)
    return res.user;
}