const initialState = [{
   id: 1,
   todo: 'Aceptarle el anillo de promesa a L',
   done: true
}];

const todoReducer = ( state = initialState, action = {} ) => {
   
   if ( action.type === '[TODO] add todo' ) {
      return [ ...state, action.payload ];
   }

   return state;
};

let todos = todoReducer();

const newTodo = {
   id: 2,
   todo: 'Ir al concierto de Julieta Venegas el 31 de oct del 2024 con mi esposa L',
   done: true
}

const addTodoAction = {
   type: '[TODO] add todo',
   payload: newTodo
}

todos = todoReducer( todos, addTodoAction );

console.log( todos );