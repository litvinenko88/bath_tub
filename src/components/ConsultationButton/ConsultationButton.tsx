interface ConsultationButtonProps {
  onClick: () => void
}

export default function ConsultationButton({ onClick }: ConsultationButtonProps) {
  return (
    <div className="hidden sm:flex">
      <button onClick={onClick} className="consultation-btn">
        Консультация
      </button>
    </div>
  )
}