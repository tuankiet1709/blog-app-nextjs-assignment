import { NextApiRequest, NextApiResponse } from 'next';
import { data } from '../../../data/post-data';

type Post = {
	id: number;
	backgroundImage: string;
	title: string;
	subTitle?: string;
	meta?: string;
	content: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Post>
) {
	const detail = data.filter(
		(post: Post) => post.id === Number(req.query.id)
	);
	res.status(200).json(detail[0]);
}
