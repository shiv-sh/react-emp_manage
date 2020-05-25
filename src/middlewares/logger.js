/**
* Logger middleware - logs the ACTION and NEW STATE as a result of that action
*/
const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('Action: ', action)
    const returnValue = next(action)
    console.log('New state: ', store.getState())
    console.groupEnd()
    return returnValue
  }
 

//   function logger(store, action) {
//     console.log('dispatching', action)
//     store.dispatch(action)
//     console.log('next state', store.getState())
//   }
  

  export default logger;