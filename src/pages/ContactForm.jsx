import { useState } from 'react'
import { submitContactForm } from '../services/supabaseClient'

export const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => { 
        e.preventDefault()

        const formData = {
            name: name,
            email: email,
            message: message
        }

        try {
            setIsSubmitting(true)
            
            await submitContactForm(formData)
            
            alert(`Thank you, ${name}! Your message has been sent successfully`)
            
            setName('')
            setEmail('')
            setMessage('')
        } catch (error) {
            alert(`Error: ${error.message}`)
        } finally {
            setIsSubmitting(false) 
        }
    }

    return (
        <main className='container'>
            <h1 className='mt-3 mb-4'>Contact Me</h1>
            <form onSubmit={handleSubmit} className="w-100" style={{ maxWidth: '500px' }}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <textarea 
                        className="form-control"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="5"
                        required
                    />
                </div>

                <button 
                    type="submit" 
                    className="btn btn-primary w-100"
                    disabled={isSubmitting}
                    style={{ backgroundColor: 'white', color: 'black' }}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </main>
    )
}