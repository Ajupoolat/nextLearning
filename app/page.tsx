import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from "@/app/ui/home.module.css"
import InvoiceStatus from './ui/invoices/status';
import { lus } from './ui/font';
import Image from 'next/image';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className={styles.shape}>
        {/* <AcmeLogo /> */}
      </div>
      <h1 className={`text-green-700 text-4xl  ${lus.className}`}>hello my name is ajuvad</h1>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-orange-100 px-6 py-10 md:w-2/5 md:px-20">
        <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-red-300">

        </div>
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>

          <h1>hello my  name is ajuvad</h1>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <InvoiceStatus status='pending'/>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
           <Image
        src="/hero-desktop.png"
        width={600}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
      {/* <img src="/hero-desktop.png"
        width={1000}
        height={500}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"/> */}
        </div>
      </div>
    </main>
  );
}
