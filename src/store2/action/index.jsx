

const set_data = (data) => {
            return(dispatch) => {
                dispatch ({ type     : "female" , data : data })
            }
}



export {
    set_data
}