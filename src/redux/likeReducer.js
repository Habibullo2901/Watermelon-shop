const initialState = {
    likes: JSON.parse(localStorage.getItem("likedproducts")) || []
}

const likeReducer = (state = initialState, action) => {
    // console.log(action)
    switch(action.type){
        case "LIKE_PRODUCT":
            localStorage.setItem("likedproducts", JSON.stringify([ ...state.likes, action.product ]))
            return {
                likes: [ ...state.likes, action.product ]
            }
        case "DISLIKE_PRODUCT":
            localStorage.setItem("likedproducts", JSON.stringify(state.likes.filter(product => product.id !== action.id)))
            return {
                likes: state.likes.filter(product => product.id !== action.id)
            }
        case "CLEAR_ALL":
            localStorage.setItem("likedproducts", JSON.stringify([]))
            return {
                likes: []
            }
        default:
            return state
    }
}

export {likeReducer}