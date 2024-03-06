import React from 'react'

export const SearchResult = ({data}:any) => {

    const colors = ['#fff', '#d7e3fc', '#e1dbd6', '#ffee93', '#fcf5c7', '#adf7b6', '#ffc09f', '#d6eadf', '#dfb2f4'];

  return (
    <div>
        <p className="text-2xl py-4">🤌 {data.word}</p>
        <p className="texy-xl py-4">👉 {data.meaning}</p>
        <p className='text-xl py-4'>Examples 🫶🏻</p>
        {data.examples.map((example: any, i: any) => {
            return (
                <div key={i} style={{backgroundColor: colors[Math.floor(Math.random() * 10)]}} className={`my-2 card sm:w-96 shadow-xl`}>
                    <div className="card-body">
                        <p>{example}</p>
                    </div>
                </div>
            );
        })}
    </div>
  )
}
