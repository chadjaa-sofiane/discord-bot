import express from "express";

const app = express();
const port = Bun.env.PORT || 2000;

// middelwares
app.use(express);

app.get("/", (_, res) => {
  res.status(200).json({
    something: "something",
  });
});

app.listen(port, () => {
  console.log(`express is running on port ${port}`);
});
