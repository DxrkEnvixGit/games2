window.onload = function() {
  const win = window.open("about:blank", "_blank");

  if (win) {
    // Inject the favicon
    const link = win.document.createElement('link');
    link.rel = 'icon';
    link.href = 'favicon.png'; // Ensure this path is correct relative to the new window
    win.document.head.appendChild(link);

    // Write the rest of the document content
    win.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Doge Miner</title>
        <style>
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            overflow: hidden;
            background: #f0f0f0;
          }
          iframe {
            width: 100%;
            height: 100%;
            border: none;
          }
        </style>
      </head>
      <body>
        <iframe src="https://dogeminer.se" allowfullscreen></iframe>
      </body>
      </html>
    `);
    win.document.close();
  } else {
    alert("Popup blocked! Please allow popups for this site.");
  }
}
