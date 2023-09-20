import sendMail from '$lib/mailjet';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { email, subject, message } = await request.json();

	let status;

	console.log('OUTPUT from server');
	console.log({ email, subject, message });

	try {
		const req = await sendMail(email, subject, message);
		console.log(req);
		status = 200;
	} catch {
		status = 400;
	}

	return json({ status });
}
