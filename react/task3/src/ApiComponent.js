import axios from 'axios';
import React, { useState, useEffect } from 'react';

function ApiComponent() {
  const [headers, setHeaders] = useState(null);

  useEffect(() => {
    const postData = { Post: 'phone number' };
    const config = { headers: { 'Content-Type': 'application/json' } };
    axios.post('https://chimpu.xyz/api/post.php', postData, config)
      .then(response => {
        setHeaders(response.headers);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Headers received:</h2>
      <pre>{JSON.stringify(headers, null, 2)}</pre>
    </div>
  );
}

export default ApiComponent