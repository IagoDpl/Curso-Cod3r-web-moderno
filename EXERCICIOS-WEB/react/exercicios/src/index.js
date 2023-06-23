import React from 'react'
import ReactDom from 'react-dom'

import Pai from './componentes/Pai'


ReactDom.render( 
    <div>
        <Pai nome="Paulo" sobrenome="Silva" />
    </div>
, document.getElementById('root'))