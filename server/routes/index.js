import path from "path";
import controller from "../controllers/phoneNumbersController";

/**
 * Router function
 *
 * @param {object} app An instance of express
 * @return {undefined}
 */
const routes = app => {
  /**
   * API index route
   *
   * @param {string} string, The route of the index.
   * @returns {object} res.
   */
  app
    .route("/api/v1")
    .get((req, res) => res.send({ title: "Welcome to Events Manager" }));

  /*
  app
    .route("/api/v1/users/:userId")
    .get(UserController.getUser)
    .put(isAuthenticated, UserController.updateUser);
*/

  app.all("/api/v1/*", (req, res) =>
    res.status(404).send({
      status: "Error",
      message: "Resource not found"
    })
  );

  /**
   * GET method, get routes for
   * the client SPA
   *
   * @param {string} string
   * @returns {object} res.
   */
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(process.cwd(), "dist", "index.html"));
  });
};

export default routes;
