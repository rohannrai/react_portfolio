import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Section from '../components/Section';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const PUBLIC_KEY = "QVp3PcdcebyYYw55e";
      const SERVICE_ID = "service_333lugj";
      const TEMPLATE_ID = "template_4wj0lhb";

      emailjs.init(PUBLIC_KEY);

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "rairohan2005@gmail.com"
        }
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ paddingTop: '6rem' }}>
      <Section id="contact" title="Get In Touch">
        <div className="grid" style={{ gridTemplateColumns: '1fr', gap: '2.5rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-light" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Let's Connect
            </h3>
            <p className="text-tertiary" style={{ marginBottom: '1.5rem' }}>
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, I'll do my best to get back to you!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary" style={{ width: '1.5rem', height: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-light" style={{ fontWeight: '500' }}>Email</h4>
                  <a
                    href="mailto:rairohan2005@gmail.com"
                    className="text-tertiary"
                    style={{
                      transition: 'color 0.3s ease',
                      textDecoration: 'none'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-secondary)'}
                    onMouseOut={(e) => e.currentTarget.style.color = ''}
                  >
                    rairohan2005@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1rem'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary" style={{ width: '1.5rem', height: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-light" style={{ fontWeight: '500' }}>Location</h4>
                  <p className="text-tertiary">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-dark shadow-lg"
              style={{
                padding: '1.5rem',
                borderRadius: '0.5rem'
              }}
            >
              {submitStatus === 'success' && (
                <motion.div
                  style={{
                    marginBottom: '1rem',
                    padding: '1rem',
                    borderRadius: '0.375rem',
                    backgroundColor: 'rgba(6, 78, 59, 0.2)',
                    border: '1px solid #10B981',
                    color: '#10B981'
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you for your message! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  style={{
                    marginBottom: '1rem',
                    padding: '1rem',
                    borderRadius: '0.375rem',
                    backgroundColor: 'rgba(127, 29, 29, 0.2)',
                    border: '1px solid #EF4444',
                    color: '#EF4444'
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errorMessage}
                </motion.div>
              )}

              {['name', 'email', 'subject'].map((field) => (
                <div key={field} style={{ marginBottom: '1rem' }}>
                  <label htmlFor={field} className="text-light" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    className="bg-primary text-light"
                    style={{
                      width: '100%',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.375rem',
                      border: '1px solid white',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#10B981'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'white'}
                  />
                </div>
              ))}

              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="message" className="text-light" style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-primary text-light"
                  style={{
                    width: '100%',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.375rem',
                    border: '1px solid white',
                    outline: 'none',
                    resize: 'none'
                  }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#10B981'}
                  onBlur={(e) => e.currentTarget.style.borderColor = 'white'}
                />
              </div>

              <motion.button
                type="submit"
                className="bg-secondary text-primary"
                style={{
                  width: '100%',
                  padding: '0.75rem 0',
                  borderRadius: '0.375rem',
                  border: 'none',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
