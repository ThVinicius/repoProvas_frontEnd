export default function logout(global, navigate) {
  global.token = null

  localStorage.removeItem('token')

  navigate('/')
}
