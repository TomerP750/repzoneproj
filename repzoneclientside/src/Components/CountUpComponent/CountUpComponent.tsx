import "./CountUpComponent.css";
import {useState, useEffect, useRef} from "react";


interface CountUpProps {
    start: number;
    end: number;
    duration: number;
}

export function CountUpComponent({ start, end, duration }: CountUpProps): JSX.Element {
    const [count, setCount] = useState(start);
    const [stepTime, setStepTime] = useState((duration * 1000) / (end - start));
    const intervalRef = useRef<number | null>(null);  // Ref for storing interval

    useEffect(() => {
        let currentValue = start;

        const increaseSpeed = () => {
            const normalizedProgress = (currentValue - start) / (end - start);
            const slowFactor = 1 + normalizedProgress * 3;
            // Adjust stepTime without triggering a re-render
            setStepTime((duration * 1000) / (end - start) * slowFactor);
        };

        const countUp = () => {
            if (currentValue < end) {
                currentValue++;
                setCount(currentValue);
                increaseSpeed();
            } else {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);  // Clear interval when done
                }
            }
        };

        intervalRef.current = window.setInterval(countUp, stepTime);  // Store interval in ref

        // Cleanup on component unmount
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };

    }, [start, end, duration]); // Only re-run when start, end, or duration changes

    return <h1>{count}</h1>;
}