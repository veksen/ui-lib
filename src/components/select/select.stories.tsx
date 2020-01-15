import React from 'react';
import { Select } from './select.component';

export default {
  title: 'Select',
};

export const base = () => (
  <div>
    <Select
      options={[
        { value: 1, text: 'option 1' },
        { value: 2, text: 'option 2' },
        { value: 3, text: 'option 3' },
      ]}
    />
  </div>
);
