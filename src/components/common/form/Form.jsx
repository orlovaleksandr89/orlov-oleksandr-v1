import React from 'react'
import styles from './Form.module.scss'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'

function Form({ submitHandle }) {
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
    submitHandle(data)
    reset({ firstName: '', email: '', body: '' })
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
        <button className={styles.form_button} type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}
Form.propTypes = {
  submitHandle: PropTypes.func.isRequired
}

export default Form
