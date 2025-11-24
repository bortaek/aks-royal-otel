// Navigasyon çubuğunun kaydırınca renk değiştirmesi (Opsiyonel Estetik)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#ffffff'; // Tam beyaz
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)'; // Hafif şeffaf
        navbar.style.boxShadow = 'none';
    }
});

// Scroll Animasyonları (Reveal on Scroll)
function reveal() {
    var reveals = document.querySelectorAll(".reveal-left, .reveal-right, .reveal-bottom");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // Eleman ekrana 150px girince başlasın

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Sayfa ilk yüklendiğinde de bir kez kontrol et (Hero altı hemen görünüyorsa)
reveal();