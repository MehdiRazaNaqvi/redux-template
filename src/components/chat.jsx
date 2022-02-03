
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux";
import "../App.css"
import { readfirebase } from "../store2/action/index"




const Chat = (props) => {
    let navigate = useNavigate();





    return (


        <div>

            <div className="line">
                <div className="rounddiv">
                    <img src={props.img} alt="nae img arhi" />

                </div>

                <h1>
                    Chat Screen
                </h1>

                <div className="rounddiv">
                    {/* <img src={} alt="nae img arhi bhai" /> */}

                </div>
            </div >
            <hr />
            <h4>
                Welcome {props.name}
            </h4>

            <button onClick={() => { props.readfirebase() }} >Read Firebase Data</button>

            <button onClick={() => { navigate("/") }} >Log out</button>



            <h3>Chat with our users :</h3>
            <div className="f" >
                <img src={props.users[0].profile_picture} alt="" />
                <h6>{props.users[0].username}</h6>
                <img src={props.users[1].profile_picture} alt="" />
                <h6>{props.users[1].username}</h6>
            </div>


        </div>

    )
}


const mapStateToProps = (state) => ({
    name: state.current_user.name,
    img: state.current_user.photo,
    users: state.users

})

const mapDispatchToProps = (dispatch) => ({
    readfirebase: () => dispatch(readfirebase())
})



export default connect(mapStateToProps, mapDispatchToProps)(Chat)