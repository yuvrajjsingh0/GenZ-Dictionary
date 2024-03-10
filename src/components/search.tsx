import React, { useState } from 'react'
import Image from 'next/image'
import genz from '../assets/genz.webp'

export const Search = ({searchAction}:any) => {

    const [searchStr, setSearchStr] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    return (
        <div className="card sm:w-96 bg-base-100 shadow-xl">
            <figure><Image src={genz} alt="GenZ Illustration" /></figure>
            <div className="card-body">
                <h2 className="card-title">Slang</h2>
                <input type="text" onChange={(event) => setSearchStr(event.target.value)} placeholder="Type GenZ Slang Here 🕳️🚶" className="input input-bordered input-lg w-full max-w-xs" />
                <div className="card-actions justify-end">
                    <button onClick={() => {searchAction(searchStr, setIsSearching)}} className="btn btn-primary">
                        {isSearching && <span className="loading loading-spinner"></span>}
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}
