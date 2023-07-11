import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import '../../styles/filter.css';

export const ProductFilter = ({ onFilter }) => {
    const [formData, setFormData] = useState({
        color: '',
        size: '',
    });

    const color = ['Black', 'Gray', 'White', 'Red', 'Blue', 'Light Green', 'Black and Green'];
    const size = [5, 6, 7, 8, 9, 10, 11, 12];

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        onFilter(formData);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleReset = () => {
        setFormData({
            color: '',
            size: '',
        });
        onFilter(null);
    }

    return <>
        <div className="filter-content">
            <form onSubmit={handleFilterSubmit}>
                <FormControl sx={{ width: '15vw' }}>
                    <InputLabel id="color-select-label">Colors</InputLabel>
                    <Select
                        labelId="color-select-label"
                        id="color-select"
                        label="Colors"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                    >
                        {
                            color.map((col) => <MenuItem value={col}>{col}</MenuItem>)
                        }
                    </Select>
                </FormControl>
                <FormControl sx={{ width: '15vw' }}>
                    <InputLabel id="size-select-label">Size</InputLabel>
                    <Select
                        labelId="size-select-label"
                        id="size-select"
                        label="Size"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                    >
                        {
                            size.map((s) => <MenuItem value={s}>{s}</MenuItem>)
                        }
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained">Filter</Button>
                <Button variant="text" onClick={handleReset}>Reset</Button>
            </form>
        </div>
    </>
}