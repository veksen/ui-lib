import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
// configure(require.context('../stories', true, /\.stories\.(js|ts)x?$/), module);
configure(
  require.context('../src/components', true, /\.stories\.(js|ts)x?$/),
  module
);

// console.log('hdahd');

// function loadStories() {
//   const req = require.context('../src/components', true, /stories\.tsx$/);
//   console.log(req);
//   req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module);
