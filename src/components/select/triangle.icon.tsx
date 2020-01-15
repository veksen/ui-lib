import * as React from 'react';

export const Triangle: React.FC = props => (
  <svg fill="none" viewBox="0 0 11 8" {...props}>
    <path fill="#D8D8D8" fill-rule="evenodd" d="M5 7L0 0h10L5 7z" clip-rule="evenodd" />
  </svg>
);
