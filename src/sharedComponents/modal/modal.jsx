import style from './modal.module.css';

function Modal({ isOpen, heading, onClose, onSubmit, children, buttonName, loading, id }) {
    
    if (!isOpen) return null;

    const modalContent = (
        <div className={style.modalOverlay}>
            <div className={style.modalContent}>
                <h4 className={style.modalHeading}>{heading}</h4>
                <button className={style.closeButton} onClick={onClose}>×</button>
                {children}
                <div className={style.buttonGroup}>
                    <button className={style.closeModalButton} onClick={onClose}>Close</button>
                    <button className={style.assignButton} id={id} onClick={onSubmit}>
                        { loading ? <><span className="spinner-border spinner-border-sm me-2"></span>Submit...</> : (buttonName || 'Submit')}
                    </button>
                </div>
            </div>
        </div>
    );

    return modalContent
};

export default Modal;
