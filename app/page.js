import Clock from "./components/Clock";

export default function Home() {
  return (
    <>
      <main className="mx-4 md:mx-8 lg:mx-64 lg:mt-10 mt-9">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:h-[36.5vh] lg:w-[35.5vw] lg:flex h-[61.5vh] shadow-inset rounded-3xl mb-4 lg:mb-0 relative">
            <img
              src="https://source.unsplash.com/500x600/?cat"
              alt="Random Cat Image"
              className="h-[28vh] mt-10 ml-7 rounded-tl-3xl rounded-br-3xl z-0 object-cover"
            />
            <div className="flex flex-col justify-center ml-7">
              <div className="text-md opacity-75">Web Developer</div>
              <div className="text-3xl font-bold font-sans my-2">
                Mishan Poudel
              </div>
              <div className="text-md opacity-75 w-[18vw] text-balance">
                I am a Web Developer and I love to build websites
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-1/2">
            <div className="shadow-inset flex rounded-3xl justify-end mb-4 lg:mb-2 lg:h-10 items-center px-2">
              Latest Work and Feature
            </div>
            <div className="flex flex-col grow lg:flex-row lg:mt-2">
              <div className="shadow-inset rounded-3xl mb-4 lg:mb-0 lg:w-1/2">
                <div className="flex justify-center items-center h-2/3">
                  <img
                    src="/images/png/WhiteLogo.png"
                    alt="logo"
                    className="p-12"
                  />
                </div>
                <div className="ml-6">
                  <div className="opacity-75 text-sm uppercase">
                    more about me
                  </div>
                  <div className="text-xl">Credentials</div>
                </div>
              </div>
              <div className="shadow-inset lg:w-1/2 rounded-3xl lg:mb-0">
                <div className="flex justify-center items-center h-2/3">
                  <div>
                  <Clock/>
                  </div>
                </div>
                <div className="ml-6">
                  <div className="opacity-75 text-sm uppercase">showcase</div>
                  <div className="text-xl">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:mt-5">
          <div className="lg:w-[75vw] h-52 rounded-3xl shadow-inset mb-4 lg:mb-0">
            <div className="flex justify-center items-center h-2/3">
              {/* Add your content */}
            </div>
            <div className="ml-6">
              <div className="opacity-75 text-sm uppercase">specilization</div>
              <div className="text-xl">Service Offering</div>
            </div>
          </div>
          <div className=" h-52 rounded-3xl shadow-inset lg:w-full">
            <div className="flex justify-around items-center h-full px-2">
              <div className="shadow-inset rounded-3xl h-36 w-40 flex flex-col justify-center items-center align-middle">
                <div className="text-3xl font-bold">00</div>
                <div className="text-sm opacity-75 mt-2">Years</div>
                <div className="text-sm opacity-75">Experience</div>
              </div>
              <div className="shadow-inset rounded-3xl h-36 w-40 flex flex-col justify-center items-center">
                <div className="text-3xl font-bold">+00</div>
                <div className="text-sm opacity-75 mt-2">Clients</div>
                <div className="text-sm opacity-75">Worldwide</div>
              </div>
              <div className="shadow-inset rounded-3xl h-36 w-40 flex flex-col justify-center items-center">
                <div className="text-3xl font-bold">+00</div>
                <div className="text-sm opacity-75 mt-2">Total</div>
                <div className="text-sm opacity-75">Projects</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row h-64">
          <div className="shadow-inset rounded-3xl mb-4 lg:mb-0 lg:w-[17vw]">
            <div className="flex justify-center items-center h-2/3">
              <div src="/images/png/WhiteLogo.png" alt="logo" className="p-12" />
            </div>
            <div className="ml-6">
              <div className="opacity-75 text-sm uppercase">blog</div>
              <div className="text-xl">GFonts</div>
            </div>
          </div>
          <div className="shadow-inset grow rounded-3xl lg:w-1/4 px-3 py-5 mb-4 lg:mb-0">
            <div className="shadow-inset grow rounded-3xl h-1/2">
                            {/* Add your content */}
            </div>
            <div className="ml-6 mt-7">
              <div className="opacity-75 text-sm uppercase">stay with me</div>
              <div className="text-xl">Profile</div>
            </div>
          </div>
          <div className="shadow-inset rounded-3xl lg:w-[16vw]">
            <div className="ml-6 text-3xl flex flex-col justify-end h-full pb-5">
              <div>Let's</div>
              <div>Work</div>
              <div>Together</div>
            </div>
          </div>
        </div>
        <div className="lg:mt-24 lg:mb text-3xl font-bold text-center">
          Mishan Poudel
        </div>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-evenly w-full mb-2 my-8 md:w-auto">
            <div className="mb-2 md:mb-0 md:mr-4">Home</div>
            <div className="mb-2 md:mb-0 md:mr-4">About</div>
            <div className="mb-2 md:mb-0 md:mr-4">Work</div>
            <div className="mb-2 md:mb-0">Contact</div>
          </div>
        </div>
        <div className="text-center m-5 lg:mb-32">
          Created by <span className="text-blue-400">Mishan Poudel</span>
        </div>
      </main>
    </>
  );
}
