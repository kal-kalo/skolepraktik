const Hero = () => {
  return (
    <div className="p-8 bg-[url('/architecture-hero_01.jpg')] h-96 bg-cover bg-center text-base">
      <h1 className="text-center text-white pb-4">Søg efter din drømmebolig</h1>
      <form className="bg-white p-16 max-w-screen-sm mx-auto">
        <div className="pb-2">
          <h2 className="text-accent font-bold pb-4">
            Søg blandt 158 boliger til salg i 74 butikker
          </h2>
          <p>Hvad skal din næste bolig indeholde</p>
        </div>
        <div className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <input
              type="text"
              id="simple-search"
              className="border border-grey text-grey text-sm rounded-lg focus:ring-blue-accent focus:border-accent block w-full p-3"
              placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-accent rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Søg
          </button>
        </div>
      </form>
      {/* Content for the hero section */}
    </div>
  );
};

export default Hero;
