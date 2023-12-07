import "./index.css";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import UserTable from "./components/table";


function App() {
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
            <UserTable/>
            </div>
          </div>

        
        </div>
      </div>

      
    </div>
  );
}

export default App;
