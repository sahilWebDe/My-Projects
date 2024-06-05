import React,{ useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState();
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-_=+';

    let chars = '';
    if (includeUpperCase) chars += uppercaseChars;
    if (includeLowerCase) chars += lowercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <div className='len'>
        <label className='boxlen'>Password Length:</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeUpperCase}
            onChange={(e) => setIncludeUpperCase(e.target.checked)}
          />
          Include Uppercase Letters
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeLowerCase}
            onChange={(e) => setIncludeLowerCase(e.target.checked)}
          />
          Include Lowercase Letters
        </label>
      </div>
      <div>
        <label className='num'>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Include Numbers
        </label>
      </div>
      <div>
        <label className='sym'>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          Include Symbols
        </label>
      </div>
      <div className='genpassbut'>
      <button className='butpass' onClick={generatePassword}>Generate Password</button>
      </div>
      <div>
        <label className='pass'>Generated Password:</label>
        <input type="text" value={password} readOnly />
      </div>
    </div>
  );
};

export default PasswordGenerator;
