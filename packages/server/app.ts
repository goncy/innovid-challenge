import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/status/:id", async (req: express.Request, res: express.Response) =>
  res.json({id: req.params.id, load: Math.floor(Math.random() * 100)}),
);

app.listen(8000, () => console.log(`Server running on port ${8000}`));
