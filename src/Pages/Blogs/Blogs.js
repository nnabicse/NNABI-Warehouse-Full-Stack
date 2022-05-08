import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='qa'>
            <div className='qaheadercon'>
                <h1 className='qaheader'>BLOGS</h1>
            </div>
            <div>
                <h3>Difference between javascript and nodejs?</h3>
                <p><b>Node JS:</b> NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                <p><b>JavaScript:</b>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.</p>
            </div>
            <div>
                <h3>When should you use nodejs and when should you use mongodb?</h3>
                <p>MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily. There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. That’s why we use nodeJS.</p>
            </div>
            <div>
                <h3>What is the purpose of jwt and how does it work?</h3>
                <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            </div>
        </div>
    );
};

export default Blogs;