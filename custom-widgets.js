window.addEventListener('DOMContentLoaded', () => {
    CMS.init();
    const observer = new MutationObserver(() => {
        const docsType = document.querySelector('[name="docs_type"]');
        const docsUrlField = document.querySelector('[name="docs_url"]')?.closest('.nc-controlPane-widget');
        const docsUrlsField = document.querySelector('[name="docs_urls.v2"]')?.closest('.nc-controlPane-widget')?.parentElement?.parentElement;

        if (docsType && docsUrlField && docsUrlsField) {
            const updateVisibility = () => {
                if (docsType.value === 'Single version') {
                    docsUrlField.style.display = 'block';
                    docsUrlsField.style.display = 'none';
                } else {
                    docsUrlField.style.display = 'none';
                    docsUrlsField.style.display = 'block';
                }
            };

            docsType.addEventListener('change', updateVisibility);
            updateVisibility();
            observer.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
});