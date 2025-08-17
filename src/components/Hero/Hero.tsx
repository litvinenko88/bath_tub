import Button from '../Button'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Фоновое изображение */}
        <div className="hero-image">
          <img 
            src="/images/glavn-fonts.jpg" 
            alt="Банный чан с подогревом под открытым небом"
            className="hero-bg"
          />
        </div>
        
        {/* Контент */}
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Заказать банный чан с подогревом
            </h1>
            <div className="hero-subtitle">
              <p>ваш личный SPA-курорт под</p>
              <p className="text-accent">открытым небом!</p>
            </div>
            <p className="hero-description">
              Доставка по РФ и СНГ за 5-10 дней | Изготовление в Ставрополе*
            </p>
            
            <div className="hero-buttons">
              <Button variant="primary">
                Посмотреть каталог
              </Button>
              <Button variant="secondary">
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}