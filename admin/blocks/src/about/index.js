/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import edit from './edit'
import save from './save'

/**
 * Block registry
 */
registerBlockType( 'en-contraste-plugin/about', {
    title: __( 'Acerca de', 'en-contraste-plugin' ),
    category: 'widgets',
    icon: 'star-filled',
    attributes: {
        slogan: {
            type: 'string',
            source: 'html',
            selector: 'span',
            default: 'Slogan de la sección'
        },
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2.title',
            default: 'Titulo de la sección'
        },
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
            default: 'Contenido de la sección'
        },
        imageURL:{
            type: 'string',
            selector: 'img.efp-img',
            source: 'attribute',
            attribute: 'src'
        },
        imageAlt:{
            type: 'string',
            selector: 'img.efp-img',
            default: 'En contraste fotografía imagen',
            source: 'attribute',
            attribute: 'alt'
        },
        imageWidth: {
            type: 'integer',
            selector: 'img.efp-img',
            source: 'attribute',
            attribute: 'alt'
        },
        imageHeight: {
            type: 'integer',
            selector: 'img.efp-img',
            source: 'attribute',
            attribute: 'alt'
        },
        buttonURL: {
            type: 'string',
            selector: 'a.main-btn',
            source: 'attribute',
            attribute: 'href'
        },
        buttonText: {
            type: 'string',
            default: 'Contactar',
            selector: 'a.main-btn',
            source: 'html',
        },
        align: {
            type: 'string',
            default: 'wide'
        }
    },
    supports: {
        align: ['wide']
    },
    edit: edit,
    save: save
} )