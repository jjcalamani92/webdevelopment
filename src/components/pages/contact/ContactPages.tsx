import React from 'react'
import { HeadingPrimary } from '../../layouts/HeadingPrimary'
import { ContactComponent } from './ContactComponent'

export const ContactPages = () => {
    return (
        <>
            <HeadingPrimary
                titleP='Contactate'
                titleS='conmigo'
            />
            <ContactComponent/>
        </>
    )
}
