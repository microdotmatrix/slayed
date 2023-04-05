type SettingsType = {
	productFormsFilter: (formNode: HTMLFormElement) => boolean ,
	messageBuilder: (messages: Array<MessageType>) => string,
	stateBinderFormatters: FormattersObjectType,
	addToCartCssClass: string | [string, number],
	lineItemQuantityErrorText: string,
	requestErrorText: string,
	updateOnWindowFocus: boolean,
	computed: {
		[property: string]: string
	}
}

const cssClassesPrefix = 'js-prodify';
const dataAttributePrefix = 'data-prodify';

const settings: SettingsType = {
	productFormsFilter: (formNode: HTMLFormElement): boolean => true,
	messageBuilder: (messages: Array<MessageType>): string => {
		let result = '';
		messages.forEach( element => {
			result += `<div class="${ cssClassesPrefix }-message ${ cssClassesPrefix }-message--${ element.type }">${ element.text }</div>`;
		})
		return result;
	},
	stateBinderFormatters: {},
	addToCartCssClass: '',

	lineItemQuantityErrorText: 'You can\'t add more of this item to your cart',
	requestErrorText: 'There was an error while updating your cart. Please try again.',

	computed: {
		sectionsAttribute: `${ dataAttributePrefix }-section`,
		priceAttribute: `${ dataAttributePrefix }-price`,
    addButtonAttribute: `${ dataAttributePrefix }-add-button`,
    variantsJsonAttribute: `${ dataAttributePrefix }-variants-json`,
    optionWrapperAttribute: `${ dataAttributePrefix }-option-wrapper`,
    swapTargetAttribute: `${ dataAttributePrefix }-swap-target`,

		cartStateSetBodyClass: `${ cssClassesPrefix }-set`,
	}
}