import { GoogleAuthProvider, getAuth } from 'firebase/auth';
const { app } = require("./firebase.config");

const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export default auth;