import React from 'react';

interface Props {
  text: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<Props> = ({ text, handleChange }) => {
  return (
    <div>
      <input value={text} onChange={handleChange} />
    </div>
  );
}