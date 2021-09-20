export default async function createUser(firstName, lastName, email, password){
  console.log("Calling the API with email: " + email + " and password " + password);
  const apiResult = await fetch("http://localhost:5000/createuser",{
    method: "POST",
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "password": password
    })
  })
  const apiResultJSON = await apiResult.json();
  return apiResultJSON;
}