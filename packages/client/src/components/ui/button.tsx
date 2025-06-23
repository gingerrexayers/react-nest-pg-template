import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import type * as React from 'react';
import { type ButtonVariantProps, buttonVariants } from './button-variants';

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  ButtonVariantProps & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
