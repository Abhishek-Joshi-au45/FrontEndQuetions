import * as React from 'react';
import Button from './button';

const App = () => {
  const greeting = 'Welcome to React';

  return (
    <>
      <Welcome text={greeting} />
    </>
  );
};

const Welcome = (props) => {
  return <>{props.text} <Button /> </>;
};

export default App;