import { settings } from './settings';

function updateDOM ( state: AppStateType ) {

	const { binderAttribute } = settings.computed;

  document.querySelectorAll( `[${ binderAttribute }]` ).forEach( (element: Element) => {
    const path = element.getAttribute( binderAttribute );
    element.textContent = computeValue( path );
  });
}

const testThis = (): void => {
  console.log(this)
}

function sectionDomBinderUpdate() {
  console.log(this)
	console.log('DOM BINDER UPDATE')
}

function sectionDomBinderInit () {
	console.log('DOM BINDER INIT')
}

export { sectionDomBinderInit, sectionDomBinderUpdate, testThis }