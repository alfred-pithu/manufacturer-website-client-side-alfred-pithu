import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Blogs = () => {
    // const { data: products } = useQuery('products', () => fetch('https://frozen-tundra-73079.herokuapp.com/products').then(res => res.json()))

    // console.log(products);


    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loading></Loading>
    }
    // console.log(user.displayName);


    return (
        <div className='min-h-screen'>

            <div className=' lg:w-[700px] mt-3 mx-auto shadow-lg p-8 '>
                <h2 className='font-semibold mb-4'>How will you improve the performance of a React Application?</h2>
                <p className='text-md'> Some ways to improve the performance of a react application are
                    <br />
                    - Keeping component state local where necessary
                    <br />
                    - Sending only necessary props
                    <br />
                    - Using Immutable Data Structures
                    <br />
                    -Using Production Mode Flag in Webpack
                </p>
            </div>

            <div className=' lg:w-[700px] mt-10 mx-auto shadow-lg p-8 '>
                <h2 className='font-semibold mb-4'>What are the different ways to manage a state in a React application?</h2>
                <p className='text-md'>Some of the ways to manage a state in a React App are-
                    <br />
                    -Redux
                    <br />
                    -Recoil
                    <br />
                    -Hooks
                    <br />
                    -Context API
                    <br />

                    Redux and Recoil are Libraries and Hooks are default to react.Context API also helps to manage states without prop drilling</p>
            </div>

            <div className=' lg:w-[700px] mt-10 mx-auto shadow-lg p-8 '>
                <h2 className='font-semibold mb-4'>What is a unit test? Why should write unit tests?</h2>
                <p className='text-md'>Unit Testing is a type of software testing where every single unit or component of the software is tested separately. The purpose is to check that if each unit of the software code performs as expected. Unit Testing is done during the coding phase of an application by the developers. Unit Tests isolate a section of code and verify if it's fully effective or not. A unit may be an individual function, method, procedure, module, or object.

                    Unit tests help to fix bugs early in the development period and save costs and time.
                    It helps the developers to get a clear understanding of the code by testing the code base and enables them to make changes quickly.
                </p>
            </div>

            <div className=' lg:w-[700px] mt-3 mx-auto shadow-lg p-8 '>
                <h2 className='font-semibold mb-4'>How does prototypical inheritance work?</h2>
                <p className='text-md'>
                    Prototypical Inheritance was introduced in ES6 and it allows us to share, extend and copy objects and methods. It helps us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
                    All JavaScript objects inherit properties and methods from a prototype. For example, Date objects inherit from Date.prototype, Array objects inherit from Array. prototype.
                    The Object.prototype is on top of the prototype inheritance chain. ​ Date objects, Array objects, and Player objects all inherit from Object.prototype</p>
            </div>

            <div className=' lg:w-[700px] mt-3 mx-auto shadow-lg p-8 '>
                <h2 className='font-semibold mb-4'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </h2>
                <p className='text-md'>First I will run a loop on the array.
                    Then I will use the includes() method to extract the products that have the searched word in the product.name property. Then I will push those extracted product objects to a new array and return it.
                    To ease the searching process we can use toLowerCase() method for both the search word and the product.name .
                </p>
            </div>

        </div>
    );
};

export default Blogs;