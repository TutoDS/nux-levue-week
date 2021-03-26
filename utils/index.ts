export const playAudio = (path: string) => new Audio(path).play;

export const sendNotification = (title: string, options: object) =>
	new Notification(title, options);

export const splitValue = (digits: string | number, padSize: number = 2) =>
	`${digits}`.padStart(padSize, '0').split('');
