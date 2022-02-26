import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ContactIcons } from "./ContactIcons"

export const ContactComponent = () => {
    return (
        <section className="contact">
            <ContactIcons/>
            <div className="row" >
                <div className="image">
                    <img className="tilt" src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644021310/React-jj/blogs/contact-img_rnsmni.svg" alt=""/>
                </div>
                <form action="/send-email" method="POST">
                    <div className="inputBox">
                        <input type="text" name="name" placeholder="tu nombre" required/>
                        <input type="number" name="phone" placeholder="tu numero" required/>
                    </div>
                    <div className="inputBox">
                        <input type="email" name="email" placeholder="tu email" required/>
                        <input type="text" name="asunto" placeholder="asunto" required/>
                    </div>
                    <textarea name="message" placeholder="tu mensaje" id="" cols={30} rows={10} required></textarea>
                    <input type="hidden" name="_next" value=""/>
                    <button type="submit" className="btn-1"> enviar mensaje  <FontAwesomeIcon className="icon" icon={faPaperPlane} />  </button>
                </form>
            </div>
        </section>
    )
}