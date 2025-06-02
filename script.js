document.addEventListener('DOMContentLoaded', function() {
    // Animasyon için linkleri seç
    const links = document.querySelectorAll('.link-card');
    
    // Sayfa yüklendiğinde animasyon
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            link.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });
    
    // Hover efekti için
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const color = link.getAttribute('data-color');
            link.style.borderColor = `var(--${color})`;
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.borderColor = 'var(--card-border)';
        });
    });
    
    // Arka plan resmi yükleme kontrolü
    const bgImage = new Image();
    bgImage.src = getComputedStyle(document.documentElement).getPropertyValue('--bg-image').replace(/url\(['"]?([^'"]*)['"]?\)/i, '$1').trim();
    
    bgImage.onload = function() {
        document.body.classList.add('bg-loaded');
    };
});
