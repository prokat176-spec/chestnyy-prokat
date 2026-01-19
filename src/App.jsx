Отлично! Ниже — обновлённый **App.jsx**, в котором:

✅ **Полностью удалён WhatsApp**  
✅ **Везде заменён на Telegram и MAX** (как вы просили)  
✅ Все кнопки, ссылки и упоминания WhatsApp заменены  
✅ Добавлены иконки и подписи для Telegram и MAX

---

```jsx
import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, ChevronDown, Star, Truck, Shield, RotateCcw, FileText, Users, CheckCircle, Instagram, Facebook } from 'lucide-react';

const App = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const categories = [
    { name: 'Перфораторы', image: 'https://c8.alamy.com/comp/2J9AAKP/professional-construction-worker-in-uniform-standing-with-rotary-hammer-drill-portrait-of-contractor-in-hardhat-and-overalls-posing-with-jackhammer-2J9AAKP.jpg' },
    { name: 'Шуруповёрты', image: 'https://www.shutterstock.com/image-photo/construction-worker-using-cordless-screwdriver-assembling-260nw-2627061751.jpg' },
    { name: 'Бетономешалки', image: 'https://media.istockphoto.com/id/1897813683/photo/concrete-mixer-truck-loading-a-boom-concrete-pump.jpg?s=612x612&w=0&k=20&c=RkKr-MZDo7RVVtHY5jumJXZEBzps4jZsGj10bsi1ZqM=' },
    { name: 'Виброплиты', image: 'https://media.istockphoto.com/id/1346728269/photo/worker-in-use-vibratory-plate-compactor-for-path-construction-plate-compactor-for-compaction.jpg?s=612x612&w=0&k=20&c=RlYxmnIWjhe6OqEr49q2qmguHhFfXbiI9jNB6RkVCqs=' },
    { name: 'Генераторы', image: 'https://www.powertechmachinery.com.au/wp-content/uploads/2023/11/ptm-blog-generator-02.jpg' },
    { name: 'Лазерные уровни', image: 'https://myconstructiontechnology.com/wp-content/uploads/2021/08/How-Are-Laser-Levels-Used-in-Surveying-and-Construction.jpeg' },
    { name: 'Мойки высокого давления', image: 'https://www.build-review.com/wp-content/uploads/2021/04/pressure-washer.jpg' },
    { name: 'И много другого', image: 'https://constrofacilitator.com/wp-content/uploads/2023/04/power-tools.jpg' }
  ];

  const features = [
    { icon: <CheckCircle className="w-6 h-6" />, title: 'Цена честная', description: 'как в объявлении' },
    { icon: <Shield className="w-6 h-6" />, title: 'Проверка инструмента', description: 'при тебе' },
    { icon: <RotateCcw className="w-6 h-6" />, title: 'Залог возвращаем', description: '' },
    { icon: <Truck className="w-6 h-6" />, title: 'Курьер-доставка', description: '' },
    { icon: <RotateCcw className="w-6 h-6" />, title: 'Замена при поломке', description: '' },
    { icon: <Users className="w-6 h-6" />, title: 'Можно для бригад', description: '' }
  ];

  const steps = [
    'Выбираешь инструмент',
    'Оставляешь заявку или звонишь',
    'Проверяем инструмент при тебе',
    'Берёшь и работаешь',
    'Возвращаешь — получаешь залог'
  ];

  const brigadeFeatures = [
    'Доставка на объект',
    'Один договор на всё',
    'Персональные условия',
    'Приоритет',
    'Долгосрочная аренда'
  ];

  const reviews = [
    { stars: 5, text: 'Взял на дачу — всё ок.', author: 'Иван С.' },
    { stars: 5, text: 'Бригаде заменили сразу.', author: 'Андрей К.' },
    { stars: 5, text: 'Доставка спасла проект.', author: 'Михаил П.' }
  ];

  const pricing = [
    { instrument: 'Перфоратор', day1: '1200 ₽', day3: '3000 ₽', day7: '6000 ₽' },
    { instrument: 'Шуруповёрт', day1: '800 ₽', day3: '2100 ₽', day7: '4200 ₽' },
    { instrument: 'Генератор', day1: '2500 ₽', day3: '6500 ₽', day7: '12000 ₽' }
  ];

  const faqs = [
    { question: 'Какой залог?', answer: 'Залог зависит от стоимости инструмента и составляет обычно 50-100% от его рыночной стоимости.' },
    { question: 'Что если сломал?', answer: 'При поломке по вине клиента взимается стоимость ремонта или замены. При неисправности инструмента по нашей вине замена производится бесплатно.' },
    { question: 'Можно ли получить доставку?', answer: 'Да, мы предоставляем курьерскую доставку инструментов по всему Бийску. Доставка на объект также доступна для бригад.' },
    { question: 'Есть ли скидки?', answer: 'Да, действуют скидки при долгосрочной аренде (от 3 дней) и специальные условия для постоянных клиентов и бригад.' },
    { question: 'Как оформить аренду?', answer: 'Оставьте заявку на сайте, позвоните по телефону или напишите в Telegram / MAX. Мы свяжемся с вами в течение 15 минут.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Telegram Button */}
      <a
        href="https://t.me/+79959290510"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-xl">
                Честный прокат
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="font-semibold">+7 (995) 929-05-10</span>
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://t.me/+79959290510" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">
                  Telegram
                </a>
                <a href="https://imo.im/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">
                  MAX
                </a>
              </div>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200">
                Заказать инструмент
              </button>
            </div>
          </div>
          <div className="mt-4 text-center md:text-left text-gray-600">
            <MapPin className="w-4 h-4 inline mr-1" />
            г. Бийск, Алтайский край, ул. Мухачева, 176
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1316972751/photo/electrician-technician-with-tool-belt-on-rustic-wooden-background-electricity.jpg?s=612x612&w=0&k=20&c=sxHY2yDAHCS3u1ibaIehFie0lQJxmyNp1W9nU6QXPyE=')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Аренда инструмента в Бийске — честно и удобно
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Цена как в объявлении — проверяем инструмент при выдаче — доставка.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200">
              📍 Заказать сейчас
            </button>
            <a
              href="https://t.me/+79959290510"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-500 transition-colors duration-200"
            >
              💬 Написать в Telegram
            </a>
          </div>
          <p className="text-lg italic">любая задача — есть инструмент.</p>
        </div>
      </section>

      {/* What We Rent */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Инструмент под задачу — выбирай</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600">Цена за 1 день / 3 дня / неделя</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Почему выбирают нас</h2>
          <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
            <div className="lg:w-1/2">
              <img
                src="https://cdn.prod.website-files.com/603998e53b870e0ccac4ebcc/688b4030ccbeb036f9cd9c9e_Checklist%20for%20Pre%20%26%20Post-use%20Construction%20Equipment%20Inspection.webp"
                alt="Проверка инструмента перед выдачей на стройке"
                className="rounded-lg shadow-md w-full"
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-orange-500 mb-2 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-lg italic text-orange-500 font-semibold">
            «Мы не переписываем цены. Всё как обещано.»
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
          <div className="max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start mb-6 last:mb-0">
                <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-lg">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Brigades */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg p-6 md:p-8 relative overflow-hidden">
            <img
              src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=882151120619474"
              alt="Строительная бригада на объекте"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
              loading="lazy"
            />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Инструмент под объёмы и проекты</h2>
              <p className="text-xl mb-6">Доставка на объект 📦, приоритетное обслуживание, один договор, выгодные условия.</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {brigadeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-lg italic">📍 Мы работаем с бригадами — спрашивайте условия.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Что говорят наши клиенты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{review.text}"</p>
                <p className="text-orange-500 font-semibold">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Тарифы</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-3 text-left">Инструмент</th>
                  <th className="border p-3 text-center">1 день</th>
                  <th className="border p-3 text-center">3 дня</th>
                  <th className="border p-3 text-center">7 дней</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border p-3 font-semibold">{item.instrument}</td>
                    <td className="border p-3 text-center font-bold text-orange-500">{item.day1}</td>
                    <td className="border p-3 text-center font-bold text-orange-500">{item.day3}</td>
                    <td className="border p-3 text-center font-bold text-orange-500">{item.day7}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ответы на вопросы</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 bg-white rounded-lg shadow-sm">
                <button
                  className="w-full text-left p-4 font-semibold flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === index && (
                  <div className="px-4 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Контакты</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start mb-4">
                <MapPin className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span>г. Бийск, Алтайский край, ул. Мухачева, 176</span>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-orange-500 mr-3" />
                <span>+7 (995) 929-05-10</span>
              </div>
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-orange-500 mr-3" />
                <span>prokat176@bk.ru</span>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href="https://t.me/+79959290510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
                >
                  <MessageCircle className="w-4 h-4 mr-1" /> Telegram
                </a>
                <a
                  href="https://imo.im/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-purple-500 text-white px-3 py-2 rounded hover:bg-purple-600"
                >
                  <MessageCircle className="w-4 h-4 mr-1" /> MAX
                </a>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-orange-500 mr-3" />
                <div>
                  <p className="font-semibold">Часы работы</p>
                  <p>Пн–Вс: 08:00–20:00</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/chestnyiprokat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-2 rounded hover:opacity-90"
                >
                  <Instagram className="w-4 h-4 mr-1" /> Instagram
                </a>
                <a
                  href="https://vk.com/id1093800923"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
                >
                  <Facebook className="w-4 h-4 mr-1" /> VK
                </a>
                <a
                  href="https://ok.ru/profile/910414818145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-orange-500 text-white px-3 py-2 rounded hover:bg-orange-600"
                >
                  <Facebook className="w-4 h-4 mr-1" /> Одноклассники
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 Честный прокат. Все права защищены.</p>
          <p className="mt-2 text-gray-400">Аренда инструмента в Бийске — честно и удобно</p>
          <p className="mt-1 text-sm text-gray-500">г. Бийск, ул. Мухачева, 176</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
```