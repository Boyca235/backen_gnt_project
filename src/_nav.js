import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilPlus,
  cilList,
  cilNewspaper,
  cilCat,
  cilUser,
  cilEnvelopeLetter,
  cilEnvelopeOpen,
  cilEnvelopeClosed,
  cilFolderOpen,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
let user
if(localStorage.getItem('auth_token')){
  user = JSON.parse(localStorage.getItem('auth_user'))
}
let tab
user.fonction_id == 1 ? tab = [
  {
    component: CNavItem,
    name: 'Tableau de bord',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Gestion',
  },
  {
    component: CNavGroup,
    name: 'Publications',
    to: '/base',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: 'Ajout',
      //   to: '/base/accordion',
      //   icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      // },
      {
        component: CNavItem,
        name: 'Liste',
        to: '/publish/list',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Archivées',
        to: '/base/accordion',
        icon: <CIcon icon={cilFolderOpen} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'News letter',
    to: '/base',
    icon: <CIcon icon={cilEnvelopeLetter} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Nouvelles',
        to: '/base/accordion',
        icon: <CIcon icon={cilEnvelopeClosed} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Ouvertes',
        to: '/base/accordion',
        icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Archivées',
        to: '/base/accordion',
        icon: <CIcon icon={cilFolderOpen} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Administration',
  },
  {
    component: CNavItem,
    name: 'Catégories',
    to: '/categories/list',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Utilisateurs',
    to: '/users/list',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Docs',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
] : 
( user.fonction_id == 2 ? tab = [
  {
    component: CNavItem,
    name: 'Tableau de bord',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Gestion',
  },
  {
    component: CNavGroup,
    name: 'Publications',
    to: '/base',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Ajout',
        to: '/base/accordion',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Liste',
        to: '/publish/list',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Archivées',
        to: '/base/accordion',
        icon: <CIcon icon={cilFolderOpen} customClassName="nav-icon" />,
      },
    ],
  },
] : (tab == 3 ? [
  {
    component: CNavItem,
    name: 'Tableau de bord',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Gestion',
  },
  {
    component: CNavGroup,
    name: 'Publications',
    to: '/base',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: 'Ajout',
      //   to: '/base/accordion',
      //   icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      // },
      {
        component: CNavItem,
        name: 'Liste',
        to: '/publish/list',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Archivées',
        to: '/base/accordion',
        icon: <CIcon icon={cilFolderOpen} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'News letter',
    to: '/base',
    icon: <CIcon icon={cilEnvelopeLetter} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Nouvelles',
        to: '/base/accordion',
        icon: <CIcon icon={cilEnvelopeClosed} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Ouvertes',
        to: '/base/accordion',
        icon: <CIcon icon={cilEnvelopeOpen} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Archivées',
        to: '/base/accordion',
        icon: <CIcon icon={cilFolderOpen} customClassName="nav-icon" />,
      },
    ],
  },
] : 
[
  {
    component: CNavItem,
    name: 'Tableau de bord',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Gestion',
  },
  {
    component: CNavGroup,
    name: 'Publications',
    to: '/base',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Liste',
        to: '/publish/list',
        icon: <CIcon icon={cilList} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Archivées',
        to: '/base/accordion',
        icon: <CIcon icon={cilFolderOpen} customClassName="nav-icon" />,
      },
    ],
  },
]))
const _nav = tab

export default _nav
