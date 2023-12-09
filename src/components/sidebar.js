/**
 * Sidebar component.
 * Renders a sidebar with a logo, search input, and a dashboard link.
 * @returns {JSX.Element} The rendered Sidebar component.
 */
const Sidebar = ({ toggle }) => {
  return (
    <div className=" flex sticky top-0 z-[999] h-[100svh] w-64 border shadow-md rounded-r-[30px]  flex-col justify-between items-center py-6 gap-[50px] bg-white">
      <div className=" flex flex-col items-center gap-14">
        <div className="flex flex-col gap-10 items-center justify-center w-full">
          <span className="lg:hidden md:block block px-2 h-5 w-full  text-[#002147]"><p onClick={toggle} className="text-sm font-semibold cursor-pointer">Close</p></span>
          <div className="logo">
            <svg
              width="97"
              height="14"
              viewBox="0 0 97 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.23654 13.09C5.86054 13.09 4.04254 12.544 2.78254 11.452C1.52254 10.348 0.892539 8.716 0.892539 6.556C0.892539 4.408 1.52254 2.782 2.78254 1.678C4.04254 0.574 5.86054 0.0279996 8.23654 0.0399995L14.7165 0.075999V2.38H8.43454C6.87454 2.38 5.71654 2.71 4.96054 3.37C4.20454 4.03 3.82654 5.092 3.82654 6.556C3.82654 8.02 4.20454 9.088 4.96054 9.76C5.71654 10.42 6.87454 10.75 8.43454 10.75H14.8965V13.09H8.23654ZM16.4246 13V3.73H23.5166C24.5606 3.73 25.3286 3.994 25.8206 4.522C26.3126 5.038 26.5586 5.722 26.5586 6.574V8.5H23.9126V6.898C23.9126 6.178 23.5526 5.818 22.8326 5.818H19.0706V13H16.4246ZM33.0945 13.09C31.4865 13.09 30.2325 12.694 29.3325 11.902C28.4325 11.098 27.9825 9.922 27.9825 8.374C27.9825 6.814 28.4325 5.638 29.3325 4.846C30.2325 4.042 31.4865 3.64 33.0945 3.64H37.5945C38.6505 3.64 39.4545 3.892 40.0065 4.396C40.5705 4.888 40.8525 5.596 40.8525 6.52C40.8525 8.404 39.7665 9.346 37.5945 9.346H30.7905C31.0425 10.462 31.8105 11.02 33.0945 11.02H40.3845V13.09H33.0945ZM33.0945 5.71C31.8585 5.71 31.0965 6.232 30.8085 7.276H37.4685C37.7085 7.276 37.8945 7.204 38.0265 7.06C38.1705 6.916 38.2425 6.718 38.2425 6.466C38.2425 5.962 37.9845 5.71 37.4685 5.71H33.0945ZM53.8874 13H51.2774V0.129999H53.8874V13ZM53.4374 13H47.2274C45.6194 13 44.3654 12.604 43.4654 11.812C42.5654 11.02 42.1154 9.874 42.1154 8.374C42.1154 6.862 42.5654 5.71 43.4654 4.918C44.3654 4.126 45.6194 3.73 47.2274 3.73H53.2574V5.8H47.2274C46.4474 5.8 45.8474 6.016 45.4274 6.448C45.0194 6.868 44.8154 7.51 44.8154 8.374C44.8154 9.226 45.0194 9.868 45.4274 10.3C45.8474 10.72 46.4474 10.93 47.2274 10.93H53.4374V13ZM55.8699 13V3.73H58.4799V13H55.8699ZM55.8519 2.2V0.165999H58.4979V2.2H55.8519ZM65.2818 13C64.2378 13 63.4698 12.742 62.9778 12.226C62.4858 11.698 62.2398 11.008 62.2398 10.156V5.8H59.5578V3.73H62.2398V0.885999H64.8498V3.73H68.7018V5.8H64.8498V9.832C64.8498 10.564 65.2098 10.93 65.9298 10.93H69.2058V13H65.2818ZM76.0306 13L81.8266 0.129999H86.2726L92.0686 13H88.9366L87.7126 10.282H80.3866L79.1626 13H76.0306ZM81.4306 7.942H86.6686L84.1666 2.38H83.9326L81.4306 7.942ZM93.511 13V0.129999H96.391V13H93.511Z"
                fill="#002147"
              ></path>
            </svg>
          </div>
        </div>

        <div className=" flex flex-col gap-6 items-center">
          <span
            className="group relative  bg-[#F2F4F6] h-[48px] w-[200px] border rounded-xl border-[#D1D5DB] flex flex-row items-center"
            tabIndex={0}
          >
            <span className=" left-2 absolute h-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              >
                <path
                  d="M17.7552 15.5648L14.2499 12.0595C14.0917 11.9013 13.8772 11.8134 13.6522 11.8134H13.0791C14.0495 10.5723 14.6261 9.01121 14.6261 7.31304C14.6261 3.27329 11.3528 0 7.31303 0C3.27329 0 0 3.27329 0 7.31304C0 11.3528 3.27329 14.6261 7.31303 14.6261C9.01121 14.6261 10.5723 14.0495 11.8134 13.0791V13.6522C11.8134 13.8772 11.9013 14.0917 12.0595 14.2499L15.5648 17.7552C15.8953 18.0857 16.4297 18.0857 16.7567 17.7552L17.7517 16.7602C18.0822 16.4297 18.0822 15.8953 17.7552 15.5648ZM7.31303 11.8134C4.82731 11.8134 2.81271 9.80228 2.81271 7.31304C2.81271 4.82731 4.82379 2.81271 7.31303 2.81271C9.79876 2.81271 11.8134 4.82379 11.8134 7.31304C11.8134 9.79876 9.80228 11.8134 7.31303 11.8134Z"
                  fill="#002147"
                  fillOpacity="0.5"
                ></path>
              </svg>
            </span>

            <input
              type="search"
              name="search"
              id="1"
              placeholder="Search"
              className=" w-[100%] text-sm  pl-10 border-0 absolute h-full right-0 outline-none rounded-xl bg-transparent focus:border focus:ring focus:ring-[#112346]"
            />
          </span>

          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="/#"
                className="bg-[#002147] text-white rounded-lg h-[56px] w-[223px] border border-[#002147] px-2 flex flex-row items-center gap-3"
              >
                <svg
                  className="flex items-center justify-center text-[#F2F4F6] shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <g clipPath="url(#clip0_1_98)">
                    <path
                      d="M17.9937 7.98746C17.9937 8.54996 17.525 8.99058 16.9937 8.99058H15.9937L16.0156 13.9968C16.0156 14.0812 16.0094 14.1656 16 14.25V14.7531C16 15.4437 15.4406 16.0031 14.75 16.0031H14.25C14.2156 16.0031 14.1813 16.0031 14.1469 16C14.1031 16.0031 14.0594 16.0031 14.0156 16.0031H13H12.25C11.5594 16.0031 11 15.4437 11 14.7531V14.0031V12.0031C11 11.45 10.5531 11.0031 10 11.0031H8C7.44688 11.0031 7 11.45 7 12.0031V14.0031V14.7531C7 15.4437 6.44063 16.0031 5.75 16.0031H5H4.00313C3.95625 16.0031 3.90937 16 3.8625 15.9968C3.825 16 3.7875 16.0031 3.75 16.0031H3.25C2.55938 16.0031 2 15.4437 2 14.7531V11.2531C2 11.225 2 11.1937 2.00312 11.1656V8.99058H1C0.4375 8.99058 0 8.55308 0 7.98746C0 7.70621 0.09375 7.45621 0.3125 7.23746L8.325 0.253082C8.54375 0.0343323 8.79375 0.00308228 9.0125 0.00308228C9.23125 0.00308228 9.48125 0.0655823 9.66875 0.221832L17.65 7.23746C17.9 7.45621 18.025 7.70621 17.9937 7.98746Z"
                      fill="currentcolor"
                    ></path>
                  </g>
                  <defs>
                    <clippath id="clip0_1_98">
                      <rect
                        width="18"
                        height="16"
                        fill="white"
                        transform="translate(0 0.00308228)"
                      ></rect>
                    </clippath>
                  </defs>
                </svg>
                <p className="text-sm font-semibold">Dashboard</p>
              </a>
            </li>

            <li className="group">
              <a
                href="/#"
                className=" text-[#4C5564] hover:bg-[#002147] hover:text-white rounded-lg h-[56px] w-[223px] px-2 flex flex-row items-center gap-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentcolor"
                  className="text-gray-400 group-hover:text-white shrink-0 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <g clipPath="url(#clip0_1_102)">
                    <path
                      d="M14 8.00308C14 7.21515 13.8448 6.43494 13.5433 5.70698C13.2417 4.97903 12.7998 4.31759 12.2426 3.76044C11.6855 3.20329 11.0241 2.76133 10.2961 2.45981C9.56815 2.15828 8.78793 2.00308 8 2.00308C7.21207 2.00308 6.43185 2.15828 5.7039 2.45981C4.97595 2.76133 4.31451 3.20329 3.75736 3.76044C3.20021 4.31759 2.75825 4.97903 2.45672 5.70698C2.15519 6.43494 2 7.21515 2 8.00308C2 8.79101 2.15519 9.57123 2.45672 10.2992C2.75825 11.0271 3.20021 11.6886 3.75736 12.2457C4.31451 12.8029 4.97595 13.2448 5.7039 13.5464C6.43185 13.8479 7.21207 14.0031 8 14.0031C8.78793 14.0031 9.56815 13.8479 10.2961 13.5464C11.0241 13.2448 11.6855 12.8029 12.2426 12.2457C12.7998 11.6886 13.2417 11.0271 13.5433 10.2992C13.8448 9.57123 14 8.79101 14 8.00308ZM0 8.00308C0 5.88135 0.842855 3.84652 2.34315 2.34623C3.84344 0.845937 5.87827 0.00308228 8 0.00308228C10.1217 0.00308228 12.1566 0.845937 13.6569 2.34623C15.1571 3.84652 16 5.88135 16 8.00308C16 10.1248 15.1571 12.1596 13.6569 13.6599C12.1566 15.1602 10.1217 16.0031 8 16.0031C5.87827 16.0031 3.84344 15.1602 2.34315 13.6599C0.842855 12.1596 0 10.1248 0 8.00308ZM8 10.5031C8.66304 10.5031 9.29893 10.2397 9.76777 9.77085C10.2366 9.30201 10.5 8.66612 10.5 8.00308C10.5 7.34004 10.2366 6.70416 9.76777 6.23532C9.29893 5.76647 8.66304 5.50308 8 5.50308C7.33696 5.50308 6.70107 5.76647 6.23223 6.23532C5.76339 6.70416 5.5 7.34004 5.5 8.00308C5.5 8.66612 5.76339 9.30201 6.23223 9.77085C6.70107 10.2397 7.33696 10.5031 8 10.5031ZM8 3.50308C9.19347 3.50308 10.3381 3.97719 11.182 4.8211C12.0259 5.66502 12.5 6.80961 12.5 8.00308C12.5 9.19656 12.0259 10.3411 11.182 11.1851C10.3381 12.029 9.19347 12.5031 8 12.5031C6.80653 12.5031 5.66193 12.029 4.81802 11.1851C3.97411 10.3411 3.5 9.19656 3.5 8.00308C3.5 6.80961 3.97411 5.66502 4.81802 4.8211C5.66193 3.97719 6.80653 3.50308 8 3.50308ZM7 8.00308C7 7.73787 7.10536 7.48351 7.29289 7.29598C7.48043 7.10844 7.73478 7.00308 8 7.00308C8.26522 7.00308 8.51957 7.10844 8.70711 7.29598C8.89464 7.48351 9 7.73787 9 8.00308C9 8.2683 8.89464 8.52265 8.70711 8.71019C8.51957 8.89773 8.26522 9.00308 8 9.00308C7.73478 9.00308 7.48043 8.89773 7.29289 8.71019C7.10536 8.52265 7 8.2683 7 8.00308Z"
                      fill="currentcolor"
                    ></path>
                  </g>
                  <defs>
                    <clippath id="clip0_1_102">
                      <rect
                        width="16"
                        height="16"
                        fill="currentcolor"
                        transform="translate(0 0.00308228)"
                      ></rect>
                    </clippath>
                  </defs>
                </svg>
                <p className="text-sm font-semibold">Customers</p>
              </a>
            </li>

            <li className="group">
              <a
                href="/#"
                className=" text-[#4C5564] hover:bg-[#002147] hover:text-white rounded-lg h-[56px] w-[223px] px-2 flex flex-row items-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentcolor" className="text-gray-400 group-hover:text-white shrink-0 flex items-center justify-center" aria-hidden="true"><path d="M2 2.00308C2 1.44996 1.55313 1.00308 1 1.00308C0.446875 1.00308 0 1.44996 0 2.00308V12.5031C0 13.8843 1.11875 15.0031 2.5 15.0031H15C15.5531 15.0031 16 14.5562 16 14.0031C16 13.45 15.5531 13.0031 15 13.0031H2.5C2.225 13.0031 2 12.7781 2 12.5031V2.00308ZM14.7063 4.70933C15.0969 4.31871 15.0969 3.68433 14.7063 3.29371C14.3156 2.90308 13.6812 2.90308 13.2906 3.29371L10 6.58746L8.20625 4.79371C7.81563 4.40308 7.18125 4.40308 6.79063 4.79371L3.29063 8.29371C2.9 8.68433 2.9 9.31871 3.29063 9.70933C3.68125 10.1 4.31563 10.1 4.70625 9.70933L7.5 6.91871L9.29375 8.71246C9.68437 9.10308 10.3188 9.10308 10.7094 8.71246L14.7094 4.71246L14.7063 4.70933Z" fill="currentcolor"></path></svg>
                <p className="text-sm font-semibold">Insights</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="group">
        <a
          href="/#"
          className=" text-[#4C5564] hover:bg-[#002147] hover:text-white rounded-lg h-[56px] w-[223px] px-2 flex flex-row items-center gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentcolor"
            className="shrink-0 items-center justify-center text-gray-400 group-hover:text-white"
            aria-hidden="true"
          >
            <g clipPath="url(#clip0_1_115)">
              <path
                d="M8 9C9.19347 9 10.3381 8.52589 11.182 7.68198C12.0259 6.83807 12.5 5.69347 12.5 4.5C12.5 3.30653 12.0259 2.16193 11.182 1.31802C10.3381 0.474106 9.19347 0 8 0C6.80653 0 5.66193 0.474106 4.81802 1.31802C3.97411 2.16193 3.5 3.30653 3.5 4.5C3.5 5.69347 3.97411 6.83807 4.81802 7.68198C5.66193 8.52589 6.80653 9 8 9ZM5.04063 10C2.25625 10 0 12.2562 0 15.0406C0 15.5719 0.43125 16 0.959375 16H15.0406C15.5719 16 16 15.5687 16 15.0406C16 12.2562 13.7438 10 10.9594 10H5.04063Z"
                fill="currentcolor"
              ></path>
            </g>
            <defs>
              <clippath id="clip0_1_115">
                <rect width="16" height="16" fill="currentcolor"></rect>
              </clippath>
            </defs>
          </svg>
          <p className="text-sm font-semibold">My Profile</p>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
