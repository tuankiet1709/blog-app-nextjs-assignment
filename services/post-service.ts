export async function getList() {
	const res = await fetch(
		'https://blog-app-nextjs-assignment-m12g8mdtl-tuankiet1709.vercel.app//api/post'
	);
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
}

export async function getPost(postId: number) {
	const res = await fetch(
		'https://blog-app-nextjs-assignment-m12g8mdtl-tuankiet1709.vercel.app/api/post/' +
			postId
	);
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
}
