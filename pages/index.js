import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mobile Small Engine Repair</title>
        <meta name="description" content="Get matched with a local mobile technician for fast repairs on your lawnmower, snowblower, and more." />
      </Head>
      <main className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white text-gray-900">
        <div className="w-full md:w-1/2">
          <img
            src="/lawnmower.jpg"
            alt="Person on lawnmower"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Mobile Small Engine Repair, Made Simple
          </h1>
          <p className="text-lg mb-8">
            Lawnmower won’t start? Snowblower sputtering? Get matched with a local mobile technician who comes to you.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link href="/book-a-job" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg">
              Book A Job →
            </Link>
            <Link href="/become-a-tech" className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-full text-lg">
              Become a Tech ↗
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
