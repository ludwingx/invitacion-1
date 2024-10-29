import React, { useEffect, useState } from 'react';

const Count = ({ targetDate }) => {
    const calculateTimeRemaining = () => {
        const now = new Date(); // Fecha y hora actuales
        const totalSeconds = Math.floor((targetDate.getTime() - now.getTime()) / 1000); // Calcular la diferencia en segundos

        // Asegurarse de que totalSeconds no sea negativo
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
            setTimeRemaining(calculateTimeRemaining()); // Actualiza el tiempo restante
        }, 1000);

        // Limpiar el intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="countdown-container">
            <h2>Cuenta Regresiva para el 25 de Diciembre</h2>
            <div className="countdown">
                <div className="time">
                    <div className="circle">{timeRemaining.days}</div> Días
                </div>
                <div className="time">
                    <div className="circle">{timeRemaining.hours}</div> Horas
                </div>
                <div className="time">
                    <div className="circle">{timeRemaining.minutes}</div> Minutos
                </div>
                <div className="time">
                    <div className="circle">{timeRemaining.seconds}</div> Segundos
                </div>
            </div>
        </div>
    );
};

export default Count;
