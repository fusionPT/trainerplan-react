import React from 'react';
import Nav from './Nav';

const Layout = (props) => (
    <div class="bg-purple-500 border-black m-5 p-5">
        {props.children}
    </div>
)

export { Layout, Nav };