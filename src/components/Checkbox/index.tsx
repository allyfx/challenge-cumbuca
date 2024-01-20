import { Layout } from "./layout"

interface ICheckboxProps {
  selected: boolean
  onChange: (selected: boolean) => void
}

export function Checkbox({ ...props }: ICheckboxProps) {
  function changeSelected() {
    props.onChange(!props.selected)
  }

  return <Layout {...props} onChange={changeSelected} />
}
