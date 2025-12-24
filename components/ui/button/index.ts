import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 active:scale-95',
  {
    variants: {
      variant: {
        default: 'bg-white text-black/75 hover:bg-white/90 hover:text-black',
        outline: 'border border-white/35 bg-transparent text-white opacity-85 hover:bg-white/10 hover:opacity-100',
        ghost: 'hover:bg-white/10 text-white',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
