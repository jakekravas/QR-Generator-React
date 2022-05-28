import { useState } from 'react';
import QRCode from 'qrcode';

const App = () => {
  const [url, setUrl] = useState('')
  const [qrCode, setQrCode] = useState('')

  const generateQrCode = () => {
    QRCode.toDataURL(url, {
      width: 800
    },
      (err, url) => {
      if (err) return console.error(err)

      console.log(url);
      setQrCode(url)
    })
  }

  return (
    <div className='app'>
      <h1>QR Code Generator</h1>
      <input
        type='text'
        placeholder='e.g. https://google.com'
        value={url}
        onChange={e => setUrl(e.target.value)}
      />
      <button onClick={generateQrCode}>Generate</button>
      {qrCode &&
        <>
          <img src={qrCode}/>
          <a href={qrCode} download='qrcode.png'>Download</a>
        </>
      }
    </div>
  );
}

export default App;
