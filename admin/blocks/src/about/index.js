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
        firstAttribute: {
            type: 'string' 
        }
    },
    edit: edit,
    save: save
} )