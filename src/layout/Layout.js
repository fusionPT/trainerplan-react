import React from 'react';
import Nav from './Nav';

const Layout = (props) => (
    <div class="p-20">
        {props.children}
    </div>
)

export { Layout, Nav };