function authHeaderMethodGet() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    return { 
      headers: {
        'Authorization': `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      }
    }
  }
}

function authHeaderMethodPost(formData) {
  if (formData && formData.username) {
    return {
      method: "POST",
      body: JSON.stringify(formData),
    }
  }
}

export { authHeaderMethodGet, authHeaderMethodPost }
