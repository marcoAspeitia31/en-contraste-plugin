/**
 * The edit function describes the structure of your block in the context
 * of the editor. This represents what the editor will render when the
 * block is used.
 * 
 * @link https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/
 * @sice 1.0.0
 */

import { RichText, MediaUpload, URLInputButton, InspectorControls } from '@wordpress/block-editor'
import { Button, Panel, PanelBody, PanelRow, TextControl } from '@wordpress/components'

const Edit = ( props ) => {
    const {
        attributes: {
            slogan,
            title,
            content,
            imageURL,
            imageAlt,
            buttonURL,
            buttonText
        },
        setAttributes,
        className
    } = props

    const onChangeSlogan = newSlogan => setAttributes( { slogan: newSlogan } )
    const onChangeTitle = newTitle => setAttributes( { title: newTitle } )
    const onChangeContent = newContent => setAttributes( { content: newContent } )
    const onSelectImage = newImage => {
        if ( newImage.sizes.about ) {
            setAttributes({
                imageURL: newImage.sizes.about.url,                
                imageAlt: newImage.alt
            })
        } else {
            setAttributes({
                imageURL: newImage.sizes.full.url,
                imageAlt: newImage.alt
            })
        }
    }
    const onChangeButtonURL = newButtonURL => setAttributes( { buttonURL: newButtonURL } )
    const onChangeButtonText = newButtonText => setAttributes( { buttonText: newButtonText } )

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
            <section className="about-us-area pb-100">
                <div className="container p-0">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="about-content">
                                <RichText
                                    tagName = 'span'
                                    placeholder='Agrega un slogan para esta sección'
                                    value={ slogan }
                                    onChange={ onChangeSlogan }
                                />
                                <RichText
                                    tagName = 'h2'
                                    className = 'title'
                                    placeholder = 'Agrega un título para esta sección'
                                    value = { title }
                                    onChange = { onChangeTitle }
                                />
                                <RichText
                                    tagName = 'p'
                                    placeholder = 'Agrega un contenido para esta sección'
                                    value = { content }
                                    onChange = { onChangeContent }
                                />
                                <a className="main-btn" aria-label={`${ buttonText }`} href={ buttonURL }>{ buttonText }</a>
                                <URLInputButton
                                    onChange = { onChangeButtonURL }
                                    url = { buttonURL }
                                />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-thumb animated wow fadeInRight" data-wow-duration="3000ms" data-wow-delay="0ms">
                                <img src={ imageURL } alt={ imageAlt } class="img-fluid efp-img"/>
                                <MediaUpload
                                    type = 'image'
                                    onSelect = { onSelectImage }
                                    render = { ( { open } ) => (
                                        <Button
                                            onClick = { open }
                                            isSmall = 'true'
                                            icon = 'format-image'
                                            showTooltip = 'true'
                                            label = 'Seleccionar imagen'
                                        />
                                    ) }
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