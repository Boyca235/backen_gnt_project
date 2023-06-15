import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import {
  CRow,
  CCol,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CCard,
  CCardBody,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AllPublish = (prop) => {
  const history = useNavigate()
  let user
  const [publications, setPublications] = useState([])
  useEffect(() => {
    fectchPublication()
  }, [])
  if( localStorage.getItem('auth_token') ){
    user = JSON.parse(localStorage.getItem('auth_user')).fonction_id
  }
  const fectchPublication = async () => {
    try {
      await axios.get(`api/publishment/list`).then(({ data }) => {
        setPublications(data)
      })
    } catch (error) {
      console.log("Y'a une erreur : " + error)
    }
  }
  const handleAdd = (event) => {
    history('/publish/add')
  }
  const HandleEdit = (event) => {
    history('/publish/edit')
  }

  const defaultDisplay = (value) => (
    <div>
      <CButton component="a" color="info" href="#" role="button" onClick={()=>(history(`/publish/edit/${value.id}`, {id: value.id}))}>
        <CIcon icon={icon.cibEyeem} />
      </CButton>
    </div>
  )

  const EChiefDisplay = (value) => (
    <div>
      <CButton component="a" color="info" href="#" role="button" onClick={()=>(history(`/publish/edit/${value.id}`, {id: value.id}))}>
        <CIcon icon={icon.cibEyeem} />
      </CButton>
      {'  '}
      <CButton component="a" color="warning" href="#" role="button" onClick={()=>(history(`/publish/edit/${value.id}`, {id: value.id}))}>
        <CIcon icon={icon.cilPen} />
      </CButton>
      {'  '}
      <CButton component="a" color="danger" href="#" role="button">
        <CIcon icon={icon.cilTrash} />
      </CButton>
    </div>
  )

  const EditeurDisplay = (value) => (
    <div>
      <CButton component="a" color="info" href="#" role="button" onClick={()=>(history(`/publish/edit/${value.id}`, {id: value.id}))}>
        <CIcon icon={icon.cibEyeem} />
      </CButton>
      {'  '}
      <CButton component="a" color="warning" href="#" role="button" onClick={()=>(history(`/publish/edit/${value.id}`, {id: value.id}))}>
        <CIcon icon={icon.cilPen} />
      </CButton>
    </div>
  )

  const displayAddBtn = (
    <p>
      <CButton
        className="success"
        onClick={handleAdd}
        component="a"
        color="success"
        href="#"
        role="button"
      >
        <CIcon icon={icon.cilPlus} />
        Ajouter
      </CButton>
    </p>
  )
  return (
    <CRow>
      <CCol xs={12}>
        <CCard>
          <CCardBody className="mb-4">
          {user == 1 && user != null ? (
            displayAddBtn()
          ) : ''}
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col">N°</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Titre</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Catégorie</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Publicateur</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody className="striped">
                {publications.map((item, index) => (
                  <CTableRow v-for="item in tableItems" key={index}>
                    <CTableDataCell>
                      <div>{item.id}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.title && item.title.length > 70 ? item.title.substring(0,70) + "..." : item.title}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.category.category_name}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>{item.publisher ? item.publisher.name : "Aucun"}</div>
                    </CTableDataCell>
                    {console.log("La fonction du user dans le corps de page : " + user)}
                    <CTableDataCell>
                      <div>
                        {user == 1 && user != null ? (
                          EChiefDisplay(item)
                        ) : ( user == 3 && user != null ? ( EditeurDisplay(item) ) : 
                          defaultDisplay(item)
                        )}
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AllPublish
