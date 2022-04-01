import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { RenderFieldProps } from "./render-field";

interface SelectFieldProps extends Pick<RenderFieldProps, "name" | "variant" | "onChange" | "label" | "value"> {
  options: RenderFieldProps["values"];
}

export const SelectField: React.FC<SelectFieldProps> = ({ name, variant, onChange, label, value, options }) => (
  <FormControl>
    {label && <InputLabel id={`${label}-label`}>{label}</InputLabel>}
    <Select
      id={name}
      name={name}
      variant={variant}
      label={label}
      onChange={event => onChange(event.target.value)}
      value={`${value}`}
      size='small'
    >
      {options &&
        options.map(element => {
          const [itemLabel, itemValue] = Object.entries(element)[0];
          const itemVal = `${itemValue}`;

          return <MenuItem key={`${itemLabel}-${itemVal}`} value={itemVal}>{`${itemLabel}`}</MenuItem>;
        })}
    </Select>
  </FormControl>
);
