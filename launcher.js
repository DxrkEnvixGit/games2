document.getElementById('launchBtn').onclick = function() {
  const win = window.open("about:blank", "_blank");
  if (!win) return alert("Popup blocked! Allow popups for this site.");

  // Write the page skeleton
  win.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Doge Miner</title>
      <style>
        html, body { margin:0; padding:0; height:100%; overflow:hidden; }
        iframe { width:100%; height:100%; border:none; }
      </style>
    </head>
    <body>
      <iframe src="https://dogeminer.se" allowfullscreen></iframe>
    </body>
    </html>
  `);
  win.document.close();

  // Inject favicon after document is ready
  setTimeout(() => {
    if (win.document.head) {
      const link = win.document.createElement('link');
      link.rel = 'icon';
      link.href = 'favicon.png'; // your uploaded favicon file
      win.document.head.appendChild(link);
    }
  }, 50); // small delay to ensure head exists
};
