interface ButtonProps {
  icon?: string;
  label: string;
  onClick: () => void;
}

export function Button({ icon, label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-row items-center justify-center rounded border border-indigo-850 px-2 py-1">
      <img src={icon} alt={label} className="mr-2 w-4" />
      {label}
    </button>
  );
}
