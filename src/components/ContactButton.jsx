import { useState } from 'react';
import { FaEnvelope, FaCheck } from 'react-icons/fa';

function ContactButton({ email }) {
  const [copied, setCopied] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleEmail = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div style={{ marginBottom: '10px', width: '100%' }}>
      <button 
        onClick={toggleEmail}
        className="btn btn-primary w-100" 
        style={{ backgroundColor: 'white', color: 'black' }}
      >
        <FaEnvelope style={{ marginRight: '8px' }} />
        Contact Me
      </button>
      
      {showEmail && (
        <div 
          className="alert alert-info mt-2 d-flex justify-content-between align-items-center"
          style={{ marginBottom: '0' }}
        >
          <span>
            Email Me At: <span style={{ fontWeight: 'bold' }}>{email}</span>
          </span>
          <button 
            onClick={handleCopy}
            className="btn btn-sm btn-outline-primary"
            style={{ marginLeft: '10px' }}
          >
            {copied ? (
              <>
                <FaCheck /> Copied!
              </>
            ) : (
              'Copy'
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default ContactButton;