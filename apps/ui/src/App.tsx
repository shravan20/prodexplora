import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/home';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from './helpers/client';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />}>
                            <Route index element={<HomePage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </GoogleOAuthProvider>
        </AuthProvider>
            
    );
}

export default App;
