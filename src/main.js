import { createIcons, icons } from 'lucide';
createIcons({ icons })
import '/src/style.css'; // Make sure the path points to your Tailwind CSS file
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const canvas = document.getElementById('myChart');

if (canvas) {
  const ctx = canvas.getContext('2d');

  // Defined custom text color variable
  const textColor = '#64748b'; // Slate gray (change this hex to whatever color you like)

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      datasets: [{
        label: '# Usage',
        data: [9, 12, 6, 25, 14, 24, 3],
        backgroundColor: 'rgba(59, 130, 246, 0.85)', // Bar fill color
        borderColor: '#2563eb',                       // Bar border color
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, // Allows canvas to adapt smoothly to mobile heights
      
      plugins: {
        // 1. Changing Legend Text Color
        legend: {
          labels: {
            color: textColor,
            font: {
              size: 14,
              weight: '500'
            }
          }
        },
        // 2. Changing Tooltip Text Colors
        tooltip: {
          titleColor: '#ffffff',
          bodyColor: '#e2e8f0'
        }
      },

      scales: {
        // 3. Changing X-Axis Text Color
        x: {
          ticks: {
            color: textColor,
            font: {
              size: 12
            }
          },
          grid: {
            display: false // Cleans up mobile view by removing vertical lines
          }
        },
        // 4. Changing Y-Axis Text Color
        y: {
          beginAtZero: true,
          ticks: {
            color: textColor,
            font: {
              size: 12
            }
          },
          grid: {
            color: '#e2e8f0' // Subtle grid line color
          }
        }
      }
    }
  });
}

// index point
// 
// menu

const menuBtn       = document.getElementById('menu-btn');
const mobileMenu    = document.getElementById('mobile-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon     = document.getElementById('close-icon');

if (menuBtn && mobileMenu && hamburgerIcon && closeIcon) {
   function openMenu() {
      mobileMenu.classList.add('open');
      hamburgerIcon.classList.add('opacity-0', 'rotate-90', 'pointer-events-none');
      hamburgerIcon.classList.remove('opacity-100', 'rotate-0');
      closeIcon.classList.remove('opacity-0', '-rotate-90', 'pointer-events-none');
      closeIcon.classList.add('opacity-100', 'rotate-0');
   }

   function closeMenu() {
      mobileMenu.classList.remove('open');
      hamburgerIcon.classList.remove('opacity-0', 'rotate-90', 'pointer-events-none');
      hamburgerIcon.classList.add('opacity-100', 'rotate-0');
      closeIcon.classList.add('opacity-0', '-rotate-90', 'pointer-events-none');
      closeIcon.classList.remove('opacity-100', 'rotate-0');
   }

   menuBtn.addEventListener('click', () => {
      mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
   });

   mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
}