import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5 w-max ml-2">
      <div className="flex flex-row space-x-1">
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
      <Button variant="custom">
        Tweet
      </Button>
    </div>
  );
}
