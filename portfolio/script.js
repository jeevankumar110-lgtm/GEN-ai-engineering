/**
 * Jeevan Kumar — Personal Portfolio Scripts
 * Vanilla JavaScript implementation (accessible, responsive, lightweight)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const expanded = navLinks.classList.contains('open');
      navToggle.setAttribute('aria-expanded', expanded);
    });

    // Close mobile menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Project Modal Handler
  const modalOverlay = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalConcepts = document.getElementById('modalConcepts');
  const modalTags = document.getElementById('modalTags');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalFooterClose = document.getElementById('modalFooterClose');

  const projectData = {
    'voter-eligibility': {
      title: 'Voter Eligibility Calculator',
      type: 'Beginner / Academic Project',
      desc: 'A beginner-friendly application designed to determine voter eligibility based on age-related eligibility criteria. This project helped me practice programming logic, conditional statements, and user input handling.',
      concepts: [
        'Conditional statements (if-elif-else)',
        'User input parsing and type conversion',
        'Input validation & edge case handling',
        'Clean terminal output formatting',
      ],
      tags: ['Python', 'Conditional Logic', 'User Input', 'CLI'],
    },
    'atm-management': {
      title: 'ATM Management System',
      type: 'Beginner / Practice Project',
      desc: 'A beginner-level ATM management project created to practice programming fundamentals and simulate common ATM operations such as account interaction and transaction handling.',
      concepts: [
        'Conditional logic',
        'Functions',
        'User input',
        'Transaction logic',
        'Basic application flow',
      ],
      tags: ['Python', 'Functions', 'Transaction Logic', 'Flow Control'],
    },
    'student-grade-calc': {
      title: 'Student Grade Calculator',
      type: 'Beginner / Academic Project',
      desc: 'A simple application that calculates student grades based on entered marks. This project helped me practice calculations, conditional statements, input handling, and basic programming logic.',
      concepts: [
        'Arithmetic calculations and percentages',
        'Grade grading scale boundary logic',
        'Input validation for marks',
        'Structured result display',
      ],
      tags: ['Python', 'Calculations', 'Conditional Statements', 'Input Handling'],
    },
  };

  document.querySelectorAll('.btn-project-view').forEach((btn) => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      const data = projectData[projectId];

      if (data && modalOverlay) {
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;

        // Render concepts
        modalConcepts.innerHTML = '';
        data.concepts.forEach((concept) => {
          const li = document.createElement('li');
          li.style.cssText = 'display:flex;align-items:center;gap:8px;margin-bottom:6px;';
          li.innerHTML = `<span style="color:#2563eb;font-weight:bold;">✓</span> <span>${concept}</span>`;
          modalConcepts.appendChild(li);
        });

        // Render tags
        modalTags.textContent = data.tags.join(' · ');

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalFooterClose) modalFooterClose.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // 3. Copy Placeholder Email
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'your-email@example.com';
      navigator.clipboard.writeText(email).then(() => {
        copyEmailBtn.textContent = 'Copied!';
        setTimeout(() => {
          copyEmailBtn.textContent = 'Copy';
        }, 2000);
      });
    });
  }

  // 4. Contact Form Simulated Submit
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formSuccess) {
        formSuccess.style.display = 'block';
        contactForm.reset();
        setTimeout(() => {
          formSuccess.style.display = 'none';
        }, 5000);
      }
    });
  }
});
