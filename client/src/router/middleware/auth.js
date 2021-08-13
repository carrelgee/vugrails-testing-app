export default function auth({ next, localStorage }) {
  if (!JSON.parse(localStorage.getItem("user"))) {
    return next({
      name: "Login",
    });
  }
  return next();
}
