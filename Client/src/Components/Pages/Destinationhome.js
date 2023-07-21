import React from 'react'

export const Destinationhome = () => {
  return (
    <div>
 
 <div class="container mx-auto px-5 my-2 lg:px-14 lg:mt-16 mt-9">
  <div class="lg:flex flex-none">
    <h1 class="home-title">TOP DESTINATIONS</h1>
    <a class="lg:flex hidden ml-auto gap-2 items-center cursor-pointer" href="/destinations">
      <p class="home-subtitle">All Destinations</p>
      <img alt="Arrow" loading="lazy" width="15" height="15" decoding="async" data-nimg="1" src="/_next/static/media/arrow.1f7ebfaf.svg" style={{color: "transparent"}}/>
    </a>
  </div>
  <div class="grid  md:grid-cols-2 lg:grid-cols-3 gap-4 grid-cols-1 lg:mt-8 mt-5">
   
    <div class="relative shadow-lg border cursor-pointer lg:rounded-2xl rounded-lg">
      <a class="" href="/destinations/chikmagalur">
        <div class="lg:rounded-2xl h-full rounded-lg block align-bottom object-cover" style={{backgroundColor: "#E5E7EB"}}></div>
        <div class="flex absolute rounded-lg lg:rounded-2xl bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none flex-col p-4 cursor-pointer">
          <div class="mt-auto pointer-events-auto">
            <p class="font-poppins font-normal md:text-base text-xs text-white">KARNATAKA</p>
            <p class="font-poppins font-semibold md:text-lg text-sm truncate text-white">CHIKMAGALUR</p>
          </div>
        </div>
      </a>
    </div>
   
    <div class="grid grid-row-2 gap-4">
      <div class="relative">
        <a href="/destinations/goa">
          <div class="lg:rounded-2xl h-full block rounded-lg object-cover align-bottom" style={{backgroundColor: "#E5E7EB"}}></div>
        </a>
      </div>
    </div>
   
  </div>
</div>



    </div>
  )
}
