import axios from 'axios';

export function fetchKakkoInfo() {
  return function(dispatch) {
    dispatch({type: fetchKakkoInfo})

    axios.get('https://statsapi.web.nhl.com/api/v1/people/8481554')
      .then((response) => {
        dispatch({
          type: "FETCH_KAKKO_INFO_FULFILLED",
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_KAKKO_STATS_REJECTED",
          payload: err
        })
      })
  }
}
