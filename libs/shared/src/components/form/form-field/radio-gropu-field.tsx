import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

import { RenderFieldProps } from "./render-field";

interface RadioGroupFieldProps extends Pick<RenderFieldProps, "value" | "onChange"> {
  options: RenderFieldProps["values"];
}

export const RadioGroupField: React.FC<RadioGroupFieldProps> = ({ value, options, onChange }) => {
  return (
    <FormControl>
      <RadioGroup value={value} onChange={onChange}>
        {options &&
          options.map((element, index) => {
            const [itemLabel, itemValue] = Object.entries(element)[0];

            // eslint-disable-next-line react/no-array-index-key
            return <FormControlLabel value={itemValue} control={<Radio />} label={itemLabel} key={index} />;
          })}
      </RadioGroup>
    </FormControl>
  );
};
