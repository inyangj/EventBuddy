import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [createEventModal, setCreateEventModal] = useState(false);
  const [eventSuccessModal, setEventSuccessModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);
  const [cancelReg, setCancelReg] = useState(false);
  const [cancelRegSucess, setCancelRegSuccess] =useState(false);
  const [delEvent, setDelEvent] = useState(false);
  const [delEventSuccess, setDelEventSucess] = useState(false);



  const openCreateEventModal = () => {
    setCreateEventModal(true);
  };

  const closeCreateEventModal = () => {
    setCreateEventModal(false);
  };

  const openEventSuccessModal = () => {
    setEventSuccessModal(true);
  };

  const closeEventSuccessModal = () => {
    setEventSuccessModal(false);
  };

  const openRegisterModal = () => {
    setRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setRegisterModal(false);
  };

  const openRegSuccess = () => {
    setRegSuccess(true);
  };

  const closeRegSuccess = () => {
    setRegSuccess(false);
  };

  const openCancelReg = () => {
    setCancelReg(true);
  };

  const closeCancelReg = () => {
    setCancelReg(false);
  };

  const openCancelSuccess = () => {
    setCancelRegSuccess(true);
  };

  const closeCancelSuccess = () => {
    setCancelRegSuccess(false);
  };

  const openDel = () => {
    setDelEvent(true);
  };
  const closeDel = () => {
    setDelEvent(false);
  };

  const openDelSuccess = () => {
    setDelEventSucess(true);
  };

  const closeDelSuccess = () => {
    setDelEventSucess(false);
  };

  return (
    <ModalContext.Provider
      value={{
        createEventModal,
        eventSuccessModal,
        registerModal,
        regSuccess,
        cancelReg,
        delEvent,
        delEventSuccess,
        cancelRegSucess,
        openCreateEventModal,
        closeCreateEventModal,
        openEventSuccessModal,
        closeEventSuccessModal,
        openRegisterModal,
        closeRegisterModal,
        openRegSuccess,
        closeRegSuccess,
        openCancelReg,
        closeCancelReg,
        openCancelSuccess,
        closeCancelSuccess,
        openDel,
        closeDel,
        closeDelSuccess,
        openDelSuccess,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
