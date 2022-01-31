
import { useNavigate } from "react-router-dom"
import { connect } from "react-redux";
import "../App.css"

const Chat = (props) => {
    let navigate = useNavigate();
    console.log(props.img)

    return (
        
        <div>
            
            <div className = "line">
                <div className = "rounddiv">
                <img src={props.img} alt="nae img arhi bhai" />

                </div>

                <h1>
                    Chat Screen    
                </h1>

                <div className = "rounddiv">
                        {/* <img src={props.img} alt="nae img arhi bhai" /> */}
                        
                </div>
            </div >
            <hr />
            <h4>
                Welcome {props.name}
            </h4>
            

            <button onClick={() => { navigate("/") }} >Log out</button> <br />
            
        
        </div>

    )
}

const mapStateToProps = (state) => ({
    name: state.current_user.name,
    img: state.current_user.photo
})
export default connect(mapStateToProps, null)(Chat)