import React, { useState } from 'react'
import Form from '../../common/form'
import styles from './Contact.module.scss'
import axios from 'axios'

function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  const submitHandle = async (data) => {
    setIsLoading(true)
    try {
      const response = await axios.post(
        'https://formsubmit.co/ajax/orlovaleksandr89@gmail.com',
        data
      )
      console.log(response)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <section className={styles.page} id="contact">
      <div className={styles.form_container}>
        <h2 className={styles.form_container_title}>Get in touch</h2>
        <Form submitHandle={submitHandle} loading={isLoading} />
      </div>
    </section>
  )
}

export default Contact
