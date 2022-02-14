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
import { BsTelegram } from 'react-icons/bs'
import React from 'react'
import redfoxImg from './assets/redfox.jpg'
import ptvlImg from './assets/ptvl.jpg'

export const links = [
  { title: 'Home', path: '#home' },
  { title: 'About', path: '#about' },
  { title: 'Projects', path: '#projects' },
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
  },
  {
    href: 'https://t.me/AlexOrlov89',
    component: <BsTelegram />
  }
]

export const skills = [
  { icon: <FaHtml5 color="#fc2f00" />, title: 'HTML5' },
  { icon: <FaCss3Alt color="#058ed9" />, title: 'CSS3' },
  { icon: <DiJavascript1 color="#ffca3a" />, title: 'JavaScript' },
  { icon: <FaReact color="#12eaea" />, title: 'React js' },
  { icon: <SiRedux color="purple" />, title: 'Redux js' }
]

export const projects = [
  {
    hrefOnline: 'https://primetimevl.com/',
    hrefGit:
      'https://github.com/orlovaleksandr89/prime-time-van-lines-landing-page',
    title: 'Moving company lending page',
    img: ptvlImg,
    stack: 'HTML, SASS, JS, JQ',
    description:
      'My first commercial expiriense. This landing page was build for PT Van Lines moving company to provide info and contact services.'
  },
  {
    hrefOnline: 'https://redfox-online.herokuapp.com/',
    hrefGit: 'https://github.com/orlovaleksandr89/onlineStore',
    title: 'E-commerce pet project',
    img: redfoxImg,
    stack: 'MongoDB, Node, React, Express',
    description:
      'This project was build with MERN stack. During this project i learned how to work with Mongoose, JWT, Redux toolkit... That was fun'
  }
]
