import styles from './Square.module.css'

type Square = {
    isDisabled?: boolean
}
export const Square = ({isDisabled = false}: Square) => {
    return (
        <div className={styles.stage}>
            <div className={`${styles.box} ${isDisabled ? styles.bounce : ''}`}>
                {isDisabled &&  <div className={styles.ball}/>}
            </div>
        </div>
    );
}
