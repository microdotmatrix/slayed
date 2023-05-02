import { MessageType, FormattersObjectType, ConfigurationValue } from './ts-types';

type SettingsType = {

}

const cssClassesPrefix = 'js-prodify';
const dataAttributePrefix = 'data-prodify';
const unavailableSelectOptionTextTemplate = '[value] - Unavailable';
const addButtonTextUnavailable = 'Unavailable';


const settings: SettingsType = {
	addToCartCssClass: '',

	lineItemQuantityErrorText: 'You can\'t add more of this item to your cart',
	requestErrorText: 'There was an error while updating your cart. Please try again.',

	computed: {
    sectionAttribute: `${ dataAttributePrefix }-section`,
    productFormAttribute: `${ dataAttributePrefix }-product-form`,
		variantPriceAttribute: `${ dataAttributePrefix }-price`,
    addButtonAttribute: `${ dataAttributePrefix }-add-button`,
    initialStateAttribute: `${ dataAttributePrefix }-inital-state`,
    productOptionContainerAttribute: `${ dataAttributePrefix }-product-option-container`,
    swapTargetAttribute: `${ dataAttributePrefix }-swap-target`,
    quantityIncrementAttribute: `${ dataAttributePrefix }-quantity-increment`,
    quantityDecrementAttribute: `${ dataAttributePrefix }-quantity-decrement`,
    quantityPresentationAttribute: `${ dataAttributePrefix }-quantity-presentation`,

		cartStateSetBodyClass: `${ cssClassesPrefix }-set`,
	}
}