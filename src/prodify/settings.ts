type SettingsType = {
	computed: {
		[property: string]: string
	}
}

const cssClassesPrefix = 'js-prodify';
const dataAttributePrefix = 'data-prodify';
const unavailableSelectOptionTextTemplate = '[value] - Unavailable';
const addButtonTextUnavailable = 'Unavailable';


const settings: SettingsType = {

	computed: {
    sectionAttribute: `${ dataAttributePrefix }-section`,
    productFormAttribute: `${ dataAttributePrefix }-product-form`,
    binderAttribute: `${ dataAttributePrefix }-bind-state`,
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

export { settings };
