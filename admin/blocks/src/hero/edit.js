/**
 * The edit function describes the structure of your block in the context
 * of the editor. This represents what the editor will render when the
 * block is used.
 * 
 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/
 * @sice 1.0.0
 */

import { RichText, MediaUpload, URLInputButton, InspectorControls, useBlockProps } from '@wordpress/block-editor'
import { Button, Panel, PanelBody, PanelRow, TextControl } from '@wordpress/components'

const Edit = ( props ) => {
    const {
        attributes: {
            title,
            slogan,
            imageURL,
            buttonURL,
            buttonText
        },
        setAttributes,
        className
    } = props

    const onChangeSlogan = newSlogan => setAttributes( { slogan: newSlogan } )
    const onChangeTitle = newTitle => setAttributes( { title: newTitle } )
    const onSelectImage = newImage => {
        setAttributes({
            imageURL: newImage.sizes.full.url
        })
    }
    const onChangeButtonURL = newButtonURL => setAttributes( { buttonURL: newButtonURL } )
    const onChangeButtonText = newButtonText => setAttributes( { buttonText: newButtonText } )

    const imageBg = {
        position: 'absolute',
        left: '0',
        top: '0',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        /* The image used */
        backgroundColor: 'gray',
        backgroundImage: `url(${ imageURL })`,
    }

    const imageBgProps = useBlockProps( { style: imageBg } )

    return(
        <>
            <InspectorControls>
                <Panel>
                    <PanelBody
                        title = { 'Texto del botón' }
                        initialOpen = { true }
                    >
                        <PanelRow>Texto del botón</PanelRow>
                        <TextControl
                            value = { buttonText }
                            onChange = { onChangeButtonText }
                        />
                    </PanelBody>
                </Panel>
            </InspectorControls>
            <section className="hero-area">
                <div { ...imageBgProps } className="section__bg"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="hero-content">
                                <MediaUpload
                                    onSelect = { onSelectImage }
                                    type = 'image'
                                    value = { imageURL }
                                    render = { ( { open } ) => (
                                        <Button
                                            onClick={ open }
                                            icon='format-image'
                                            showTooltip='true'
                                            label='Elegir imagen de fondo'
                                            text='Elegir imagen de fondo'
                                            type= 'tertiary'
                                            className='btn btn-danger'
                                        />
                                    ) }
                                />
                                <RichText
                                    tagName='h1'
                                    className='title'
                                    placeholder='Agregar título'
                                    value={title}
                                    onChange={onChangeTitle}
                                />
                                <RichText
                                    tagName='span'
                                    placeholder='Agregar un slogan'
                                    value={slogan}
                                    onChange={onChangeSlogan}
                                />
                                <a className="main-btn main-btn-2 animated wow fadeInDown" aria-label={`${ buttonText }`} href={buttonURL}>{buttonText}</a>
                                <URLInputButton
                                    onChange={ onChangeButtonURL }
                                    url={ buttonURL }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Edit