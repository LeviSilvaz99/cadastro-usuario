import React from 'react';
import { useHistory } from 'react-router-dom'


const UserList = ({data = []}) => {
    const history = useHistory();
    const handleSelect = (id) => {
        history.push(`/users/${id}`);
    }
  return (
    <div className="mt-5">
        <table className="table table-hover">
        <thead>
        <tr>
            <th scope="col">Nome</th>
            <th scope="col">Sobrenome</th>
            <th scope="col">Idade</th>
            <th scope="col">Escolaridade</th>
            <th scope="col">Skills</th>
        </tr>
        </thead>
        <tbody>
            {data.map(user => (
                <tr key={user.id} onClick={() => handleSelect(user.id)}>
                <th scope="row">{user.firstname}</th>
                <th scope="row">{user.lastname}</th>
                <th scope="row">{user.age}</th>
                <th scope="row">{user.scholing}</th>
                <th scope="row">{user.skills}</th>
            </tr>
            ))}
        </tbody>
    </table>
  </div>
  );
}

export default UserList;