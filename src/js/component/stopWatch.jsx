import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const StopWatch = () => {

	// Constantes principales
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);

	// Constantes para dividir los dígitos
	const [tensSeconds, setTensSeconds] = useState(0);
	const [unitsSeconds, setUnitsSeconds] = useState(0);
	const [tensMinutes, setTensMinutes] = useState(0);
	const [unitsMinutes, setUnitsMinutes] = useState(0);
	const [tensHours, setTensHours] = useState(0);
	const [unitsHours, setUnitsHours] = useState(0);

	// Hook para actualizar los segundos
	useEffect(() => {
		const timeInterval = setInterval(() => {
			setSeconds((prevSeconds) => (prevSeconds === 59 ? 0 : prevSeconds + 1));
		}, 1000);

		return () => clearInterval(timeInterval);
	}, []);

	// Hook para actualizar los minutos
	useEffect(() => {
		const timeInterval = setInterval(() => {
			if (seconds === 59) {
				setMinutes((prevMinutes) => (prevMinutes === 59 ? 0 : prevMinutes + 1));
			}
		}, 1000);

		return () => clearInterval(timeInterval);
	}, [seconds]);

	// Hook para actualizar las horas
	useEffect(() => {
		const timeInterval = setInterval(() => {
			if (minutes === 59) {
				setMinutes((prevHours) => (prevHours === 59 ? 0 : prevHours + 1));
			}
		}, 1000);

		return () => clearInterval(timeInterval);
	}, [hours]);

	// Hook para separar los digitos del tiempo
	useEffect(() => {

		// Segundos
		const secondsStr = seconds.toString().padStart(2, '0');
		const tensDigitSeconds = parseInt(secondsStr[0], 10);
		const unitsDigitSeconds = parseInt(secondsStr[1], 10);
		setTensSeconds(tensDigitSeconds);
		setUnitsSeconds(unitsDigitSeconds);

		// Minutos
		const minutesStr = minutes.toString().padStart(2, '0');
		const tensDigitMinutes = parseInt(minutesStr[0], 10);
		const unitsDigitMinutes = parseInt(minutesStr[1], 10);
		setTensMinutes(tensDigitMinutes);
		setUnitsMinutes(unitsDigitMinutes);

		// Horas
		const hoursStr = hours.toString().padStart(2, '0');
		const tensDigitHours = parseInt(hoursStr[0], 10);
		const unitsDigitHours = parseInt(hoursStr[1], 10);
		setTensHours(tensDigitHours);
		setUnitsHours(unitsDigitHours);
	}, [seconds, minutes, hours]);

	return (
		<div>
			<div className="container-fluid bg-dark">
				<div className="row">
					<div className="col-md-4 d-flex flex-row justify-content-center">
						<h1 className="number-background"> <FontAwesomeIcon icon={faClock} style={{color: "#ffffff",}} /> </h1>
						<h1 className="number-background"> {tensHours} </h1>
						<h1 className="number-background"> {unitsHours} </h1>
					</div>
					<div className="col-md-4 d-flex flex-row justify-content-center">
						<h1 className="number-background"> {tensMinutes} </h1>
						<h1 className="number-background"> {unitsMinutes} </h1>
					</div>
					<div className="col-md-4 d-flex flex-row justify-content-center">
						<h1 className="number-background"> {tensSeconds} </h1>
						<h1 className="number-background"> {unitsSeconds} </h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StopWatch;
