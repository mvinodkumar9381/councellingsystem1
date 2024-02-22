import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';


const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    subscribe: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    age: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.age.trim()) {
      newErrors.age = 'Age is required';
    } else if (isNaN(formData.age) || formData.age < 0) {
      newErrors.age = 'Please enter a valid age';
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }

    setErrors(newErrors);

    // Perform additional actions if the form is valid
    if (Object.keys(newErrors).length === 0) {
      // Your logic here (e.g., submitting the form data)
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={Boolean(errors.name)}
        helperText={errors.name}
      />

      <TextField
        label="Age"
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        error={Boolean(errors.age)}
        helperText={errors.age}
      />

      <FormControl fullWidth>
        <InputLabel>Gender</InputLabel>
        <Select
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          error={Boolean(errors.gender)}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select Gender
          </MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>

      <FormControlLabel
        control={
          <Checkbox
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
        }
        label="Subscribe to newsletter"
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default MyForm;
