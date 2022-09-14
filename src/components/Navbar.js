
function Navbar() {
  return (
    <header class="text-black">
      <section class="container flex flex-wrap px-5 lg:px-0 py-6 flex-col md:flex-row items-center">
      {/* <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a class="mr-5 cursor-pointer">Feature</a>
          <a class="mr-5 cursor-pointer">Resources</a>
          <a class="mr-5 cursor-pointer">Pricing</a>
          <a class="cursor-pointer">Enterprise</a>
        </nav>  */}
        
        <aside class="lg:w-2/5 inline-flex ml-5 lg:ml-0">
          <button class="inline-flex items-center bg-white text-black border-2 border-black py-1 px-5 focus:outline-none rounded-full text-base mt-4 md:mt-0">Sign in </button>
          <button class="inline-flex items-center bg-black text-white border-0 py-1 px-5 focus:outline-none rounded-full text-base mt-4 ml-4 md:mt-0">Sign up </button>
        </aside>
      </section>
    </header>
  )
}

export default Navbar