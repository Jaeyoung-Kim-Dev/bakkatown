import React from 'react';
import TabBar from '../components/Tabs/tabs'
import {ToastContainer} from "react-toastify";
import '../normalize.css'
import '../admin.css'
import '../webflow.css'

const AdminPage = () => (
    <>
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            display: block;
            height: 100vh;
            width: 100vw;
            margin-right: auto;
            margin-left: auto;
            background-color: #2d3142;
            color: #2d3142;
            -o-object-fit: fill;
            object-fit: fill;
            }
        ` }} />
        <div className="section">
            <h2 className="heading">Bakkatown Admin</h2>
            <a href="http://localhost:3000/" className="button-white vist-site w-button">Visit Site</a>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover/>
        <TabBar />
    </>
)

export default AdminPage;