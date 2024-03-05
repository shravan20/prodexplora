import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import ProductRouter from './components/routers/product-router';

import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID}>
                <ProductRouter />
            </GoogleOAuthProvider>
        </AuthProvider>
    );
}

export default App;
