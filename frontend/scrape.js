const https = require('https');

const url = 'https://themaplesquare.in/floor-plans.html';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    
    let match;
    const urls = new Set();
    while ((match = imgRegex.exec(data)) !== null) {
      let src = match[1];
      if (!src.startsWith('http')) {
         src = 'https://themaplesquare.in/' + (src.startsWith('/') ? src.slice(1) : src);
      }
      urls.add(src);
    }
    console.log(Array.from(urls));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
