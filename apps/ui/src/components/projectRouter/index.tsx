import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/home/home'
import Product from '../../pages/product/product'

const ProjectRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<HomePage />} />
                    <Route path="product/:id" element={<Product />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ProjectRouter;