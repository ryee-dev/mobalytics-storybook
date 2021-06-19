interface ButtonProps {
  variant?: string;
  size?: string;
  label?: string;
  labelVisible?: boolean;
  loading?: boolean;
  icon?: boolean;
  uniformPadding?: boolean;
}

interface TabsProps {
  variant?: string;
  icons?: boolean;
  disabled?: boolean;
}

export type { ButtonProps, TabsProps };
