import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ModalContextProvider } from './components/Modal/context/ModalContext.tsx'
import ErrorBoundary from './ErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorBoundary>
            <ModalContextProvider>
                <App />
            </ModalContextProvider>
        </ErrorBoundary>
    </StrictMode>
)
