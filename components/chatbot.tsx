import { Box } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const Chatbot = () => {
  return (
    <>
      <Box
        component="button"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
        position="fixed"
        bottom="50vh"
        right="0"
        bgcolor="secondary.main"
        color="white"
        minHeight="6rem"
        width='2rem'
        py='0.5rem'
        borderRadius='3px'
      >
        <Box
          component="span"
          mb='1.4rem'
          style={{
            writingMode: 'revert',
            transform: 'rotateZ(270deg)',
          }}
        >
          Feedback
        </Box>
        <EmojiEmotionsIcon fontSize="small" color="inherit" />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="fixed"
        padding="0.5rem"
        bottom="1.5rem"
        right="1.5rem"
        bgcolor="secondary.main"
        borderRadius="50%"
        color="white"
        style={{ transform: 'scaleX(-1)' }}
        boxShadow="5"
      >
        <ChatIcon fontSize="large" color="inherit" />
      </Box>
    </>
  );
};

export default Chatbot;
