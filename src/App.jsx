Оimport React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, ChevronDown, Star, Truck, Shield, RotateCcw, CheckCircle, Instagram, Facebook } from 'lucide-react';

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

  // ... (features, steps, brigadeFeatures, reviews, pricing, faqs — оставляем как у тебя)

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
                <a href="https://t.me/+79959290510" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 font-medium">
                  Telegram
                </a>
                <a href="https://max.ru/" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-600 font-medium">
                  MAX
                </a>
              </div>
              <a href="tel:+79959290510" className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600">
                Позвонить
              </a>
            </div>
          </div>
          <div className="mt-4 text-center md:text-left text-gray-600">
            <MapPin className="w-4 h-4 inline mr-1" />
            г. Бийск, Алтайский край, ул. Мухачева, 176
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 relative overflow-hidden" style={{backgroundImage: `url('https://media.istockphoto.com/id/1316972751/photo/electrician-technician-with-tool-belt-on-rustic-wooden-background-electricity.jpg?s=612x612&w=0&k=20&c=sxHY2yDAHCS3u1ibaIehFie0lQJxmyNp1W9nU6QXPyE=')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay'}}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Аренда инструмента в Бийске — честно и удобно
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Цена как в объявлении — проверяем инструмент при выдаче — доставка.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a href="tel:+79959290510" className="bg-white text-orange-500 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200">
              📞 Позвонить
            </a>
            <a
              href="https://t.me/+79959290510?text=Здравствуйте! Хочу арендовать инструмент"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors duration-200"
            >
              💬 Написать в Telegram
            </a>
          </div>
          <p className="text-lg italic">любая задача — есть инструмент.</p>
        </div>
      </section>

      {/* Остальные секции оставляем как в твоём коде — они отличные! */}

      {/* В контактах */}
      <div className="flex flex-wrap gap-3 mt-4">
        <a href="https://t.me/+79959290510" target="_blank" rel="noopener noreferrer" className="flex items-center bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">
          <MessageCircle className="w-4 h-4 mr-1" /> Telegram
        </a>
        <a href="https://max.ru/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-purple-500 text-white px-3 py-2 rounded hover:bg-purple-600">
          <MessageCircle className="w-4 h-4 mr-1" /> MAX (по номеру +7 (995) 929-05-10)
        </a>
      </div>

      {/* ... остальной код без изменений ... */}
    </div>
  );
};

export default App;