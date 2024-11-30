import React from 'react';

const Alert = ({ children, className, ...props }) => {
  return (
    <div
      role="alert"
      className={`rounded-lg border p-4 shadow-lg bg-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const AlertDescription = ({ children, className, ...props }) => {
  return (
    <div
      className={`text-sm text-gray-700 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Alert, AlertDescription };