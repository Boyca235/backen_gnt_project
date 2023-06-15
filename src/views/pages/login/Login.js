import React, { useState } from 'react'
import { HashRouter, Route, Routes, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CImage,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import LogoImg from 'src/assets/images/logo.png'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  const history = useNavigate()
  // const DefaultLayout = React.lazy(() => import('../../../layout/DefaultLayout'))
  const [loginInput, setLogin] = useState({
    email: '',
    password: '',
    error_list: [],
  })
  const handleInput = (e) => {
    e.persist()
    setLogin({ ...loginInput, [e.target.name]: e.target.value })
  }

  // const logout = (
  //   // e.preventDefault()
    
  //   axios.post(`/api/logout`).then(res => {
  //     if(res.data.status === 200)
  //     {
  //       localStorage.removeItem('auth_token')
  //       localStorage.removeItem('auth_name')//
  //       localStorage.removeItem('auth_user')//
  //       history('/login')
  //     }
  //   })
  // )
  const handleSubmit = (event) => {
    event.preventDefault()
    const donnees = {
      email: loginInput.email,
      password: loginInput.password,
    }
    axios.get('api/sanctum/csrf-cookie').then((response) => {
      axios.post(`api/login`, donnees).then(
        (res) => {
          console.log(res)
          if (res.data.status === 200) {
            localStorage.setItem('auth_token', res.data.token)
            localStorage.setItem('auth_name', res.data.data.email)
            localStorage.setItem('auth_user', JSON.stringify(res.data.data))
            if (res.data.data != null) {
              history('/dashboard')
              // setTimeout(logout, 60000)
            }
          } else {
            console.log('Erreur interne')
          }
        },
        (error) => {
          console.log('Erreur de connexion' + error)
        },
      )
    })
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm noValidate onSubmit={handleSubmit}>
                    <h1>Connexion</h1>
                    <p className="text-medium-emphasis">Connectez-vous à votre espace</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        name="email"
                        id="validationServer05"
                        feedback="Renseigner un adresse mail valide"
                        autoComplete="email"
                        required
                        value={loginInput.email}
                        onChange={handleInput}
                        placeholder="Adresse mail"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        name="password"
                        feedback="Renseigner un mot de passe"
                        type="password"
                        placeholder="Mot de passe"
                        autoComplete="current-password"
                        onChange={handleInput}
                        required
                        value={loginInput.password}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="secondary" type="submit" className="px-4">
                          Se connecter
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Mot de passe oublié?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div style={{ width: '50%' }}>
                    <CImage className="w-100" src={LogoImg} alt="logo" align="center" />
                    {/* <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link> */}
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
