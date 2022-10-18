import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

const Home: NextPage = () => {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Web3 Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to the App</h1>
      <button onClick={logout} className="bg-red-500 rounded-lg p-5 text-white">
        Log out
      </button>
    </div>
  );
};

export default Home;
