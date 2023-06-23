import { NextPage } from 'next';
import Layout from './layout/layout';

const About: NextPage = () => {
	const backgroundImage = '/img/about-bg.jpg';
	const title = 'About Me';
	const subTitle = 'This is what I do.';

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
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Saepe nostrum ullam eveniet pariatur
							voluptates odit, fuga atque ea nobis sit soluta
							odio, adipisci quas excepturi maxime quae totam
							ducimus consectetur?
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Eius praesentium recusandae illo eaque
							architecto error, repellendus iusto reprehenderit,
							doloribus, minus sunt. Numquam at quae voluptatum in
							officia voluptas voluptatibus, minus!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Nostrum molestiae debitis nobis, quod sapiente
							qui voluptatum, placeat magni repudiandae
							accusantium fugit quas labore non rerum possimus,
							corrupti enim modi! Et.
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default About;
