/* eslint-disable function-paren-newline */
import path from "path";
import {getPhoneNumbers} from "../controllers/phoneNumbersController";

const routes = app => {
  app.get("/api/", (req, res) =>
    res.send({ title: "Welcome to Random Phone Numbers Generator" })
  );

  app.get("/api/generate-numbers", getPhoneNumbers);

  app.all("/api/*", (req, res) =>
    res.status(404).send({
      status: "Error",
      message: "Resource not found"
    })
  );

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(process.cwd(), "dist", "index.html"));
  });
};

export default routes;
