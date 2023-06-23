export async function getList() {
	const res = await fetch('http://localhost:3000/api/post');
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
}

export async function getPost(postId: number) {
	const res = await fetch('http://localhost:3000/api/post/' + postId);
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
}
