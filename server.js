const { Server } = require("ws");
const app = require("express")();
const wss = new Server({ port: process.env.PORT || 5002 });

wss.on("connection", (ws) => {
  ws.on("error", (err) => {
    console.log(err);
  });
  ws.on("message", (message) => {
    console.log(message.toString(), " message received");
  });
});

app.get("/", (req, res) => {
  return res.send({
    message:
      "Xush kelibsiz! Websocket " + process.env.PORT + " portda ishga tushdi",
  });
});
app.listen(5000, () => {
  console.log("listening on *:5000");
});
