import React from 'react'

function Feed() {
    const COUNTER = 6
    const Feed =()=>(
        <main className="border border-blue-300 shadow rounded-2xl p-4 w-72 h-72 xxs:ml-2 mx-auto mt-6 bg-primary">
            <section className="animate-pulse flex space-x-4">
                <figure className="flex-1 space-y-6 py-1">
                    <figure className="h-2 bg-blue rounded"></figure>
                    <figure className="space-y-3">
                        <figure className="grid grid-cols-3 gap-4 mt-10">
                            <figure className="h-2 bg-blue rounded col-span-2"></figure>
                            <figure className="h-2 bg-pink rounded col-span-1"></figure>
                        </figure>
                        <figure className="h-2 bg-Yellow rounded"></figure>
                    </figure>
                </figure>
            </section>
        </main> 
        )
  return Array(COUNTER).fill(<Feed />)    

}

export default Feed
