import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const AccordionItem = ({ title, content, image, links, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 mb-4 overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out bg-blue-50">
      <button
        className="flex justify-between items-center w-full p-4 text-left hover:bg-blue-100 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-gray-800">{title}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 bg-white">
          <p className="mb-4 text-gray-700">{content}</p>
          {links && links.length > 0 && (
            <div className="mt-4 mb-4">
              <h4 className="font-semibold mb-2">Faydalı Linkler:</h4>
              <ul className="list-disc pl-5">
                {links.map((link, index) => (
                  <li key={index} className="mb-1">
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      {link.text} <ExternalLink size={14} className="ml-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <img src={image} alt={`Adım ${index + 1}`} className="w-full mb-4 rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

const SetupGuide = () => {
  const steps = [
    {
      title: "1. IBM Cloud Hesabı Oluşturma",
      content: "Eğer henüz bir IBM Cloud hesabınız yoksa, watsonx.ai'ye erişim için bir hesap oluşturmanız gerekiyor. Hesap oluşturma işlemi birkaç saat sürebilir, bu yüzden önceden hazırlıklı olun.",
      image: "/api/placeholder/600/400",
      links: [
        { text: "IBM Cloud Hesabı Oluştur", url: "https://cloud.ibm.com/registration" }
      ]
    },
    {
      title: "2. IBM TechZone'a Giriş",
      content: "IBM TechZone websitesine gidin ve IBM ID'niz ile giriş yapın. Safari tarayıcısı desteklenmediği için Chrome, Edge veya Firefox kullanmanız önerilir.",
      image: "/api/placeholder/600/400",
      links: [
        { text: "IBM TechZone", url: "https://techzone.ibm.com" }
      ]
    },
    {
      title: "3. Watsonx.ai Pattern'ını Seçme",
      content: "TechZone Certified Base Images sayfasına gidin. Sol navigasyon menüsünden 'watsonx' seçeneğini seçin ve 'watsonx.ai/.governance SaaS' kutucuğunu bulun.",
      image: "/api/placeholder/600/400",
      links: [
        { text: "Watsonx Pattern Sayfası", url: "https://techzone.ibm.com/collection/tech-zone-certified-base-images/journey-watsonx" }
      ]
    },
    {
      title: "4. Rezervasyon Oluşturma",
      content: "'Reserve' butonuna tıklayın. 'Reserve now' seçeneğini işaretleyin. Rezervasyon adını '<your Name> watsonx.ai L4 SaaS' olarak değiştirin. 'Purpose' kısmında 'Education' veya 'Pilot' seçeneğini seçin. 'Purpose description' alanına 'Complete L4 Lab' yazın. 'Preferred Geography' olarak 'any -AMERICAS us-south region - any datacenter' seçin.",
      image: "/api/placeholder/600/400",
    },
    {
      title: "5. Rezervasyon Detaylarını Tamamlama",
      content: "Bitiş tarihi ve saatini belirleyin (maksimum 2 hafta). 'Install Db2' seçeneğini 'No' olarak işaretleyin. Kullanım şartlarını kabul edin ve 'Submit' butonuna tıklayın.",
      image: "/api/placeholder/600/400",
    },
    {
      title: "6. Rezervasyon Onayını Bekleme",
      content: "Rezervasyonunuz onaylandıktan sonra (genellikle 10-15 dakika içinde), e-posta adresinize bir bildirim gelecektir. Bu e-postadaki 'Here' linkine tıklayın.",
      image: "/api/placeholder/600/400",
    },
    {
      title: "7. TechZone Hesabına Katılma",
      content: "IBM Cloud giriş sayfasında oturum açın. TechZone hesabına katılmak için daveti kabul edin ve 'Join Account' butonuna tıklayın.",
      image: "/api/placeholder/600/400",
    },
    {
      title: "8. Doğru Hesabı Seçme",
      content: "Giriş yaptıktan sonra, doğru hesabı kullandığınızdan emin olun. Üst menüde 'itz-watsonx' veya 'itz-watsonx-n' hesabını seçin.",
      image: "/api/placeholder/600/400",
    },
    {
      title: "9. Watsonx.ai Konsoluna Erişim",
      content: "IBM Cloud konsolunda 'watsonx' araması yapın. 'watsonx' seçeneğine tıklayın ve 'watsonx.ai' kutucuğundaki 'Launch' butonuna tıklayın.",
      image: "/api/placeholder/600/400",
    },
    {
      title: "10. Sandbox Projesi Oluşturma",
      content: "Watsonx.ai konsolunda 'Create sandbox project' butonuna tıklayın. Projenin oluşturulması birkaç dakika sürebilir.",
      image: "/api/placeholder/600/400",
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Watsonx.ai Detaylı Kurulum Rehberi</h1>
      <p className="text-gray-600 mb-8 text-center">Bu rehber, IBM watsonx.ai L4 PoX environment setup dokümanı baz alınarak hazırlanmıştır. Adım adım Watsonx.ai ortamınızı hazırlamanıza yardımcı olacaktır.</p>
      {steps.map((step, index) => (
        <AccordionItem
          key={index}
          title={step.title}
          content={step.content}
          image={step.image}
          links={step.links}
          index={index}
        />
      ))}
    </div>
  );
};

export default SetupGuide;
