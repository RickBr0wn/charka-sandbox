export default {
  /**
   * Pseudo actions
   * Each of these methods returns a Promise. ie then-able.
   */
  /**
   * @param user: object: { username: String, password: String, role: String }
   */
  logIn: async function (user) {
    return await fetch('/auth/login', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        Content_Type: 'application/json',
      },
    })
      .then((res) => res.JSON())
      .then((data) => data)
      .catch((err) => {
        throw new Error('There has been an error whilst logging on.', err)
      })
  },
  /**
   * @param user: object: { username: String, password: String, role: String }
   */
  signIn: async function (user) {
    return await fetch('/auth/register', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        Content_Type: 'application/json',
      },
    })
      .then((res) => res.JSON())
      .then((data) => data)
      .catch((error) => console.log(error))
  },
  logOut: async function () {
    return await fetch('/auth/logout')
      .then((res) => res.JSON())
      .then((data) => data)
      .catch((error) => console.log(error))
  },
  isAuthenticated: async function () {
    const res = await fetch(
      'https://rickbrown-auth-server.herokuapp.com/auth/authenticated'
    )
    return res.status !== 401
      ? res.JSON().then((data) => data)
      : {
          isAuthenticated: false,
          user: { username: '', password: '', role: '' },
        }
  },
}
