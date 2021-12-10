import { useState } from 'react';

export function useLocalStorage(key: string, initValue: any) {
  const initGet = () => {
    const valueStr = localStorage.getItem(key);
    let currVal: any;
    if (typeof valueStr === 'string') {
      try {
        currVal = JSON.parse(valueStr);
      } catch (e) {
        console.error('Could not parse value from localStorage for ' + key, e);
      }
    }
    if (currVal != null) {
      return currVal;
    }
    return typeof initValue == 'function' ? initValue() : initValue;
  };

  const [state, setState] = useState(initGet);

  return [
    state,
    (value: any) => {
      setState(value);
      if (value === initValue || value == null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    },
  ];
}
