import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import { CButton, CCard, CCardBody, CCol, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListUser = (prop) => {
    const [lsUser, setUsers] = useState([])
    let user
    useEffect(() => {
        fetchUsers()
      }, [])
    const fetchUsers = async () => {
        try {
          await axios.get(`api/user/list`).then(({ data }) => {
            setUsers(data)
            // console.log(data)
            if(localStorage.getItem('auth_token')){
                user = JSON.parse(localStorage.getItem('auth_user'))
            }
          })
        } catch (error) {
          console.log("Y'a une erreur : " + error)
        }
      }
    return (
        <div>
            <CRow>
                <CCol xs={12} md={12}>
                    <CCard>
                        <CCardBody className="mb-4">
                            <p>
                                <CButton
                                    className="success"
                                    component="a"
                                    color="success"
                                    href="#"
                                    role="button"
                                >
                                    <CIcon icon={icon.cilPlus} />
                                    Ajouter
                                </CButton>
                            </p>
                            <CTable align="middle" className="mb-0 border" hover responsive>
                                <CTableHead color="light">
                                    <CTableRow>
                                    <CTableHeaderCell scope="col">N°</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Nom et prénom</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Role</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Poste</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody className="striped">
                                    {lsUser.map((item, index) => (
                                        <CTableRow v-for="item in tableItems" key={index}>
                                            <CTableDataCell>
                                                <div>{item.id}</div>
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                <div>{item.name + " " + item.firstname}</div>
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                <div>{'role'}</div>
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                <div>{"Aucun"}</div>
                                            </CTableDataCell>
                                            <CTableDataCell>
                                            <div>
                                                {/* {user.fonction_id != 1 ? 11 : } */}
                                                <CButton component="a" color="info" href="#" role="button" onClick={()=>(history(`/publish/edit/${item.id}`, {id: item.id}))}>
                                                    <CIcon icon={icon.cibEyeem} />
                                                </CButton>
                                                {'  '}
                                                <CButton component="a" color="warning" href="#" role="button" onClick={()=>(history(`/publish/edit/${item.id}`, {id: item.id}))}>
                                                    <CIcon icon={icon.cilPen} />
                                                </CButton>
                                                {'  '}
                                                <CButton component="a" color="danger" href="#" role="button">
                                                    <CIcon icon={icon.cilTrash} />
                                                </CButton>
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
        </div>
    );
};

export default ListUser