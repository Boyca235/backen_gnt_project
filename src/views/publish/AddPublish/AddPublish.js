import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { FileUploader } from 'react-drag-drop-files'

const AddPublish = (content) => {
  const history = useNavigate()
  const location = useLocation()
  const params = new URLSearchParams(window.location.pathname)
  const showList = (event) => {
    history('/publish/list')
  }
  const fileTypes = ['JPG', 'PNG', 'GIF', 'JPEG', 'JFIF', 'jpg', 'png', 'gif', 'jpeg', 'jfif']
  const [fichier, setFile] = useState(null)
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fectchCategory()
  }, [])
  const fectchCategory = async () => {
    try {
      await axios.get(`api/category/list`).then(({ data }) => {
        setCategories(data)
        // console.log(data)
      })
    } catch (error) {
      console.log("Y'a une erreur : " + error)
    }
  }
  const [publisInput, setInput] = useState({
    titre: '',
    category: '',
    access_level: '',
    nbr_passage: '',
    passage_debut: '',
    passage_fin: '',
    contenu: '',
    error_list: [],
  })
  const handleInput = (e) => {
    e.persist()
    setInput({ ...publisInput, [e.target.name]: e.target.value })
  }
  const handleChange = (file) => {
    setFile(file)
    console.log(file)
  }
  const handleChangeOn = (file) => {
    setFile(file)
    console.log(file)
  }
  const str = params.toString()
  const str2 = str.split('%2F')
  // if (str2.length === 4) {
  //   // console.log('le lien : ' + str2[2] + ' et le 3 elt : '+str2[3].substring(0,1))
  // }
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      titre: publisInput.titre,
      category_name: publisInput.category,
      access_level: publisInput.access_level,
      nbr_passage: publisInput.nbr_passage,
      passage_debut: publisInput.passage_debut,
      passage_fin: publisInput.passage_fin,
      contenu: publisInput.contenu,
    }
    // console.log('les données saisies : ' + data)

    axios.get('api/sanctum/csrf-cookie').then((response) => {
      axios.post(`api/publishment/adds`, data).then(
        (res) => {
          if (res.status === 201) {
            // console.log(res.data)
            history('/publish/list')
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

  const LsCat = [
    {
      id: 1,
      category_name: 'Tendance',
      descrip_cat: 'contenu description',
    },
    {
      id: 2,
      category_name: 'Business',
      descrip_cat: 'contenu business',
    },
  ]
  const LsLevel = [
    // {
    //   key: 'Menu',
    //   value: 'Menu',
    // },
    {
      key: 'Baniere',
      value: 'Banière',
    },
    {
      key: 'Annonce',
      value: 'Annonce',
    },
    {
      key: 'Trending',
      value: 'Entête',
    },
    {
      key: 'SlideBaner',
      value: 'Slider haut 1',
    },
  ]
  return (
    <div>
      <CRow>
        <CCol xs={12}>
          <CCard>
            <CCardBody className="mb-4">
              <p>
                <CButton
                  className="success"
                  onClick={showList}
                  component="a"
                  color="success"
                  href="#"
                  role="button"
                >
                  <CIcon icon={icon.cilList} />{' '}
                  Voir la liste
                </CButton>
              </p>
              <div>
                <CForm noValidate onSubmit={handleSubmit}>
                  <CRow>
                    <CCol xs={12} md={6}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon1">
                          <CIcon icon={icon.cilHeader} />
                        </CInputGroupText>
                        <CFormInput
                          name="titre"
                          placeholder="Titre de la publication"
                          aria-label="Titre"
                          aria-describedby="basic-addon1"
                          value={publisInput.titre}
                          onChange={handleInput}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} md={6}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          <CIcon icon={icon.cilCart} /> Catégorie
                        </CInputGroupText>
                        <CFormSelect id="inputGroupSelect01" onChange={handleInput} name="category">
                          {categories.length > 0 &&
                            categories.map((item, index) => (
                              <option key={index} value={item.id}>
                                {item.category_name}
                              </option>
                            ))}
                        </CFormSelect>
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs={12} md={3}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText htmlFor="inputGroupeSelect02">
                          Niveau d&apos;accès
                        </CInputGroupText>
                        <CFormSelect
                          id="inputGroupeSelect02"
                          onChange={handleInput}
                          name="access_level"
                          multiple
                        >
                          {LsLevel.map((item, key) => (
                            <option key={key} value={item.key}>
                              {item.value}
                            </option>
                          ))}
                        </CFormSelect>
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} md={3}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon2">Passage</CInputGroupText>
                        <CFormInput
                          placeholder="Nombre de passage par jour"
                          name="nbr_passage"
                          aria-label="Passage"
                          type="number"
                          value={publisInput.nbr_passage}
                          onChange={handleInput}
                          aria-describedby="basic-addon2"
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} md={3}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon3">Debut</CInputGroupText>
                        <CFormInput
                          placeholder="Heure de debut"
                          name="passage_debut"
                          aria-label="Passage"
                          type="time"
                          value={publisInput.passage_debut}
                          onChange={handleInput}
                          aria-describedby="basic-addon3"
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} md={3}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText id="basic-addon4">Fin</CInputGroupText>
                        <CFormInput
                          placeholder="Heure de fin"
                          name="passage_fin"
                          aria-label="Passage"
                          type="time"
                          value={publisInput.passage_fin}
                          onChange={handleInput}
                          aria-describedby="basic-addon4"
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs={12} md={12}>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>Contenu</CInputGroupText>
                        <CFormTextarea
                          aria-label="With textarea"
                          value={publisInput.contenu}
                          name="contenu"
                          onChange={handleInput}
                        ></CFormTextarea>
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs={6} md={3}>
                      <CFormLabel htmlFor="photoToStore">Importer toutes les photos possibles</CFormLabel>
                    </CCol>
                    <CCol xs={6} md={9}>
                      <div className="mb-3">
                        {/* <CFormInput type="file" id="formFile" label="Photo principale" /> */}
                        <FileUploader handleChange={handleChangeOn} name="fileP" types={fileTypes} label="Glisser ou déposer l'image principale"/>
                      </div>
                      
                      <div className="mb-3">
                        {/* <CFormInput type="file" id="formFile" label="Photo principale" /> */}
                        <FileUploader handleChange={handleChange} name="fileS" types={fileTypes} multiple={true} label="Glisser ou déposer les images de la publication"/>
                      </div>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs={12} md={9}></CCol>
                    <CCol xs={12} md={3}>
                      <CButton className="success" color="success" type="submit">
                        <CIcon icon={icon.cilSave} />{' '}
                        Enregistrer
                      </CButton>
                      {'  '}
                      <CButton className="danger" color="danger" type="reset"
                      >
                        <CIcon icon={icon.cilDelete} />{' '}
                        Annuler
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default AddPublish
