// ===================================
// 1. Contador de Tempo Juntos
// ===================================

function updateCounter() {
    const startDateElement = document.getElementById('start-date');
    const counterElement = document.getElementById('counter');
    if (!startDateElement || !counterElement) return;

    const startDateString = startDateElement.textContent;
    const startDate = new Date(startDateString);
    const now = new Date();
    const diff = now.getTime() - startDate.getTime();

    // ... (Cálculo de dias, horas, minutos e segundos permanece o mesmo) ...
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const totalDays = days;
    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;
    
    const counterText = 
        `${totalDays} dias, ${remainingHours} horas, ${remainingMinutes} minutos e ${remainingSeconds} segundos.`;

    counterElement.textContent = counterText;
    
    // DETALHE DINÂMICO AQUI: Faz o contador piscar entre o cinza escuro e a cor de destaque
    if (remainingSeconds % 2 === 0) {
        counterElement.style.color = '#d4a5a5'; // Rosa Antigo/Nude (Destaque)
    } else {
        counterElement.style.color = '#333333'; // Cinza Escuro (Texto Principal)
    }
}

// Inicia o contador e o atualiza a cada segundo (1000ms)
updateCounter();
setInterval(updateCounter, 1000);


// ===================================
// 2. Mensagens Futuras (Toggle)
// ===================================

function toggleMessage(card) {
    card.classList.toggle('open');
}