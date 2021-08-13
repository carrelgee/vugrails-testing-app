const userModelStorage = (data) => ({
  name: data.username,
  token: data.access_token,
  expires_in: data.expires_in
})
export default userModelStorage