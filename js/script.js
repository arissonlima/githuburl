const acessar = document.getElementById("acessar");

function redirect(user, repository) {
  return window.location.href = `https://${user}.github.io/${repository}`;
}

function loadUrl(e) {
  e.preventDefault();
  const inptUrl = document.getElementById("url").value;
  const receivedUrl = inptUrl;
  const partsUrl = receivedUrl.split("/");

  const user = partsUrl[3];
  const repository = partsUrl[4];

  redirect(user, repository);
}

acessar.addEventListener("submit", loadUrl);