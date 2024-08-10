import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [url, setUrl] = useState('');
  const [links, setLinks] = useState([]);

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = () => {
    // Split the input into an array of URLs, trim whitespace, and filter out empty values
    const urls = url.split('\n').map(domain => domain.trim()).filter(Boolean);
    // Generate links based on the input URLs
    const generatedLinks = urls.map((domain, index) => ({
      number: index + 1, // Serial number starting from 1
      url: `https://ahrefs.com/traffic-checker/?input=${encodeURIComponent(domain)}&mode=subdomains`,
    }));
    setLinks(generatedLinks);
  };

  const handleClear = () => {
    setUrl(''); // Clear the input field
    setLinks([]); // Clear the generated links
  };


  const element = document.querySelector('your-selector');
if (element) {
    // Safe to call getTotalLength() here
    const length = element.getTotalLength();
} else {
    console.error('Element not found');
}


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="form-group">
            <h1 htmlFor="urlInput">Submit Your Website URLs</h1>
            <textarea
              className="form-control"
              id="urlInput"
              value={url}
              onChange={handleInputChange}
              placeholder="https://www.Rijon.com/"
              rows="7"
            />
          </div>
          <button className="btn btn-primary m-3" onClick={handleSubmit}>
            Submit
          </button>
          <button className="btn btn-secondary" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 offset-md-3">
          {links.length > 0 && (
            <div>
              <h5>Generated Links:</h5>
              <ul>
                {links.map((link) => (
                  <li key={link.number} className='mt-2'>
                    <strong className='mr-2'>{link.number}.</strong>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
