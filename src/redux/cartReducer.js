const initialState = {
    selects: JSON.parse(localStorage.getItem("selects")) || []
}
const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case "SELECTED_PRODUCT":
            localStorage.setItem("selects", JSON.stringify([ ...state.selects, action.product ]))
            return {
                selects: [ ...state.selects, action.product ]
            }
        case "CANCELED_PRODUCT":
            localStorage.setItem("selects", JSON.stringify(state.selects.filter(product => product.id !== action.id)))
            return {
                selects: state.selects.filter(product => product.id !== action.id)
            }
        case "CANCEL_ALL":
            localStorage.setItem("selects", JSON.stringify([]))
            return {
                selects: []
            }
        default:
            return state
    }
}

export { cartReducer }