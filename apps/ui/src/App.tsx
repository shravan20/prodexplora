import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import ProjectRouter from './components/projectRouter';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <AuthProvider>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID}>
                <ProjectRouter />
            </GoogleOAuthProvider>
        </AuthProvider>
    );
}

export default App;
