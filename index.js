import { app } from "./configs/app.js";
import { userRouter } from "./routes/userRoutes.js";

app.get("/", async (req, res) => {
  res.send("Hello");
});

app.use("/user", userRouter);

app.listen(8000, () => {
  console.log("Server is running on port 3000");
});
