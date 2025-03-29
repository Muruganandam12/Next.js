import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-bold">Next Application</h1>
      <Link  className= "text-blue-600-lg mt-2 font-bold" href="/dashboard">Dashboard</Link>
      <Link className= "text-blue-600-lg mt-2 font-bold" href="/dashboard/setting">Settings</Link>
    </main>
  );
}
