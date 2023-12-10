
/**
 * Renders a navbar component.
 * @param {Object} props - The component props.
 * @param {Function} props.toggle - The function to toggle the navbar.
 * @returns {JSX.Element} The rendered navbar component.
 */
function Navbar({toggle}) {


  return (
    <>
      <div className=" flex flex-row items-center justify-between lg:px-8 md:px-6 px-4 w-[full] h-16">
        <div className="flex flex-row gap-4 items-center">
          <button className="cursor-pointer" onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M0 3C0 2.44687 0.446875 2 1 2H13C13.5531 2 14 2.44687 14 3C14 3.55313 13.5531 4 13 4H1C0.446875 4 0 3.55313 0 3ZM2 8C2 7.44688 2.44688 7 3 7H15C15.5531 7 16 7.44688 16 8C16 8.55312 15.5531 9 15 9H3C2.44688 9 2 8.55312 2 8ZM14 13C14 13.5531 13.5531 14 13 14H1C0.446875 14 0 13.5531 0 13C0 12.4469 0.446875 12 1 12H13C13.5531 12 14 12.4469 14 13Z"
                fill="#002147"
              ></path>
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-[#002147]">Dashboard</h1>
        </div>

        <div className="flex flex-row lg:gap-4 gap-5  items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M9 18C10.2426 18 11.25 16.9926 11.25 15.75H6.75C6.75 16.9926 7.75736 18 9 18Z"
              fill="#002147"
            ></path>
            <path
              d="M10.1196 1.23641C10.1232 1.19976 10.125 1.1626 10.125 1.125C10.125 0.50368 9.62132 0 9 0C8.37868 0 7.875 0.50368 7.875 1.125C7.875 1.1626 7.87684 1.19977 7.88045 1.23642C5.31023 1.7555 3.37503 4.02676 3.37503 6.75C3.37503 7.98481 2.8125 13.5 1.125 14.625H16.875C15.1875 13.5 14.625 7.98481 14.625 6.75C14.625 4.02674 12.6898 1.75548 10.1196 1.23641Z"
              fill="#002147"
            ></path>
            <circle cx="15" cy="4" r="3" fill="#E02006"></circle>
          </svg>
          <a
            href="/#"
            className="border-2 border-[#002147] flex flex-row items-center justify-center rounded-full p-1 lg:px-4 px-5 gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentcolor"
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
            <span className="text-[#002147] text-[16px] font-semibold lg:flex md:hidden hidden items-center">Muh Syazrul</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
