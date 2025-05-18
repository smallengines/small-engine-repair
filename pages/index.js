import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Small Engine Repair</title>
        <meta name="description" content="Fast, mobile repair. No shop required." />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4">Small Engine Repair</h1>
        <p className="mb-6">Mobile techs. Fast repairs. No shop required.</p>
        <div className="flex gap-4">
          <Link href="/book-a-job" className="bg-blue-600 text-white px-4 py-2 rounded">Book a Job</Link>
          <Link href="/become-a-tech" className="bg-gray-800 text-white px-4 py-2 rounded">Become a Tech</Link>
        </div>
      </main>
    </>
  );
}
