import { useEffect, useState } from 'react';
import axios from 'axios';

import Teacher from './Teacher';
import DeleteAll from './DeleteAll';
import CreateNew from './CreateNew';
import Edit from './Edit';
import Delete from './Delete';

import Modal from '../../../components/Modal';

import plusIcon from '../../../assets/icons/add_black_24dp.svg';
import deleteIcon from '../../../assets/icons/delete_black_24dp.svg';
import './Teachers.scss';

const BASE_URL = process.env.REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);

    const [edit, setEdit] = useState(null);
    const [deleteTeacher, setDeleteTeacher] = useState(null);

    const [deleteIsOpen, setDeleteIsOpen] = useState(false);
    const [deleteAllIsOpen, setDeleteAllIsOpen] = useState(false);
    const [createNewIsOpen, setCreateNewIsOpen] = useState(false);
    const [editIsOpen, setEditIsOpen] = useState(false);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/api/teachers`, { withCredentials: true })
            .then(function (response) {
                console.log(response.data);
                setTeachers(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [deleteAllIsOpen, createNewIsOpen, deleteIsOpen, editIsOpen]);

    return (
        <>
            <div className="admin-teachers-container">
                <div className="teachers-cards-container">
                    {teachers.map((element) => (
                        <Teacher
                            element={element}
                            setEditIsOpen={setEditIsOpen}
                            setEdit={setEdit}
                            setDeleteTeacher={setDeleteTeacher}
                            setDeleteIsOpen={setDeleteIsOpen}
                        />
                    ))}
                </div>
                <div className="teachers-buttons">
                    <button onClick={() => setDeleteAllIsOpen(true)}>
                        Delete All
                        <img src={deleteIcon} alt="" />
                    </button>
                    <button onClick={() => setCreateNewIsOpen(true)}>
                        Create New
                        <img src={plusIcon} alt="" />
                    </button>
                </div>
            </div>
            <Modal open={deleteAllIsOpen}>
                <DeleteAll closeModal={() => setDeleteAllIsOpen(false)} />
            </Modal>

            <Modal open={createNewIsOpen}>
                <CreateNew closeModal={() => setCreateNewIsOpen(false)} />
            </Modal>

            <Modal open={editIsOpen}>
                <Edit closeModal={() => setEditIsOpen(false)} teacher={edit} />
            </Modal>

            <Modal open={deleteIsOpen}>
                <Delete
                    closeModal={() => setDeleteIsOpen(false)}
                    teacher={deleteTeacher}
                />
            </Modal>
        </>
    );
};

export default Teachers;
