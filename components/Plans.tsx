import { CheckIcon } from "@heroicons/react/24/outline"
import { Product } from '@stripe/firestore-stripe-payments'
import Head from "next/head"
import Link from "next/link"
import useAuth from "../hooks/useAuth"
import { useState } from 'react'
import Table from "./Table"


interface Props {
  products: Product[]
  selectedPlan1: true
  selectedPlan2: false
  selectedPlan3: false
}

function Plans({ products,selectedPlan1,selectedPlan2,selectedPlan3 }: Props) {
  const {logout} = useAuth()
  return (
    <div>
    <Head>
    <title>Netflix</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <header className="border-b border-white/10 bg-[#141414]">
      <Link href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
         onClick={logout}
        >
          Sign Out
        </button>
  </header>
  <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 translate-all md:px-10">
    <h1 className="mb-3 text-3xl font-medium">Choose the plan that's right for you</h1>
    <ul>
      <li className="flex items-center gap-x-2 text-lg">
        <CheckIcon className="h-7 w-7 text-[#E50914]" />
        Watch all you want. Ad-free.
      </li>
      <li className="flex items-center gap-x-2 text-lg">
        <CheckIcon className="h-7 w-7 text-[#E50914]" />
        Recommendations just for you.
      </li>
      <li className="flex items-center gap-x-2 text-lg">
        <CheckIcon className="h-7 w-7 text-[#E50914]" />
        Cancel your plan anytime.
      </li>
    </ul>
    <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-end self-end md:w-3/5">
      {/* {products.map((product) => (
              <div
                className={'planBox ${selectedPlan?.id === product.id ? 'opacity-100' : 'opacity-60'} '}
                key={product?.id}
              >
                {product.name}
              </div>
            ))} */}
              <div
                className="planBox"
              >Basic</div>
                <div
                className="planBox"
              >Premium</div>
                <div
                className="planBox"
              >Standard</div>
       </div>
       <Table products={products} selectedPlan1={selectedPlan1} selectedPlan2={selectedPlan2} selectedPlan3={selectedPlan3}/>

      <button  className="mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] ">Subscribe</button>
    </div>

  </main>
  </div>
  )
}

export default Plans