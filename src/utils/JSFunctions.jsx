import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const JSFunctions = () => {
  useEffect(() => {
    // Scroll to specific section
    const handleScrollClick = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        scroll.scrollTo(targetElement.offsetTop, {
          duration: 600,
          smooth: 'easeInOutQuad'
        });
      }
    };

    document.querySelectorAll('a.page-scroll').forEach(anchor => {
      anchor.addEventListener('click', handleScrollClick);
    });

    // Toggle off-canvas menu
    const toggleOffCanvas = () => {
      document.querySelector('.offcanvas-collapse').classList.toggle('open');
    };

    document.querySelectorAll('[data-toggle="offcanvas"], .nav-link:not(.dropdown-toggle)').forEach(element => {
      element.addEventListener('click', toggleOffCanvas);
    });

    // Toggle dropdown menu
    const toggleDropdown = (event) => {
      const dropdown = event.currentTarget.querySelector('.dropdown-menu');
      dropdown.classList.toggle('show');
    };

    // Event listeners for dropdown
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      dropdown.addEventListener('mouseenter', toggleDropdown);
      dropdown.addEventListener('mouseleave', toggleDropdown);
    });

    // Close dropdown on link click
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
      link.addEventListener('click', (event) => {
        const dropdown = link.closest('.dropdown');
        dropdown.querySelector('.dropdown-menu').classList.remove('show');
      });
    });

    // Form field label movement
    const handleInputKeyUp = (event) => {
      if (event.target.value.trim() !== '') {
        event.target.classList.add('notEmpty');
      } else {
        event.target.classList.remove('notEmpty');
      }
    };

    document.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('keyup', handleInputKeyUp);
    });

    // Back to top button
    const backToTopButton = document.createElement('a');
    backToTopButton.href = '#';
    backToTopButton.className = 'back-to-top page-scroll';
    backToTopButton.innerText = 'Back to Top';
    document.body.prepend(backToTopButton);

    const handleScroll = () => {
      const amountScrolled = 700;
      if (window.scrollY > amountScrolled) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove focus on buttons after click
    const handleMouseUp = (event) => {
      event.currentTarget.blur();
    };

    document.querySelectorAll('.button, a, button').forEach(button => {
      button.addEventListener('mouseup', handleMouseUp);
    });

    // Prevent adding # at the end of URL on click of non-pagescroll links
    const handleNavLinkClick = (event) => {
      const hash = event.currentTarget.getAttribute('href').substring(1);
      if (!hash) {
        event.preventDefault();
      }
    };

    document.querySelectorAll('.nav-link').forEach(navLink => {
      navLink.addEventListener('click', handleNavLinkClick);
    });

    // Cleanup function to remove event listeners
    return () => {
      document.querySelectorAll('a.page-scroll').forEach(anchor => {
        anchor.removeEventListener('click', handleScrollClick);
      });
      document.querySelectorAll('[data-toggle="offcanvas"], .nav-link:not(.dropdown-toggle)').forEach(element => {
        element.removeEventListener('click', toggleOffCanvas);
      });
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.removeEventListener('mouseenter', toggleDropdown);
        dropdown.removeEventListener('mouseleave', toggleDropdown);
      });
      document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.removeEventListener('click', toggleDropdown);
      });
      document.querySelectorAll('input, textarea').forEach(input => {
        input.removeEventListener('keyup', handleInputKeyUp);
      });
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('.button, a, button').forEach(button => {
        button.removeEventListener('mouseup', handleMouseUp);
      });
      document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []);

  return null;
};

export default JSFunctions;
