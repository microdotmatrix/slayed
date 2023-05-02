type FetchPayloadType = {
	method: string,
	headers?: {
		[key: string]: string
	}
	body?: string | FormData
}

function getEndpoint (): string {
  return `${this.el.dataset.url}?variant=${this.currentVariant.id}&section_id=${this.el.dataset.section}`
}

function sectionRequest() {
  const endpoint = getEndpoint();

  const fetchPayload: FetchPayloadType = {
		method: 'GET'
	};

  fetch(
    endpoint,
    fetchPayload
  ).then(response => {
    
  })
}