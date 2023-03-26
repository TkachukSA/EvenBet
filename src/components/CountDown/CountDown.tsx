import {useEffect, useState} from "react";
import styles from './CountDown.module.css'

type CountDown = {
    second: number
    isActive: (flag: boolean) => void
}

export const CountDown = ({second = 5, isActive}: CountDown) => {
    const [seconds, setSeconds] = useState(second);
    const [timerActive, setTimerActive] = useState(false);

    useEffect(() => {
        if (seconds > 0 && timerActive) {
            setTimeout(setSeconds, 1000, seconds - 1);
        } else {
            setTimerActive(false);
            isActive(false);
        }
    }, [seconds, timerActive]);

    return (
        <div className={styles.countdown}>
            <button
                className={styles.styledbutton}
                disabled={timerActive}
                onClick={() => {
                    isActive(true)
                    setSeconds(5)
                    setTimerActive(!timerActive)
                }}>
                {timerActive ? seconds : 'start'}
            </button>
        </div>
    );
}
