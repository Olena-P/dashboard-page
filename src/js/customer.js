import { renderPagination } from './pagination.js';

let customers = [];
let currentPage = 1;
const itemsPerPage = 8;

export async function loadCustomerData() {
  try {
    const response = await fetch('../data/customers.json');
    if (!response.ok) throw new Error('Network response was not ok.');
    customers = await response.json();
    renderTable(currentPage);
    renderPagination(customers, itemsPerPage);
  } catch (error) {
    console.error('Error loading customer data:', error);
  }
}

export function renderTable(currentPage) {
  const tableBody = document.querySelector('.customer-table tbody');
  if (!tableBody) return;
  tableBody.innerHTML = '';

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, customers.length);

  for (let i = startIndex; i < endIndex; i++) {
    const customer = customers[i];
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${customer.name}</td>
      <td>${customer.company}</td>
      <td>${customer.phone}</td>
      <td>${customer.email}</td>
      <td>${customer.country}</td>
      <td><span class="status ${customer.status.toLowerCase()}">${
      customer.status
    }</span></td>
    `;
    tableBody.appendChild(row);
  }
}
