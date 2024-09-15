import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Get in Touch</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-400">Feel free to reach out to me via any of the following platforms:</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:email@example.com" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300">
            <FaEnvelope size={32} />
          </a>
          <a href="https://linkedin.com/in/username" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300">
            <FaLinkedin size={32} />
          </a>
          <a href="https://github.com/username" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300">
            <FaGithub size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}
