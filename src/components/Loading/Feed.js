import React from 'react'

function Feed() {
    const COUNTER = 6
    const Feed =()=>(
        <main class="border border-blue-300 shadow rounded-2xl p-4 w-72 h-72 mx-auto mt-6 bg-primary">
            <section class="animate-pulse flex space-x-4">
                <figure class="flex-1 space-y-6 py-1">
                    <figure class="h-2 bg-blue rounded"></figure>
                    <figure class="space-y-3">
                        <figure class="grid grid-cols-3 gap-4 mt-10">
                            <figure class="h-2 bg-blue rounded col-span-2"></figure>
                            <figure class="h-2 bg-pink rounded col-span-1"></figure>
                        </figure>
                        <figure class="h-2 bg-Yellow rounded"></figure>
                    </figure>
                </figure>
            </section>
        </main> 
        )
  return Array(COUNTER).fill(<Feed />)    

}

export default Feed