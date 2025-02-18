function openWhatsApp() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  var url = isMobile ? 'https://wa.me/5511985163869' : 'https://web.whatsapp.com/send?phone=5511985163869';
  window.open(url);
}