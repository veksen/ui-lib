import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
import { Button } from '../src/components/button/button.component';

const App = () => {
  return (
    <div>
      <Thing />
      <Button>help</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
