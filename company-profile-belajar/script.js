// js/script.js

// Smooth scroll when clicking navbar links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Button interaction on Hero section
document.querySelector('.btn-custom1')?.addEventListener('click', () => {
  const productsSection = document.querySelector('#products');
  if (productsSection) {
    window.scrollTo({
      top: productsSection.offsetTop - 80,
      behavior: 'smooth'
    });
  }
});




// --- Dark Mode Toggle Logic ---
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;


// Fungsi untuk menerapkan tema yang tersimpan atau default
const applyTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = 'Light Mode';
    } else {
        body.classList.remove('dark-mode');
        darkModeToggle.textContent = 'Dark Mode';
    }
};

// Cek tema yang tersimpan di localStorage saat halaman dimuat
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    applyTheme(savedTheme);
} else {
    // Jika tidak ada tema tersimpan, cek preferensi sistem pengguna
    // Ini opsional tapi memberikan pengalaman pengguna yang lebih baik
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark'); // Simpan preferensi sistem sebagai default
    } else {
        applyTheme('light'); // Default ke light mode jika tidak ada preferensi sistem dark
    }
}

// Event listener untuk tombol toggle
darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        applyTheme('light');
        localStorage.setItem('theme', 'light');
    } else {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
    }
});

// (Opsional) Dengarkan perubahan preferensi sistem
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? 'dark' : 'light';
    applyTheme(newColorScheme);
    localStorage.setItem('theme', newColorScheme);
});

