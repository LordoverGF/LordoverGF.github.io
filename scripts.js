document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    document.querySelector('form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon.');
        this.reset();
    });

    const seeAllBtn = document.getElementById('see-all-btn');
    const hiddenItems = document.querySelectorAll('.product-item.hidden');

    seeAllBtn.addEventListener('click', function () {
        hiddenItems.forEach(item => item.classList.toggle('hidden'));
        seeAllBtn.textContent = hiddenItems[0].classList.contains('hidden') ? 'See All' : 'Show Less';
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formMessages = document.getElementById('form-messages');
    const formData = new FormData(this);

    fetch('submit_form.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            formMessages.textContent = 'Your message has been sent!';
            formMessages.style.color = 'green';
            this.reset();
        } else {
            formMessages.textContent = 'There was a problem sending your message. Please try again.';
        }
    })
    .catch(error => {
        formMessages.textContent = 'There was a problem sending your message. Please try again.';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const formMessages = document.getElementById('form-messages');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        fetch('submit_form.php', {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => response.text())
        .then(text => {
            formMessages.innerHTML = text;
            form.reset();
        })
        .catch(error => {
            formMessages.innerHTML = "An error occurred while sending your message.";
        });
    });
});


// JavaScript for menu toggle in mobile view
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");
  
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("showing");
    });
  });

  const slideContainer = document.querySelector('.partners-slide');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;
  const slideWidth = 300; // Width of each slide item, should match the CSS width
  
  // Function to update the slide position
  function updateSlidePosition() {
      slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
  
  // Event listeners for buttons
  nextBtn.addEventListener('click', () => {
      const totalItems = document.querySelectorAll('.partner-item').length;
      if (currentIndex < totalItems - 1) {
          currentIndex++;
          updateSlidePosition();
      }
  });
  
  prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
          updateSlidePosition();
      }
  });
  

  