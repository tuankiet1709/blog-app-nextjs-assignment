import Head from 'next/head';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/clean-blog.min.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';

function MyApp({ Component, pageProps }: AppProps) {
	<Head>
		<meta charSet="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="description" content="" />
		<meta name="author" content="" />
		<title>Clean Blog</title>

		<Link
			href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic"
			rel="stylesheet"
			type="text/css"
		/>
		<Link
			href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
			rel="stylesheet"
			type="text/css"
		/>
	</Head>;

	const router = useRouter();
	console.log(pageProps);
	return <Component {...pageProps} key={router.route} />;
}

export default MyApp;
