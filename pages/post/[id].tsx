import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import Layout from '../layout/layout';
import { getPost } from '../../services/post-service';

type Post = {
	backgroundImage: string;
	title: string;
	subTitle: string;
	meta: string;
	content: string;
};

type MyProps = {
	post: Post;
};

const Post: NextPage<MyProps> = (props) => {
	console.log(props);
	return (
		<Layout
			backgroundImage={props.post.backgroundImage}
			title={props.post.title}
			subTitle={props.post.subTitle}
			meta={props.post.meta}
			post={true}
		>
			<article>
				<div className="container">
					<div className="row">
						<div
							className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1"
							dangerouslySetInnerHTML={{
								__html: props.post.content,
							}}
						></div>
					</div>
				</div>
			</article>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps<MyProps> = async ({
	params,
}) => {
	const postId = params?.id;
	const postDetail = await getPost(Number(postId));
	if (postDetail) return { props: { post: postDetail } };
	return { props: { post: null } };
};

export default Post;
