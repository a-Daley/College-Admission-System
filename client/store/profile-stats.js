import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_STATS = 'GET_STATS'
const GOT_DESCRIPTION = 'GOT_DESCRIPTION'

/**
 * INITIAL STATE
 */
const defaultProfile = {
  age: 0,
  gender: '',
  incomeLevel: '',
  collegeTier: 0,
  race: '',
  success: 100,
  description: ''
}

/**
 * ACTION CREATORS
 */
export const getStats = stats => ({type: GET_STATS, stats})
export const gotDescription = description => ({
  type: GOT_DESCRIPTION,
  description
})

/**
 * THUNK CREATORS
 */
export const getDescription = college => async dispatch => {
  try {
    const res = await axios.get(`/api/stage-one?=${college}`)
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultProfile, action) {
  switch (action.type) {
    case GET_STATS:
      return {
        ...state,
        gender: action.stats.gender,
        age: action.stats.age,
        incomeLevel: action.stats.incomeLevel,
        collegeTier: action.stats.collegeTier,
        race: action.stats.race,
        success: state.success
      }
    default:
      return state
  }
}
