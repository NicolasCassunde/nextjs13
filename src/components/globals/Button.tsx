import { HtmlHTMLAttributes } from "react"

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  // isActive?: boolean
}
export function Button(props: ButtonProps) {
  return (
    <>
      <button {...props}>

      </button>
    </>
  )
}