import { ReactElement, UIEventHandler, useState } from "react"
import { MovingBlock } from "./moving-block";

type Props = { content: ReactElement }
export const ScrollableWithMovingBlock = ({content}: Props) => {
    const [position, setPosition] = useState(0);

    // just hard-coded approximation to demonstrate the re-renders problem
    // not to be used in real code
    const getPosition = (val: number) => 150 - val / 2;

    const onScroll = (e: React.UIEvent) => {    
        const calculated = getPosition((e.target as HTMLDivElement).scrollTop);    
        setPosition(calculated);  
    };

    return (
        <div className="scrollable-block" onScroll={onScroll}>
            <MovingBlock position={position} />
            {content}
        </div>
    );
}