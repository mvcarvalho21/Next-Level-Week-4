import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/mvcarvalho21.png" alt="Marco Carvalho" />
            <div>
                <strong>Marco Carvalho</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}