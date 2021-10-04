import './Alert.css'

const Alert = ({ showAlert, setShowAlert }) => {
    return ( 
        <div className="alert-container">
            <div className="alert">
                <div className="alert-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div className="alert-text">
                    <svg onClick={ () => setShowAlert(!showAlert) } fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <span>¡Guardada!</span>
                    <p>La venta ha sido registrada con éxito.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Alert;