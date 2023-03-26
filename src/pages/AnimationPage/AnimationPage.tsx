import React, {useState} from 'react';
import {CountDown} from "../../components/CountDown/CountDown";
import styles from './AnimationPage.module.css'
import {Square} from "./components/Square";

export const AnimationPage = () => {
    const [isStarted, setIsStarted] = useState(false);

    return (
        <div className={styles.AnimationPage}>
            <div className={styles.container}>
                <div>
                    <Square isDisabled={isStarted}/>
                </div>
                <div>
                    <Square/>
                </div>
            </div>
            <CountDown isActive={(isActive)=> {
                setIsStarted(isActive)
            }} second={5}/>
        </div>
    );
}

