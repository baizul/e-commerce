import ContactUsForm from "../../components/ContactUs/ContactUsForm"
import DetailsCard from "../../components/ContactUs/DetailsCard"
import HeaderSection from "../../components/ContactUs/HeaderSection"

const ContactUs = () => {
  return (
    <div className="p-4 bg-white lg:p-14">
        <HeaderSection PageName="Contact Us"/>
         <div className="flex flex-col-reverse mt-12 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <ContactUsForm />
            </div>
            <div className="w-full lg:w-1/2 bg-nero">
              <DetailsCard />
            </div>
         </div>
    </div>
  )
}

export default ContactUs