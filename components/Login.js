import Image from "next/image";
import { useMoralis } from "react-moralis";
import logo from "../public/logo.png";

const Login = () => {
  const { authenticate, isInitializing } = useMoralis();
  return (
    <div className="bg-black h-screen w-full text-white">
      <h1>I am Login </h1>
      <div className="flex flex-col absolute z-10 justify-center space-y-4 top-1/2 translate-y-[-50%] w-full items-center">
        <Image
          className="object-cover rounded-full"
          src={logo}
          width={200}
          height={200}
        />
        <button
          onClick={authenticate}
          className="bg-orange-500 rounded-lg p-5 animate-pulse"
        >
          Login to the decentralized chat
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;
