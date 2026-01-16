import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  ChevronDown,
  Star,
  Truck,
  Shield,
  RotateCcw,
  CheckCircle,
  Users,
  Menu,
  X,
} from 'lucide-react';

const App = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedTool, setSelectedTool] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const categories = [
    {
      name: 'Перфораторы',
      image: 'https://www.protoolreviews.com/wp-content/uploads/2023/11/DeWalt-Vs-Makita-Hammer-Drill-H2H-Review-17.jpg',
      prices: { day1: '1200 ₽', day3: '3000 ₽', day7: '6000 ₽' },
    },
    {
      name: 'Шуруповёрты',
      image: 'https://i.ytimg.com/vi/JHp0LpCaAdY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCtXo37xq62OYg-EU84iUtD1W2g9Q',
      prices: { day1: '800 ₽', day3: '2100 ₽', day7: '4200 ₽' },
    },
    {
      name: 'Бетономешалки',
      image: 'https://cdn.shopify.com/s/files/1/0551/8396/6382/products/menegotti-concrete-mixer-11-cuft-professional-941255.jpg?v=1735934473',
      prices: { day1: '3500 ₽', day3: '9000 ₽', day7: '18000 ₽' },
    },
    {
      name: 'Виброплиты',
      image: 'https://hydrotechnologysystems.us/cdn/shop/products/vp2050a_large.jpg?v=1552629433',
      prices: { day1: '2500 ₽', day3: '6500 ₽', day7: '12000 ₽' },
    },
    {
      name: 'Генераторы',
      image: 'https://cdn11.bigcommerce.com/s-vvtmdk4/images/stencil/1200x1200/products/1099/5888/Gillette_GPE-125EH-3_PIC.JPG_New2__57514__43371.1676992151.JPG?c=2',
      prices: { day1: '2500 ₽', day3: '6500 ₽', day7: '12000 ₽' },
    },
    {
      name: 'Лазерные уровни',
      image: 'https://media.gettyimages.com/id/2171672961/photo/leveling-in-the-apartment-using-the-professional-laser-level.jpg?s=612x612&w=gi&k=20&c=cFONvaeuDQV1tHEzdgFN0cYvrRatkbjLr46um5wdXp0=',
      prices: { day1: '1000 ₽', day3: '2500 ₽', day7: '5000 ₽' },
    },
    {
      name: 'Мойки высокого давления',
      image: 'https://s1.kaercher-media.com/mam/15209660/application/74688/d0.jpg',
      prices: { day1: '1500 ₽', day3: '4000 ₽', day7: '8000 ₽' },
    },
    {
      name: 'И много другого',
      image: 'https://www.maxxt-tech.com/wp-content/uploads/2025/11/essential-power-tools.jpg',
      prices: null,
    },
  ];

  const features = [
    { icon: <CheckCircle className="w-6 h-6" />, title: 'Цена честная', description: 'как в объявлении' },
    { icon: <Shield className="w-6 h-6" />, title: 'Проверка инструмента', description: 'при тебе' },
    { icon: <RotateCcw className="w-6 h-6" />, title: 'Залог возвращаем', description: '' },
    { icon: <Truck className="w-6 h-6" />, title: 'Курьер-доставка', description: '' },
    { icon: <RotateCcw className="w-6 h-6" />, title: 'Замена при поломке', description: '' },
    { icon: <Users className="w-6 h-6" />, title: 'Можно для бригад', description: '' },
  ];

  const steps = [
    'Выбираешь инструмент',
    'Звонишь или пишешь в Telegram',
    'Проверяем инструмент при тебе',
    'Берёшь и работаешь',
    'Возвращаешь — получаешь залог',
  ];

  const brigadeFeatures = [
    'Доставка на объект',
    'Один договор на всё',
    'Персональные условия',
    'Приоритет',
    'Долгосрочная аренда',
  ];

  const reviews = [
    { stars: 5, text: 'Взял на дачу — всё ок.', author: 'Иван С.' },
    { stars: 5, text: 'Бригаде заменили сразу.', author: 'Андрей К.' },
    { stars: 5, text: 'Доставка спасла проект.', author: 'Михаил П.' },
  ];

  const pricing = [
    { instrument: 'Перфоратор', day1: '1200 ₽', day3: '3000 ₽', day7: '6000 ₽' },
    { instrument: 'Шуруповёрт', day1: '800 ₽', day3: '2100 ₽', day7: '4200 ₽' },
    { instrument: 'Генератор', day1: '2500 ₽', day3: '6500 ₽', day7: '12000 ₽' },
  ];

  const faqs = [
    { question: 'Какой залог?', answer: 'Залог зависит от стоимости инструмента и составляет обычно 50-100% от его рыночной стоимости.' },
    { question: 'Что если сломал?', answer: 'При поломке по вине клиента взимается стоимость ремонта или замены. При неисправности инструмента по нашей вине замена производится бесплатно.' },
    { question: 'Можно ли получить доставку?', answer: 'Да, мы предоставляем курьерскую доставку инструментов по всему Бийску. Доставка на объект также доступна для бригад.' },
    { question: 'Есть ли скидки?', answer: 'Да, действуют скидки при долгосрочной аренде (от 3 дней) и специальные условия для постоянных клиентов и бригад.' },
    { question: 'Как оформить аренду?', answer: 'Позвоните или напишите в Telegram. Мы ответим в течение 15 минут.' },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-xl">
                Честный прокат
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <a href="#categories" className="text-gray-700 hover:text-orange-500 font-medium">Инструмент</a>
              <a href="#features" className="text-gray-700 hover:text-orange-500 font-medium">Почему мы</a>
              <a href="#how" className="text-gray-700 hover:text-orange-500 font-medium">Как работает</a>
              <a href="#pricing" className="text-gray-700 hover:text-orange-500 font-medium">Тарифы</a>
              <a href="#faq" className="text-gray-700 hover:text-orange-500 font-medium">FAQ</a>
              <a href="#contacts" className="text-gray-700 hover:text-orange-500 font-medium">Контакты</a>
            </nav>

            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="font-semibold">+7 (995) 929-05-10</span>
              </div>
              <a href="tel:+79959290510" className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600">
                Позвонить
              </a>
            </div>

            <button
              className="md:hidden z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

          <div className="mt-3 text-gray-600 text-sm md:text-base">
            <MapPin className="w-4 h-4 inline mr-1" />
            г. Бийск, Алтайский край, ул. Мухачева, 176
          </div>
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center pt-20">
            <nav className="space-y-8 text-center">
              <a href="#categories" className="block text-2xl font-bold text-orange-500" onClick={() => setIsMobileMenuOpen(false)}>Инструмент</a>
              <a href="#features" className="block text-2xl font-bold text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Почему мы</a>
              <a href="#how" className="block text-2xl font-bold text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Как работает</a>
              <a href="#pricing" className="block text-2xl font-bold text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Тарифы</a>
              <a href="#faq" className="block text-2xl font-bold text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
              <a href="#contacts" className="block text-2xl font-bold text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>Контакты</a>
            </nav>
            <div className="mt-12 space-y-4">
              <p className="text-xl font-semibold">+7 (995) 929-05-10</p>
              <a href="tel:+79959290510" className="block bg-orange-500 text-white px-8 py-4 rounded-xl text-xl font-bold">
                Позвонить
              </a>
              <a href="https://t.me/+79959290510" target="_blank" rel="noopener noreferrer" className="block bg-blue-500 text-white px-8 py-4 rounded-xl text-xl font-bold">
                Написать в Telegram
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Аренда инструмента в Бийске — честно и удобно
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Цена как в объявлении — проверяем инструмент при выдаче — доставка.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
            <a
              href="tel:+79959290510"
              className="bg-white text-orange-500 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition flex items-center justify-center shadow-lg"
            >
              <Phone className="w-8 h-8 mr-3" />
              Позвонить
            </a>
            <a
              href="https://t.me/+79959290510"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-600 transition flex items-center justify-center shadow-lg"
            >
              <MessageCircle className="w-8 h-8 mr-3" />
              Написать в Telegram
            </a>
          </div>
          <p className="text-lg italic">любая задача — есть инструмент.</p>
        </div>
      </section>

      {/* Категории */}
      <section id="categories" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Инструмент под задачу — выбирай</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => setSelectedTool(category)}
              >
                <img src={category.image} alt={category.name} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                  <p className="text-sm text-orange-500 font-medium">Нажми, чтобы узнать подробнее →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Модальное окно */}
      {selectedTool && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4" onClick={() => setSelectedTool(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button onClick={() => setSelectedTool(null)} className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-3 shadow-lg hover:bg-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img src={selectedTool.image} alt={selectedTool.name} className="w-full max-h-[60vh] object-contain bg-gray-50 rounded-t-2xl" />
            </div>
            <div className="p-6 md:p-10">
              <h3 className="text-2xl md:text-4xl font-bold mb-6 text-center md:text-left">{selectedTool.name}</h3>

              {selectedTool.prices && (
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 text-center md:text-left">Цены на аренду</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse mx-auto max-w-md">
                      <thead>
                        <tr className="bg-orange-100">
                          <th className="border border-gray-300 p-3 text-center">1 день</th>
                          <th className="border border-gray-300 p-3 text-center">3 дня</th>
                          <th className="border border-gray-300 p-3 text-center">7 дней</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 p-4 text-center text-lg font-bold text-orange-600">{selectedTool.prices.day1}</td>
                          <td className="border border-gray-300 p-4 text-center text-lg font-bold text-orange-600">{selectedTool.prices.day3}</td>
                          <td className="border border-gray-300 p-4 text-center text-lg font-bold text-orange-600">{selectedTool.prices.day7}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-4">Скидки при долгосрочной аренде и для бригад</p>
                </div>
              )}

              <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
                Надёжный профессиональный инструмент в отличном состоянии.<br />
                Проверка при выдаче. Доставка по Бийску. Залог возвращаем полностью.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
                <a href="tel:+79959290510" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-5 rounded-xl font-bold text-xl transition flex items-center justify-center shadow-lg">
                  <Phone className="w-8 h-8 mr-4" />
                  Позвонить
                </a>
                <a href="https://t.me/+79959290510" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-5 rounded-xl font-bold text-xl transition flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-8 h-8 mr-4" />
                  Написать в Telegram
                </a>
              </div>

              <p className="text-center text-sm text-gray-500 mt-6">Работаем с 8:00 до 20:00 без выходных</p>
            </div>
          </div>
        </div>
      )}

      {/* Остальные секции — без изменений */}
      <section id="features" className="py-16 bg-white">/* ... твой код из предыдущих версий ... */</section>
      <section id="how" className="py-16 bg-gray-50">/* ... */</section>
      <section className="py-16 bg-white">/* Для бригад */</section>
      <section className="py-16 bg-gray-50">/* Отзывы */</section>
      <section id="pricing" className="py-16 bg-white">/* Тарифы */</section>
      <section id="faq" className="py-16 bg-gray-50">/* FAQ */</section>
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Контакты</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-orange-500 mr-3" />
                <span>г. Бийск, Алтайский край, ул. Мухачева, 176</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-orange-500 mr-3" />
                <span>+7 (995) 929-05-10 (звонок и Telegram)</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-6 h-6 text-blue-500 mr-3" />
                <a href="https://t.me/+79959290510" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 font-medium">
                  Написать в Telegram
                </a>
              </div>
              <div className="flex items-center">
                <a href="https://instagram.com/chestnyiprokat" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 font-medium">
                  Instagram @chestnyiprokat
                </a>
              </div>
              <div className="space-x-6">
                <a href="https://vk.com/id1093800923" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 font-medium">VK</a>
                <a href="https://ok.ru/profile/910414818145" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 font-medium">Одноклассники</a>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-orange-500 mr-3 mt-1" />
                <div>
                  <p>prokat176@gmail.com</p>
                  <p>prokat176@bk.ru</p>
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="w-6 h-6 text-orange-500 mr-3 mt-1" />
              <div>
                <p className="font-semibold">Часы работы</p>
                <p>Пн–Вс: 08:00–20:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 Честный прокат. Все права защищены.</p>
          <p className="mt-2 text-gray-400">Аренда инструмента в Бийске — честно и удобно</p>
        </div>
      </footer>

      {/* Нижняя панель на мобильных */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t border-gray-200 md:hidden z-40">
        <div className="grid grid-cols-2 py-3">
          <a href="tel:+79959290510" className="flex flex-col items-center text-orange-500">
            <Phone className="w-10 h-10" />
            <span className="text-sm mt-1 font-semibold">Позвонить</span>
          </a>
          <a href="https://t.me/+79959290510" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-blue-500">
            <MessageCircle className="w-10 h-10" />
            <span className="text-sm mt-1 font-semibold">Telegram</span>
          </a>
        </div>
      </div>

      <div className="pb-24 md:pb-0"></div>
    </div>
  );
};

export default App;