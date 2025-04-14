/**
 * Tab Manager - Handles tab switching functionality for multiple tab containers
 * This module uses a namespace to avoid conflicts with other scripts
 */
const TabManager = (function() {
    // Private function to initialize tabs in a specific container
    function initializeTabContainer(container) {
        const tabButtons = container.querySelectorAll('.tab-button');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Get only the tabs in this container
                const containerButtons = container.querySelectorAll('.tab-button');
                const tabId = button.getAttribute('data-tab');
                const tabContent = document.getElementById(tabId);

                // Remove active class from buttons in this container
                containerButtons.forEach(btn => btn.classList.remove('active'));

                // Remove active class from all related tab contents
                const tabContents = document.querySelectorAll('.tab-content');
                tabContents.forEach(content => {
                    if (containerButtons.length > 0 &&
                        Array.from(containerButtons).some(btn => btn.getAttribute('data-tab') === content.id)) {
                        content.classList.remove('active');
                    }
                });

                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                tabContent.classList.add('active');
            });
        });

        // Activate first tab by default for this container
        if (tabButtons.length > 0) {
            tabButtons[0].click();
        }
    }

    // Public method to initialize all tab containers on the page
    function init() {
        const tabContainers = document.querySelectorAll('.tab-container');
        tabContainers.forEach(container => {
            initializeTabContainer(container);
        });
    }

    // Public method to manually initialize a specific container by ID or element
    function initContainer(containerIdentifier) {
        let container;
        if (typeof containerIdentifier === 'string') {
            container = document.getElementById(containerIdentifier);
        } else if (containerIdentifier instanceof HTMLElement) {
            container = containerIdentifier;
        }
        
        if (container) {
            initializeTabContainer(container);
            return true;
        }
        return false;
    }

    // Return public methods
    return {
        init: init,
        initContainer: initContainer
    };
})();

// Register an event handler that won't conflict with other scripts
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', TabManager.init);
} else {
    // DOM already loaded, initialize immediately
    TabManager.init();
}
