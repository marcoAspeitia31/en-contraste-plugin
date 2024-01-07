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
registerBlockType( 'en-contraste-plugin/hero', {
    title: __( 'Banner Hero', 'en-contraste-plugin' ),
    category: 'widgets',
    icon: 'flag',
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h1.title',
            default: 'Titulo de la sección'
        },
        slogan: {
            type: 'string',
            source: 'html',
            selector: 'span',
            default: 'Slogan de la sección'
        },
        imageURL:{
            type: 'string',
            selector: 'div.wp-block-en-contraste-plugin-hero',
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
            default: 'full'
        }
    },
    supports: {
        align: ['full']
    },
    edit: edit,
    save: save
} )