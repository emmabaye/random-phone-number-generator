import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpack from "webpack";
import bodyParser from "body-parser";
import config from "../webpack.config";
import routes from "./routes/index";

dotenv.config();

const app = express();
export const port = process.env.PORT || 3000;
app.use(cors({ credentials: true, origin: true }));

if (process.env.NODE_ENV !== "production") {
  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: false,
    publicPath: config.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use("/download", express.static(`${process.cwd()}/server/storage`));
app.use("/", express.static(`${process.cwd()}/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.listen(port, () => {
  console.log("Server listening on port ", port);
});

export default app;
