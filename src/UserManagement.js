import React, { useState } from 'react';
import { ROLES } from './views/utilities/roles';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John', role: ROLES.ADMIN },
    { id: 2, name: 'Jane', role: ROLES.MANAGER },
    { id: 3, name: 'Bob', role: ROLES.USER }
  ]);

  const handleRoleChange = (id, newRole) => {
    setUsers(users.map(user => user.id === id ? { ...user, role: newRole } : user));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <select value={user.role} onChange={(e) => handleRoleChange(user.id, e.target.value)}>
                  <option value={ROLES.ADMIN}>Admin</option>
                  <option value={ROLES.MANAGER}>Manager</option>
                  <option value={ROLES.USER}>User</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
