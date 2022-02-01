import React, { useState } from 'react'
import styles from './Form.module.scss'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import loader from '../../../assets/loader.gif'

function Form({ submitHandle, loading }) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    if (errors.length > 0) {
      return
    }
    setSubmitted(true)
    submitHandle(data)
    reset({ firstName: '', email: '', body: '' })
    setSubmitted(false)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form_input_group}>
        <label htmlFor="firstName">Enter your name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className={styles.input}
          {...register('firstName')}
        />
      </div>
      <div className={styles.form_input_group}>
        <label htmlFor="email">Enter your email</label>
        <input
          type="text"
          name="email"
          id="email"
          className={styles.input}
          {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/g })}
        />
        {errors.email && (
          <span className={styles.form_error}>Please enter a valid email</span>
        )}
      </div>
      <div className={styles.form_input_group}>
        <label htmlFor="body">Enter your message</label>
        <textarea
          type="text"
          name="body"
          id="body"
          className={styles.input}
          {...register('body')}
        />
      </div>
      <div className={styles.form_button_wrapper}>
        {loading && <div className={styles.form_status}>Loading</div>}
        <button className={styles.form_button} type="submit" disabled={loading}>
          {'Submit'}
        </button>
      </div>
      <div
        className={
          submitted ? `${styles.backdrop} ${styles.submitted}` : styles.backdrop
        }
      >
        <img src={loader} alt="" className={styles.backdrop_spinner} />
      </div>
    </form>
  )
}
Form.propTypes = {
  submitHandle: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Form
