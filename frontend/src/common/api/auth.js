import session from "./session";

export default {
  login(email, password) {
    return session.post("/rest-auth/login/", { email, password });
  },
  logout() {
    return session.post("/rest-auth/logout/", {});
  }
};
