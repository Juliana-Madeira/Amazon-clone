export const initialState = {
    basket: [],     //empty array - initial
}

//Selector
export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {     //state como esta a aplicaçao e action, o que vou tentar fazer, tirar da basket, colocar na basket
    switch (action.type){
        case "ADD_TO_BASKET":
            return {
                ...state, 
                basket: [...state.basket, action.item]
            };
        
        default: 
            return state;
    }
}

export default reducer;