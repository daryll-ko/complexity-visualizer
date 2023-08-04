import Head from "next/head";
import { useState } from "react";
import { BlockMath, InlineMath } from "react-katex";
import Table from "~/components/Table";

export default function Home() {
  const [n, setN] = useState("1000");

  return (
    <>
      <Head>
        <title>Complexity</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-xl font-bold tracking-tight text-white sm:text-[5rem]">
            Complexity
          </h1>
          <p>
            How long does it take these devices to do execute a{" "}
            <InlineMath math="\Theta(f(n))" /> algorithm when{" "}
            <InlineMath math="n =" />
            <input
              className="ml-2 mr-1 rounded-md px-2 py-1 text-black"
              type="number"
              value={n}
              min={10}
              onChange={(e) => setN(e.target.value)}
            />
            ?
          </p>
          <div>
            <BlockMath math="\text{time (s)} = f(n)~\text{instructions} \times \dfrac{1~\text{cycle}}{\text{instruction}} \div \text{clock rate}" />
          </div>
          <Table n={Number(n)} />
          <div>
            <p className="mb-1 font-bold">Notes</p>
            <ul className="list-disc">
              <li>
                Clicking on a device&apos;s name will send you to the reference
                used for the device&apos;s clock rate.
              </li>
              <li>
                Table entries that contain <InlineMath math="\infty" /> do not
                actually mean infinity; the amount of time it takes is just so
                long that even the computer can&apos;t represent it properly.
              </li>
              <li>
                This table was inspired by Gary and Johnson&apos;s{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Computers_and_Intractability"
                  className="italic underline"
                >
                  Computers and Intractability: A Guide to the Theory of
                  NP-Completeness
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
