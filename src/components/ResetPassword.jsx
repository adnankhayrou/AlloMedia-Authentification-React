import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ResetPassword() {
  const { token } = useParams(); // taking the token from the URL
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
//   const navigate = useNavigate();

  const [passwords] = useState({
    password:password,
    confirmPassword:confirmPassword,
  })

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
        axios.post(`http://localhost:3000/api/auth/resetpassword/${token}`, passwords)
        .then(result => {
            const msg = result.data.success;
            console.log(msg);
          })
          .catch(err => {
            const error = err.response ? err.response.data.error : 'An error occurred in register';
            setError(error);
          })
    
    } else {
      setError('password not match')
    }
  };

  return (
    <div>
        <div>
      {error && (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <span className="block sm:inline">{error}</span>
        <button
          className="absolute top-0 bottom-0 right-0 px-4 py-3"
          onClick={() => setError(null)} // This clears the error
        >
          <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <title>Close</title>
            <path d="M14.348 5.652a.5.5 0 0 0-.697 0L10 9.303 5.348 4.652a.5.5 0 1 0-.697.697L9.303 10l-4.651 4.652a.5.5 0 0 0 .697.697L10 10.697l4.652 4.651a.5.5 0 0 0 .697-.697L10.697 10l4.651-4.652a.5.5 0 0 0 0-.697z"/>
          </svg>
        </button>
      </div>)}
    </div>
    
      <h3>Reset Your Password</h3>
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
}

export default ResetPassword;
