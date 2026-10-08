import './setup.css'

export function Setup() {
  return (
    <section className="setup">
      <p className="setup__label">Share your setup with</p>
      <h2 className="setup__title">#FuniroFurniture</h2>

      {/* 9 фото. Место каждого задано в setup.css */}
      <div className="setup__grid">
        <img src="/images/setup-1.png" alt="" />
        <img src="/images/setup-2.png" alt="" />
        <img src="/images/setup-3.png" alt="" />
        <img src="/images/setup-4.png" alt="" />
        <img src="/images/setup-5.png" alt="" />
        <img src="/images/setup-6.png" alt="" />
        <img src="/images/setup-7.png" alt="" />
        <img src="/images/setup-8.png" alt="" />
        <img src="/images/setup-9.png" alt="" />
      </div>
    </section>
  )
}
