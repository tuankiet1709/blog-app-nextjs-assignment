import { useEffect } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Link from 'next/link';

import '../styles/globals.css';

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

		<script async src="jquery/dist/jquery.min.js"></script>
		<script async src="bootstrap/dist/js/bootstrap.min.js"></script>
		<script async src="../js/jqBootstrapValidation.js"></script>
		<script async src="../js/contact_me.js"></script>
		<script async src="../js/clean-blog.min.js"></script>
	</Head>;

	const router = useRouter();
	return <Component {...pageProps} key={router.route} />;
}

export default MyApp;
