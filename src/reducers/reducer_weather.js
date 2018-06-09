export default function(state = [], action) {
  switch(action.type) {
    case "FetchWeather":
      if (action.payload.data) {
        return [...state, action.payload.data];
      }
  }
  return state;
}
