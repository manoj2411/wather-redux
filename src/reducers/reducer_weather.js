export default function(state = [], action) {
  console.log('Action received: ', action);
  switch(action.type) {
    case "FetchWeather":
      return [...state, action.payload.data];
    default:
      return state;
  }
}
