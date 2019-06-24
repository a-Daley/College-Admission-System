import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const SET_STAGE = 'SET_STAGE'
const GOT_TEXT = 'GOT_TEXT'

/**
 * INITIAL STATE
 */
const defaultStage = {
  currentNum: 0,
  text: ''
}

export const gotStageOneText = text => ({type: GOT_TEXT, text})

export const getStageOneText = college => async dispatch => {
  try {
    const res = await axios.get(`/api/stage-one?college=${college}`)
    dispatch(gotStageOneText(res.data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = defaultStage, action) {
  switch (action.type) {
    case GOT_TEXT:
      return {
        ...state,
        text: action.text
      }
    case SET_STAGE:
      return {
        ...state,
        currentNum: action.currentNum
      }
    default:
      return state
  }
}
