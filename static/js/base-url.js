// Determine if we're running on GitHub Pages or locally
const getBaseUrl = () => {
    const isGitHubPages = window.location.hostname.includes('github.io');
    return isGitHubPages ? '/engineering-status-pages' : '';
};

// Add base URL to all internal links
document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = getBaseUrl();
    
    // Update all internal links
    document.querySelectorAll('a[href^="/"]').forEach(link => {
        if (!link.getAttribute('href').includes('http')) {
            link.href = baseUrl + link.getAttribute('href');
        }
    });

    // Update all static resource links (css, images, etc)
    document.querySelectorAll('link[href^="/"], img[src^="/"]').forEach(element => {
        if (!element.getAttribute('href')?.includes('http') && !element.getAttribute('src')?.includes('http')) {
            const attr = element.hasAttribute('href') ? 'href' : 'src';
            element[attr] = baseUrl + element.getAttribute(attr);
        }
    });
});
