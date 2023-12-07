import React, { useEffect, useState } from 'react';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch('/users.json');
            const data = await response.json();
            setUsers(data);
          } catch (error) {
            console.error('Error fetching JSON:', error);
          }
        };
    
        fetchUsers();
      }, []);
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead className='bg-red-200 text-left h-14'>
        <tr>
          <th className="py-2 px-4 border-b">ID</th>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Requested Loan Amount</th>
          <th className="py-2 px-4 border-b">Date</th>
          <th className="py-2 px-4 border-b">Purpose</th>
          <th className="py-2 px-4 border-b">Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="py-2 px-4 border-b">{user.id}</td>
            <td className="py-2 px-4 border-b">{user.name}</td>
            <td className="py-2 px-4 border-b">{user.requestedLoanAmount}</td>
            <td className="py-2 px-4 border-b">{user.date}</td>
            <td className="py-2 px-4 border-b">{user.purpose}</td>
            <td className="py-2 px-4 border-b">{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;

