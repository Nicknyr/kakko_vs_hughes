import axios from 'axios';

export function fetchHughesInfo() {
  return function(dispatch) {
    dispatch({type: fetchHughesInfo})

    axios.get('https://statsapi.web.nhl.com/api/v1/people/8481559')
      .then((response) => {
        dispatch({
          type: "FETCH_HUGHES_INFO_FULFILLED",
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_HUGHES_STATS_REJECTED",
          payload: err
        })
      })
  }
}
