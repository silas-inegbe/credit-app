import "./index.css";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import UserTable from "./components/users";
import { useState } from "react";
import CompanyTable from "./components/company";
import TagDivs from "./components/tab"
function App() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className=" flex flex-row overflow-x-hidden ">
      <div className="">
        <Sidebar />
      </div>
      <div className="[ml-64] w-full right-0  overflow-x-auto ">
        <Navbar />
        <div className="mt-16  lg:px-[2%] px-7 flex flex-col overflow-x-auto overflow-y-hidden">
          <div className="flex flex-row gap-1">
            <button
              onClick={() => handleTabClick(1)}
              className={` h-11 px-4 font-semibold text-sm  text-[#002147] rounded-t-2xl justify-center flex items-center ${activeTab === 1 ? 'bg-[#002147] text-white' : 'bg-[#f5f8ff]'
                }`}>
              Borrowers
            </button>
            <button
              onClick={() => handleTabClick(2)}
              className={` h-11 px-4 font-semibold text-sm  text-[#002147] rounded-t-2xl justify-center flex items-center ${activeTab === 2 ? 'bg-[#002147] text-white' : 'bg-[#f5f8ff]'
                }`}>
              Business Customers
            </button>
          </div>

          <div className="flex flex-col lg:px-12 px-1 py-5 w-full bg-white overflow-x-auto overflow-y-hidden gap-1 rounded-r-xl rounded-bl-xl">
            <span className="lg:px-[2px] px-4 w-fit text-lg font-semibold">
              {
                activeTab === 1 ? 'Borrowers' : 'Business Customers'}

            </span>
            <div className="w-full py-5">
              <div className="lg:flex md:flex flex-col space-y-4 lg:px-0 px-4 lg:flex-row md:flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <span className="text-sm text-[#002147]">Show</span>
                  <select className="border-2 border-[#D1D5DB] rounded-md px-2 py-1 text-sm">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="30">40</option>
                    <option value="30">50</option>
                  </select>
                  <span className="text-sm text-[#002147]">entries</span>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <div className="flex flex-row gap-2 items-center">
                    <span className="text-sm text-[#002147]">Search</span>
                    <input
                      className="border-2 border-[#D1D5DB] rounded-md px-2 py-2 text-sm"
                      type="text"
                    />
                  </div>
                  <div className="shadow-md border-[1px] border-[#f5f8ff] rounded-md h-10 w-36 flex items-center justify-between px-2">
                    <span>filter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      data-v-669ada12=""
                    >
                      <path
                        d="M0.0914058 1.78672C0.246093 1.45859 0.574218 1.25 0.9375 1.25H11.0625C11.4258 1.25 11.7539 1.45859 11.9086 1.78672C12.0633 2.11484 12.0164 2.50156 11.7867 2.78281L7.5 8.02109V11C7.5 11.2836 7.34062 11.5437 7.08516 11.6703C6.82969 11.7969 6.52734 11.7711 6.3 11.6L4.8 10.475C4.61016 10.3344 4.5 10.1117 4.5 9.875V8.02109L0.210937 2.78047C-0.0164067 2.50156 -0.0656254 2.1125 0.0914058 1.78672Z"
                        fill="#002147"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className=" my-4 w-full overflow-x-auto overflow-y-hidden flex flex-col space-y-6">
              { activeTab === 1 && <UserTable />}
              { activeTab === 2 && <CompanyTable/>}

              <span className="my-5">
                <ol className="flex justify-center gap-1 text-xs font-medium">
                  <li>
                    <a
                      href="/#"
                      className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/#"
                      className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    >
                      1
                    </a>
                  </li>

                  <li className="block h-8 w-8 rounded border-[#002147] bg-[#002147] text-center leading-8 text-white">
                    2
                  </li>

                  <li>
                    <a
                      href="/#"
                      className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    >
                      3
                    </a>
                  </li>

                  <li>
                    <a
                      href="/#"
                      className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    >
                      4
                    </a>
                  </li>

                  <li>
                    <a
                      href="/#"
                      className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ol>
              </span>
            </div>

            <TagDivs/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
