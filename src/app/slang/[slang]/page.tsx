import { Header } from '@/components/header'
import { ResultSection } from '@/components/slang/result';
import SlangPage from '@/components/slang/slangPage';
import React from 'react'

export default function Page({ params }: any) {
  return (
      <>
        <Header/>
        <SlangPage params={params}>
          <ResultSection slangQuery={params.slang}></ResultSection>
        </SlangPage>
      </>
  );

}
