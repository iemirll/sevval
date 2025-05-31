document.getElementById('learnButton').addEventListener('click', startAnimation);

async function startAnimation() {
    document.getElementById('learnButton').style.display = 'none';
    const terminal = document.getElementById('terminal');
    terminal.classList.remove('hidden');
    
    const calculation = document.getElementById('calculation');
    const result = document.getElementById('result');
    
    // CMD başlangıç efekti
    await typeText(calculation, "C:\\WINDOWS\\system32\\love.exe başlatılıyor...", 30);
    await sleep(500);
    await typeText(calculation, "\nSevgi parametreleri yükleniyor...", 30);
    await sleep(300);

    // Hesaplama animasyonu
    for(let i = 0; i <= 100; i+=2) {
        calculation.textContent = `Sevgi hesaplanıyor... [${i}%] ${'█'.repeat(i/5)}${'.'.repeat(20-i/5)}`;
        await sleep(50);
    }
    
    await sleep(300);
    calculation.textContent = "Hesaplama tamamlandı!\n";
    await sleep(500);
    
    // "Çooooookkkkk" yazısı
    await typeText(calculation, "\nSonuç analiz ediliyor...", 30);
    await sleep(500);
    await typeText(calculation, "\nSevgi miktarı: ", 50);
    await sleep(200);
    
    // Çok yazısını hızlı ve uzun şekilde yaz
    const cokText = "Ç";
    const ooText = "o".repeat(20);
    const kkText = "k".repeat(15);
    await typeText(calculation, cokText, 100);
    await typeText(calculation, ooText, 20);
    await typeText(calculation, kkText, 20);
    await sleep(500);
    
    // Final yazısı
    result.style.opacity = '0';
    result.textContent = '';
    const finalText = "S E V İ Y O R U M";
    for(let char of finalText) {
        result.textContent += char;
        await sleep(100);
    }
    result.style.opacity = '1';
    result.style.transition = 'opacity 0.5s';
    
    // Kalp gösterimi
    await sleep(300);
    document.getElementById('heart').classList.remove('hidden');
}

async function typeText(element, text, speed) {
    for(let char of text) {
        element.textContent += char;
        await sleep(speed);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} 