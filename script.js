// Initialize Lucide Icons
        lucide.createIcons();

        // Handle Active State Transitions
        const navItems = document.querySelectorAll('.nav-item');
        const pageTitle = document.querySelector('#page-title h1');

        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                // Remove active class from all
                navItems.forEach(i => i.classList.remove('active'));

                // Add active class to clicked
                item.classList.add('active');

                // Update UI text (for demo purposes)
                const target = item.getAttribute('data-target');
                pageTitle.textContent = target;
            });
        });