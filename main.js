(function () {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const serviceVideoData = {
    'plumbering': {
      title: 'Plumber',
      text: 'We provide reliable plumbing solutions for leaks, installs, repairs, and long-lasting performance in every project.',
      embed: 'https://www.youtube.com/embed/4nC4r0D1n4k?si=R8H0eEi9QfYpzA0P'
    },
    'electrician': {
      title: 'Electrician',
      text: 'Our skilled electricians handle safe wiring, repairs, maintenance, and efficient electrical support for homes and businesses.',
      embed: 'https://www.youtube.com/embed/4nC4r0D1n4k?si=R8H0eEi9QfYpzA0P'
    },
    'painter': {
      title: 'Painter',
      text: 'We deliver clean, professional painting services that freshen up spaces and improve the overall look of your property.',
      embed: 'https://www.youtube.com/embed/4nC4r0D1n4k?si=R8H0eEi9QfYpzA0P'
    },
    'welder': {
      title: 'Welder',
      text: 'We offer expert welding work for strong structural repairs, custom fabrication, and dependable finishing solutions.',
      embed: 'https://www.youtube.com/embed/4nC4r0D1n4k?si=R8H0eEi9QfYpzA0P'
    }
  };

  const translations = {
    en: {
      brandName: 'Shubham Pvt. Ltd.',
      navAbout: 'About',
      navServices: 'Services',
      navContact: 'Contact',
      serviceArea: 'Services available in Najafgarh and nearby areas',
      heroBadge: 'Home & Property Services',
      heroTitle: 'Reliable repairs and skilled services for your home or workplace.',
      heroText: 'From plumbing and electrical work to painting and welding, we provide practical help for homes, shops, and workplaces in Najafgarh and nearby areas.',
      heroPrimary: 'Explore Services',
      heroSecondary: 'Call Now',
      trustedBadge: 'Service at your doorstep',
      panelTitle: 'The right skilled professional for the job.',
      panelText: 'Get help with repairs, installations, maintenance, finishing work, and more—just call us to discuss your requirement.',
      stat1value: '4',
      stat1label: 'Core Services',
      stat2value: 'Local',
      stat2label: 'Najafgarh Service Area',
      aboutEyebrow: 'About Us',
      aboutTitle: 'Practical help for everyday repair and improvement work.',
      aboutText: 'We connect you with skilled professionals for plumbing, electrical, painting, and welding work. Tell us what you need, and we will help you find the right service.',
      aboutPoint1: 'Services for homes, shops, and workplaces',
      aboutPoint2: 'Skilled support for repairs, maintenance, and new work',
      aboutPoint3: 'Clear communication from enquiry to completion',
      infoLabel1: 'Mission',
      infoValue1: 'Make essential repair services easy to access locally.',
      infoLabel2: 'Vision',
      infoValue2: 'Deliver neat, practical work suited to each requirement.',
      infoLabel3: 'Support',
      infoValue3: 'Call us to discuss your service requirement.',
      servicesEyebrow: 'Our Services',
      servicesTitle: 'Skilled services for repairs, maintenance, and improvement work.',
      service1: 'Plumber',
      service1Desc: 'Professional plumbing services for homes, offices, and commercial spaces.',
      service2: 'Electrician',
      service2Desc: 'Safe and reliable electrical installations, repairs, and maintenance support.',
      service3: 'Painter',
      service3Desc: 'Clean finishes and quality painting for interiors, exteriors, and property improvement.',
      service4: 'Welder',
      service4Desc: 'Strong, durable welding services for repairs, fabrication, and custom metal work.',
      serviceBtn: 'Call Now',
      statLarge1: '4',
      statLabel1: 'Core Services',
      statLarge2: 'Local',
      statLabel2: 'Service Area',
      statLarge3: 'Call',
      statLabel3: 'To Book a Service',
      contactEyebrow: 'Contact',
      contactTitle: 'Book a service today.',
      contactText: 'For plumbing, electrical, painting, or welding work in Najafgarh and nearby areas, call us to discuss your requirement.',
      officeLabel: 'Office Location',
      officeAddress: 'RZ-76, Dwarka Vihar, Gali No. 1, Najafgarh, New Delhi – 110043',
      mapLink: 'View on Google Maps →',
      footerText: '© 2026 Shubham Pvt. Ltd.'
    },
    hi: {
      brandName: 'शुभम प्राइवेट लिमिटेड',
      navAbout: 'हमारे बारे में',
      navServices: 'सेवाएँ',
      navContact: 'संपर्क',
      serviceArea: 'नजफगढ़ और आसपास के क्षेत्रों में सेवाएँ उपलब्ध हैं',
      heroBadge: 'घर और प्रॉपर्टी सेवाएँ',
      heroTitle: 'आपके घर या कार्यस्थल के लिए विश्वसनीय मरम्मत और कुशल सेवाएँ।',
      heroText: 'प्लंबरिंग, इलेक्ट्रिकल काम, पेंटिंग और वेल्डिंग के लिए हम नजफगढ़ और आसपास के क्षेत्रों में घरों, दुकानों और कार्यस्थलों को व्यावहारिक सहायता देते हैं।',
      heroPrimary: 'सेवाएँ देखें',
      heroSecondary: 'अभी कॉल करें',
      trustedBadge: 'आपके दरवाजे पर सेवा',
      panelTitle: 'हर काम के लिए सही कुशल प्रोफेशनल।',
      panelText: 'मरम्मत, इंस्टॉलेशन, रखरखाव और फिनिशिंग के लिए सहायता पाएं—अपनी जरूरत बताने के लिए हमें कॉल करें।',
      stat1value: '4',
      stat1label: 'मुख्य सेवाएँ',
      stat2value: 'लोकल',
      stat2label: 'नजफगढ़ सेवा क्षेत्र',
      aboutEyebrow: 'हमारे बारे में',
      aboutTitle: 'रोज़मर्रा की मरम्मत और सुधार के कामों के लिए व्यावहारिक सहायता।',
      aboutText: 'हम आपको प्लंबरिंग, इलेक्ट्रिकल, पेंटिंग और वेल्डिंग के कुशल प्रोफेशनल से जोड़ते हैं। अपनी जरूरत बताएं और सही सेवा पाएं।',
      aboutPoint1: 'घरों, दुकानों और कार्यस्थलों के लिए सेवाएँ',
      aboutPoint2: 'मरम्मत, रखरखाव और नए काम के लिए कुशल सहायता',
      aboutPoint3: 'पूछताछ से काम पूरा होने तक स्पष्ट संवाद',
      infoLabel1: 'मिशन',
      infoValue1: 'जरूरी मरम्मत सेवाओं को लोकल स्तर पर आसानी से उपलब्ध कराना।',
      infoLabel2: 'विजन',
      infoValue2: 'हर जरूरत के अनुसार साफ-सुथरा और व्यावहारिक काम देना।',
      infoLabel3: 'सहायता',
      infoValue3: 'अपनी सेवा जरूरत बताने के लिए हमें कॉल करें।',
      servicesEyebrow: 'हमारी सेवाएँ',
      servicesTitle: 'मरम्मत, रखरखाव और सुधार के काम के लिए कुशल सेवाएँ।',
      service1: 'प्लंबर',
      service1Desc: 'घरों, कार्यालयों और वाणिज्यिक स्थानों के लिए पेशेवर प्लंबरिंग सेवाएँ।',
      service2: 'इलेक्ट्रीशियन',
      service2Desc: 'सुरक्षित और विश्वसनीय इलेक्ट्रिकल इंस्टॉलेशन, मरम्मत और रखरखाव सहायता।',
      service3: 'पेंटर',
      service3Desc: 'अंदर और बाहर की जगहों के लिए साफ़ फिनिश और गुणवत्ता पूर्ण पेंटिंग।',
      service4: 'वेल्डर',
      service4Desc: 'मरम्मत, फेब्रीकेशन और कस्टम मेटल वर्क के लिए मजबूत और टिकाऊ वेल्डिंग सेवाएँ।',
      serviceBtn: 'अभी कॉल करें',
      statLarge1: '4',
      statLabel1: 'मुख्य सेवाएँ',
      statLarge2: 'लोकल',
      statLabel2: 'सेवा क्षेत्र',
      statLarge3: 'कॉल करें',
      statLabel3: 'सेवा बुक करने के लिए',
      contactEyebrow: 'संपर्क',
      contactTitle: 'आज ही सेवा बुक करें।',
      contactText: 'नजफगढ़ और आसपास के क्षेत्रों में प्लंबरिंग, इलेक्ट्रिकल, पेंटिंग या वेल्डिंग के काम के लिए हमें कॉल करें।',
      officeLabel: 'ऑफिस लोकेशन',
      officeAddress: 'RZ-76, द्वारका विहार, गली नं. 1, नजफगढ़, नई दिल्ली – 110043',
      mapLink: 'Google Maps पर देखें →',
      footerText: '© 2026 शुभम प्राइवेट लिमिटेड'
    }
  };

  const STORAGE_KEY = 'company-feedback-list';

  const setLanguage = (lang) => {
    const dictionary = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dictionary[key]) {
        el.textContent = dictionary[key];
      }
    });

    document.querySelectorAll('.lang-btn').forEach((button) => {
      const isActive = button.dataset.lang === lang;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  };

  const updateServiceVideo = (serviceKey, target = 'inline') => {
    const video = serviceVideoData[serviceKey];
    if (!video) return;

    if (target === 'modal') {
      const modalFrame = document.getElementById('modalVideoFrame');
      const modalTitle = document.getElementById('modalServiceTitle');
      const modalText = document.getElementById('modalServiceText');

      if (modalFrame) {
        modalFrame.src = video.embed;
        modalFrame.title = `${video.title} service overview`;
      }

      if (modalTitle) modalTitle.textContent = video.title;
      if (modalText) modalText.textContent = video.text;
      return;
    }

    const frame = document.getElementById('serviceVideoFrame');
    const title = document.getElementById('serviceVideoTitle');
    const text = document.getElementById('serviceVideoText');

    if (frame) {
      frame.src = video.embed;
      frame.title = `${video.title} service overview`;
    }

    if (title) title.textContent = video.title;
    if (text) text.textContent = video.text;

    document.querySelectorAll('.service-video-btn').forEach((button) => {
      const isActive = button.dataset.service === serviceKey;
      button.classList.toggle('active', isActive);
    });
  };

  const openServiceModal = (serviceKey) => {
    const modal = document.getElementById('serviceModal');
    if (!modal) return;
    updateServiceVideo(serviceKey, 'modal');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  const closeServiceModal = () => {
    const modal = document.getElementById('serviceModal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  const handleServiceAction = (button) => {
    const serviceKey = button.dataset.service;
    if (!serviceKey) return;

    updateServiceVideo(serviceKey);
    openServiceModal(serviceKey);
  };

  document.querySelectorAll('.service-btn').forEach((button) => {
    button.addEventListener('click', () => handleServiceAction(button));
  });

  document.querySelectorAll('.service-video-btn').forEach((button) => {
    button.addEventListener('click', () => updateServiceVideo(button.dataset.service));
  });

  document.querySelectorAll('[data-close-modal="true"]').forEach((el) => {
    el.addEventListener('click', closeServiceModal);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeServiceModal();
    }
  });

  const renderReviews = () => {
    const reviewGrid = document.getElementById('reviewGrid');
    if (!reviewGrid) return;

    const storedReviews = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

    if (!storedReviews.length) {
      reviewGrid.innerHTML = '<p class="review-empty">Customer reviews submitted on this device will appear here.</p>';
      return;
    }

    reviewGrid.innerHTML = storedReviews.map((review) => `
      <article class="review-card">
        <div class="review-head">
          <div class="review-logo">${(review.name || 'C').charAt(0).toUpperCase()}</div>
          <div>
            <h3>${review.name}</h3>
            <span>${review.service}</span>
          </div>
        </div>
        <div class="stars" aria-label="${review.rating} star rating">${'★'.repeat(Number(review.rating))}</div>
        <p>“${review.message}”</p>
      </article>
    `).join('');
  };

  const setupStarRating = () => {
    const hiddenInput = document.querySelector('input[name="rating"]');
    const stars = document.querySelectorAll('.star-btn');

    if (!hiddenInput || !stars.length) return;

    stars.forEach((star) => {
      star.addEventListener('click', () => {
        const ratingValue = Number(star.dataset.rating);
        hiddenInput.value = String(ratingValue);

        stars.forEach((item) => {
          const itemValue = Number(item.dataset.rating);
          item.classList.toggle('active', itemValue <= ratingValue);
        });
      });
    });
  };

  const feedbackForm = document.getElementById('feedbackForm');
  const feedbackStatus = document.getElementById('feedbackStatus');

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(feedbackForm);
      const name = formData.get('name')?.toString().trim();
      const service = formData.get('service')?.toString();
      const rating = formData.get('rating')?.toString();
      const message = formData.get('message')?.toString().trim();

      if (!name || !service || !rating || !message) {
        feedbackStatus.textContent = 'Please fill in all fields before submitting.';
        feedbackStatus.classList.add('error');
        return;
      }

      const storedReviews = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      storedReviews.unshift({
        name,
        service,
        rating: Number(rating),
        message
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(storedReviews));

      renderReviews();

      feedbackStatus.textContent = 'Thank you! Your feedback has been submitted successfully.';
      feedbackStatus.classList.remove('error');
      feedbackForm.reset();

      const hiddenInput = document.querySelector('input[name="rating"]');
      const stars = document.querySelectorAll('.star-btn');
      if (hiddenInput) hiddenInput.value = '3';
      stars.forEach((star) => {
        const itemValue = Number(star.dataset.rating);
        star.classList.toggle('active', itemValue <= 3);
      });
    });
  }

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.lang);
    });
  });

  setLanguage('en');
  setupStarRating();
  renderReviews();
  updateServiceVideo('plumbering');
})();
