// To test the reducer function, you'll need to extract it into a separate file and import it into your test file. 
// Or there will be a TypeError.
export default function reducer(state, action) {
  switch (action.type) {
    case "initialTimes":
      return { time: state.time };
    case "updateTimes":
      return { time: state.time };
    default:
      throw new Error();
  }
}
