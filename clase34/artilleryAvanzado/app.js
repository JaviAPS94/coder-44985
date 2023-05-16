import express from "express";
import mongoose from "mongoose";
import faker from "faker";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.get("/faker", async (req, res) => {
  const user = {
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };

  res.send(user);
});

app.use("/api", userRoutes);

await mongoose.connect("mongodb+srv://alexpinaida44985:5feenu1l6DZOHlXP@codercluster.g7zjzm1.mongodb.net/?retryWrites=true&w=majority");
console.log('DB CONNECTED')

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

//artillery run config.yml --output testPerformance.json
//artillery report testPerformance.json -o testResults.html