export default function Home() {
  return (
    <>
      <main className="mx-4 md:mx-8 lg:mx-60 lg:mt-6 mt-9">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:h-[35vh] h-[61.5vh] flex-grow shadow-inset rounded-3xl mb-4 lg:mb-0">
            About
          </div>
          <div className="flex flex-col lg:w-1/2">
            <div className="shadow-inset flex rounded-3xl justify-end mb-4 lg:mb-2 lg:h-10 items-center px-2">
            Latest Work and Feature
            </div>
            <div className="flex flex-col grow lg:flex-row lg:mt-2">
              <div className="shadow-inset rounded-3xl mb-4 lg:mb-0 lg:w-1/2">
                About me
              </div>
              <div className="shadow-inset lg:w-1/2 rounded-3xl">
                Clock
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:mt-5">
          <div className="flex-grow lg:w-1/2 h-52 rounded-3xl shadow-inset mb-4 lg:mb-0">
            Specialization
          </div>
          <div className="grow h-52 rounded-3xl shadow-inset lg:w-[35vw] md:w-full">
            <div className="flex justify-around items-center h-full px-2">
              <div className="shadow-inset rounded-3xl h-36 w-40">
                Years
              </div>
              <div className="shadow-inset rounded-3xl h-36 w-40">
                Clients
              </div>
              <div className="shadow-inset rounded-3xl h-36 w-40">
                Projects
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row h-64">
          <div className="shadow-inset grow rounded-3xl mb-4 lg:mb-0">
            Blog
          </div>
          <div className="shadow-inset grow rounded-3xl lg:w-1/4 px-3 py-5 mb-4 lg:mb-0">
            <div className="shadow-inset grow rounded-3xl h-1/2">
              Connections
            </div>
            Profile
          </div>
          <div className="shadow-inset rounded-3xl lg:w-[16vw]">
            Work together
          </div>
        </div>
        <div className="lg:mt-24 lg:mb text-3xl font-bold text-center">Mishan Poudel</div>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-evenly w-full my-8 md:w-auto">
            <div className="mb-2 md:mb-0 md:mr-4">Home</div>
            <div className="mb-2 md:mb-0 md:mr-4">About</div>
            <div className="mb-2 md:mb-0 md:mr-4">Work</div>
            <div className="mb-2 md:mb-0">Contact</div>
          </div>
        </div>
        <div className="text-center m-5 lg:mb-32">Created by <span className="text-blue-400">Mishan Poudel</span></div>
      </main>
    </>
  );
}
