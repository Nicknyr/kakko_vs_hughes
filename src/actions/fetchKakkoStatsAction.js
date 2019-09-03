import axios from 'axios';

export function fetchKakkoStats() {
  return function(dispatch) {
    dispatch({type: fetchKakkoStats})

    // Currently using Mika's stats from last year because Kakko stats aren't available yet
    axios.get('https://statsapi.web.nhl.com/api/v1/people/8476459/stats?stats=statsSingleSeason&season=20182019')
      .then((response) => {
        dispatch({
          type: "FETCH_KAKKO_STATS_FULFILLED",
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


// Mika example: https://statsapi.web.nhl.com/api/v1/people/8476459/stats?stats=statsSingleSeason&season=20182019

// Kakko info https://statsapi.web.nhl.com/api/v1/people/8481554

// Kakko stats?  https://statsapi.web.nhl.com/api/v1/people/8481554/stats?stats=statsSingleSeason&season=20182019
