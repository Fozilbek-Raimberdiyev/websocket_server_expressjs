const { Server } = require("ws");
const app = require("express")();
const wss = new Server({ port: 8080 });

wss.on("connection", (ws) => {
  ws.on("error", (err) => {
    console.log(err);
  });
  ws.on("message", (message) => {
    console.log(message.toString(), " message received");
  });
});

app.listen(5000, () => {
  console.log("listening on *:5000");
});
