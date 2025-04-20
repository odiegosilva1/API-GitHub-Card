function fetchGitHubUser(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        console.error(error);
      }
      return response.json();
    })
    .then((user) => {
      console.log("user, user");
      createUserCard(user);
    })
    .catch((error) => {
      console.error(error);
      const app = document.getElementById("app");
      app.innerHTML = `< p style='color:red>Erro: ${error.message}</p>`;
    });
}
