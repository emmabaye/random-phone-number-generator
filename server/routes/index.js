
import { getPhoneNumbers } from "../controllers/phoneNumbersController";

const routes = app => {
  app.get("/api/", (req, res) =>
    res.status(200).send({ title: "Welcome to Random Phone Numbers Generator" }));

  app.get("/api/generate-numbers", getPhoneNumbers);

  app.all("/api/*", (req, res) =>
    res.status(404).send({
      status: "Error",
      message: "Resource not found"
    }));

  app.get("*", (req, res) =>
    res.status(404).send({
      status: "Error",
      message: "Sorry, resource not found"
    }));
};

export default routes;
