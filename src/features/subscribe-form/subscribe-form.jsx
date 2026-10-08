import './subscribe-form.css'

// type="email" + required: браузер сам проверяет адрес
export function SubscribeForm() {
  return (
    <form className="subscribe">
      <input type="email" name="email" placeholder="Enter your email" required />
      <button aria-label="Subscribe">
        <img src="/images/send.svg" alt="" />
      </button>
    </form>
  )
}
