import { loadCustomerData, renderTable } from './js/customer.js';
import './js/pagination.js';
import './js/sidebar.js';
import './js/typedText.js';

document.addEventListener('DOMContentLoaded', () => {
  loadCustomerData();
  renderTable();
});
