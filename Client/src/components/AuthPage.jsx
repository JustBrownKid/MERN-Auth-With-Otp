// AuthPage.jsx
import { useState } from 'react';
import LoginForm from './LoginForm';
import OtpVerifyForm from './OtpVerifyForm';

const AuthPage = () => {
  // Hold the email after login, to pass to OTP form
  const [emailForOtp, setEmailForOtp] = useState(null);

  // Reset OTP email to restart flow if needed
  const resetOtpFlow = () => setEmailForOtp(null);

  return (
    <div>
      {!emailForOtp ? (
        <LoginForm onOtpSent={setEmailForOtp} />
      ) : (
        <OtpVerifyForm email={emailForOtp} onBack={resetOtpFlow} />
      )}
    </div>
  );
};

export default AuthPage;
