import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import './App.css';

import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.png';
import image4 from './images/4.jpg';
import image5 from './images/5.jpg';
import image6 from './images/6.png';
import image7 from './images/7.jpg';
import image8 from './images/8.png';
import image9 from './images/9.png';
import image10 from './images/10.png';
import image11 from './images/11.png';
import image12 from './images/12.png';
import image13 from './images/13.png';
import image14 from './images/14.png';
import image15 from './images/15.png';
import image16 from './images/16.png';
import image17 from './images/17.png';
import image18 from './images/18.png';
import image19 from './images/19.png';
import image20 from './images/20.png';
import image21 from './images/21.png';
import image22 from './images/22.png';

interface Link {
  text: string;
  url: string;
}

interface AccordionItemProps {
  title: string;
  content: string;
  images: string[];  // Array of image URLs
  links?: Link[];
  index: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, images, links, index }) => {
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
      {isOpen && (
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
          {images.map((image, idx) => (
            <img key={idx} src={image} alt={`Adım ${index + 1} - Görsel ${idx + 1}`} className="w-full mb-4 rounded-lg shadow-md" />
          ))}
        </div>
      )}
    </div>
  );
};

const SetupGuide: React.FC = () => {
  const steps = [
    {
      title: "1. IBM Cloud Hesabı Oluşturma",
      content: "Eğer henüz bir IBM Cloud hesabınız yoksa, watsonx.ai'ye erişim için bir hesap oluşturmanız gerekiyor. Hesap oluşturma işlemi birkaç saat sürebilir, bu yüzden önceden hazırlıklı olun.",
      images: [image1],
      links: [
        { text: "IBM Cloud Hesabı Oluştur", url: "https://cloud.ibm.com/registration" }
      ]
    },
    {
      title: "2. IBM TechZone'a Giriş",
      content: "IBM TechZone websitesine gidin ve IBM ID'niz ile giriş yapın. Safari tarayıcısı desteklenmediği için Chrome, Edge veya Firefox kullanmanız önerilir.",
      images: [image2, image3],
      
      links: [
        { text: "IBM TechZone", url: "https://techzone.ibm.com" }
      ]
    },
    {
      title: "3. Watsonx.ai Pattern'ını Seçme",
      content: "TechZone Certified Base Images sayfasına gidin. Sol navigasyon menüsünden 'watsonx' seçeneğini seçin ve 'watsonx.ai/.governance SaaS' kutucuğunu bulun.",
      images:  [image4, image5],
      links: [
        { text: "Watsonx Pattern Sayfası", url: "https://techzone.ibm.com/collection/tech-zone-certified-base-images/journey-watsonx" }
      ]
    },
    {
      title: "4. Rezervasyon Oluşturma",
      content: "'Reserve' butonuna tıklayın. 'Reserve now' seçeneğini işaretleyin. Rezervasyon adını '<your Name> watsonx.ai L4 SaaS' olarak değiştirin. 'Purpose' kısmında 'Education' veya 'Pilot' seçeneğini seçin. 'Purpose description' alanına 'Complete L4 Lab' yazın. 'Preferred Geography' olarak 'any -AMERICAS us-south region - any datacenter' seçin.",
      images:  [image6, image7, image8],
    },
    {
      title: "5. Rezervasyon Detaylarını Tamamlama",
      content: "Bitiş tarihi ve saatini belirleyin (maksimum 2 hafta). 'Install Db2' seçeneğini 'No' olarak işaretleyin. Kullanım şartlarını kabul edin ve 'Submit' butonuna tıklayın.",
      images:  [image9, image10],
    },
    {
      title: "6. Rezervasyon Onayını Bekleme",
      content: "Rezervasyonunuz onaylandıktan sonra (genellikle 10-15 dakika içinde), e-posta adresinize bir bildirim gelecektir. Bu e-postadaki 'Here' linkine tıklayın.",
      images:  [image11, image12],
    },
    {
      title: "7. TechZone Hesabına Katılma",
      content: "IBM Cloud giriş sayfasında oturum açın. TechZone hesabına katılmak için daveti kabul edin ve 'Join Account' butonuna tıklayın.",
      images:  [image13, image14],
    },
    {
      title: "8. Doğru Hesabı Seçme",
      content: "Giriş yaptıktan sonra, doğru hesabı kullandığınızdan emin olun. Üst menüde 'itz-watsonx' veya 'itz-watsonx-n' hesabını seçin.",
      images:  [image15, image16],
    },
    {
      title: "9. Watsonx.ai Konsoluna Erişim",
      content: "IBM Cloud konsolunda 'watsonx' araması yapın. 'watsonx' seçeneğine tıklayın ve 'watsonx.ai' kutucuğundaki 'Launch' butonuna tıklayın.",
      images:  [image17, image18, image19, image20],
    },
    {
      title: "10. Sandbox Projesi Oluşturma",
      content: "Watsonx.ai konsolunda 'Create sandbox project' butonuna tıklayın. Projenin oluşturulması birkaç dakika sürebilir.",
      images:  [image21, image22],
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">IBM Watsonx.ai Lab Ortam Kurulum Rehberi</h1>
      <p className="text-gray-600 mb-8 text-center">Bu rehber, adım adım Watsonx.ai ortamınızı hazırlamanıza yardımcı olacaktır.</p>
      {steps.map((step, index) => (
        <AccordionItem
          key={index}
          title={step.title}
          content={step.content}
          images={step.images}
          links={step.links}
          index={index}
        />
      ))}
    </div>
  );
};

export default SetupGuide;
