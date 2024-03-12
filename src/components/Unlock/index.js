import {useState} from 'react'

import {MainContainer, LockBox, ButtonClick} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)

  const onClickBtn = () => {
    setLock(prev => !prev)
  }

  const buttonValue = lock ? 'Unlock' : 'Lock'
  return (
    <MainContainer>
      {lock ? (
        <LockBox>
          <img
            alt="lock"
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          />
          <p>Your Device is Locked</p>
        </LockBox>
      ) : (
        <LockBox>
          <img
            alt="unlock"
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          />
          <p>Your Device is UnLocked</p>
        </LockBox>
      )}
      <ButtonClick type="button" onClick={onClickBtn}>
        {buttonValue}
      </ButtonClick>
    </MainContainer>
  )
}

export default Unlock
