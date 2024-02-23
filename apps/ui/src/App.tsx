import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/home/home';
import Product from './pages/product/product';

function App() {
    return (
        <AuthProvider>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID}>
                <BrowserRouter>
                    <Routes>
                        <Route>
                            <Route path="/" element={<HomePage />} />
                            <Route path="product/:id" element={<Product />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </GoogleOAuthProvider>
        </AuthProvider>
    );
}

export default App;
