import React from "react";

export type TypographyProps = {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "xs" | "sm" | "md" | "lg" | "xl" ;
  element?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
} & JSX.IntrinsicElements["p"];

const variantClassMap = {
  variant: {
    primary: "text-gray-primary",
    secondary: "text-gray-secondary",
    tertiary: "text-gray-tertiary",
  },
  size: {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
  },
};

export const Typography = ({
  variant = "primary",
  size = "md",
  element = "p",
  children,
  ...rest
}: TypographyProps) => {
  const Element = element as React.ElementType;
  return (
    <Element
      className={`
        font-normal 
        ${variantClassMap.variant[variant]}
        ${variantClassMap.size[size]}
      `}
      {...rest}
    >
      {children}
    </Element>
  );
};
