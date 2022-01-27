import { connect } from "react-redux";
// import { set_data } from "./store/action";
import  {set_data}  from "./store2/action/index";


const App = (props) => {
  
// console.log(props.users)
const ku = {name : "kumail" , age : 23}
return(
  
  <div>
    
  <h1>
    Home
  </h1>

      {props.name}

      

      
        {props.age}


      <button onClick={() => props.set_data(ku)} >Print</button>
      
  

  </div>
  
)


  }

const mapStateToProps = (state) =>( {
  users : state.users,
  name : state.users[0].name,
  age : state.users[1].age,
  

})

const mapDispatchToProps = (dispatch) => ({
    set_data : (data) => dispatch(set_data(data))

})

export default connect(mapStateToProps , mapDispatchToProps) (App)