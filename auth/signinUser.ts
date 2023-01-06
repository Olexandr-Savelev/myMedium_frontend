// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useRouter } from "next/router";
// import { auth } from "../pages/_app";
// import { IAuthUser } from "./userInterface";

// const onSignIn = ({ email, password }: IAuthUser) => {
//   const router = useRouter()
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       console.log(user);

//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//     });
// };
// export default onSignIn;
