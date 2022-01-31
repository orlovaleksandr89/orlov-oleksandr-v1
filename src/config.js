import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaCss3Alt,
  FaHtml5,
  FaReact
} from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { SiRedux } from 'react-icons/si'
import React from 'react'

export const links = [
  { title: 'Home', path: '#home' },
  { title: 'About', path: '#about' },
  { title: 'Expiriense', path: '#projects' },
  { title: 'Contact me', path: '#contact' }
]

export const icons = [
  {
    href: 'https://www.instagram.com/orlov_oleksandr/',
    component: <FaInstagram />
  },
  {
    href: 'https://www.linkedin.com/in/oleksandr-orlov-9b6525108/',
    component: <FaLinkedin />
  },
  {
    href: 'https://github.com/orlovaleksandr89',
    component: <FaGithub />
  }
]

export const skills = [
  { icon: <FaHtml5 color="#fc2f00" />, title: 'HTML5' },
  { icon: <FaCss3Alt color="#058ed9" />, title: 'CSS3' },
  { icon: <DiJavascript1 color="#ffca3a" />, title: 'JavaScript' },
  { icon: <FaReact color="#12eaea" />, title: 'React js' },
  { icon: <SiRedux color="purple" />, title: 'Redux js' }
]
