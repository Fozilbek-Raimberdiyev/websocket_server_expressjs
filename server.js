const { Server } = require("ws");
const app = require("express")();
const wss = new Server({ port: 5001 });

wss.on("connection", (ws) => {
  ws.on("error", (err) => {
    console.log(err);
  });
  ws.on("message", (message) => {
    console.log(message.toString(), " message received");
  });
});

app.get("/", (req, res) => {
  return res.send({ message: "Xush kelibsiz" });
});
app.listen(5000, () => {
  console.log("listening on *:5000");
});
