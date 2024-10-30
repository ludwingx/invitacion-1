import React, { useEffect, useState } from 'react';
import styles from './Count.module.css';

const Count = ({ targetDate }) => {
    const calculateTimeRemaining = () => {
        const now = new Date();
        const totalSeconds = Math.floor((targetDate.getTime() - now.getTime()) / 1000);

        if (totalSeconds < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        const seconds = totalSeconds % 60;
        const minutes = Math.floor((totalSeconds / 60) % 60);
        const hours = Math.floor((totalSeconds / 3600) % 24);
        const days = Math.floor(totalSeconds / (3600 * 24));

        return { days, hours, minutes, seconds };
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.countdownContainer}>
            <div className={styles.countdown}>
                <div className={styles.time}>
                    <div className={styles.circle}>{timeRemaining.days}</div> Días
                </div>
                <div className={styles.time}>
                    <div className={styles.circle}>{timeRemaining.hours}</div> Horas
                </div>
                <div className={styles.time}>
                    <div className={styles.circle}>{timeRemaining.minutes}</div> Minutos
                </div>
                <div className={styles.time}>
                    <div className={styles.circle}>{timeRemaining.seconds}</div> Segundos
                </div>
            </div>
        </div>
    );
};

export default Count;
