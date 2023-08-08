import React, { useContext } from 'react'
import { UserContext } from '../../contexts/userContext';

function Profile(){
    const {login} = useContext(UserContext);

    return (
        <div>
            {login ? 'Usuário logado' : 'Faça o seu login para ter acesso às informações'}
        </div>
    )
}

export default Profile;