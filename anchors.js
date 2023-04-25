function scrollToElement(id) {
    const element = document.getElementById(id);
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const top = rect.top + scrollTop - (window.innerHeight * 0.1);
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('h1, h2');

    headers.forEach(header => {
      const headerText = header.textContent.trim();
      const id = header.tagName.toLowerCase() + '_' + headerText.toLowerCase().replace(/\s+/g, '_');
      header.setAttribute('id', id);
      header.setAttribute('data-frag', id);

      const anchor = document.createElement('a');
      anchor.href = `#${id}`;
      anchor.className = 'header-anchor';
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToElement(id);
      });

      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 1000 1000');
      svg.setAttribute('enable-background', 'new 0 0 1000 1000');
      svg.setAttribute('xml:space', 'preserve');
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M568.2,644.1c-54.4,0-108.7-20.7-150.1-62.1c-11.2-11.2-11.2-29.5,0-40.8c11.2-11.2,29.5-11.2,40.8,0c60.3,60.3,158.4,60.3,218.7,0l209.6-209.6c60.3-60.3,60.3-158.4,0-218.7c-60.3-60.3-158.4-60.3-218.7,0L491.6,289.7c-11.2,11.2-29.5,11.2-40.8,0c-11.2-11.2-11.2-29.5,0-40.8L627.7,72.1c82.8-82.8,217.5-82.8,300.2,0c82.7,82.8,82.8,217.5,0,300.2L718.3,582C676.9,623.4,622.5,644.1,568.2,644.1L568.2,644.1L568.2,644.1z M222.2,990c-54.4,0-108.7-20.7-150.1-62.1c-82.8-82.8-82.8-217.5,0-300.2L281.7,418c82.8-82.8,217.5-82.8,300.2,0c11.2,11.2,11.2,29.5,0,40.8c-11.2,11.2-29.5,11.2-40.8,0c-60.3-60.3-158.4-60.3-218.7,0L112.9,668.4c-60.3,60.3-60.3,158.4,0,218.7c60.3,60.3,158.4,60.3,218.7,0l176.9-176.9c11.2-11.2,29.5-11.2,40.8,0c11.2,11.2,11.2,29.5,0,40.8L372.3,927.9C330.9,969.3,276.6,990,222.2,990L222.2,990L222.2,990z');
      svg.appendChild(path);
      anchor.appendChild(svg);

      header.appendChild(anchor);
    });
  });


//   function copyToClipboard(text) {
//     const textarea = document.createElement('textarea');
//     textarea.value = text;
//     document.body.appendChild(textarea);
//     textarea.select();
//     document.execCommand('copy');
//     document.body.removeChild(textarea);
//   }

//   function showTemporaryMessage(message, duration) {
//     const msgElem = document.createElement('div');
//     msgElem.textContent = message;
//     msgElem.style.position = 'fixed';
//     msgElem.style.bottom = '20px';
//     msgElem.style.right = '20px';
//     msgElem.style.padding = '10px';
//     msgElem.style.backgroundColor = '#333';
//     msgElem.style.color = 'white';
//     msgElem.style.borderRadius = '5px';
//     document.body.appendChild(msgElem);

//     setTimeout(() => {
//       document.body.removeChild(msgElem);
//     }, duration);
//   }

//   document.addEventListener('DOMContentLoaded', function() {
//     const headers = document.querySelectorAll('h1, h2');

//     headers.forEach(header => {
//       // Your existing header generation code...

//       anchor.addEventListener('click', (e) => {
//         e.preventDefault();
//         copyToClipboard(anchor.href);
//         showTemporaryMessage('Copied to clipboard', 2000);
//       });

//       header.appendChild(anchor);
//     });
//   });