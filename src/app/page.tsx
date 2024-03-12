"use client"
import { Header } from "@/components/header";
import { Search } from "@/components/search";
import { addWaitlist } from "@/services/waitlist.firebase.service";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const router = useRouter();

  const [waitlistEmail, setWaitlistEmail] = useState('');

  const [waitlistSuccess, setWaitlistSuccess] = useState(false);

  const [waitlistLoad, setWaitlistLoad] = useState(false);

  const addToWaitlist = () => {
    setWaitlistLoad(true);
    addWaitlist(waitlistEmail).then(() => {
      setWaitlistLoad(false);
      setWaitlistSuccess(true);
      setTimeout(() => setWaitlistSuccess(false), 3000);
    }).catch(err => console.log(err));
  }
  
  return (
    <>
      <Header/>
      <div className="flex justify-center my-20">
        <div className={`grid grid-cols-1 sm:grid-flow-col gap-10 sm:auto-cols-max mx-0`}>
          <div className="p-4">
            <Search searchAction={(slangQuery: string, setIsSearching:any) => {setIsSearching(true);router.push('/slang/' + slangQuery)}} />
          </div>
        </div>
      </div>

      <div className="hero min-h-64 bg-base-200 py-10">
        <div className="hero-content text-center columns-1">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Join our waitlist</h1>
            <p className="py-6">We're building an interesting way for GenZ's to express themselves with Slangs xD</p>
            <input type="email" onChange={(event) => setWaitlistEmail(event.target.value)} placeholder="Enter your email here" className="input input-bordered input-lg w-full max-w-xs"/>
            <button onClick={() => addToWaitlist()} className="mx-4 my-6 btn btn-primary">
              {waitlistLoad && <span className="loading loading-spinner"></span>}
              Take me in
            </button>
          </div>
        </div>
      </div>

      {waitlistSuccess && <div className="toast">
        <div className="alert alert-success">
          <span>Subscribed to waitlist.</span>
        </div>
      </div>}
      
    </>
  );
}
