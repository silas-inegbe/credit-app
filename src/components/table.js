import React from 'react'

function Table() {
    const users = [
        {
            id: 1,
            name: 'John Doe',
            type: 'Borrower',
            date: '12/12/2021',
            status: 'Active',
            action: 'View'
        },
        {
            id: 2,
            name: 'John Doe',
            type: 'Borrower',
            date: '12/12/2021',
            status: 'Active',
            action: 'View'
        },
        {
            id: 3,
            name: 'John Doe',
            type: 'Borrower',
            date: '12/12/2021',
            status: 'Active',
            action: 'View'
        },
        {
            id: 4,
            name: 'John Doe',
            type: 'Borrower',
            date: '12/12/2021',
            status: 'Active',
            action: 'View'
        },
        {
            id: 5,
            name: 'John Doe',
            type: 'Borrower',
            date: '12/12/2021',
            status: 'Active',
            action: 'View'
        },
        {
            id: 6,
            name: 'John Doe',
            type: 'Borrower',
            date: '12/12/2021',
            status: 'Active',
            action: 'View'
        },
        {
            id: 7,
            name: 'John Doe',
            type: 'Borrower',
            date: '12/12/2021',
            status: 'Active',
            action: 'View'
        },
        {
            id: 8,
            name: 'John Doe',
            type: 'Borrower',
            date: '12/12/2021',
            status: 'Active',
            action: 'View',
            "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOSSURBVHgBxVZtbBRFGH52drbbj2tLe1joCd7dcmfFImo0xFYIUUhFSMVE/hJTPyoJGDX+UX/pT38YY0AxVYzGROMfo5XQj5BojB9RQ0KiiFIol1Ion9crvd7u3e7OMLstd9feXHOQEJ5kdmbnfed5ZuZ9Z3aBWwylEqcNG3ruCDTWdIEQgzlOgFCaBrOPM9s5OjR04OTNCihbn9rzEhTlDXCEF/FLuMx5d+jg/j7RZhUJdHXviarAl4qiPIrKkeB2dvPAQN+pRQWe3P7yvWLGh4WhFTcMfiZj5bp+Gu77Tyqw5elXI4pr/6woZCVuHtNm1ur4ceiTY96LWmyJxR46RAhpl41qjS5D/EEDK9vuRE2gBlOXpsC5VEDXKN20tDl8YHz8X4de793avXsnFNKx0FvEARt3dKC9c/X8aSbTOPjpMJITkzKRtqaWludE/SEpEJG3ZJ4bd3SWkHuobw5g+64tMO6TJxh3sdPn9R7btu1aw1Xt74VOyyMteOaVbpQDFVvkCIbvPzqE8ZGJEnvaMg1/BS4nD8sI7lkXL0teL8g73dkQRtrvkvrUafpjfgwIJRGZw4p4KN8OMwVNorii3SBKI59NwCohFAwFpQIM3KAoA62KonFpA+oEwVqX+Ec0yEvPpbeG5mWNUg6ikgApJxAMNft1gyBtEmUJl98qXqbWNtSK1K2WGPnMbAwcd3yhbfXc/k8QjgHNRVLhUvLsnK4smxzX+ccXUJh5uNjg5b6xNjKPKCURmBR913tXPRAtsVPO//QFBgc/TzDGfi0WoFVlwzM7O0F9ghREQ8ZyaHphDGPuEe/iI4UO551Cm+H4HyNgLkMmOYPU2BVYqZn84LMZC1+fOY/Rs5d9u+evUlUkhlaYAaF7vSp/F50aOTIaa1v3iAIl5r1XaxRq1sX0hRTMqQym0iaiS+qhC6Kx5DT+H7sIM5VB+tJVv4weG/PLHE4M9O99wd+m4mUL/ecd4Je728NRIxYCc9y8LWXm8MXRETTV6Lhq5TBvuywb1UQFFeI52zkH1Xkiv5Bix/7+fefCq4KbjbYVp1EGk2ZWnPzSgOu6hkg8lBDnZf3gdx8npAIe9r//9ugMNx+3LOtbABwVgrnOb63h4KbhH/bNm9yiH/0PPvvqWRHA1ymla8r553L2Xznbeu/N3S9+I+Oo6K+it7e3NnZ/53ooblyr1uts25lmOTehB8jvr/X0pHA7cQ0wt0rK/DREIQAAAABJRU5ErkJggg=="

        }
    ]
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user) => (
                        <tr key={user.id}>
                            <td className="py-5 px-5 border-b">{user.id}</td>
                            <td className="py-5 px-5 border-b items-center">
                                <span className='flex items-center'>
                                    
                                <img src={user.avatar} alt="" className='h-4 w-4'/>{user.name}
                                </span>
                                </td>
                            <td className="py-5 px-5 border-b">{user.type}</td>
                            <td className="py-5 px-5 border-b">{user.date}</td>
                            <td className="py-5 px-5 border-b">{user.status}</td>
                            <td className="py-5 px-5 border-b">{user.action}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table