
const initial = {
    users: [{ name: "dev 1", age: 20 },
    { name: "dev 2", age: 20 }]

}

export default (state = initial, action) => {

    console.log(state.users)

    console.log(action)

    switch (action.type) {
        case ("female"):

            return {
                users: [...state.users,
                action.data]
                        
            }
            
            
           
        default:
            console.log(state.users)
            return state;
    }

    // return ( [...state , {name : "cheking" , age : 2918}] ) ;
    // return state;

}