import Head from "next/head";
import Link from "next/link";



export default function Home() {

  return (
    <>
    <h1 className="px-">OLA</h1>
    <Link href="/dashboard">Dashboard</Link>
    </>
  )
}
