

export default function reducer (state = {
  data: {}
}, action) {
  switch(action.type) {
    case "FETCH_KAKKO_STATS": {
      return {
        ...state,
        fetching: true
      }
    }
    case "FETCH_KAKKO_STATS_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case "FETCH_KAKKO_STATS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload.data
      }
    }
    default: return state;
  }
}
