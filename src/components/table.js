import React, { useEffect, useState } from "react";
import cx from "classnames";
//this is the table component that contains user data
const UserTable = () => {
  const [users, setUsers] = useState([]);

  //fetching the data from the json file
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
    //calling the fetchUsers function
    fetchUsers();
  }, []);

  //returning the table with the data
  return (
    <table className="min-w-full bg-white border border-gray-300 table-fixed">
      <thead className="bg-[#E5E8EC] text-left h-14 table-fixed ">
        <tr>
          <th className="py-2 px-4 border-b text-sm font-[500]">
            <span className="flex flex-row items-center gap-2">
              Borrower ID
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                data-v-669ada12=""
              >
                <path
                  d="M4.15133 7.33335H11.8493C12.424 7.33335 12.7293 6.65335 12.3473 6.22335L8.49866 1.89335C8.43624 1.82288 8.35957 1.76647 8.27372 1.72783C8.18787 1.6892 8.09481 1.66922 8.00067 1.66922C7.90653 1.66922 7.81346 1.6892 7.72761 1.72783C7.64176 1.76647 7.56509 1.82288 7.50266 1.89335L3.65266 6.22335C3.27067 6.65335 3.576 7.33335 4.15133 7.33335ZM7.502 14.106C7.56443 14.1765 7.6411 14.2329 7.72694 14.2715C7.81279 14.3102 7.90586 14.3301 8 14.3301C8.09414 14.3301 8.18721 14.3102 8.27305 14.2715C8.3589 14.2329 8.43557 14.1765 8.498 14.106L12.3467 9.77601C12.7293 9.34668 12.424 8.66668 11.8487 8.66668H4.15133C3.57667 8.66668 3.27133 9.34668 3.65333 9.77668L7.502 14.106Z"
                  fill="#002147"
                  fillOpacity="0.4"
                ></path>
              </svg>
            </span>
          </th>
          <th className="py-2 px-4 border-b text-sm font-[500]">
            <span className="flex flex-row items-center gap-2">
              Borrowers
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                data-v-669ada12=""
              >
                <path
                  d="M4.15133 7.33335H11.8493C12.424 7.33335 12.7293 6.65335 12.3473 6.22335L8.49866 1.89335C8.43624 1.82288 8.35957 1.76647 8.27372 1.72783C8.18787 1.6892 8.09481 1.66922 8.00067 1.66922C7.90653 1.66922 7.81346 1.6892 7.72761 1.72783C7.64176 1.76647 7.56509 1.82288 7.50266 1.89335L3.65266 6.22335C3.27067 6.65335 3.576 7.33335 4.15133 7.33335ZM7.502 14.106C7.56443 14.1765 7.6411 14.2329 7.72694 14.2715C7.81279 14.3102 7.90586 14.3301 8 14.3301C8.09414 14.3301 8.18721 14.3102 8.27305 14.2715C8.3589 14.2329 8.43557 14.1765 8.498 14.106L12.3467 9.77601C12.7293 9.34668 12.424 8.66668 11.8487 8.66668H4.15133C3.57667 8.66668 3.27133 9.34668 3.65333 9.77668L7.502 14.106Z"
                  fill="#002147"
                  fillOpacity="0.4"
                ></path>
              </svg>
            </span>
          </th>
          <th className="py-2 px-4 border-b text-sm font-[500]">
            <span className="flex flex-row items-center gap-2">
              Load Product
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                data-v-669ada12=""
              >
                <path
                  d="M4.15133 7.33335H11.8493C12.424 7.33335 12.7293 6.65335 12.3473 6.22335L8.49866 1.89335C8.43624 1.82288 8.35957 1.76647 8.27372 1.72783C8.18787 1.6892 8.09481 1.66922 8.00067 1.66922C7.90653 1.66922 7.81346 1.6892 7.72761 1.72783C7.64176 1.76647 7.56509 1.82288 7.50266 1.89335L3.65266 6.22335C3.27067 6.65335 3.576 7.33335 4.15133 7.33335ZM7.502 14.106C7.56443 14.1765 7.6411 14.2329 7.72694 14.2715C7.81279 14.3102 7.90586 14.3301 8 14.3301C8.09414 14.3301 8.18721 14.3102 8.27305 14.2715C8.3589 14.2329 8.43557 14.1765 8.498 14.106L12.3467 9.77601C12.7293 9.34668 12.424 8.66668 11.8487 8.66668H4.15133C3.57667 8.66668 3.27133 9.34668 3.65333 9.77668L7.502 14.106Z"
                  fill="#002147"
                  fillOpacity="0.4"
                ></path>
              </svg>
            </span>
          </th>
          <th className="py-2 px-4 border-b text-sm font-[500]">
            <span className="flex flex-row items-center gap-2">
              Requested Loan Amount (RM)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                data-v-669ada12=""
              >
                <path
                  d="M4.15133 7.33335H11.8493C12.424 7.33335 12.7293 6.65335 12.3473 6.22335L8.49866 1.89335C8.43624 1.82288 8.35957 1.76647 8.27372 1.72783C8.18787 1.6892 8.09481 1.66922 8.00067 1.66922C7.90653 1.66922 7.81346 1.6892 7.72761 1.72783C7.64176 1.76647 7.56509 1.82288 7.50266 1.89335L3.65266 6.22335C3.27067 6.65335 3.576 7.33335 4.15133 7.33335ZM7.502 14.106C7.56443 14.1765 7.6411 14.2329 7.72694 14.2715C7.81279 14.3102 7.90586 14.3301 8 14.3301C8.09414 14.3301 8.18721 14.3102 8.27305 14.2715C8.3589 14.2329 8.43557 14.1765 8.498 14.106L12.3467 9.77601C12.7293 9.34668 12.424 8.66668 11.8487 8.66668H4.15133C3.57667 8.66668 3.27133 9.34668 3.65333 9.77668L7.502 14.106Z"
                  fill="#002147"
                  fillOpacity="0.4"
                ></path>
              </svg>
            </span>
          </th>
          <th className="py-2 px-4 border-b text-sm font-[500]">
            <span className="flex flex-row items-center gap-2">
              Date
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                data-v-669ada12=""
              >
                <path
                  d="M4.15133 7.33335H11.8493C12.424 7.33335 12.7293 6.65335 12.3473 6.22335L8.49866 1.89335C8.43624 1.82288 8.35957 1.76647 8.27372 1.72783C8.18787 1.6892 8.09481 1.66922 8.00067 1.66922C7.90653 1.66922 7.81346 1.6892 7.72761 1.72783C7.64176 1.76647 7.56509 1.82288 7.50266 1.89335L3.65266 6.22335C3.27067 6.65335 3.576 7.33335 4.15133 7.33335ZM7.502 14.106C7.56443 14.1765 7.6411 14.2329 7.72694 14.2715C7.81279 14.3102 7.90586 14.3301 8 14.3301C8.09414 14.3301 8.18721 14.3102 8.27305 14.2715C8.3589 14.2329 8.43557 14.1765 8.498 14.106L12.3467 9.77601C12.7293 9.34668 12.424 8.66668 11.8487 8.66668H4.15133C3.57667 8.66668 3.27133 9.34668 3.65333 9.77668L7.502 14.106Z"
                  fill="#002147"
                  fillOpacity="0.4"
                ></path>
              </svg>
            </span>
          </th>
          <th className="py-2 px-4 border-b text-sm font-[500]">
            <span className="flex flex-row items-center gap-2">
              Purpose
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                data-v-669ada12=""
              >
                <path
                  d="M4.15133 7.33335H11.8493C12.424 7.33335 12.7293 6.65335 12.3473 6.22335L8.49866 1.89335C8.43624 1.82288 8.35957 1.76647 8.27372 1.72783C8.18787 1.6892 8.09481 1.66922 8.00067 1.66922C7.90653 1.66922 7.81346 1.6892 7.72761 1.72783C7.64176 1.76647 7.56509 1.82288 7.50266 1.89335L3.65266 6.22335C3.27067 6.65335 3.576 7.33335 4.15133 7.33335ZM7.502 14.106C7.56443 14.1765 7.6411 14.2329 7.72694 14.2715C7.81279 14.3102 7.90586 14.3301 8 14.3301C8.09414 14.3301 8.18721 14.3102 8.27305 14.2715C8.3589 14.2329 8.43557 14.1765 8.498 14.106L12.3467 9.77601C12.7293 9.34668 12.424 8.66668 11.8487 8.66668H4.15133C3.57667 8.66668 3.27133 9.34668 3.65333 9.77668L7.502 14.106Z"
                  fill="#002147"
                  fillOpacity="0.4"
                ></path>
              </svg>
            </span>
          </th>
          <th className="py-2 px-4 border-b text-sm font-[500]">
            <span className="flex flex-row items-center gap-2">
              Status
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                data-v-669ada12=""
              >
                <path
                  d="M4.15133 7.33335H11.8493C12.424 7.33335 12.7293 6.65335 12.3473 6.22335L8.49866 1.89335C8.43624 1.82288 8.35957 1.76647 8.27372 1.72783C8.18787 1.6892 8.09481 1.66922 8.00067 1.66922C7.90653 1.66922 7.81346 1.6892 7.72761 1.72783C7.64176 1.76647 7.56509 1.82288 7.50266 1.89335L3.65266 6.22335C3.27067 6.65335 3.576 7.33335 4.15133 7.33335ZM7.502 14.106C7.56443 14.1765 7.6411 14.2329 7.72694 14.2715C7.81279 14.3102 7.90586 14.3301 8 14.3301C8.09414 14.3301 8.18721 14.3102 8.27305 14.2715C8.3589 14.2329 8.43557 14.1765 8.498 14.106L12.3467 9.77601C12.7293 9.34668 12.424 8.66668 11.8487 8.66668H4.15133C3.57667 8.66668 3.27133 9.34668 3.65333 9.77668L7.502 14.106Z"
                  fill="#002147"
                  fillOpacity="0.4"
                ></path>
              </svg>
            </span>
          </th>
          <th className="py-2 px-4 border-b text-sm font-[500] inset-x">
            <span className="flex flex-row items-center gap-2">Action</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {/* //mapping the data to the table */}
        {users.map((user, index) => (
          <tr key={index}>
            <td className="py-5 px-5 border-b">#{user.id}</td>
            <td className="py-5 px-5 border-b flex flex-row gap-1 items-center">
              <img
                className="h-6 w-6 rounded-full"
                src={user.avatar}
                alt="avatar"
              />{" "}
              {user.name}
            </td>
            <td className="py-5 px-5 border-b">{user.type}</td>
            <td className="py-5 px-5 border-b">{user.requestedLoanAmount}</td>
            <td className="py-5 px-5 border-b ">{user.date}</td>
            <td className="py-5 px-5 border-b">{user.purpose}</td>
            <td className="py-5 px-5 border-b ">
                {/* if user.status[0].code = Approved, show green background, if code = Processing, show red backgroud */}
                <span className={cx("rounded-full px-3 py-2 text-sm flex items-center", {
                    "bg-[#E5F9F2] text-[#10B981]": user.status[0].code === "Approved",
                    "bg-[#FFF7ED] text-[#EF4444]": user.status[0].code === "Processing",
                    "bg-[#FFF7ED] text-[#B91C1C]": user.status[0].code === "Cancelled"
                })}>
                    {user.status[0].code}
                </span>
            </td>
            <td className="py-5 px-5 border-b inset-x">
              <span className="flex flex-row items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  data-v-669ada12=""
                >
                  <g clipPath="url(#clip0_1_313)">
                    <path
                      d="M7.83331 3.16667H3.16665C2.81302 3.16667 2.47389 3.30715 2.22384 3.5572C1.97379 3.80724 1.83331 4.14638 1.83331 4.50001V13.8333C1.83331 14.187 1.97379 14.5261 2.22384 14.7761C2.47389 15.0262 2.81302 15.1667 3.16665 15.1667H12.5C12.8536 15.1667 13.1927 15.0262 13.4428 14.7761C13.6928 14.5261 13.8333 14.187 13.8333 13.8333V9.16667"
                      stroke="#002147"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M12.8333 2.16667C13.0985 1.90145 13.4582 1.75246 13.8333 1.75246C14.2084 1.75246 14.5681 1.90145 14.8333 2.16667C15.0985 2.43189 15.2475 2.7916 15.2475 3.16667C15.2475 3.54174 15.0985 3.90145 14.8333 4.16667L8.49998 10.5L5.83331 11.1667L6.49998 8.5L12.8333 2.16667Z"
                      stroke="#002147"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clippath id="clip0_1_313">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.5 0.5)"
                      ></rect>
                    </clippath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  data-v-669ada12=""
                >
                  <g clipPath="url(#clip0_1_314)">
                    <path
                      d="M2.5 4.5H3.83333H14.5"
                      stroke="#A30D11"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M5.83331 4.49999V3.16666C5.83331 2.81304 5.97379 2.4739 6.22384 2.22385C6.47389 1.9738 6.81302 1.83333 7.16665 1.83333H9.83331C10.1869 1.83333 10.5261 1.9738 10.7761 2.22385C11.0262 2.4739 11.1666 2.81304 11.1666 3.16666V4.49999M13.1666 4.49999V13.8333C13.1666 14.187 13.0262 14.5261 12.7761 14.7761C12.5261 15.0262 12.1869 15.1667 11.8333 15.1667H5.16665C4.81302 15.1667 4.47389 15.0262 4.22384 14.7761C3.97379 14.5261 3.83331 14.187 3.83331 13.8333V4.49999H13.1666Z"
                      stroke="#A30D11"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7.16669 7.83333V11.8333"
                      stroke="#A30D11"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M9.83331 7.83333V11.8333"
                      stroke="#A30D11"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clippath id="clip0_1_314">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.5 0.5)"
                      ></rect>
                    </clippath>
                  </defs>
                </svg>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
//exporting the table component
export default UserTable;
