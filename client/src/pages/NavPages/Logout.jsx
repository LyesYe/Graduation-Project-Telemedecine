import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from '../../store/index'

const Logout = () => {
    const dispatch = useDispatch();
    dispatch(authActions.logout());

    localStorage.setItem('logi',0);

    const history = useNavigate();
    history('/');
    window.location.reload(false);


  return <div>Goodbye</div>;
};

export default Logout;
