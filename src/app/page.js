import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
     <Navbar/>
     <section className="flex justify-center items-center">
      <div className="flex gap-6 py-6">
        <Image 
          width={640} 
          height={360}
          src="/ads1.png"
        />
          <Image
            width={640}
            height={360}
            src="/ads2.png"
          />
      </div>
     </section>
    </main>
  )
}
