const initState = {
 num: 1,
}
export default (state = initState, action) => {
    switch(action.type) {
          
        case 'ADD':
            return {
                num: action.payload
            }
    
       
        default: return state;
      }
  }