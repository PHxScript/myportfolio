import React, { useRef, useState } from "react";
import "./projects.css";
import { FaPlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever, MdOutlinePending } from "react-icons/md";
import { Modal, ProjectTable } from "../../components/importComponents";

const Projects = () => {
  const deleteRef = useRef("");
  const [errors, setErrors] = useState({
    project: "",
    type: "",
    status: "",
  });
  const [showMore, setShowMore] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTableData, setNewTableData] = useState({
    id: null,
    project: "",
    type: "",
    date: null,
    status: "",
  });
  const [tableData, setTableData] = useState([
    {
      id: Math.random(),
      project: "Online Banking System",
      type: "Web App",
      date: new Date().toLocaleDateString("en-US"),
      status: "Completed",
    },
    {
      id: Math.random(),
      project: "Social Media Platform",
      type: "Web App",
      date: new Date().toLocaleDateString("en-US"),
      status: "Pending Approval",
    },
    {
      id: Math.random(),
      project: "Health and Fitness Tracker",
      type: "Mobile App",
      date: new Date().toLocaleDateString("en-US"),
      status: "Completed",
    },
    {
      id: Math.random(),
      project: " E-commerce Marketplace",
      type: "Mobile App",
      date: new Date().toLocaleDateString("en-US"),
      status: "In Progress",
    },
    {
      id: Math.random(),
      project: " Personal Finance Manager",
      type: "Desktop App",
      date: new Date().toLocaleDateString("en-US"),
      status: "Completed",
    },
    {
      id: Math.random(),
      project: "Food Delivery App",
      type: "Mobile App",
      date: new Date().toLocaleDateString("en-US"),
      status: "Cancelled",
    },
    {
      id: Math.random(),
      project: "EcoLife",
      type: "Web App",
      date: new Date().toLocaleDateString("en-US"),
      status: "Completed",
    },
    {
      id: Math.random(),
      project: "CraftWorld",
      type: "Web App",
      date: new Date().toLocaleDateString("en-US"),
      status: "Backlog",
    },
    {
      id: Math.random(),
      project: "MindfulMinds",
      type: "Web App",
      date: new Date().toLocaleDateString("en-US"),
      status: "Completed",
    },
    {
      id: Math.random(),
      project: "LinguaLeap",
      type: "Web App",
      date: new Date().toLocaleDateString("en-US"),
      status: "Planned",
    },
    {
      id: Math.random(),
      project: "Retriever App",
      type: "Web App",
      date: new Date().toLocaleDateString("en-US"),
      status: "On Hold",
    },
  ]);

  const tableColumns = [
    {
      Header: "Project Name",
      accessor: "project",
    },
    {
      Header: "Type",
      accessor: "type",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => {
        return (
          <div>
            <button
              onClick={() => handleEditData(row.original.id)}
              key={`edit-${row.original.project}`}
              className="dashboard_project-edit-btn"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => {
                deleteRef.current = row.original.id;
                openModalDelete();
              }}
              className="dashboard_project-delete-btn"
            >
              <MdDeleteForever />
            </button>
          </div>
        );
      },
    },
  ];

  const Planned = tableData.filter((status) => status.status === "Planned");
  const Backlog = tableData.filter((status) => status.status === "Backlog");
  const InProgress = tableData.filter(
    (status) => status.status === "In Progress"
  );
  const OnHold = tableData.filter((status) => status.status === "On Hold");
  const Completed = tableData.filter((status) => status.status === "Completed");
  const Cancelled = tableData.filter((status) => status.status === "Cancelled");
  const PostPoned = tableData.filter((status) => status.status === "PostPoned");
  const Review = tableData.filter((status) => status.status === "Review");
  const PendingApproval = tableData.filter(
    (status) => status.status === "Pending Approval"
  );
  const InMaintenance = tableData.filter(
    (status) => status.status === "In Maintenance"
  );

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setNewTableData({
      id: null,
      project: "",
      type: "",
      date: null,
      status: "",
    });
    setErrors({
      project: "",
      type: "",
      status: "",
    });
  };

  const openModalDelete = () => setIsDelete(true);
  const closeModalDelete = () => setIsDelete(false);

  const validateForm = (newTableData) => {
    let formValid = true;
    const newErrors = {};

    if (!newTableData.project.trim()) {
      formValid = false;
      newErrors.project = "Project is required.";
    }
    if (!newTableData.type.trim()) {
      formValid = false;
      newErrors.type = "Type is required.";
    }
    if (!newTableData.status.trim()) {
      formValid = false;
      newErrors.status = "Status is required.";
    }

    setErrors(newErrors);
    return formValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setNewTableData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddData = () => {
    const formValid = validateForm(newTableData);
    if (formValid) {
      setTableData([
        ...tableData,
        {
          id: Math.random(),
          project: newTableData.project,
          type: newTableData.type,
          date: new Date().toLocaleDateString("en-US"),
          status: newTableData.status,
        },
      ]);
      closeModal();
    } else {
      console.log("All fields are required!");
    }
  };

  const handleEditData = (id) => {
    const selected = tableData.find((data) => data.id === id);
    setNewTableData(selected);
    setIsModalOpen(true);
  };

  const handleUpdateData = () => {
    const formValid = validateForm(newTableData);
    if (formValid) {
      setTableData(
        tableData.map((data) =>
          data.id === newTableData.id ? newTableData : data
        )
      );
      closeModal();
    } else {
      console.log("All fields are required!");
    }
  };

  const handleDeleteData = () => {
    setTableData(tableData.filter((data) => data.id !== deleteRef.current));
    closeModalDelete();
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="dashboard_projects-container">
      <div className="dashboard_projects-content">
        <div className="dashboard_projects-addBtn-content">
          <button onClick={openModal}>
            <FaPlus className="icon" /> New Project
          </button>
        </div>
        <div>
          {isModalOpen && (
            <Modal>
              <div className="modal-heading-title-content">
                <h2>
                  <span>New</span> Project
                </h2>
              </div>
              <div className="modal_input-form-content">
                <div className="modal_input">
                  <input
                    type="text"
                    name="project"
                    onChange={handleChange}
                    value={newTableData.project}
                    placeholder="Project Name . . . "
                    autoComplete="OFF"
                  />
                  {errors.project && (
                    <span className="error">{errors.project}</span>
                  )}
                  <div className="modal_select">
                    <select
                      name="type"
                      defaultValue={newTableData.type}
                      onChange={handleChange}
                    >
                      <option disabled value="">
                        Select Type
                      </option>
                      {["Web App", "Mobile App", "Desktop App"].map(
                        (data, index) => (
                          <option key={index}>{data}</option>
                        )
                      )}
                    </select>
                    {errors.type && (
                      <span className="error">{errors.type}</span>
                    )}
                  </div>
                  <div className="modal_select">
                    <select
                      name="status"
                      defaultValue={newTableData.status}
                      onChange={handleChange}
                    >
                      <option disabled value="">
                        Select Status
                      </option>
                      {[
                        "Planned",
                        "Backlog",
                        "In Progress",
                        "On Hold",
                        "Completed",
                        "Canceled",
                        "Postponed",
                        "Review",
                        "Pending Approval",
                        "In Maintenance",
                      ].map((data, index) => (
                        <option key={index}>{data}</option>
                      ))}
                    </select>
                    {errors.status && (
                      <span className="error">{errors.status}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="modal-button-content">
                {!newTableData.id ? (
                  <button
                    className="modal_addBtn"
                    type="button"
                    onClick={handleAddData}
                  >
                    Add
                  </button>
                ) : (
                  <button
                    className="modal_updateBtn"
                    type="button"
                    onClick={handleUpdateData}
                  >
                    Update
                  </button>
                )}
                <button
                  className="modal_closeBtn"
                  type="button"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </Modal>
          )}
          {isDelete && (
            <div className="modal_delete-content">
              <Modal>
                <h3>Are you sure want to delete ?</h3>
                <button
                  className="modal_confirm-delete"
                  onClick={handleDeleteData}
                >
                  Yes
                </button>
                <button className="modal_close" onClick={closeModalDelete}>
                  No
                </button>
              </Modal>
            </div>
          )}
        </div>
        <div className="dashboard_projects-heading-title-content">
          <h1>
            <span>Project</span> Details
          </h1>
        </div>
        <div className="dashboard_projects-table-content">
          <ProjectTable columns={tableColumns} data={tableData} />
        </div>
        <div className="dashboard_projects-table-totalCount-content">
          <div className="dashboard_projects-table-totalCount">
            <div>
              <MdOutlinePending className="icon" /> <p>Planned</p>
              <p>{Planned.length}</p>
            </div>
            <div>
              <MdOutlinePending className="icon" /> <p>Backlog</p>
              <p> {Backlog.length}</p>
            </div>
            <div>
              {showMore ? (
                <>
                  <MdOutlinePending className="icon" /> <p>Progress</p>
                  <p>{InProgress.length}</p>
                </>
              ) : (
                <button onClick={toggleShowMore}>More</button>
              )}
            </div>

            {showMore ? (
              <>
                <div>
                  <MdOutlinePending className="icon" /> <p> Hold</p>
                  <p> {OnHold.length}</p>
                </div>
                <div>
                  <MdOutlinePending className="icon" /> <p>Completed</p>
                  <p> {Completed.length}</p>
                </div>
                <div>
                  <MdOutlinePending className="icon" /> <p>Cancelled</p>
                  <p> {Cancelled.length}</p>
                </div>
                <div>
                  <MdOutlinePending className="icon" /> <p>Postponed</p>
                  <p> {PostPoned.length}</p>
                </div>
                <div>
                  <MdOutlinePending className="icon" /> <p>Review</p>
                  <p>{Review.length}</p>
                </div>
                <div>
                  <MdOutlinePending className="icon" /> <p>Pending </p>
                  <p>{PendingApproval.length}</p>
                </div>
                <div>
                  <MdOutlinePending className="icon" /> <p>Maintenance</p>
                  <p>{InMaintenance.length}</p>
                </div>
                <div>
                  <button onClick={toggleShowMore}>Less</button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
