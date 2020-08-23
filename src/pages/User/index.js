import React, {useState, useEffect, Component} from 'react';
import Main from '../../components/Main';
import Form from '../../components/UserForm';
import List from "../../components/UserList";
import api from "../../services/api"

import {useParams} from "react-router-dom";

const User = () => {
  
  const {idToUpdate} = useParams();
  const [fetching, setFetching] = useState(true);
  const [users, setUsers] = useState([]);

  const headerProps = {
    icon: 'users',
    title: "Usuários",
    subtitle: "Cadastrar usuários"
  }

  useEffect(() => {
    const fetchData = async () => {
        const res = await api.get("users");
        setUsers(res.data);
        setFetching(old => !old);
    }
    fetchData();
  }, []);

  const handleSave = async (data) => {
    try {
        const res = await api.post("/users", data);
        setUsers([...users, res.data]);
    } catch (error) {
        alert("Não foi possivel salvar o usuario. Tente novamente.")
    }
};

  return (   
    
    <Main {...headerProps}> 
        
        <Form handleSave={handleSave}/>
        {fetching ? 
          <div>Carregando...</div> 
          : users.length === 0 ?
            (<div className="alert alert-primary mt-5" role="alert">
              Nenhum usuário cadastrado!
            </div>) 
            : <List data={users}/>}
    </Main>
    
  );
};

export default User;