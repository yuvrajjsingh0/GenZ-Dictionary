'use client'
import { Search } from '@/components/search'
import { analytics } from '@/util/firebase';
import { logEvent } from 'firebase/analytics';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export default function SlangPage(props: any) {

    const router = useRouter();

    useEffect(() => {
        analytics && logEvent(analytics, 'page_view', {
            page_title: props.params.slang,
            page_path: "/slang/" + props.params.slang,
        });

        setTimeout(() => document.getElementById('result')?.scrollIntoView(), 200);
    }, []);

    const processSearch = (slangQuery: string, setIsSearching:any) => {
        console.log(props);
        if(slangQuery != props.params.slang){
            setIsSearching(true);
        }
        router.push('/slang/' + slangQuery)
    }

    return (
        <>
            <div className="flex justify-center my-20">
                <div className={`grid grid-cols-1 sm:grid-flow-col gap-10 sm:auto-cols-max mx-0`}>
                    <div className="p-4">
                        <Search searchAction={processSearch} />
                    </div>
                    {props.children}
                </div>
            </div>    
        </>
    );

}
