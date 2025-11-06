const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chatMessages");

// Respostas automáticas criativas 🍫
const respostas = [
  "Temos trufas recheadas com caramelo, maracujá e avelã 😋",
  "Promoção do dia: 3 caixas por R$ 60!",
  "Cada bombom é feito com cacau 70% puro 🍫",
  "Quer que eu monte um kit especial pra presente?",
  "Entrega grátis acima de R$ 80 🚚✨"
];

// Função para adicionar mensagens
function addMessage(text, type) {
  const msg = document.createElement("div");
  msg.classList.add("message", type);
  msg.textContent = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight; // rolar para o final
}

// Quando clicar em Enviar
sendBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  addMessage(text, "sent");
  input.value = "";

  // Resposta automática divertida
  setTimeout(() => {
    const resposta =
      respostas[Math.floor(Math.random() * respostas.length)];
    addMessage(resposta, "received");
  }, 800);
});

// Enviar com Enter
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});
