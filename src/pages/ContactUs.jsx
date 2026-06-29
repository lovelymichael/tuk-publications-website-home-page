import Layout  from "../components/Layout";
import InnerHeroBanner from "../components/InnerHeroBanner";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import { contactData } from "../data/contactData";
import GoogleMap from "../components/GoogleMap";


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
                  <GoogleMap mapUrl={contactData.mapUrl}/>
            </div>
            </div>
        </Layout>
    )
}
export default ContactUs;