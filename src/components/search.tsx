import React, { useState } from 'react'
import Image from 'next/image'
import genz from '../assets/genz.webp'

export const Search = ({searchAction}:any) => {

    const [searchStr, setSearchStr] = useState('');

    return (
        <div className="card sm:w-96 bg-base-100 shadow-xl">
            <figure><Image src={genz} alt="GenZ Illustration" /></figure>
            <div className="card-body">
                <h2 className="card-title">Slang</h2>
                <input type="text" onChange={(event) => setSearchStr(event.target.value)} placeholder="Type GenZ Slang Here 🕳️🚶" className="input input-bordered input-lg w-full max-w-xs" />
                <div className="card-actions justify-end">
                    <button onClick={() => searchAction(searchStr)} className="btn btn-primary">
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}
