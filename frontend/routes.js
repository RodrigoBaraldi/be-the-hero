import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './Logon';

export default function Routes{

    return(

    <BrowserRouter>
        <switch>
            <Route path="/" component={Logon}  />
        </switch>
    </BrowserRouter>

    );
}