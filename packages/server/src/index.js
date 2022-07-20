import app from "./app";
const port = 3000;

app.listen(port, () => {
  logger.info(`Server on port: ${port}`);
});
