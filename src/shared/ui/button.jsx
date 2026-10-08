import './button.css'

// color: orange | outline | white      size: md | lg
export function Button({ color = 'orange', size = 'md', children, ...props }) {
  return (
    <button className={`btn btn--${color} btn--${size}`} {...props}>
      {children}
    </button>
  )
}
