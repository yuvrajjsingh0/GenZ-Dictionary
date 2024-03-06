"use client"
import { Header } from "@/components/header";
import { SearchResult } from "@/components/result";
import { Search } from "@/components/search";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [numberColsMain, setNumberColsMain] = useState(1);
  const [slangQuery, setSlangQuery] = useState('');

  const sampleResult: any = {
    id: 404,
    word: 'Noob',
    meaning: 'Beginner',
    examples: ['Shivam is absolutely noob at everything.',
    'The noob tried to microwave a pizza and ended up with a charcoal frisbee.',
    'She\'s such a noob that she thought RAM was a type of truck.',
    'She\'s such a noob that she tried to copy and paste a physical book.']
  }
  
  const processSearch = (slangQuery: string) => {
    if(slangQuery.length > 0){
      setNumberColsMain(2);
      setSlangQuery(slangQuery);
    }
  }

  return (
    <>
      <Header/>
      <div className="flex justify-center my-20">
        <div className={`grid grid-cols-1 sm:grid-flow-col gap-10 sm:auto-cols-max mx-0`}>
          <div className="p-4">
            <Search searchAction={processSearch} resultSection='#result' />
          </div>
          {slangQuery.length != 0 && (
            <div className="p-4" id="result">
              <SearchResult data={sampleResult}/>
            </div>
          )}
        </div>
      </div>
      
    </>
  );
}
