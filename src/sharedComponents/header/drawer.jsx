import "@/assets/css/Drawer.css";

function Drawer({ open, onClose, children }) {
  return (
    <>
      <div className={`drawer-backdrop ${open ? "show" : ""}`} onClick={onClose} />
      <div className={`drawer ${open ? "open" : ""}`}>{children}</div>
    </>
  );
}

export default Drawer;
