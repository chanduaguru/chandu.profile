import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); 

    const promise = emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast.promise(
      promise,
      {
        pending: 'Sending message...',
        success: 'Message sent successfully!',
        error: 'Failed to send message, please try again.'
      }
    );

    promise.then(
      () => {
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section 
      id="contact" 
      style={{
        backgroundImage: `url('/contacts.jpg')`, // Your wallpaper image
        backgroundSize: 'cover',
        backgroundPosition: 'center center', // Explicitly center the background
        backgroundRepeat: 'no-repeat',
      }}
      className="min-h-screen flex flex-col items-center justify-center pt-20 relative" 
    >
      <h2 className="relative z-10 text-4xl font-bold mb-8 text-black">Get In Touch</h2> 
      <p className="relative z-10 text-gray-800 text-lg mb-8 max-w-lg text-center px-4"> 
        I'm always open to discussing new projects, creative ideas, or opportunities. 
        Feel free to send me a message!
      </p>
      
      <form ref={form} onSubmit={sendEmail} className="relative z-10 w-full max-w-lg space-y-6 px-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-800">Name</label> 
          <input 
            type="text" 
            id="name" 
            name="name" 
            className="mt-1 block w-full bg-white border-gray-400 rounded-md p-3 text-black focus:border-blue-500 focus:ring-blue-500" 
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className="mt-1 block w-full bg-white border-gray-400 rounded-md p-3 text-black focus:border-blue-500 focus:ring-blue-500" 
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-800">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            className="mt-1 block w-full bg-white border-gray-400 rounded-md p-3 text-black focus:border-blue-500 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md font-medium transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}