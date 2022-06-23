const createaApp = require("./app.js");

const app = createaApp();

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
