import React, { useState } from "react";
import { useFilters, useSortBy, usePagination, useTable } from "react-table";
import "./projectTable.css";

const ProjectTable = ({ columns, data }) => {
  const [filterInput, setFilterInput] = useState("");
  const [pageIndex, setPageIndex] = useState(0);

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("project", value); // accessor base
    setFilterInput(value);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setFilter,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex,
        pageSize: 5,
        sortBy: [{ id: "date", desc: true }],
      },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  const handlePageChange = (newPageIndex) => {
    setPageIndex(newPageIndex);
    gotoPage(newPageIndex);
  };

  return (
    <div className="dashboard_projectTable-container">
      <div className="dashboard_projectTable-content">
        <div className="dashboard_projectTable-searchInput-content">
          <label>Filter : </label>
          <input
            value={filterInput}
            onChange={handleFilterChange}
            placeholder={"Project Name . . . "}
          />
        </div>
        <div className="dashboard_projectTable">
          <div className="striped-table-content">
            <table {...getTableProps()} className="striped-table">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        className={
                          column.isSorted
                            ? column.isSortedDesc
                              ? "sort-desc"
                              : "sort-asc"
                            : ""
                        }
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell, i) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="dashboard_projectTable-pagination-content">
            <div>
              <span>
                Page{" "}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
              </span>
            </div>
            <div>
              <button
                onClick={() => handlePageChange(0)}
                disabled={!canPreviousPage}
              >
                {"<<"}
              </button>{" "}
              <button
                onClick={() => handlePageChange(pageIndex - 1)}
                disabled={!canPreviousPage}
              >
                Previous
              </button>{" "}
              <button
                onClick={() => handlePageChange(pageIndex + 1)}
                disabled={!canNextPage}
              >
                Next
              </button>{" "}
              <button
                onClick={() => handlePageChange(pageCount - 1)}
                disabled={!canNextPage}
              >
                {">>"}
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTable;
