import type { NextApiRequest, NextApiResponse } from 'next';
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
	res: NextApiResponse<Post[]>
) {
	res.status(200).json(data);
}
