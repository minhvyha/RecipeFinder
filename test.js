async function fetchData(comment, access_token) {
  const res = await fetch("https://hate-hound-api.vercel.app/api/predict", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ comment , access_token}),
  })
  const data = await res.json()
  console.log(data)
}

// Call the function with the appropriate arguments
fetchData("your_comment", "clx4c3dg70001y4cv6qfk4lxw")