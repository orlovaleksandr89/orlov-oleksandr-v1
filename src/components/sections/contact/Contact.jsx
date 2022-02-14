import React, { useState } from 'react'
import Form from '../../common/form'
import styles from './Contact.module.scss'
import axios from 'axios'
import { icons } from '../../../config'
import IconLink from '../../common/iconLink'

function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const [formSubmitStatus, setFormSubmitStatus] = useState({})

  axios.defaults.headers.post['Content-Type'] = 'application/json'
  const submitHandle = async (data) => {
    setIsLoading(true)
    try {
      const response = await axios.post(
        'https://formsubmit.co/ajax/orlovaleksandr89@gmail.com',
        data
      )
      setFormSubmitStatus(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setFormSubmitStatus({})
    }
  }
  return (
    <section className={styles.page} id="contact">
      <div className={styles.form_container}>
        <h2 className={styles.form_container_title}>Get in touch</h2>
        <Form
          submitHandle={submitHandle}
          loading={isLoading}
          status={formSubmitStatus}
          setFormSubmitStatus={(value) => setFormSubmitStatus(value)}
        />
      </div>
      <div className={styles.footer}>
        <h3>You can find me here</h3>
        <ul className={styles.footer_ul}>
          {icons.map((icon) => (
            <li key={icon.href}>
              <IconLink {...icon} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact
