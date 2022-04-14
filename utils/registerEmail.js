const registerEmail = async (data = {}) => {
  const response = await fetch('api/registrar', {
    method: 'POST',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response
}

export default registerEmail
