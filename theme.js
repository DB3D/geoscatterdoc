
// // Function to apply the dark mode to the iframe
// function applyDarkModeToIframe() {
//   const iframe = document.getElementById('main_page_frame');
//   iframe.addEventListener('load', () => {
//     const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
//     const theme = document.documentElement.getAttribute('data-theme');
//     iframeDoc.documentElement.setAttribute('data-theme', theme);
//   });
// }
//
// // Dark mode toggle event listener
// const toggle = document.getElementById('dark-mode-toggle');
// toggle.addEventListener('click', () => {
//   const currentTheme = document.documentElement.getAttribute('data-theme');
//   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//   document.documentElement.setAttribute('data-theme', newTheme);
//   localStorage.setItem('theme', newTheme);
//   applyDarkModeToIframe();
// });
//
// Initialize theme based on user preferences or saved theme
// const userPrefersDark =
//   window.matchMedia &&
//   window.matchMedia('(prefers-color-scheme: dark)').matches;
// const savedTheme = localStorage.getItem('theme');
// const theme = savedTheme ? savedTheme : userPrefersDark ? 'dark' : 'light';
// document.documentElement.setAttribute('data-theme', theme);
// applyDarkModeToIframe();


const pref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem('theme');
const theme = saved ? saved : pref ? 'dark' : 'light';

$(window).ready(function()
{
    // set to current document (inner iframes load same js so they set it for themselves when ready)
    $('html').attr('data-theme', theme);
    // show document..
    $('body').addClass('fade_in');
    // main iframe has also button, this is skipped in inner iframes because button is not defined..
    $('#dark-mode-toggle').click(function(event)
    {
        let c = $('html').attr('data-theme');
        let n = c === 'dark' ? 'light' : 'dark';
        $('html').attr('data-theme', n);
        localStorage.setItem('theme', n);
        // now update inner iframe as well
        $('#main_page_frame').contents().find('html').attr('data-theme', n);
    });
});
