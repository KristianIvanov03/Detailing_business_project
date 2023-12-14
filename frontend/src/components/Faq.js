import React, { useState } from 'react';

const FAQ = () => {
  const faqEntries = [
    {
      question: 'How often should I detail my car?',
      answer: 'The frequency of car detailing depends on factors such as usage, weather conditions, and personal preference. In general, detailing your car every 3 to 6 months is recommended.'
    },
    {
      question: 'Is detailing suitable for all types of vehicles?',
      answer: 'Yes, car detailing is suitable for various types of vehicles, including cars, trucks, SUVs, and motorcycles. The detailing process can be tailored to suit the specific needs of different vehicle types.'
    },
    {
      question: 'Do you offer mobile detailing services?',
      answer: 'Yes, we provide mobile detailing services. Our team can come to your location to detail your car for added convenience.'
    },
    {
      question: 'How long does a car detailing session usually take?',
      answer: 'The duration of a car detailing session can vary based on the type of service and the condition of your vehicle. On average, it may take anywhere from 2 to 4 hours.'
    },
    {
      question: 'What are the benefits of regular car detailing?',
      answer: 'Regular car detailing helps maintain the vehicle\'s appearance, protects the paint and interior surfaces, and enhances resale value. It also contributes to a healthier and more enjoyable driving experience.'
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-content">
        <div className="faq-list">
          {faqEntries.map((entry, index) => (
            <li key={index} onClick={() => handleToggle(index)} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="question">
                <h3>{entry.question}</h3>
                {activeIndex === index && <p>{entry.answer}</p>}
              </div>
            </li>
          ))}
        </div>
        <div className="faq-image">
          <img src="https://i.ibb.co/G06PtmM/stock-photo-a-man-cleaning-car-with-cloth-car-detailing-or-valeting-concept-selective-focus-16810057.jpg" alt="Common Illustration" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;