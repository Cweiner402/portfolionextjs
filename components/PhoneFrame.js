'use client'

const PhoneFrame = ({ children, className = '' }) => {
  return (
    <div className={`phone-frame mx-auto max-w-[320px] ${className}`}>
      <div className="phone-screen">
        {children}
      </div>
    </div>
  )
}

export default PhoneFrame
