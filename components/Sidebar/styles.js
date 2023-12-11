const styles = {
  helpText: { 
    color: '#FFF',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '-0.28px',
    whiteSpace: 'pre-line',
    textAlign: 'left',
  },
  TaskPro: {
    color: '#BEDBB0', 
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '25px',
    letterSpacing: '-0.2px',
  },

  helpLink: { 
    color: '#FFF',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '-0.24px',
    textAlign: 'left',
    textDecoration: 'none',
  },
  middleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  helpContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#1F1F1F',
    marginTop: '-45px',
    padding: '10px 22px',
    borderRadius: '10px',  
    maxHeight: '350px', 
  },
  imgHelp: {
    width: '62px',
    height: '82px',
    margin: '0 0 15px -5px',
  },
  helpIcon: {
    width: '20px',
    height: '20px',
    marginRight: '10px',
  },

  closeBtn: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  inputText: {
    backgroundColor: '#000',
    border: '1px solid #BEDBB0',
    borderRadius: '5px',
    width: '267px',
    padding: '10px',
    marginLeft: '7px',
  },
  inputTextarea: {
    backgroundColor: '#000',
    width: '267px',
    height: '70px',
    borderRadius: '8px',
    border: '1px solid #BEDBB0',
    //opacity: 0.4,
  },
  bodyHelp: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },

  background_border: {
    width: '32px',
    height: '32px',
    border: '1px solid lightgray',
    borderRadius: '7px',
    padding: '5px',
  },
  icons: { 
    color: '#FFF',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: '-0.28px',
  },
  plusBtn: {
    stroke: '#161616',
    backgroundColor: '#000',
    padding: '3px',
    marginRight: '10px',
    borderRadius: '5px',
  },

  addModal: { 
    color: '#FFF',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: '-0.37px',
    margin: '15px 10px 0 1px',
  },
  closeIconStyle: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    marginRight: '-12px',
  },

  btnNewBoard: {
    backgroundColor: '#BEDBB0',
  },
  textBtn: {
    color: '#161616', 
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: '-0.28px',
    padding: '5px 0',
  },
  containerProject:{
    height: '120px', 
    overflowY: 'auto',
  },
  listProject: {
    padding: '7px 3px',
    backgroundColor: '#000',
    border: 'none',
  },  
  listProject: {
    padding: '7px 3px',
    backgroundColor: '#000',
    border: 'none',
  },
  titleProject: {
    color: '#FFF', 
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: '-0.2px',
    padding: '10px 5px',
  },
  bgTitleActive: {
    padding: '7px 3px',
    backgroundColor: '#1F1F1F',
    borderTop: '1px solid #000',
    borderLeft: '1px solid #000',
    borderBottom: '1px solid #000',
    borderRight: '4px solid #BEDBB0',
  },
  btnContainer: { 
    marginTop: '20px',
  },
  logoutIcon: {
    width: '32px',
    height: '32px',
  },
  logoutBtn: {
    display: 'flex',
    gap: '25px', 
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    textDecoration: 'none',
   // backgroundColor: '#000',
    backgroundColor: 'transparent', 
  },

  sidebarStyle: {
    display: 'flex',
    height: '100vh',
    overflow: 'scroll initial',
  },
  imgLogo: {
    width: '52px',
    height: '52px',
  },

  titleLogo: {
    color: '#FFF', 
    fontSize: '22px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    letterSpacing: '-0.64px',
  },
  board: {
    padding: '0 5px',
    borderTop: '1px solid #ccc',
    borderBottom: '1px solid #ccc',
  },
  boardsTitle: {
    color: 'rgba(255, 255, 255, 0.50)', 
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: '0.2px',
    margin: '30px 0 -30px 0',
  },
  textBoard: { 
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '1.5',
    letterSpacing: '-0.1px',
    width: '86px',
    whiteSpace: 'pre-line',
  },
  btnAdd: {
    borderRadius: '6px',
    background: '#BEDBB0',
    color: '#121212',
    padding: '10px',
  },
  errorMsg: {
    color: 'red',
    fontSize: '16px',
  },
};

export default styles;
