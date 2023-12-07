import React from "react";
import "./index.css";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

function App() {
  return (
    <main className=" flex flex-col gap-[10vh]">
      <div className="flex flex-row">
        <Sidebar />
        <Navbar />
      </div>

      {/* <div className="hidden">
        <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
          <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="max-w-full overflow-x-auto">
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="bg-blue-400 text-center">
                        <th className="w-1/6 min-w-[160px] border-l border-transparent px-3 py-4 text-lg font-medium text-white lg:px-4 lg:py-7">
                          TLD
                        </th>
                        <th className="w-1/6 min-w-[160px] px-3 py-4 text-lg font-medium text-white lg:px-4 lg:py-7">
                          Duration
                        </th>
                        <th className="w-1/6 min-w-[160px] px-3 py-4 text-lg font-medium text-white lg:px-4 lg:py-7">
                          Registration
                        </th>
                        <th className="w-1/6 min-w-[160px] px-3 py-4 text-lg font-medium text-white lg:px-4 lg:py-7">
                          Renewal
                        </th>
                        <th className="w-1/6 min-w-[160px] px-3 py-4 text-lg font-medium text-white lg:px-4 lg:py-7">
                          Transfer
                        </th>
                        <th className="w-1/6 min-w-[160px] border-r border-transparent px-3 py-4 text-lg font-medium text-white lg:px-4 lg:py-7">
                          Register
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                          .com
                        </td>
                        <td className="border-b border-[#E8E8E8] bg-white px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                          1 Year
                        </td>
                        <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                          $75.00
                        </td>
                        <td className="border-b border-[#E8E8E8] bg-white px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                          $5.00
                        </td>
                        <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                          $10.00
                        </td>
                        <td className="border-b border-r border-[#E8E8E8] bg-white px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                          <a
                            href="/#"
                            className="inline-block rounded-md border border-primary px-6 py-2.5 font-medium text-primary hover:bg-primary hover:text-white"
                          >
                            Sign Up
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                          .com
                        </td>
                        <td className="border-b border-[#E8E8E8] bg-white px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                          1 Year
                        </td>
                        <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                          $75.00
                        </td>
                        <td className="border-b border-[#E8E8E8] bg-white px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                          $5.00
                        </td>
                        <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                          $10.00
                        </td>
                        <td className="border-b border-r border-[#E8E8E8] bg-white px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                          <a
                            href="/#"
                            className="inline-block rounded-md border border-primary px-6 py-2.5 font-medium text-primary hover:bg-primary hover:text-white"
                          >
                            Sign Up
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-b border-l border-[#E8E8E8] bg-[#F3F6FF] px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                          .com
                        </td>
                        <td className="border-b border-[#E8E8E8] bg-white px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                          1 Year
                        </td>
                        <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                          $75.00
                        </td>
                        <td className="border-b border-[#E8E8E8] bg-white px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                          $5.00
                        </td>
                        <td className="border-b border-[#E8E8E8] bg-[#F3F6FF] px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-3 dark:text-dark-7">
                          $10.00
                        </td>
                        <td className="border-b border-r border-[#E8E8E8] bg-white px-2 py-5 text-center text-base font-medium text-dark dark:border-dark dark:bg-dark-2 dark:text-dark-7">
                          <a
                            href="/#"
                            f="/#"
                            className="inline-block rounded-md border border-primary px-6 py-2.5 font-medium text-primary hover:bg-primary hover:text-white"
                          >
                            Sign Up
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}

      <div className="m-auto lg:w-[96%] w-[93%] border-2 flex flex-col overflow-x-auto overflow-y-hidden">
        <div className="flex flex-row gap-1">
          <span className=" h-11 px-4 font-semibold text-sm bg-[#002147] text-white rounded-t-2xl justify-center flex items-center">
            Borrowers
          </span>
          <span className=" h-11 px-4 font-semibold text-sm  text-[#002147] rounded-t-2xl justify-center flex items-center">
            Business Customers
          </span>
        </div>
        <div className="px-8 w-full bg-white">

          <span className="px-2">
            Borrowers list
          </span>
          <table className=" w-[1218px] m-auto">
            <tr className="border-b-2">
              <th className="border-r-2 border-l-2 border-t-2 border-[#002147]">
                Name
              </th>
              <th className="border-r-2 border-t-2 border-[#002147]">Email</th>
              <th className="border-r-2 border-t-2 border-[#002147]">Phone</th>
              <th className="border-r-2 border-t-2 border-[#002147]">
                Address
              </th>
              <th className="border-r-2 border-t-2 border-[#002147]">City</th>
              <th className="border-r-2 border-t-2 border-[#002147]">State</th>
              <th className="border-r-2 border-t-2 border-[#002147]">Zip</th>
              <th className="border-r-2 border-t-2 border-[#002147]">
                Country
              </th>
              <th className="border-r-2 border-t-2 border-[#002147]">Status</th>
              <th className="border-r-2 border-t-2 border-[#002147]">Action</th>
            </tr>
            <tr className="border-b-2">
              <td className="border-r-2 border-l-2 border-t-2 border-[#002147]">
                Name
              </td>
              <td className="border-r-2 border-t-2 border-[#002147]">Email</td>
              <td className="border-r-2 border-t-2 border-[#002147]">Phone</td>
              <td className="border-r-2 border-t-2 border-[#002147]">
                Address
              </td>
              <td className="border-r-2 border-t-2 border-[#002147]">City</td>
              <td className="border-r-2 border-t-2 border-[#002147]">State</td>
              <td className="border-r-2 border-t-2 border-[#002147]">Zip</td>
              <td className="border-r-2 border-t-2 border-[#002147]">
                Country
              </td>
              <td className="border-r-2 border-t-2 border-[#002147]">Status</td>
            </tr>
          </table>
        </div>
      </div>
    </main>
  );
}

export default App;
