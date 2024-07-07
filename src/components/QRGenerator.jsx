import QRCode from "react-qr-code"
import '../styles/QRGenerator.css'
import { useRef, useState } from "react"

const QRGenerator = () => {

    // let qrString = 'www.google.com';

    const [qrString, setQrString] = useState('www.google.com');

    // const setInputText = (e) => {
    //     setQrString(e.target.value)
    // }
 
    // const inputText = useRef();

    // const generateQR = () => {
    //     setQrString(inputText.current.value)
    // }

    return (
        <div className="container">
            <div className="qr">
                <div className="qr-code">
                    <QRCode value={qrString} />
                    {/* <QRCode value={qrString} bgColor='#ec0000' fgColor="#ffffff" /> */}
                </div>
    
                <div className="qr-input">
                    {/* <input type="text" className="input-text" placeholder="Enter text to generate QR Code" ref={inputText} /> */}
                    <input type="text" className="input-text" placeholder="Enter text to generate QR Code" onChange={(e)=>setQrString(e.target.value)} value={qrString} />
                </div>
    
                <div className="qr-button">
                    {/* <button type="button" className="btn-generate" onClick={generateQR}>Generate</button> */}
                    <button type="button" className="btn-generate" onClick={() => window.print()}>Print</button>
                </div>
            </div>
        </div>
      )
}

export default QRGenerator
