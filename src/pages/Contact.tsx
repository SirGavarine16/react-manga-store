import { FC } from 'react';

import './../styles/contact.css';
import { useHelmet } from '../hooks';

interface Props {
}

const Contact: FC<Props> = () => {
    const { Helmet } = useHelmet({
        title: 'Manga Store - Contact'
    });

    return (
        <main>
            <Helmet />

            <h1 className="page-title">
                Contact
            </h1>

            <div className="contact-container">
                <form className='contact-form'>
                    <fieldset>
                        <legend>Contact Data</legend>
                        <div className='field'>
                            <label>Name:</label>
                            <input type="text" id='name' name='name' className='input' placeholder='Your name...' required />
                        </div>
                        <div className='field'>
                            <label>Subject:</label>
                            <input type="text" id='subject' name='subject' className='input' placeholder='Your subject...' required />
                        </div>
                        <div className='field'>
                            <label>E-mail:</label>
                            <input type="text" id='email' name='email' className='input' placeholder='Your e-mail address...' required />
                        </div>
                        <div className='field'>
                            <label>Message:</label>
                            <textarea id='message' name='message' className='input' placeholder='Your message...' rows={6} required></textarea>
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Extra Data</legend>
                        <div className='field'>
                            <label>Country:</label>
                            <select name="country" id="country" className='input' required>
                                <option value="" selected disabled>-- Select --</option>
                                <option value="usa">United States</option>
                                <option value="uk">United Kingdom</option>
                                <option value="ger">Germany</option>
                                <option value="jp">Japan</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Client:</label>
                            <input type="radio" className="input" name="type" id="client" />
                        </div>
                        <div className="field">
                            <label>Developer:</label>
                            <input type="radio" className="input" name="type" id="developer" />
                        </div>
                    </fieldset>
                    <button type='submit' className='button-primary' >Send Data</button>
                </form>
            </div>

        </main>
    );
}

export default Contact;