import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import checkActions from '../../store/Checks/actions';
const { captureChecks } = checkActions;

export default function MangasChecks(props) {
    const dispatch = useDispatch();
    const url = 'https://minga-back-446z.onrender.com/mangas';

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios
        .get(url)
        .then((response) => setCategories(response.data.categories))
        .catch((e) => {
            console.log(e);
        });
    }, [url]);

    const category_name = categories.map((cat) => cat.name);
    const category_id = categories.map((cat) => cat._id);

    const checkboxValues = useSelector((store) => store.checks.checks);

    const [allSelected, setAllSelected] = useState(true);

    useEffect(() => {
        if (allSelected) {
            dispatch(captureChecks({ inputCheck: category_id }));
        } else {
            dispatch(captureChecks({ inputCheck: [] }));
        }
    }, [allSelected]);


    const handleCheck = (value) => {
        let newValues;
        if (checkboxValues.includes(value)) {
            newValues = checkboxValues.filter((v) => v !== value);
            setAllSelected(false);
        } else {
            newValues = [...checkboxValues, value];
            if (newValues.length === category_id.length) {
                setAllSelected(true);
            }
        }
        dispatch(captureChecks({ inputCheck: newValues }));
    };

    const handleAllSelected = (value) => {
        setAllSelected(value);
        if (value) {
            dispatch(captureChecks({ inputCheck: category_id }));
        } else {
            dispatch(captureChecks({ inputCheck: [] }));
        }
    };

    return (
        <View style={styles.formChecks} ref={props.parentref}>
            <View style={[styles.checksContainer, allSelected ? styles.selectedCheck : null]}>
                <Text style={styles.checksText} onPress={() => handleAllSelected(!allSelected)}>All</Text>
                <Switch
                    style={styles.inputChecks}
                    name="All"
                    value={allSelected}
                    onValueChange={() => handleAllSelected(!allSelected)}
                />
            </View>

            <View style={[styles.checksContainer, checkboxValues.includes(category_id[0]) ? styles.selectedCheck : null]}>
                <Text style={styles.checksText} onPress={() => handleCheck(category_id[0])}>{category_name[0]}</Text>
                <Switch
                style={styles.inputChecks}
                name={category_name[0]}
                value={checkboxValues.includes(category_id[0])}
                onValueChange={() => handleCheck(category_id[0])}
                />
            </View>

            <View style={[styles.checksContainer, checkboxValues.includes(category_id[1]) ? styles.selectedCheck : null]}>
                <Text style={styles.checksText} onPress={() => handleCheck(category_id[1])}>{category_name[1]}</Text>
                <Switch
                style={styles.inputChecks}
                name={category_name[1]}
                value={checkboxValues.includes(category_id[1])}
                onValueChange={() => handleCheck(category_id[1])}
                />
            </View>

            <View style={[styles.checksContainer, checkboxValues.includes(category_id[2]) ? styles.selectedCheck : null]}>
                <Text style={styles.checksText} onPress={() => handleCheck(category_id[2])}>{category_name[2]}</Text>
                <Switch
                style={styles.inputChecks}
                name={category_name[2]}
                value={checkboxValues.includes(category_id[2])}
                onValueChange={() => handleCheck(category_id[2])}
                />
            </View>

            <View style={[styles.checksContainer, checkboxValues.includes(category_id[3]) ? styles.selectedCheck : null]}>
                <Text style={styles.checksText} onPress={() => handleCheck(category_id[3])}>{category_name[3]}</Text>
                <Switch
                style={styles.inputChecks}
                name={category_name[3]}
                value={checkboxValues.includes(category_id[3])}
                onValueChange={() => handleCheck(category_id[3])}
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    formChecks: {
        marginVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    selectedCheckbox: {
        backgroundColor: '#EEE',
    },
    label: {
        marginLeft: 8,
    },
    checkbox: {
        height: 20,
        width: 20,
    },
});