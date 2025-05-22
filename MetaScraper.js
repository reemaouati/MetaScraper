// ==UserScript==
// @name         MetaScraper
// @namespace    https://github.com/reemaouati
// @version      0.1
// @description  Easily extract and retrieve metadata from any website, including the title, OG image, and description.
// @author       Reem Aouati
// @run-at       document-end
// @match        https://*/*
// @grant        none
// ==/UserScript==

(() => {
    'use strict';

    const getMetaContent = (name) => {
        return document.querySelector(`meta[name="${name}"]`)?.content
            || document.querySelector(`meta[property="${name}"]`)?.content
            || 'Not found';
    };

    const scrapeMeta = () => {
        const title = document.title || 'No title';
        const description = getMetaContent('description');
        const ogImage = getMetaContent('og:image');

        const proceed = confirm('MetaScraper\n\nScrape metadata from this website?');
        if (!proceed) return;

        alert(
            `Title: ${title}\n\n` +
            `Description: ${description}\n\n` +
            `OG Image: ${ogImage}`
        );
    };

    document.readyState === 'complete'
        ? scrapeMeta()
        : window.addEventListener('load', scrapeMeta);
})();
