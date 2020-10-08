import React from 'react';
import { Layout } from '../layout/Layout';

const Contact = () => (
    <Layout>
        <div class="w-1/2">
            <h1 class="text-gray-900 text-3xl font-semibold leading-10 pb-5">Contact Us</h1>
            <p class="text-gray-700 leading-6"></p>
        </div>
    </Layout>
)

/* 

^ same written in as a arrow function

function Contact(){
    return (
        <div>
        This is the Contact page!
    </div>
    )
} */

export default Contact;