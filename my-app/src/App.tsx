import { BunchOfStuff, OtherStuffAlsoComplicated } from './components/mocks';
import { VerySlowComponent } from './components/very-slow-component';
import './styles.scss';
import { ScrollableWithMovingBlock } from './components/scrollable-with-moving-block';




export default function App() {

  return (
    <ScrollableWithMovingBlock>
      <>
        <VerySlowComponent />
        <BunchOfStuff />
        <OtherStuffAlsoComplicated />
      </>
    </ScrollableWithMovingBlock>
  );
}
