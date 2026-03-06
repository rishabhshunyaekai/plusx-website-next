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
                        { loading ? (<div className="flex items-center gap-2"><span className="inline-block w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></span>Submitting...</div>) : (buttonName || "Submit") }
                    </button>
                </div>
            </div>
        </div>
    );

    return modalContent
};

export default Modal;
