import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, SelectProps, SxProps } from "@mui/material";
import { LiHTMLAttributes } from "react";

export type ValueType = LiHTMLAttributes<unknown>["value"];

export interface SelectItem {
  name: string;
  value: ValueType;
}

export interface BasicSelectProps extends Partial<Pick<SelectProps, "size" | "variant">> {
  label: string;
  onChangeHandler: (value: ValueType) => void;
  items: SelectItem[];
  value?: ValueType;
  sx?: SxProps;
}

export const BasicSelect: React.FC<BasicSelectProps> = ({ items, onChangeHandler, label, variant, size, value, sx }) => {
  const handleChange = (event: SelectChangeEvent<ValueType>) => {
    onChangeHandler(event.target.value);
  };

  return (
    <FormControl fullWidth sx={sx}>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        fullWidth
        value={value}
        size={size}
        variant={variant}
        label={label}
        labelId={`${label}-label`}
        onChange={handleChange}
      >
        {items.map(({ value: itemValue, name }) => (
          <MenuItem key={name} value={itemValue}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
