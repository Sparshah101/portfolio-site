import { useEffect, useState } from 'react';
import './status.css';
export default function Status() {
	const [myTime, setMyTime] = useState('');
	const [isAvailable, setIsAvailable] = useState(true);
	const [currClass, setCurrClass] = useState('');
	const [currClassEnding, setCurrClassEnding] = useState('');

	const schedule = {
		Monday: [
			{
				start: '09:30',
				end: '10:20',
				activity: 'SYDE 121 - LEC 001',
			},
			{
				start: '10:30',
				end: '11:20',
				activity: 'SYDE 181 - LEC 001',
			},
			{
				start: '12:30',
				end: '14:20',
				activity: 'SYDE 113 - TUT 101',
			},
			{
				start: '14:30',
				end: '16:20',
				activity: 'SYDE 101L - LAB 001',
			},
		],
		Tuesday: [
			{
				start: '09:30',
				end: '11:20',
				activity: 'SYDE 161 - LEC 001',
			},
			{
				start: '13:00',
				end: '14:20',
				activity: 'SYDE 111 - LEC 001',
			},
			{
				start: '14:30',
				end: '16:20',
				activity: 'SYDE 101 - TUT 101',
			},
		],
		Wednesday: [
			{
				start: '08:30',
				end: '09:20',
				activity: 'SYDE 181 - TUT 101',
			},
			{
				start: '09:30',
				end: '10:20',
				activity: 'SYDE 121 - LEC 001',
			},
			{
				start: '10:30',
				end: '11:20',
				activity: 'SYDE 181 - LEC 001',
			},
			{
				start: '12:30',
				end: '13:20',
				activity: 'SYDE 113 - LEC 001',
			},
			{
				start: '14:30',
				end: '16:20',
				activity: 'SYDE 101L - LEC 101',
			},
		],
		Thursday: [
			{
				start: '08:30',
				end: '09:20',
				activity: 'SYDE 121 - TUT 101',
			},
			{
				start: '09:30',
				end: '10:20',
				activity: 'SYDE 161 - TUT 101',
			},
			{
				start: '10:30',
				end: '11:20',
				activity: 'SYDE 161 - LEC 001',
			},
			{
				start: '13:00',
				end: '14:20',
				activity: 'SYDE 111 - LEC 001',
			},
		],
		Friday: [
			{
				start: '08:30',
				end: '09:20',
				activity: 'SYDE 111 - TUT 101',
			},
			{
				start: '09:30',
				end: '10:20',
				activity: 'SYDE 121 - LEC 001',
			},
			{
				start: '10:30',
				end: '11:20',
				activity: 'SYDE 161 - LEC 001',
			},
			{
				start: '11:30',
				end: '12:20',
				activity: 'SYDE 121 - LEC 001',
			},
			{
				start: '12:30',
				end: '13:20',
				activity: 'GENE 119 - SEM 014',
			},
			{
				start: '13:30',
				end: '14:20',
				activity: 'SYDE 101 - LEC 001',
			},
			{
				start: '14:30',
				end: '16:20',
				activity: 'SYDE 121 - LAB 201',
			},
		],
	};

	const getTorontoDateTime = () => {
		const now = new Date();

		return {
			time: new Intl.DateTimeFormat('en-CA', {
				timeZone: 'America/Toronto',
				hour: '2-digit',
				minute: '2-digit',
				hour12: false, // ensures 24h format
			}).format(now),
			weekday: new Intl.DateTimeFormat('en-CA', {
				timeZone: 'America/Toronto',
				weekday: 'long',
			}).format(now),
		};
	};

	const toMinutes = (timeStr) => {
		const [hours, minutes] = timeStr.split(':').map(Number);
		return hours * 60 + minutes;
	};
	const minsFormat = (mins) => {
		const hours = Math.floor(mins / 60);
        if (hours === 0){
            return `${mins} minutes`
        }
        else{
            return `${hours} hour${hours>1 ? 's': ''} and ${mins%60} minutes`
        }
	};

	const checkAvailability = () => {
		const my = getTorontoDateTime();
		if (my.weekday === 'Saturday' || my.weekday === 'Sunday') {
			setIsAvailable(true);
			return;
		}
		const todaySchedule = schedule[my.weekday];
		const currentMinutes = toMinutes(my.time);
		if (
			currentMinutes >
			toMinutes(todaySchedule[todaySchedule.length - 1].end)
		) {
			setIsAvailable(true);
			return;
		} else {
			for (const { start, end, activity } of todaySchedule) {
				const classEnd = toMinutes(end);
				if (currentMinutes < classEnd) {
					if (currentMinutes > toMinutes(start)) {
						setCurrClass(activity);
						setIsAvailable(false);
						setCurrClassEnding(classEnd - currentMinutes);
						break;
					}
					setIsAvailable(true);
				}
			}
		}
	};
	useEffect(() => {
		// run immediately once
		const now = new Date();
		const formatted = new Intl.DateTimeFormat('en-US', {
			timeZone: 'America/Toronto',
			hour: '2-digit',
			minute: '2-digit',
		}).format(now);
		setMyTime(formatted);
		checkAvailability();

		// then run every 60 seconds
		const interval = setInterval(() => {
			const now = new Date();
			const formatted = new Intl.DateTimeFormat('en-US', {
				timeZone: 'America/Toronto',
				hour: '2-digit',
				minute: '2-digit',
			}).format(now);
			setMyTime(formatted);
			checkAvailability();
		}, 60000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<h1 className="text-2xl">Sparsh's Availability</h1>
			<div className="status-container">
				{isAvailable ? (
					<p>Status: 🟢 Available</p>
				) : (
					<>
						<p>Status: 🔴 Not Available</p>
						<p>
							Class will end in{' '}
							{minsFormat(currClassEnding)}
						</p>
						<p>{currClass}</p>
					</>
				)}

				<p>Current time (Waterloo): {myTime}</p>
			</div>
			<p className="sub">Built for my parents as to not call me while in class</p>
		</div>
	);
}
