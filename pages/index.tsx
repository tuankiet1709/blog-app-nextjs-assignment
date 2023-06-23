import type { GetStaticProps, NextPage } from 'next';
import Layout from './layout/layout';
import Link from 'next/link';
import { getList } from '../services/post-service';

type Post = {
	id: number;
	backgroundImage: string;
	title: string;
	subTitle?: string;
	meta?: string;
	content: string;
};

type MyProps = {
	posts: Post[];
};

const Home: NextPage<MyProps> = (props) => {
	const backgroundImage = 'img/home-bg.jpg';
	const title = 'Clean Blog';
	const subTitle = 'A Clean Blog Theme by Start Bootstrap';

	return (
		<Layout
			backgroundImage={backgroundImage}
			title={title}
			subTitle={subTitle}
			post={false}
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
						{props.posts.map((post: Post) => {
							return (
								<div key={post.id}>
									<div className="post-preview">
										<Link href={`post/${post.id}`}>
											<h2 className="post-title">
												{post.title}
											</h2>
											{post.subTitle ?? (
												<h3 className="post-subtitle">
													{post.subTitle}
												</h3>
											)}
										</Link>
										{(
											<p
												className="post-meta"
												dangerouslySetInnerHTML={{
													__html: post.meta!,
												}}
											></p>
										) ?? <></>}
									</div>
									<hr />
								</div>
							);
						})}
						<ul className="pager">
							<li className="next">
								<a href="#">Older Posts &rarr;</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<MyProps> = async () => {
	const posts = await getList();
	// console.log(posts);
	return {
		props: {
			posts: posts,
		},
	};
};

export default Home;
