export const todoReducer = ( initialState = [], action ) => {

   switch( action.type ){
      case 'Add Todo':
         return [ ...initialState, action.payload ];
      
      case 'Remove Todo':
         return initialState.filter( todo => todo.id !== action.payload );
      
      default:
         return initialState;
   }
}