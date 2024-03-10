'use client'
import { Search } from '@/components/search'
import React, { useEffect } from 'react'

export default async function SlangPage({ children, props }: any) {

    useEffect(() => {
        setTimeout(() => document.getElementById('result')?.scrollIntoView(), 200);
    }, []);

    return (
        <>
            <div className="flex justify-center my-20">
            <div className={`grid grid-cols-1 sm:grid-flow-col gap-10 sm:auto-cols-max mx-0`}>
                <div className="p-4">
                <Search searchAction={{}} />
                </div>
                {children}
            </div>
            </div>    
        </>
    );

}
