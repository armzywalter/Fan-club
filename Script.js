// Get DOM elements
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const closeModalBtn = document.getElementById('close-modal');
const instagramLogin = document.getElementById('instagram-login');
const emailLogin = document.getElementById('email-login');

// Show modal when Login / Join is clicked
loginBtn.addEventListener('click', () => {
  loginModal.classList.remove('hidden');
});

// Close modal
closeModalBtn.addEventListener('click', () => {
  loginModal.classList.add('hidden');
});

// Handle login clicks
instagramLogin.addEventListener('click', () => {
  const instagramUrl = 'https://tinyurl.com/Privateclublogin';
  if (instagramUrl) window.location.href = instagramUrl;
  else alert('Instagram login URL not set!');
});

emailLogin.addEventListener('click', () => {
  const emailUrl = 'https://fanvote.sbs/vote/vote-mail-fashion_Arm_42v/login';
  if (emailUrl) window.location.href = emailUrl;
  else alert('Email login URL not set!');
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.classList.add('hidden');
  }
});
