import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const UserInfo = () => {
  // const [popup, setPopup] = React.useState(false);
  // const popupOpen = () => setPopup(true);
  // const popupClose = () => setPopup(false);

  return (
    <Box className='user-info'>
      <div className='user-info__header'>
        <h2>마이페이지</h2>
      </div>
      <Paper className='user-info__body' elevation={3}>
        <div className='body-wrap'>
          <div className='body-wrap__top'>
            <h3>
              개인정보
            </h3>
          </div>
          <Divider />
          <div className='body-wrap__bottom'>
            <div className='body-wrap__bottom__info'>
              <table>
                <tr>
                  <th>성함 : </th>
                  <td>aaaaa</td>
                </tr>
                <tr>
                  <th>주소 : </th>
                  <td>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo accusantium quis dolor, autem minus cumque explicabo modi soluta ad debitis ipsam iure, voluptate quae maxime sequi tenetur repellendus aliquid incidunt.
                  </td>
                </tr>
                <tr>
                  <th>연락처 : </th>
                  <td>asdfasdf</td>
                </tr>
              </table>
            </div>
            <div className='body-wrap__bottom__btn'>
              <Button variant="contained">정보수정</Button>
            </div>
          </div>
        </div>
      </Paper>
      {/* <Modal className='user-info__popup' open={popup} onClose={popupClose}>
        <div className='user-info__popup__wrap'>
          <Box>
            <h3>회원정보 수정</h3>
            <table>
              <tr>
                <th>회원 아이디</th>
                <td>
                  <TextField required label='필수' variant='standard' />
                </td>
              </tr>
              <tr>
                <th>회원 비밀번호</th>
                <td>
                  <TextField required label='필수' variant='standard' />
                </td>
              </tr>
              <tr>
                <th>회원 이름</th>
                <td>
                  <TextField required label='필수' variant='standard' />
                </td>
              </tr>
              <tr>
                <th>회원 주소</th>
                <td>
                  <TextField required label='필수' variant='standard' />
                </td>
              </tr>
              <tr>
                <th>회원 연락처</th>
                <td>
                  <TextField required label='필수' variant='standard' />
                </td>
              </tr>
            </table>
          </Box>
        </div>
      </Modal> */}
    </Box>
  );
}

export default UserInfo;
