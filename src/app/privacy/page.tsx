import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | Банные Чаны',
  description: 'Политика конфиденциальности сайта банных чанов. Информация о сборе и использовании персональных данных.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-dark py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Политика конфиденциальности</h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="bg-white/5 rounded-lg p-8 space-y-6">
            <p className="text-gray-300">
              Данная страница находится в разработке. Здесь будет размещена подробная информация 
              о политике конфиденциальности нашего сайта.
            </p>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Основные принципы</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Защита персональных данных клиентов</li>
                <li>Прозрачность в использовании информации</li>
                <li>Соблюдение законодательства РФ</li>
                <li>Безопасность передачи данных</li>
              </ul>
            </div>
            
            <div className="mt-8 p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <p className="text-accent font-medium">
                Полная версия политики конфиденциальности будет добавлена в ближайшее время.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}