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
        case "REMOVE_FROM_BASKET":
            // return {
            //     ...state,
            //     basket: [...state.basket.filter(item => item.id !== action.id)]
            // }
            const index = state.basket.findIndex((basketItem) => 
            basketItem.item === action.id
        )
        let newBasket = [...state.basket]

        if (index >= 0) {
            newBasket.splice(index, 1)
        } else {
            console.warn(
                `Can't remove product (id: ${action.id} as it's not in basket!)`
            )

        }
            return {
                ...state, 
                basket: newBasket
            }


        
        default: 
            return state;
    }
}

export default reducer;