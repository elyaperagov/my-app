import { useState } from "react";

const getStorageData = () =>{

  var values = [],
  keys = Object.keys(localStorage),
  i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
    return values;
}

export const useLocalStorage = (keyName, initialValue) => {
  const [value, setValue] = useState(() => {
    return getStorageData(keyName, initialValue);
  });

return [value, setValue];
}