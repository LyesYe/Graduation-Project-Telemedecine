import './Teacher.scss'

const Teacher = ({
    element,
    setEditIsOpen,
    setEdit,
    setDeleteTeacher,
    setDeleteIsOpen,
}) => {
    return (
        <div className="teacher-card">
            <div className="teacher-info-container">
                <p>{element.firstName}</p>
                <p>{element.lastName}</p>
                <p>{element.email}</p>
                <p>{element.password}</p>
            </div>
            <div className="teacher-buttons-container">
                <button
                    onClick={() => {
                        setEdit(element);
                        setEditIsOpen(true);
                    }}
                >
                    Edit
                </button>
                <button
                    onClick={() => {
                        setDeleteTeacher(element);
                        setDeleteIsOpen(true);
                    }}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Teacher;
