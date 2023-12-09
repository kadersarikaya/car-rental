import Button from '@/components/Button'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className="flex justify-center items-center flex-col px-4">
        <div>
          <div className="flex justify-center items-center md:gap-3 py-6">
            <Image
              className="md:w-1/2"
              width={640}
              height={360}
              src="/ads1.png"
            />
            <Image
            className="hidden md:w-1/2 md:block"
              width={640}
              height={360}
              src="/ads2.png"
            />
          </div>
          <div className="flex py-7 justify-between">
            <p className="text-gray-400 font-semibold text-base">Popular Cars</p>
            <p className="text-indigo-600 font-semibold cursor-pointer justify-end">View All</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="py-7">
            <p className="text-gray-400 font-semibold text-base">Recommendation Cars</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="py-16 flex justify-center">
            <Button btntext="Show more car" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
