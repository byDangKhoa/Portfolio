import React, { useState } from 'react'
import { XIcon } from '@heroicons/react/outline'
import Modal from 'react-modal'
import classnames from 'classnames'
import styled from 'styled-components'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

const StyledButton = styled(Button)`
  color: white;
  background-color: ${(props) => (props.viLanguage ? '#663eff' : 'black')};
  border: none;
`
const ContactModal = ({ toggleOpen, toggleClose, children, className }) => {
  const { t, i18n } = useTranslation()
  const [viLanguage, setViLanguage] = useState(
    localStorage.getItem('i18nextLng') === 'vi'
  )
  const languageOptions = ['English', 'Viet Nam']
  const modalClassNames = classnames(
    className,
    'modal',
    // eslint-disable-next-line comma-dangle
    'absolute my-auto mx-6 top-0 bottom-0 right-0 left-0 bg-white rounded-lg max-w-[565px] h-[435px] bg-primary-500 pt-10 sm:mx-auto md:h-[500px] dark:bg-white'
  )
  const onChangeEn = function () {
    setViLanguage(false)
    localStorage.setItem('i18nextLng', 'en')
    i18n.changeLanguage('en')
  }
  const onChangeVi = function () {
    setViLanguage(true)
    localStorage.setItem('i18nextLng', 'vi')
    i18n.changeLanguage('vi')
  }
  return (
    <div className={`w-full`}>
      {/* <button
        onClick={toggleClose}
        className='relative inline-flex items-center py-3 overflow-hidden text-white font-semibold bg-secondary px-12 rounded-md group active:bg-secondary-500 focus:outline-none focus:ring'
        href='/download'>
        <span className='absolute right-0 md:transition-transform md:translate-x-full md:group-hover:-translate-x-10 hidden md:block'>
          👋
        </span>

        <span className='text-sm font-medium transition-all group-hover:mr-4'>
          Say hi!
        </span>
      </button> */}
      <StyledButton
        viLanguage={viLanguage}
        style={{ borderRadius: '6px 0 0 6px', marginRight: 0 }}
        onClick={onChangeVi}>
        VN
      </StyledButton>
      <StyledButton
        viLanguage={!viLanguage}
        style={{ borderRadius: '0 6px 6px 0', marginLeft: 0 }}
        onClick={onChangeEn}>
        EN
      </StyledButton>

      <Modal
        ariaHideApp={false}
        className={modalClassNames}
        overlayClassName={'modal-overlay'}
        isOpen={toggleOpen}
        onRequestClose={toggleClose}>
        <button
          className='absolute flex justify-end right-4 top-4 z-[150] text-white dark:text-primary-500'
          onClick={toggleClose}>
          {' '}
          <XIcon className='w-10 h-10' />
        </button>
        <div className='w-full  dark:text-white'>{children}</div>
      </Modal>
    </div>
  )
}

export default ContactModal
