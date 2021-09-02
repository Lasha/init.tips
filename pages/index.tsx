import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center">
        <div className="text-xl p-4">We Recommend</div>
        <code className="bg-gray-700 hover:bg-gray-500 text-gray-200 px-4 py-2 rounded">
          npx create-next-app --ts
        </code>
      </div>
    </div>
  );
}
