
const initial = {
    users: [],
    current_user: {}

}

export default (state = initial, action) => {


    console.log("pehle action me yeh tha", action)
    console.log("pehle state me yeh tha", state)

    switch (action.type) {
        case ("setuser"):

            const initial2 = {
                users: [...state.users],
                current_user: action.payload


            }
            console.log("change hone k baad ==> ", initial2)
            return initial2;
        default:

            return state;

    }

}
