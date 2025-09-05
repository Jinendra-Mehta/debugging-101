// 03-callstack-watch.js
function loginUser(email, password) {
  const user = getUser(email);
  return authenticate(user, password);
}

function getUser(email) {
  return { email, passwordHash: "1234" };
}

function authenticate(user, password) {
  // Place breakpoint here
  if (password === user.passwordHash) {
    throw new Error("Invalid password");
  }
  return "Login Successful";
}

loginUser("alice@example.com", "wrongpass");
