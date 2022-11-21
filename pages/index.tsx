import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ShoppinCartContextProvider from "../store/ShoppinCartContextProvider";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <ShoppinCartContextProvider>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>PLNTS</title>
          <link rel="icon" href="/favicon/favicon.ico" />
        </Head>

        <main>
          <Link href={"/products"} className='text-green-400 text-7xl'>SEE OUR PRODUCTS </Link>
        </main>
      </div>
    </ShoppinCartContextProvider>
  );
};

export default Home;
