export const SET_AUTHED_ID = 'SET_AUTHED_ID'
export const UNSET_AUTHED_ID = 'UNSET_AUTHED_ID'


export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_ID,
    id,
  }
}

export function unSetAuthedUser (id) {
  return {
    type: UNSET_AUTHED_ID,
    id,
  }
}