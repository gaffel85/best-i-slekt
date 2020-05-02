function logViewed(http, user, assingmentId) {
  log(http, user, assingmentId, "viewed");
}

function logOpened(http, user, assingmentId) {
  log(http, user, assingmentId, "opened");
}

function log(http, user, assingmentId, action) {
  http
    .get("https://rocklosa.se/ola/best-i-slekt-log.php", {
      params: {
        name: user,
        state: action,
        ass: assingmentId,
      },
    })
    .then((result) => {
      console.log(result);
    });
}

export default {
  logViewed,
  logOpened,
};
