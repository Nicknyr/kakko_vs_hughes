import axios from 'axios';

export function fetchHughesStats() {
  return function(dispatch) {
    dispatch({type: fetchHughesStats})

    // Currently using Mika's stats from last year because Kakko stats aren't available yet
    axios.get('https://statsapi.web.nhl.com/api/v1/people/8481559/stats?stats=statsSingleSeason&season=20192020')
      .then((response) => {
        dispatch({
          type: "FETCH_HUGHES_STATS_FULFILLED",
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

// Hughes /api/v1/people/8481559

//https://statsapi.web.nhl.com/api/v1/people/8481559/stats?stats=statsSingleSeason&season=20192020

// Hughes info  https://statsapi.web.nhl.com/api/v1/people/8481559
