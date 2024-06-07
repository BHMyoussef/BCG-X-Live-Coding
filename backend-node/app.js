const express = require("express");
const cors = require("cors");
require("dotenv").config();
app = express();

app.use(
    cors({
        origin: "http://localhost:3000"
    })
);

app.use("/", require("./routes/hello"));
app.use("/users", require("./routes/users").route);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Application is running on: ${PORT}`);
});
