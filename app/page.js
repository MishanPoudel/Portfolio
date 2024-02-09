import Link from "next/link";
import Clock from "./components/Clock";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="lg:mx-80 lg:mt-20 mx-4 mt-14 overflow-hidden text-primary select-none">
        <div className="lg:flex lg:w-full lg:h-[21.8em]">
          <div className="shadow-inset rounded-3xl h-[35.5em] w-full mx-1 px-7 pt-9 lg:mr-1 lg:flex lg:h-full lg:w-[31.8vw]">
            <div className="rounded-3xl h-[20.5em] w-auto lg:w-[16.8em] lg:mt-1 lg:h-[17em] lg:mr-7">
              <Image
                src="https://source.unsplash.com/featured/?cat"
                alt="Random Cat Image"
                height={500}
                width={500}
                className="h-[35.5vh] w-full rounded-tl-3xl rounded-br-3xl z-0 lg:h-full"
              />
            </div>
            <div className="rounded-3xl w-auto h-32 ">
              <div className="flex flex-col justify-center mt-12">
                <div className="text-sm opacity-75">Web Developer</div>
                <div className="text-4xl font-semibold font-sans my-1">
                  Mishan Poudel
                </div>
                <div className="text-sm opacity-75 text-balanced mt-2 w-64">
                  I am a Web Developer and I love to build websites
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:ml-5 lg:flex-col ml-3 lg:w-1/2">
            <div className="lg:h-12">
              <div className="shadow-inset rounded-3xl h-[3.5em] w-auto mt-7 mx-1 px-4 pt-4 lg:mt-0">
                <div class="relative text-md flex overflow-hidden">
                  <div class="animate-marquee whitespace-nowrap">
                    <span class="mx-4">Latest Work and Feature</span>
                    <span class="mx-4">Latest Work and Feature</span>
                    <span class="mx-4">Latest Work and Feature</span>
                  </div>

                  <div class="absolute top-0 animate-marquee2 whitespace-nowrap">
                    <span class="mx-4">Latest Work and Feature</span>
                    <span class="mx-4">Latest Work and Feature</span>
                    <span class="mx-4">Latest Work and Feature</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:flex lg:w-full">
              <div className="shadow-inset rounded-3xl h-[14.5em] w-auto mt-7 mx-1 px-7 pt-9  lg:mr-3 lg:w-1/2 lg:h-[17em]">
                <div className="flex justify-center items-center my-4 lg:my-9">
                  <Image
                    src="/images/WhiteLogo.png"
                    alt="logo"
                    height={150}
                    width={150}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="mt-9">
                    <div className="opacity-75 text-sm uppercase">
                      more about me
                    </div>
                    <div className="text-xl mt-1 font-semibold">
                      Credentials
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-inset rounded-3xl h-[18.9em] w-auto mt-9 lg:mt-7 mx-1 px-7 pt-9 lg:w-1/2 lg:ml-3 lg:h-[17em]">
                <div className="flex justify-center items-center">
                  <Clock />
                </div>
                <div className="flex justify-between items-center">
                  <div className="mt-12 lg:mt-5">
                    <div className="opacity-75 text-sm uppercase">showcase</div>
                    <div className="text-xl mt-1 font-semibold">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex">
          <div className="shadow-inset rounded-3xl h-[13.5em] w-auto mt-7 mx-1 px-7 lg:w-[31.8vw]">
            <div className="flex justify-center items-center h-2/3">
              <div class="slider overflow-hidden">
                <div class="slide-track">
                  <div class="slide shadow-inset rounded-full mx-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="40"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
                      <path d="M15 12v-3"></path>
                    </svg>
                  </div>
                  <div class="slide shadow-inset rounded-full mx-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="40"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z"></path>
                    </svg>
                  </div>
                  <div class="slide shadow-inset rounded-full mx-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 32 32"
                    >
                      <g
                        transform="matrix(.05696 0 0 .05696 .647744 2.43826)"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <circle
                          r="50.167"
                          cy="237.628"
                          cx="269.529"
                          fill="currentColor"
                        />
                        <g stroke="currentColor" stroke-width="24">
                          <path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z" />
                          <path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z" />
                          <path d="M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div class="slide shadow-inset rounded-full mx-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      role="img"
                      viewBox="0 0 24 24"
                      height="40"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path>
                    </svg>
                  </div>
                  <div class="slide shadow-inset rounded-full mx-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="40"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"></path>
                    </svg>
                  </div>
                  <div class="slide shadow-inset rounded-full mx-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 384 512"
                      height="40"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path>
                    </svg>
                  </div>
                  <div class="slide shadow-inset rounded-full mx-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="40"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"></path>
                    </svg>
                  </div>
                  <div class="slide shadow-inset rounded-full mx-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      role="img"
                      viewBox="0 0 24 24"
                      height="40"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                    </svg>
                  </div>
                  {/* <!-- same slides doubled (duplicate) --> */}
                  <div class="slide shadow-inset rounded-full mx-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="40"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path>
                      <path d="M15 12v-3"></path>
                    </svg>
                  </div>
                  <div class="slide shadow-inset rounded-full mx-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="40"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z"></path>
                    </svg>
                  </div>
                  <div class="slide shadow-inset rounded-full mx-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 32 32"
                    >
                      <g
                        transform="matrix(.05696 0 0 .05696 .647744 2.43826)"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <circle
                          r="50.167"
                          cy="237.628"
                          cx="269.529"
                          fill="currentColor"
                        />
                        <g stroke="currentColor" stroke-width="24">
                          <path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z" />
                          <path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z" />
                          <path d="M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div class="slide shadow-inset rounded-full mx-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      role="img"
                      viewBox="0 0 24 24"
                      height="40"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path>
                    </svg>
                  </div>
                  <div class="slide shadow-inset rounded-full mx-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="40"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"></path>
                    </svg>
                  </div>
                  <div class="slide shadow-inset rounded-full mx-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 384 512"
                      height="40"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path>
                    </svg>
                  </div>
                  <div class="slide shadow-inset rounded-full mx-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="40"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"></path>
                    </svg>
                  </div>
                  <div class="slide shadow-inset rounded-full mx-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      role="img"
                      viewBox="0 0 24 24"
                      height="40"
                      width="40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <div className="opacity-75 text-sm uppercase">
                  specilization
                </div>
                <div className="text-xl font-bold">Service Offering</div>
              </div>
            </div>
          </div>
          <div className="shadow-inset rounded-3xl h-[34.3em] w-auto mt-7 mx-1 px-7 pt-9 lg:h-[13.5em] lg:w-full lg:ml-6 lg:flex">
            <div className="h-full px-2 lg:flex lg:justify-around lg:w-full">
              <div className="shadow-inset rounded-3xl h-36 w-full flex flex-col justify-center items-center mb-6 lg:mx-4">
                <div className="text-3xl font-bold">00</div>
                <div className="text-sm opacity-75 mt-2">Years</div>
                <div className="text-sm opacity-75">Experience</div>
              </div>
              <div className="shadow-inset rounded-3xl h-36 w-full flex flex-col justify-center items-center mb-6 lg:mx-4">
                <div className="text-3xl font-bold">+00</div>
                <div className="text-sm opacity-75 mt-2">Clients</div>
                <div className="text-sm opacity-75">Worldwide</div>
              </div>
              <div className="shadow-inset rounded-3xl h-36 w-full flex flex-col justify-center items-center mb-6 lg:mx-4">
                <div className="text-3xl font-bold">+00</div>
                <div className="text-sm opacity-75 mt-2">Total</div>
                <div className="text-sm opacity-75">Projects</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex">
          <div className="shadow-inset rounded-3xl h-[14.6em] w-auto mt-7 mx-1 px-7 pt-9 lg:w-[18.5em] lg:mr-3 lg:h-[16em]">
            <div>
              <div className="flex justify-center items-center my-2">
                <Image
                  src="/images/WhiteLogo.png"
                  alt="logo"
                  height={150}
                  width={150}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="mt-12 lg:mt-[4.5em]">
                  <div className="opacity-75 text-sm uppercase">blog</div>
                  <div className="text-xl mt-1 font-semibold">GFonts</div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-inset rounded-3xl h-[15.5em] w-auto mt-8 mx-1 px-7 pt-9 lg:ml-4 lg:mt-7 lg:h-[16em] lg:w-[39em]">
            <div className="shadow-inset grow rounded-3xl h-1/2 flex justify-around lg:justify-center items-center">
              <a
                className="shadow-inset btn btn-circle mx-4"
                href="https://instagram.com"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
              <a
                className="shadow-inset btn btn-circle mx-4"
                href="https://youtube.com"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 576 512"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
              </a>
              <a
                className="shadow-inset btn btn-circle mx-4"
                href="https://linkedin.com"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                </svg>
              </a>
              <a
                className="shadow-inset btn btn-circle mx-4"
                href="https://github.com"
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 496 512"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              </a>
            </div>
            <div className="flex justify-between items-center">
              <div className="mt-9">
                <div className="opacity-75 text-sm uppercase">stay with me</div>
                <div className="text-xl mt-1 font-semibold">Profile</div>
              </div>
            </div>
          </div>
          <div className="shadow-inset rounded-3xl h-[14.9em] w-auto mt-7 mx-1 px-7 pt-9 lg:h-[16em] lg:ml-5">
            <div className="text-4xl flex flex-col justify-end h-full pb-5">
              <div>Let&apos;s</div>
              <div>
                Work <p className="inline text-blue-500">Together</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-col items-center h-[10em]">
          <div className="text-4xl text-bold">Mishan Poudel</div>
          <div className="flex mt-4 justify-evenly w-[30vh] text-sm">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/work"}>Work</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
          <div className="mt-7 opacity-90 text-sm">
            Created by <p className="inline text-blue-500">Mishan Poudel</p>
          </div>
        </div>
      </main>
    </>
  );
}
