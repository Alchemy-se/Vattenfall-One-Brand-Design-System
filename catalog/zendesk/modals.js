import React, { useState } from 'react';
import ConfirmModal from "./confirmModal";
import ZendeskModal from "./zendeskModal";
import { useAddReportButton } from "../../helpers/hooks/custom-hooks";

// Just return different modals. Moved it here instead of cluttering the parent component
const Modals = ({ uri }) => {
  const [displayConfirmModal, setDisplayConfirmModal] = useState(false);
  const [status, setStatus] = useState(null);
  const { openModal, selectedChild, setOpenModal } = useAddReportButton(uri);

  const modalProps = {
    setOpenModal,
    setDisplayConfirmModal,
    setStatus,
    status,
    data: selectedChild
  }


  if (displayConfirmModal) {
    return <ConfirmModal{...modalProps} />
  } else if (openModal) {
    return <ZendeskModal {...modalProps}/>
  } else {
    return null
  }

};

export default Modals;
