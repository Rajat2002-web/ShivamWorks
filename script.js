
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const email = document.querySelector('input[placeholder="Your Email"]').value;
    const message = document.querySelector('textarea').value;
  
    // Your WhatsApp number (include country code, no "+" or dashes)
    const phoneNumber = "919455068436"; // replace with your number
  
    // Compose the WhatsApp message
    const whatsappMessage = `Hello, my name is *${name}* (%0AEmail: ${email})%0A%0A${message}`;
  
    // Create the WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURI(whatsappMessage)}`;
  
    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
  });
  