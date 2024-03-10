"use client"
import { Header } from "@/components/header";
import { Search } from "@/components/search";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

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
      
    </>
  );
}
