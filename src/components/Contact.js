import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm } from "react-hook-form";

const Contact = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        window.location.href = `mailto:william02px2022@gmail?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`;
    };
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 
        text-2xl">Get In Touch</h3>
        <div className="flex flex-col space-y-10">
            <div className="space-y-10">
                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="h-7 w-7 animate-pulse text-gray-500"/>
                    <p className="text-2xl text-gray-500">+123456789</p>
                </div>
                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="h-7 w-7 animate-pulse text-gray-500"/>
                    <p className="text-2xl text-gray-500">demo@demo.com</p>
                </div>
            </div>

            <form className="flex flex-col space-y-2" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex space-x-2">
                    <input placeholder="Name" className="contactInput" type="text" 
                    {...register("name")} />
                    <input placeholder="Email" className="contactInput" type="email" 
                    {...register("email")} />
                </div>
                <input placeholder="Subject" className="contactInput" type="text" 
                {...register("subject")} />
                <textarea placeholder="Message" className="contactInput" 
                {...register("message")} />
                <button type="submit" className="bg-[#F7AB0A]/40 py-5 px-10 rounded-md 
                text-black font-bold text-lg text-center uppercase tracking-[10px] 
                hover:bg-[#F7AB0A]">
                    Send</button>
            </form>
        </div>
    </motion.div>
  )
}

export default Contact