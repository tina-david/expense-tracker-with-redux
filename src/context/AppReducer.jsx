export const Add='ADD-TRANSACTION';
export const Delete='DELETE-TRANSACTION'
export const AddCategory='ADD-CATEGORY';
export const AppReducer=(state,action)=>{

    switch(action.type){
        case Add:
            return {
                ...state,
                transactions:[action.payload,...state.transactions]
            }

        case Delete:
            return{
                ...state,
                transactions: state.transactions.filter(
                    (transation)=>transation.id!==action.payload
                )
            } 
           case  AddCategory:
            return{
                ...state,
                categories:[...state.categories,action.payload]
            }
            
            default:
                return state;
    }
}