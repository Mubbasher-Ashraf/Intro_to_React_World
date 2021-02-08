import React, { useState } from 'react';

const useDropDown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;

  const DropDown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={!options.length}
      >
        <option>All</option>
        {options.map((anim) => (
          <option key={anim} value={anim}>
            {anim}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, DropDown, setState];
};

export default useDropDown;