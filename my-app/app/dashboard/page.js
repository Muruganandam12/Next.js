"use client"
import Image from "next/image";
import {useRouter} from 'next/navigation'
export default function Dashboard() {
  const router = useRouter();
  const back = ()=>{
    router.push('/')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <button onClick={back}className="bg-blue-500 rounded text-white font-bold py-2 px-4">Back</button>
      <h1 className="text-center text-2xl font-bold">Dashboard Page</h1>
    </main>
  );
}
