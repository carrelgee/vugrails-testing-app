export default function guest({ next, localStorage }) {
  if (JSON.parse(localStorage.getItem("user"))) {
    return next({
      name: "Home",
    });
  }
  return next();
}
