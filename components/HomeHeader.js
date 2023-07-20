import { useSession } from "next-auth/react";

export default function HomeHeader() {
  const { data: session } = useSession();
  return (
    <div className="text-blue-900 flex justify-between">
      <h2 className="m-0">
        <div className="flex gap-2 items-center">
          Hello, <b>{session?.user?.name}</b>
        </div>
      </h2>
      <div className="hidden sm:block">
        <div className="flex bg-gray-100 gap-1 text-black rounded-lg overflow-hidden p-2 align-center">
          <img
            src={session?.user?.image}
            alt=""
            className="w-6 h-6 rounded-full"
          />
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>
    </div>
  );
}
