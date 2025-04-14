// checklist.js - Reusable checklist functionality

/**
 * Initialize a checklist with customizable options
 * @param {Object} config - Configuration object for the checklist
 * @param {string} config.checklistSelector - Selector for the main checklist container
 * @param {string} config.checkboxSelector - Selector for the checkboxes within the checklist
 * @param {string} config.progressBarSelector - Selector for the progress bar element
 * @param {string} config.percentageSelector - Selector for the percentage display element
 * @param {string} config.checkAllSelector - Selector for the "Check All" button
 * @param {string} config.uncheckAllSelector - Selector for the "Uncheck All" button
 * @param {string} config.exportSelector - Selector for the "Export" button
 * @param {string} config.exportFilename - Filename for the exported checklist
 * @param {Object} config.sectionTitles - Object mapping section indices to titles for export
 */
function initializeChecklist(config) {
    // Default configuration
    const defaultConfig = {
        checklistSelector: '.checklist-component',
        checkboxSelector: '.checklist-component input[type="checkbox"]',
        progressBarSelector: '#checklist-progress-bar',
        percentageSelector: '#checklist-percentage',
        checkAllSelector: '#check-all',
        uncheckAllSelector: '#uncheck-all',
        exportSelector: '#export-checklist',
        exportFilename: 'checklist.md',
        exportTitle: '# Checklist',
        sectionTitles: {}
    };

    // Merge provided config with defaults
    const mergedConfig = {...defaultConfig, ...config};

    // Get DOM elements based on selectors
    const checkboxes = document.querySelectorAll(mergedConfig.checkboxSelector);
    const progressBar = document.querySelector(mergedConfig.progressBarSelector);
    const percentageDisplay = document.querySelector(mergedConfig.percentageSelector);
    const checkAllButton = document.querySelector(mergedConfig.checkAllSelector);
    const uncheckAllButton = document.querySelector(mergedConfig.uncheckAllSelector);
    const exportButton = document.querySelector(mergedConfig.exportSelector);
    const checklistContainers = document.querySelectorAll(mergedConfig.checklistSelector);

    // Bail if required elements aren't found
    if (!checkboxes.length || !progressBar || !percentageDisplay) {
        console.warn('Checklist: Required elements not found');
        return;
    }

    // Update progress bar
    function updateProgress() {
        const total = checkboxes.length;
        const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
        const percentage = Math.round((checked / total) * 100);
        
        progressBar.style.width = percentage + '%';
        percentageDisplay.textContent = percentage + '%';
    }
    
    // Add event listeners to all checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateProgress);
    });
    
    // Check all button
    if (checkAllButton) {
        checkAllButton.addEventListener('click', function() {
            checkboxes.forEach(checkbox => {
                checkbox.checked = true;
            });
            updateProgress();
        });
    }
    
    // Uncheck all button
    if (uncheckAllButton) {
        uncheckAllButton.addEventListener('click', function() {
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            updateProgress();
        });
    }
    
    // Export checklist function
    if (exportButton) {
        exportButton.addEventListener('click', function() {
            let content = mergedConfig.exportTitle + "\n\n";
            
            checklistContainers.forEach((checklist, index) => {
                // Add section title if provided
                if (mergedConfig.sectionTitles[index]) {
                    content += "\n## " + mergedConfig.sectionTitles[index] + "\n\n";
                }
                
                checklist.querySelectorAll('.checklist-item').forEach(item => {
                    const checkbox = item.querySelector('input[type="checkbox"]');
                    const label = item.querySelector('label').textContent;
                    const status = checkbox.checked ? "✅" : "⬜";
                    content += `${status} ${label}\n`;
                });
            });
            
            // Create file and download
            const blob = new Blob([content], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = mergedConfig.exportFilename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }
    
    // Initialize progress bar
    updateProgress();
}

// Safe initialization that avoids DOMContentLoaded conflicts
(function() {
    // Store original DOMContentLoaded handlers if they exist
    const originalDOMReady = window.onDOMContentLoaded;
    
    // Function to initialize checklists when DOM is ready
    function initializeAllChecklists() {
        // Call any original handler first
        if (typeof originalDOMReady === 'function') {
            originalDOMReady();
        }
        
        // Look for checklist initializers defined on the page
        if (window.CHECKLIST_CONFIGS && Array.isArray(window.CHECKLIST_CONFIGS)) {
            window.CHECKLIST_CONFIGS.forEach(config => {
                initializeChecklist(config);
            });
        }
    }
    
    // Handle case where DOM is already loaded
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        setTimeout(initializeAllChecklists, 1);
    } else {
        document.addEventListener('DOMContentLoaded', initializeAllChecklists);
    }
})();