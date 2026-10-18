const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "online",
    projeto: "Minecraft AI Life",
    mensagem: "Servidor da IA funcionando!"
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/chat", (req, res) => {
  const mensagem = req.body.mensagem;

  if (!mensagem) {
    return res.status(400).json({
      erro: "Envie uma mensagem."
    });
  }

  res.json({
    resposta: Recebi sua mensagem: ${mensagem},
    status: "conectado"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(Servidor iniciado na porta ${PORT});
});
