import React from 'react';
import { CDBBox, CDBContainer, CDBBtn } from 'cdbreact';
import styles from '../styles';
import flower from '../images/flower.png';
import help from '../images/help.svg';
import ModalSidebarHelp from './ModalSidebarHelp';

const Help = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <CDBContainer>
      <CDBBox style={styles.helpContainer}>
        <img alt='flower' src={flower} style={styles.imgHelp} />
        <p style={styles.helpText}>
          If you need help with
          <span style={styles.TaskPro}> TaskPro</span>, check out our support
          resources or reach out to our customer support team.
        </p>
        <div>
          <CDBBtn onClick={() => setModalShow(true)} style={styles.closeBtn}>
            <img alt='help sign' src={help} style={styles.helpIcon} />
            <span style={styles.helpLink}>Need help?</span>
          </CDBBtn>
        </div>
        <ModalSidebarHelp show={modalShow} onHide={() => setModalShow(false)} />
      </CDBBox>
    </CDBContainer>
  );
};
export default Help;
