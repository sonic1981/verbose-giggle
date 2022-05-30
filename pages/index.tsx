import Head from 'next/head'
import Building from '../components/building'



export default function Home() {
  return (
    <>
      <Head>
        <title>Sero automation test engineer technical test </title>
        <meta name="description" content="Sero automation test engineer technical test v1" />
      </Head>
      <div className="bg-brand-neutral flex justify-items-stretch items-center flex-col h-full">
        <div className="max-w-[1024px] bg-white w-[1024px] h-full p-6">
          <Building />
        </div>
      </div>
      </>
     
  )
}
