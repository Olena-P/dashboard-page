import { renderTable } from './customer.js';

let currentPage = 1;

export function renderPagination(customers, itemsPerPage) {
  const paginationContainer = document.getElementById('pagination-container');
  if (!paginationContainer) return;

  const totalPages = Math.ceil(customers.length / itemsPerPage);
  paginationContainer.innerHTML = '';

  const createPageLink = (page) => `
    <li>
      <a href="#" class="${
        currentPage === page ? 'active' : ''
      }" data-page="${page}">
        ${page}
      </a>
    </li>
  `;

  let paginationHTML = `
    <div class="pagination">
      <span class="showing-data" aria-live="polite" >
        Showing data ${Math.min(
          (currentPage - 1) * itemsPerPage + 1,
          customers.length
        )} to ${Math.min(currentPage * itemsPerPage, customers.length)} of ${
    customers.length
  } entries
      </span>
      <nav>
        <ul>
          <li>
            <a href="#" class="prev" data-page="${Math.max(
              1,
              currentPage - 1
            )}" aria-label="Previous page">
              <i class="fa-solid fa-chevron-left"></i>
            </a>
          </li>
  `;

  const maxVisiblePages = 4;
  let pagesToShow = [];

  const addPages = (start, end) => {
    for (let i = start; i <= end; i++) {
      pagesToShow.push(i);
    }
  };

  if (totalPages <= maxVisiblePages + 1) {
    addPages(1, totalPages);
  } else {
    if (currentPage <= maxVisiblePages - 2) {
      addPages(1, maxVisiblePages);
      pagesToShow.push('...');
      pagesToShow.push(totalPages);
    } else if (currentPage >= totalPages - (maxVisiblePages - 2)) {
      pagesToShow.push(1);
      pagesToShow.push('...');
      addPages(totalPages - (maxVisiblePages - 1), totalPages);
    } else {
      pagesToShow.push(1);
      pagesToShow.push('...');
      addPages(currentPage - 1, currentPage + 1);
      pagesToShow.push('...');
      pagesToShow.push(totalPages);
    }

    pagesToShow.forEach((page) => {
      if (page === '...') {
        paginationHTML += `<li><span class="ellipsis">...</span></li>`;
      } else {
        paginationHTML += createPageLink(page);
      }
    });

    paginationHTML += `
          <li>
            <a href="#" class="next" data-page="${Math.min(
              totalPages,
              currentPage + 1
            )}" aria-label="Next page">
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  `;

    paginationContainer.innerHTML = paginationHTML;

    paginationContainer.querySelectorAll('a[data-page]').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedPage = parseInt(event.target.getAttribute('data-page'));

        if (!isNaN(selectedPage)) {
          currentPage = Math.max(1, Math.min(selectedPage, totalPages));
        }

        renderTable(currentPage);
        renderPagination(customers, itemsPerPage);
      });
    });

    paginationContainer.querySelectorAll('.prev, .next').forEach((arrow) => {
      arrow.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedPage = parseInt(arrow.getAttribute('data-page'));

        if (!isNaN(selectedPage)) {
          currentPage = Math.max(1, Math.min(selectedPage, totalPages));
        }

        renderTable(currentPage);
        renderPagination(customers, itemsPerPage);
      });
    });
  }
}
