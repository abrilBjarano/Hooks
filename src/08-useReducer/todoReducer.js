export const todoReducer = ( initialState = [], action ) => {

   switch( action.type ){
      case 'Add Todo':
         return [ ...initialState, action.payload ]
      
      default:
         return initialState;
   }
}