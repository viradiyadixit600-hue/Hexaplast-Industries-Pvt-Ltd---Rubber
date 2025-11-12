// Gujarati: Year set karva mate
  document.getElementById('year').textContent = new Date().getFullYear();

  // Simple contact form handling (client-side only). Replace with server endpoint as needed.
  const form = document.getElementById('contactForm');
  const alertBox = document.getElementById('formAlert');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email || !message){
      showAlert('મહેરબાની કરીને તમામ ફીલ્ડ ભરો.', 'danger');
      return;
    }
    // For demo: open mailto (user can replace with API endpoint)
    const subject = encodeURIComponent('Service enquiry from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
    window.location.href = `mailto:info@example.com?subject=${subject}&body=${body}`;
    showAlert('તમારો મેસેજ ખોલવા માટે ઇમેલ એપ્લિકેશન શરૂ કરી રહ્યું છે.', 'success');
  });

  function showAlert(msg, type){
    alertBox.style.display = 'block';
    alertBox.innerHTML = `<div class="alert alert-${type}">${msg}</div>`;
    setTimeout(()=>{ alertBox.style.display='none'; }, 6000);
  }