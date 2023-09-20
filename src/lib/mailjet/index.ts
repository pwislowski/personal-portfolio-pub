import { API_KEY, SECRET, SENDER_EMAIL, SENDER_NAME, RECIEVER_NAME } from '$env/static/private';

export default function sendMail(email: string, subject: string, message: string): Promise<string> {
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	console.log('ENV from index.ts');
	console.log(API_KEY);
	console.log(SECRET);

	myHeaders.set('Authorization', 'Basic ' + btoa(API_KEY + ':' + SECRET));

	message = `Enquirer's email: ${email}\n\nSubject: ${subject}\n\n${message}`;

	const data = JSON.stringify({
		Messages: [
			{
				From: { Email: SENDER_EMAIL, Name: SENDER_NAME },
				To: [{ Email: SENDER_EMAIL, Name: RECIEVER_NAME }],
				Subject: subject,
				TextPart: message
			}
		]
	});

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: data
	};

	return fetch('https://api.mailjet.com/v3.1/send', requestOptions)
		.then((response) => response.text())
		.then((result) => {
			return result;
		})
		.catch((error) => {
			throw error;
		});
}
