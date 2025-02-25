import { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'base', label: 'base' },
  { value: 'luxury', label: 'luxury' },
  { value: 'premium', label: 'premium' },
];

export default function SelectOption({type, setType}) {

  return (
    <div className="App">
      <Select
      styles={{
          control: (base) => ({
            ...base,
            backgroundColor: 'black',
            color: 'white',
            borderColor: 'white',
          }),
          singleValue: (base) => ({
            ...base,
            color: 'white',
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: 'black',
            border: 'solid 1px white',
          }),
          option: (base, { isFocused }) => ({
            ...base,
            backgroundColor: isFocused ? 'grey' : 'black',
            color: 'white',
          }),
        }}
        placeholder="Type of washing"
        defaultValue={type}
        onChange={setType}
        options={options}
      />
    </div>
  );
}