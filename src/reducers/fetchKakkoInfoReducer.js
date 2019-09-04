
export default function reducer (state = {
  data: {},
  fullName: '',
  birthCity: '',
  birthCountry: '',
  birthDate: '',
  currentAge: '',
  currentTeam: '',
  height: '',
  weight: '',
  primaryNumber: '',
  primaryPosition: '',
  shoots: '',
  link: ''
}, action) {
  switch(action.type) {
    case "FETCH_KAKKO_INFO": {
      return {
        ...state,
        fetching: true
      }
    }
    case "FETCH_KAKKO_INFO_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case "FETCH_KAKKO_INFO_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload.data,
        fullName: action.payload.people[0].fullName,
        birthCity: action.payload.people[0].birthCity,
        fullName: action.payload.people[0].fullName,
        birthCity: action.payload.people[0].birthCity,
        birthCountry: action.payload.people[0].birthCountry,
        birthDate: action.payload.people[0].birthDate,
        currentAge: action.payload.people[0].currentAge,
        currentTeam: action.payload.people[0].currentTeam,
        height: action.payload.people[0].height,
        weight: action.payload.people[0].weight,
        primaryNumber: action.payload.people[0].primaryNumber,
        primaryPosition: action.payload.people[0].primaryPosition,
        shoots: action.payload.people[0].shoots,
        link: action.payload.people[0].link
      }
    }
    default: return state;
  }
}
