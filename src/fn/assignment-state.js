function allowedToView(cookies, assingmentId, timelimit) {
  const prevData = cookies.get(assingmentId);
  const now = Date.now();

  if (prevData) {
    console.log("Saved data: ", prevData);
    const timeLeft = prevData.timestamp + timelimit - now;
    if (timeLeft < 0) {
      console.log("Times up");
      return false;
    } else {
      console.log("Still time left: " + timeLeft / 1000);
      return true;
    }
  } else {
    return true;
  }
}

function markAsStarted(cookies, assingmentId) {
  const prevData = cookies.get(assingmentId);

  if (prevData) {
    console.log("Already marked", prevData);
  } else {
    const data = { timestamp: Date.now() };
    console.log("Sets timestamp", data);
    cookies.set(assingmentId, JSON.stringify(data));
  }
}

function resetAssignment(cookies, assingmentId) {
  console.log("Resetting: " + assingmentId);
  cookies.remove(assingmentId);
}

export default {
  allowedToView,
  markAsStarted,
  resetAssignment,
};
