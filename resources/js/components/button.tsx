import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-[color,background-color,box-shadow,transform] outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                default: 'bg-white text-black shadow-xs hover:bg-neutral-200',
                destructive:
                    'bg-red-600 text-white shadow-xs hover:bg-red-700 focus-visible:ring-red-500/20 dark:focus-visible:ring-red-500/40',
                outline:
                    'border border-neutral-700 bg-transparent text-white shadow-xs hover:bg-white hover:text-black',
                secondary:
                    'border border-white/10 bg-white/10 text-white shadow-xs hover:bg-white/20',
                ghost: 'bg-transparent text-neutral-400 hover:bg-white/5 hover:text-white',
                link: 'text-white underline-offset-4 hover:underline',
            },
            size: {
                default: 'h-11 px-6 py-2 has-[>svg]:px-5',
                sm: 'h-9 px-4 text-xs has-[>svg]:px-3',
                lg: 'h-14 px-10 text-base has-[>svg]:px-8',
                icon: 'size-10',
                link: 'h-auto p-0',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
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

export { Button, buttonVariants };
