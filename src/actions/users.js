export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_RESPONSE = 'SAVE_USER_ANSWER'
export const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION'


export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addResponseUser ({authedUser, qid, answer}) {
  return {
    type: SAVE_USER_RESPONSE,
    authedUser,
    qid,
    answer,
  }
  }

export function saveUserQuestion ({author, id}) {
  return {
    type: SAVE_USER_QUESTION,
    id,
    author,
  }
}

