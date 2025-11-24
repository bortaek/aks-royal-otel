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
// --- SWIPER KAYDIRICI GÜNCEL AYARLAR ---
var swiper = new Swiper(".mySwiper", {
    // Döngü (loop) kapalı olsun ki resimler birbirine girmesin
    loop: false, 
    
    // Resimlerin ortalanması
    centeredSlides: true,
    
    // Otomatik Oynatma (İstersen kapatabilirsin)
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    // Efekt: Fade yerine "slide" olsun, resimler kayarak geçsin (Daha stabil)
    effect: 'slide',
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    // Resim yüklenince boyutu tekrar hesapla (Hata önleyici)
    autoHeight: false, 
    updateOnImagesReady: true
});
// --- FANCYBOX (LIGHTBOX) BAŞLATMA ---
// Galeriyi çalıştır
try {
    Fancybox.bind("[data-fancybox]", {
        // Galeri açıldığında sonsuz döngü olsun
        loop: true,
        // Zoom efektiyle açılsın
        animationEffect: "zoom",
        // Resimlerin altındaki yazıları göster
        caption: function (fancybox, slide) {
            return slide.caption || "";
        },
    });
} catch (e) {
    console.log("Fancybox yüklenmedi veya gerekmedi.");
}

// --- MOBİL MENÜ ÇALIŞTIRMA (BASİT VE GARANTİLİ) ---
(function() {
    'use strict';
    
    function initMobileMenu() {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        if (!menuBtn || !navLinks) {
            console.warn('Mobil menü elementleri bulunamadı');
            return;
        }
        
        const menuIcon = menuBtn.querySelector('i');
        
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Butona tıklandı!');
            
            // Menüyü aç/kapat
            navLinks.classList.toggle('mobile-menu-open');
            
            // İkonu değiştir
            if (navLinks.classList.contains('mobile-menu-open')) {
                if (menuIcon) {
                    menuIcon.classList.remove('fa-bars');
                    menuIcon.classList.add('fa-times');
                }
                console.log('Menü AÇILDI');
            } else {
                if (menuIcon) {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                }
                console.log('Menü KAPANDI');
            }
        });
        
        console.log('Mobil menü hazır!');
    }
    
    // Sayfa yüklendiğinde çalıştır
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileMenu);
    } else {
        initMobileMenu();
    }
})();