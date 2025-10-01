// Animação de aparecimento ao rolar
document.addEventListener('DOMContentLoaded', function() {
  const animatedElements = document.querySelectorAll('.animate-fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
  
  // Inicializar animações GSAP com ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray('.card-hover').forEach(card => {
    gsap.to(card, {
      y: -10,
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    });
  });
  
  // Menu mobile toggle
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOverlay = document.getElementById('menu-overlay');
  
  function openMobileMenu() {
    mobileMenu.classList.add('open');
    menuOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    menuOverlay.classList.remove('open');
    document.body.style.overflow = 'auto';
  }
  
  menuToggle.addEventListener('click', openMobileMenu);
  closeMenu.addEventListener('click', closeMobileMenu);
  menuOverlay.addEventListener('click', closeMobileMenu);
  
  // Fechar menu ao clicar em um link
  const menuLinks = document.querySelectorAll('#mobile-menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  
  // Modal de compartilhamento
  const shareButton = document.getElementById('share-button');
  const shareModal = document.getElementById('share-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const closeModalButton = document.getElementById('close-modal');
  const copyLinkButton = document.getElementById('copy-link');
  const shareLinkInput = document.getElementById('share-link');
  const copySuccessMessage = document.getElementById('copy-success');
  
  function openShareModal() {
    shareModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
  function closeShareModal() {
    shareModal.classList.remove('open');
    document.body.style.overflow = 'auto';
    copySuccessMessage.classList.add('hidden');
  }
  
  shareButton.addEventListener('click', openShareModal);
  closeModalButton.addEventListener('click', closeShareModal);
  modalOverlay.addEventListener('click', closeShareModal);
  
  // Copiar link para a área de transferência
  copyLinkButton.addEventListener('click', function() {
    shareLinkInput.select();
    document.execCommand('copy');
    
    // Mostrar mensagem de sucesso
    copySuccessMessage.classList.remove('hidden');
    
    // Esconder mensagem após 3 segundos
    setTimeout(function() {
      copySuccessMessage.classList.add('hidden');
    }, 3000);
  });
  
  // Compartilhamento em redes sociais
  const shareTitle = 'Despertando a Consciência Ambiental';
  const shareText = 'Confira este conteúdo incrível sobre consciência ambiental e como podemos fazer a diferença!';
  const shareUrl = 'https://santosxbk.github.io/VerdeAtivo/';
  
  // Facebook
  document.getElementById('share-facebook').addEventListener('click', function(e) {
    e.preventDefault();
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  });
  
  // Twitter
  document.getElementById('share-twitter').addEventListener('click', function(e) {
    e.preventDefault();
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
  });
  
  // WhatsApp
  document.getElementById('share-whatsapp').addEventListener('click', function(e) {
    e.preventDefault();
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
  });
  
  // Email
  document.getElementById('share-email').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`;
  });
  
  // Adicionando funcionalidade ao botão "Explorar Consciência Ambiental"
  const exploreButton = document.getElementById('explore-button');
  
  exploreButton.addEventListener('click', function() {
    // Rolar suavemente até a seção de introdução
    document.getElementById('intro').scrollIntoView({ 
      behavior: 'smooth' 
    });
  });
});
