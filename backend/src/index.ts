import app from "./app";
import { connect } from "./database";

const port = 3030;

connect();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
