class DocBarcode extends HTMLElement {
    connectedCallback() {
        console.log('Barcode : called with val:' + this.getAttribute("value"));
        this.innerHTML = '<img alt="generated barcode for=' + this.getAttribute("value") + '"' + 
        ' src="https://barcode.tec-it.com/barcode.ashx?data=' + this.getAttribute("value") + '&code=Code128&dpi=96&dataseparator="/>';
    }
}
window.customElements.define('doc-barcode', DocBarcode);
