const initialState = {
    allprice: 0
}

const cartPricer = (state = initialState, action) => {
    switch(action.type){
        case "PRODUCTS_PRICE":
            // console.log(action.price, action.count, action.price * action.count, state.allprice)
            // localStorage.setItem("allprice", action.price)
            return {
                allprice: action.price * action.count
            }
        default:
            return state
    }
}

export { cartPricer }