import Layout  from "../components/Layout";
import InnerHeroBanner from "../components/InnerHeroBanner";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";


const ContactUs = () =>{
    return(
        <Layout>
            <InnerHeroBanner title="Contact Us"/>
           
            <div className="mx-w-6xl mx-auto p-20 py-12">
                <div className="grid lg:grid-cols-[2fr_1fr] gap-10 items-start">
                <ContactInfo/>
                <ContactForm/>
            </div>

            {/*Google map */}
            <div className="mt-10">
                      <iframe  title="Google Map"
            className="w-full h-[350px] border border-[#e7e7e7]" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.090107380379!2d77.37020801513947!3d28.627061382420028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce550b1654f93%3A0x137114a10b18e09d!2sThe%20Ultimate%20Knowledge%20(TUK)!5e0!3m2!1sen!2sin!4v1571809521754!5m2!1sen!2sin"></iframe>
            </div>
            </div>
        </Layout>
    )
}
export default ContactUs;