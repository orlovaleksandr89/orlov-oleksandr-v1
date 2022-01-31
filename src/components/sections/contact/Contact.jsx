import React from 'react'
import Form from '../../common/form'
import styles from './Contact.module.scss'

function Contact() {
  const submitHandle = (data) => {
    console.log(data)
  }

  return (
    <section className={styles.page} id="contact">
      <div className={styles.form_container}>
        <h2 className={styles.form_container_title}>Get in touch</h2>
        <Form submitHandle={submitHandle} />
      </div>
    </section>
  )
}

export default Contact
