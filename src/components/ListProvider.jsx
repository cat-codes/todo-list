import React, {useState, useEffect, createContext, useContext} from 'react'
import PropTypes from 'prop-types'

const ListContext = createContext();

export const ListProvider = ({ children }) => {

    // Sets list array
    const [list, setList] = useState(() => {
        const storedList = JSON.parse(localStorage.getItem("list")) || [];
        return storedList;
    }); 

    // Loads data from local storage
    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem("list")) || [];
        setList(storedList);
    }, []);

    // Updates local storage
    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    return (
        <ListContext.Provider value={{list, setList}}>
            {children}
        </ListContext.Provider>
    )
}

// Validating props
ListProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export const GetList = () => useContext(ListContext)
