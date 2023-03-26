import {Header} from "../Header/Header";
import styles from './AppLayout.module.css'
import React from "react";

type AppLayout = {
    children: React.ReactNode
}

export const AppLayout = ({children}: AppLayout) => {
    return (
        <div className={styles.appLayout}>
            <Header />
            <div className={styles.appContent}>
                {children}
            </div>
        </div>
    );
};
