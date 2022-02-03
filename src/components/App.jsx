import { connect } from "react-redux";
// import { set_data } from "./store/action";
import { chek, facebook, set_data } from "../store2/action/index";
import { writeUserData, fcreate, flogin, google_login, readfirebase } from "../store2/action/index";
import { Link } from "react-router-dom";
import "../App.css";

import { useNavigate } from "react-router-dom";





const App = (props) => {




  let navigate = useNavigate();
  
  return (

    <div className="mainpage" >

      <h1>
        Home
      </h1>

      <hr />

      <h4>
        Log in using
      </h4>
      {props.name}




      {props.age}

      {/* <button onClick={() => fcreate()} >Sign up with email</button>
      <button onClick={() => flogin()} >Login with email</button>  */}

      {/* <button onClick={() => props.set_data(ku)} >Print</button> */}

      <button onClick={() => props.google_login(navigate)} >Google Login</button>
      <button onClick={() => facebook(navigate)} >Facebook Login</button>




      <button onClick={() => writeUserData("jsdknc", "BHUGU", "uhbsdbc", "hsakbckh")} >Write to firebase</button>


      <button onClick={() => props.readfirebase()}  >Read Firebase</button>


    </div>

  )


}

const mapStateToProps = (state) => ({
  users: state.users




})

const mapDispatchToProps = (dispatch) => ({
  set_data: (data) => dispatch(set_data(data)),
  google_login: (navigate) => dispatch(google_login(navigate)),
  readfirebase : () => dispatch(readfirebase())

})

export default connect(mapStateToProps, mapDispatchToProps)(App)