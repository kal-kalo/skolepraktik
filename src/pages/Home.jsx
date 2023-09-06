import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import years38 from "../assets/years38.png";
import Employees from "../components/Employees";
import housessold from "../assets/housessold.svg";
import housesale from "../assets/housesale.svg";
import playstore from "../assets/play-store.svg";
import apple from "../assets/apple.svg";
import phone from "../assets/phone.png";

function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section className="flex gap-6 pt-20 pb-20 p-4">
        <div className="flex-1">
          <img src={years38} alt="38 years" />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-3xl pb-4">
            Vi har fulgt danskerne hjem i snart 4 årtier
          </h2>
          <h3 className="text-xl pt-4 pb-2">Det synes vi siger noget om os!</h3>
          <p className="pb-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has normal distribution.
          </p>
          <p className="pb-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <ul className="flex justify-between pt-8 pb-8">
            <li className="flex gap-4">
              <figure className="bg-[#EEF7FF] aspect-square h-16 p-2 flex justify-center items-center">
                <img src={housessold} className="logo" alt="Dinmaegler logo" />
              </figure>
              <div>
                <p className="font-semibold text-xl">4829</p>
                <p>boliger til salg</p>
              </div>
            </li>
            <li className="flex gap-4">
              <figure className="bg-[#EEF7FF] aspect-square h-16 p-2 flex justify-center items-center">
                <img src={housesale} className="logo" alt="Dinmaegler logo" />
              </figure>
              <div>
                <p className="font-semibold text-xl">158</p>
                <p>boliger til salg</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="p-4">
        <ul className="flex justify-between pt-16 pb-16 gap-8 border-t border-grey">
          <li className="flex gap-4">
            <figure className="bg-[#EEF7FF] aspect-square h-10 p-2 flex justify-center items-center">
              <img src={housessold} className="logo" alt="Dinmaegler logo" />
            </figure>
            <div>
              <h3 className="font-semibold text-xl">Bestil et salgstjek</h3>
              <p>
                Med et Din Mægler Salgstjek bliver du opdateret på værdien af
                din bolig.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <figure className="bg-[#EEF7FF] aspect-square h-10 p-2 flex justify-center items-center">
              <img src={housesale} className="logo" alt="Dinmaegler logo" />
            </figure>
            <div>
              <h3 className="font-semibold text-xl">74 butikker</h3>
              <p>
                Hos Din Mægler er din bolig til salg i alle vores 74 butikker,
                som er fordelt rundt om i Danmark.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <figure className="bg-[#EEF7FF] aspect-square h-10 p-2 flex justify-center items-center">
              <img src={housesale} className="logo" alt="Dinmaegler logo" />
            </figure>
            <div>
              <h3 className="font-semibold text-xl">Tilmeld køberkartotek</h3>
              <p>
                Når du er tilmeldt vores køberkartotek, bliver du kontaktet
                inden en ny bolig bliver annonceret.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="bg-[#EEF7FF] py-16 px-4">
        
        <p className="text-center max-w-md mx-auto">
          There are many variations of passages of Lorem Ipsum available but the
          this in majority have suffered alteration in some
        </p>
        <Gallery />
      </section>
      <section className="flex gap-6 justify-between p-16 bg-accent">
        <p className="flex-1 font-bold text-2xl text-white">
          Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet
        </p>
        <form className="flex-1">
          <label htmlFor="newsletter" className="sr-only">
            Search
          </label>
          <div className="relative">
            <input
              type="search"
              id="newsletter"
              className="block w-full p-4 text-sm text-gray-900 bg-gray-50 rounded-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Indtast din email adresse"
              required
            />
            <button
              type="submit"
              className="absolute right-0 bottom-1.5 px-4 py-2"
            >
              
            </button>
          </div>
        </form>
      </section>
      <section className="py-16">
        
        <p className="text-center max-w-md mx-auto">
          Din Mægler er garant for altid veluddannet assistance i dit boligsalg.
          Kontakt en af vores medarbejdere.
        </p>
        <Employees />
      </section>
      <section className="flex gap-8 text-white pt-16 px-4 bg-accent items-end">
        <div className="flex-1 self-start">
          <h3 className="flex-1 font-bold text-2xl text-white">
            Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet
          </h3>
          <p className="py-6">
            Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den
            ansvarlige mægler eller butik med vores app. Her kan du også se
            statistik på interessen for din bolig i alle vores salgskanaler.
          </p>
          <div className="flex gap-4 py-6">
            <button className="flex gap-2 p-4 bg-white font-semibold text-accent rounded-sm">
              <img src={playstore} className="logo" alt="Dinmaegler logo" />
              Google Play
            </button>
            <button className="flex gap-2 p-4 border font-semibold border-white rounded-sm text-white">
              <img src={apple} className="logo" alt="Dinmaegler logo" />
              Apple Store
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src={phone} className="logo" alt="Dinmaegler logo" />
        </div>
      </section>
      
      <section className="bg-accent px-4 py-4">
        <p className="text-white text-center">Layout By Jit Banik 2020</p>
      </section>
    </>
  );
}

export default Home;


