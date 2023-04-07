import { useCallback, useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState('');

  const bind = {
    value,
    onChange: useCallback((e) => {
      setValue(e.target.value);
    }, []),
  };

  return bind;
};

export default useInput;
