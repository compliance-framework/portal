import { observer } from "mobx-react-lite";
import { Field } from "./Field";

interface FieldProps {
  label: string;
  value: string;
}

export const ValueField = observer<FieldProps>(({ label, value }) => {
  return (
    <Field label={label}>
      <p className="text-bright">{value}</p>
    </Field>
  );
});
