import { useState } from 'react';

import { ModalDialog } from './components/basic-modal-dialog';
import { Button } from './components/button';
import { BunchOfStuff, OtherStuffAlsoComplicated } from './components/mocks';
import { VerySlowComponent } from './components/very-slow-component';
import './styles.scss';

export default function App() {
  // add some state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* add the button */}
      <Button onClick={() => setIsOpen(true)}>Open dialog</Button>
      {/* add the dialog itself */}
      {isOpen ? <ModalDialog onClose={() => setIsOpen(false)} /> : null}
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </>
  );
}
