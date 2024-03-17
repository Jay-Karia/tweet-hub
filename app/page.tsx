import Image from "next/image";

export default function Home() {
  return (
    <div className="flex space-x-1">
      <Image
        src="/logo.svg"
        alt="TweetHub Logo"
        width={30}
        height={30}
      />
      <h1 className="text-blue-400 font-medium">
        Hello TweetHub
      </h1>
    </div>
  );
}
