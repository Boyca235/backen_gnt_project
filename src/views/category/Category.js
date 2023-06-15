import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import {
  CCol,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CCard,
  CCardBody,
  CButton,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Category = (props) => {
  const history = useNavigate()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fectchCategory()
  }, [])
  const fectchCategory = async () => {
    try {
      await axios.get(`/category/list`).then(({ data }) => {
        setCategories(data)
        console.log(data)
      })
    } catch (error) {
      console.log("Y'a une erreur : " + error)
    }
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard>
          <CCardBody className="mb-4">
            <p>
              <CButton className="success" component="a" color="success" href="#" role="button">
                <CIcon icon={icon.cilPlus} />
                Ajouter
              </CButton>
            </p>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col">N°</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Titre</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody className="striped">
                {categories.length > 0 &&
                  categories.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>
                        <div>{item.id}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.category_name}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.descrip_cat ? item.descrip_cat : 'aucune description'}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>
                          <CButton component="a" color="warning" href="#" role="button">
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
  )
}

export default Category
