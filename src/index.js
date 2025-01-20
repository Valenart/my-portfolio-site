import React, { useEffect } from 'react'; // Importa o useEffect
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const Root = () => {
    useEffect(() => {

        const preventZoom = (e) => {
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
            }
        };


        window.addEventListener('wheel', preventZoom, { passive: false });
        window.addEventListener('keydown', preventZoom);


        return () => {
            window.removeEventListener('wheel', preventZoom);
            window.removeEventListener('keydown', preventZoom);
        };
    }, []);

    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

reportWebVitals();
