


import React, { useState } from "react";
import styled from '@emotion/styled';
import userEvent from "@testing-library/user-event";


const SearchStyledCp = () => {
    console.log('SearchStyledCp');

    const [value, setValues] = useState('');
    const [arr, setArr] = useState({
        isLogging: false,
        info: {
            name: '',
            id: ''
        }
    });


    const onChange = (e) => {
        //setArr([...arr, e.target.value]);

        setArr({
            ...user,
            info: {
                ...user.info,
                name: 'booldook'
            }
        });
    }

    return (
        <div style={{marginTop: '20px', border: '1px solid red'}}>
            <input type="text" onChange={onChange} />
        </div>
    );
}

export default SearchStyledCp;