import React, { createContext, useContext, useState } from 'react';

const IsOpenContext = createContext();

export default function Modal({ children, ...restProps }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <IsOpenContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </IsOpenContext.Provider>
  );
}

Modal.ToggleButton = function ({ children, ...restProps }) {
  const { setIsOpen } = useContext(IsOpenContext);
  return <button className="modal_toggle-btn" onClick={() => setIsOpen(current => !current)} {...restProps}>{children}</button>;
};

Modal.Wrapper = function ({ children, ...restProps }) {
  const { isOpen } = useContext(IsOpenContext);
  console.log(isOpen);
  return (
    <div {...restProps} className={`modal_content ${isOpen && 'modal_content_open'}`}>
      {children}
    </div>
  );
};

Modal.Inner = function ({ children, ...restProps }) {
  return (
    <div className="modal_inner" {...restProps}>{children}</div>
  );
};

Modal.CloseButton = function ({ children, ...restProps }) {
  const { setIsOpen } = useContext(IsOpenContext);
  return (
    <button className="modal_close-btn" onClick={() => setIsOpen(false)} {...restProps}>{children}</button>
  );
};

Modal.Image = function ({ src, alt, ...restProps }) {
  return <img className="modal_image" src={src} alt={alt} {...restProps} />;
};

Modal.Title = function ({ children, ...restProps }) {
  return <h2 className="modal_title" {...restProps}>{children}</h2>;
};