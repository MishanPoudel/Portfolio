export default function Home() {
  return (
    <>
      <main className="mx-60 my-5 px-2">
        <div className="flex">
          <div className="h-[35vh] flex-grow shadow-inset rounded-3xl">
            {/* About  */}
          </div>
          <div className="flex flex-col w-1/2">
            <div className="shadow-inset flex h-12 rounded-3xl">
              {/* feautre slider */}
              </div>
            <div className="flex flex-grow">
              <div className="shadow-inset grow rounded-3xl">
                {/* about me */}
                </div>
              <div className="shadow-inset w-1/2 rounded-3xl">
                {/* clock */}
                </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-grow w-1/2 h-52 rounded-3xl shadow-inset">
            {/* specilization */}
            </div>
          <div className="grow h-52 rounded-3xl shadow-inset w-1/2">
            <div className="flex justify-even items-center h-full px-2">
              <div className="shadow-inset rounded-3xl h-36 w-40">
                {/* years */}
                </div>
              <div className="shadow-inset rounded-3xl h-36 w-40">
                {/* clients */}
                </div>
              <div className="shadow-inset rounded-3xl h-36 w-40">
                {/* projects */}
                </div>
            </div>
          </div>
        </div>
        <div className="flex h-64">
          <div className="shadow-inset grow rounded-3xl">
            {/* blog */}
            </div>
          <div className="shadow-inset grow rounded-3xl w-1/4 px-3 py-5">
            <div className="shadow-inset grow rounded-3xl h-1/2">
              {/* connections */}
              </div>
            {/* profile */}
            </div>
          <div className="shadow-inset rounded-3xl w-1/4">
            {/* work together */}
            </div>
        </div>
          <div className="mt-20 text-3xl font-bold text-center">Mishan Poudel</div>
        <div className="flex justify-center">
          <div className="flex justify-evenly w-1/3 my-12">
            <div>Home</div>
            <div>About</div>
            <div>Work</div>
            <div>Contact</div>
          </div>
        </div>
        <div className="text-center mt-5">Created by <span className="text-blue-400">Mishan Poudel</span></div>
      </main>
    </>
  );
}
