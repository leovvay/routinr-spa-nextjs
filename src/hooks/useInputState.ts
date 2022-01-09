import { ChangeEventHandler, useCallback, useState } from 'react';

function useInputState<T>(
  initialValue: T
): [T, ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>] {
  const [value, setValue] = useState(initialValue);

  const handleValueChange = useCallback(({ target: { value: inputValue } }) => {
    setValue(inputValue);
  }, []);

  return [value, handleValueChange];
}

export default useInputState;
