export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

function generateUID () {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
}

export function formatQuestion ({ authedUser, optionOne, optionTwo }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author : authedUser,
    optionOne: {
      votes: [],
      text: optionOne,
    },
    optionTwo: {
      votes: [],
      text: optionTwo,
    }
  }
}
