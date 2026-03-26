export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  label?: string;
  error?: string;

  options: SelectOption[];

  value?: string;
  onChange?: (value: string) => void;

  placeholder?: string;
  id?: string;
}