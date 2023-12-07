import React, { useEffect, useState } from "react";
import "./index.css";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/users.json");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching JSON:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className=" flex flex-row overflow-x-hidden ">
      <div className="">
        <Sidebar />
      </div>
      <div className=" w-full overflow-x-auto ">
        <Navbar />
        <div className="mt-16  px-[2%] flex flex-col overflow-x-auto overflow-y-hidden">
          <div className="flex flex-row gap-1">
            <span className=" h-11 px-4 font-semibold text-sm bg-[#002147] text-white rounded-t-2xl justify-center flex items-center">
              Borrowers
            </span>
            <span className=" h-11 px-4 font-semibold text-sm  text-[#002147] rounded-t-2xl justify-center flex items-center">
              Business Customers
            </span>
          </div>

          <div className="flex flex-col px-8 w-full bg-white overflow-x-auto overflow-y-hidden">
            <span className="px-2">Borrowers list</span>
            <span className="w-full h-5 "> </span>
            <div className=" my-4 w-full overflow-x-auto overflow-y-hidden">
              <table className="w-full m-auto table-auto">
                <tr className="border-b-2 text-left                                              ">
                  <th className=" border-l-2 border-t-2 border-[#002147]">
                    Name
                  </th>
       
                  
                  t
                </tr>
                <tr className="border-b-2">
                  
                  <td className=" border-t-2 border-[#002147]">
                    Email
                  </td>
                  <td className=" border-t-2 border-[#002147]">
                    Phone
                  </td>
                  <td className=" border-t-2 border-[#002147]">
                    Address
                  </td>
                  <td className=" border-t-2 border-[#002147]">
                    City
                  </td>
                  <td className=" border-t-2 border-[#002147]">
                    State
                  </td>
                  <td className=" border-t-2 border-[#002147]">
                    Zip
                  </td>
                  <td className=" border-t-2 border-[#002147]">
                    Country
                  </td>
                  <td className=" border-t-2 border-[#002147]">
                    Status
                  </td>
                </tr>
              </table>
            </div>
          </div>

          
        </div>
      </div>

      
    </div>
  );
}

export default App;
