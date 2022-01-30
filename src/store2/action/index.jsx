


import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from  "../../config/firebase";
import { signInWithPopup , GoogleAuthProvider , FacebookAuthProvider } from "firebase/auth";





const fcreate = () => {
    
    var email = "mehdiraza2@yahoo.com"
    var password = "kuch bhi"
    
createUserWithEmailAndPassword(auth, email, password)

  .then((userCredential) => {
    
    
    const user = userCredential.user;
    console.log("account bangya" , user)
    
  })
  .catch((error) => {

    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error ==> " , errorCode)
     });


}



const flogin = () => {
    var email = "mehdiraza1@yahoo.com"
    var password = "kuch bhi"

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
       
      const user = userCredential.user;
      console.log("hogya login mubarak" , user);


    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
    });
}



const set_data = (data) => {
            return(dispatch) => {
                dispatch ({ type     : "female" , payload : data })
            }
}

const google_login = () => {

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
  
    
    const user = result.user;
    console.log("hogya google login" , user) 
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    
    
    const email = error.email;
    
    
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("google login nae hua " , errorCode)
  });


}

const facebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    console.log("facebook login bhi hogya ==> "  ,user)

    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;


  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    console.log("nae hoska facebook ==> " , errorCode)

  
  });
}



export {
    set_data,
    fcreate,
    flogin,
    google_login,
    facebook
}