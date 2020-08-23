import React, { Component } from 'react'
import Main from '../../components/Main'


const headerProps = {
    icon: 'users',
    title: "Usuários",
    subtitle: "Cadastrar usuários"
}

export default class UserCrud extends Component {
    render(){
        return(
            <Main {...headerProps}>
                Cadastro de Usuario
            </Main>
        )
    }
}