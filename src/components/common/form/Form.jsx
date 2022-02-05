import React, { useEffect, useState } from 'react'
import styles from './Form.module.scss'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import loader from '../../../assets/loader.gif'

function Form({ submitHandle, loading, status, setFormSubmitStatus }) {
  const [submitted, setSubmitted] = useState(false)
  const { message, success } = status
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    const clearFormTimer = setTimeout(() => {
      setSubmitted(false)
      setFormSubmitStatus({})
    }, 3500)

    return () => {
      clearTimeout(clearFormTimer)
    }
  }, [submitted])

  const onSubmit = async (data) => {
    setSubmitted(false)
    try {
      if (errors.length > 0) {
        return
      }
      await submitHandle(data)
      reset({ firstName: '', email: '', body: '' })
      setSubmitted(true)
    } catch (error) {
      console.log(error)
    }
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
        {submitted && (
          <div
            className={
              success === 'true' ? styles.form_status : styles.form_error
            }
          >
            {message}
          </div>
        )}
        <button className={styles.form_button} type="submit" disabled={loading}>
          Send message
        </button>
      </div>

      {/* backdrop */}
      <div
        className={
          loading ? `${styles.backdrop} ${styles.loading}` : styles.backdrop
        }
      >
        <img src={loader} alt="" className={styles.backdrop_spinner} />
      </div>
    </form>
  )
}
Form.propTypes = {
  submitHandle: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  status: PropTypes.object.isRequired,
  setFormSubmitStatus: PropTypes.func.isRequired
}

export default Form
