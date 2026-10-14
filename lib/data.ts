// src/lib/data.ts

import { type Product, type Testimonial } from "./schema";

export const products: Product[] = [
  {
    id: "1",
    nameEn: "Chandan Herbal Incense Sticks",
    nameHi: "चंदन हर्बल अगरबत्ती",
    descriptionEn:
      "Pure sandalwood fragrance, handcrafted with temple flowers and natural herbs. Charcoal-free and chemical-free.",
    descriptionHi:
      "शुद्ध चंदन की खुशबू, मंदिर के फूलों और प्राकृतिक जड़ी-बूटियों से हस्तनिर्मित। कोयला-मुक्त और रसायन-मुक्त।",
    price: 149,
    originalPrice: 199,
    category: "aromatic-spiritual",
    image: "/images/incense1.jpg",
    hoverImage: "/images/incense2.jpg",
    tags: ["eco-friendly", "handmade", "chemical-free", "charcoal-free"],
    inStock: true,
    featured: true,
  },
  {
    id: "2",
    nameEn: "Loban Premium Dhoop",
    nameHi: "लोबान प्रीमियम धूप",
    descriptionEn:
      "Traditional frankincense dhoop cups made with panchagavya and natural loban resin.",
    descriptionHi: "पंचगव्य और प्राकृतिक लोबान से बनी पारंपरिक लोबान धूप कप।",
    price: 199,
    category: "aromatic-spiritual",
    image: "/images/incense2.jpg",
    hoverImage: "/images/incense1.jpg",
    tags: ["eco-friendly", "handmade", "premium"],
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    nameEn: "Guggal Sambrani Cones",
    nameHi: "गुग्गल सांभरानी कोन",
    descriptionEn:
      "Aromatic guggal cones for spiritual ambiance. Made from pure cow dung and sacred herbs.",
    descriptionHi:
      "आध्यात्मिक वातावरण के लिए सुगंधित गुग्गल कोन। शुद्ध गोबर और पवित्र जड़ी-बूटियों से बना।",
    price: 129,
    category: "aromatic-spiritual",
    image: "/images/incense1.jpg",
    tags: ["eco-friendly", "handmade", "chemical-free"],
    inStock: true,
    featured: false,
  },
  {
    id: "4",
    nameEn: "Handcrafted Ganesh Idol",
    nameHi: "हस्तनिर्मित गणेश मूर्ति",
    descriptionEn:
      "Beautiful eco-friendly Ganesh idol made with natural materials by skilled rural artisans.",
    descriptionHi:
      "कुशल ग्रामीण कारीगरों द्वारा प्राकृतिक सामग्री से बनी सुंदर पर्यावरण-अनुकूल गणेश मूर्ति।",
    price: 599,
    originalPrice: 799,
    category: "home-decor-idols",
    image: "/images/ganesh1.jpg",
    hoverImage: "/images/ganesh2.jpg",
    tags: ["eco-friendly", "handmade", "premium"],
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    nameEn: "Adiyogi Meditation Idol",
    nameHi: "आदियोगी ध्यान मूर्ति",
    descriptionEn:
      "Serene Adiyogi statue for meditation spaces. Handcrafted from eco-materials.",
    descriptionHi:
      "ध्यान स्थानों के लिए शांत आदियोगी मूर्ति। पर्यावरण-सामग्री से हस्तनिर्मित।",
    price: 749,
    category: "home-decor-idols",
    image: "/images/ganesh2.jpg",
    hoverImage: "/images/ganesh1.jpg",
    tags: ["eco-friendly", "handmade", "premium"],
    inStock: true,
    featured: true,
  },
  {
    id: "6",
    nameEn: "Buddha Peace Statue",
    nameHi: "बुद्ध शांति मूर्ति",
    descriptionEn:
      "Peaceful Buddha statue promoting tranquility. Made with sustainable materials.",
    descriptionHi:
      "शांति को बढ़ावा देने वाली शांत बुद्ध मूर्ति। टिकाऊ सामग्री से निर्मित।",
    price: 649,
    category: "home-decor-idols",
    image: "/images/ganesh1.jpg",
    tags: ["eco-friendly", "handmade"],
    inStock: true,
    featured: false,
  },
  {
    id: "7",
    nameEn: "Om Wall Hanging",
    nameHi: "ॐ वॉल हैंगिंग",
    descriptionEn:
      "Sacred Om symbol wall decor. Handcrafted with natural fibers and eco-materials.",
    descriptionHi:
      "पवित्र ॐ प्रतीक वॉल डेकोर। प्राकृतिक फाइबर और इको-सामग्री से हस्तनिर्मित।",
    price: 349,
    category: "home-decor-idols",
    image: "/images/ganesh2.jpg",
    tags: ["eco-friendly", "handmade"],
    inStock: true,
    featured: false,
  },
  {
    id: "8",
    nameEn: "Cow Dung Cakes (Upale)",
    nameHi: "गोबर के उपले",
    descriptionEn:
      "Traditional cow dung cakes for havan and puja. Pure and naturally sun-dried.",
    descriptionHi:
      "हवन और पूजा के लिए पारंपरिक गोबर के उपले। शुद्ध और प्राकृतिक रूप से धूप में सुखाए हुए।",
    price: 99,
    category: "havan-puja",
    image: "/images/diya1.jpg",
    hoverImage: "/images/diya2.jpg",
    tags: ["eco-friendly", "organic", "chemical-free"],
    inStock: true,
    featured: true,
  },
  {
    id: "9",
    nameEn: "Havan Samidha Wood",
    nameHi: "हवन समिधा",
    descriptionEn:
      "Sacred wood sticks for havan rituals. Sustainably sourced and purified.",
    descriptionHi:
      "हवन अनुष्ठानों के लिए पवित्र लकड़ी की छड़ियाँ। टिकाऊ तरीके से प्राप्त और शुद्ध।",
    price: 179,
    category: "havan-puja",
    image: "/images/diya2.jpg",
    hoverImage: "/images/diya1.jpg",
    tags: ["eco-friendly", "organic"],
    inStock: true,
    featured: false,
  },
  {
    id: "10",
    nameEn: "Handmade Diyas Set",
    nameHi: "हस्तनिर्मित दीये सेट",
    descriptionEn:
      "Beautiful handmade clay diyas for festivals. Set of 12 pieces.",
    descriptionHi:
      "त्योहारों के लिए सुंदर हस्तनिर्मित मिट्टी के दीये। 12 पीस का सेट।",
    price: 149,
    category: "havan-puja",
    image: "/images/diya1.jpg",
    tags: ["eco-friendly", "handmade"],
    inStock: true,
    featured: false,
  },
  {
    id: "11",
    nameEn: "Organic Vermicompost",
    nameHi: "जैविक केंचुआ खाद",
    descriptionEn:
      "Premium quality vermicompost for organic gardening. 5kg pack.",
    descriptionHi:
      "जैविक बागवानी के लिए प्रीमियम गुणवत्ता वाली केंचुआ खाद। 5 किलो पैक।",
    price: 299,
    originalPrice: 399,
    category: "gardening-nature",
    image: "/images/garden1.jpg",
    hoverImage: "/images/garden2.jpg",
    tags: ["eco-friendly", "organic"],
    inStock: true,
    featured: true,
  },
  {
    id: "12",
    nameEn: "Seed Balls (GuNi)",
    nameHi: "बीज गोले (गुणी)",
    descriptionEn:
      "Mixed native seed balls for guerrilla gardening. Pack of 20 balls.",
    descriptionHi:
      "गुरिल्ला बागवानी के लिए मिश्रित देशी बीज गोले। 20 गोलों का पैक।",
    price: 199,
    category: "gardening-nature",
    image: "/images/garden2.jpg",
    hoverImage: "/images/garden1.jpg",
    tags: ["eco-friendly", "organic", "handmade"],
    inStock: true,
    featured: true,
  },
  {
    id: "13",
    nameEn: "Eco Flower Pot",
    nameHi: "इको फ्लावर पॉट",
    descriptionEn:
      "Biodegradable flower pot made from cow dung and natural fibers.",
    descriptionHi: "गोबर और प्राकृतिक फाइबर से बना बायोडिग्रेडेबल फ्लावर पॉट।",
    price: 79,
    category: "gardening-nature",
    image: "/images/garden1.jpg",
    tags: ["eco-friendly", "handmade", "organic"],
    inStock: true,
    featured: false,
  },
  {
    id: "14",
    nameEn: "Panchagavya Dhoop Cups",
    nameHi: "पंचगव्य धूप कप",
    descriptionEn:
      "Sacred dhoop cups made with panchagavya ingredients. Pack of 24.",
    descriptionHi: "पंचगव्य सामग्री से बने पवित्र धूप कप। 24 का पैक।",
    price: 249,
    category: "aromatic-spiritual",
    image: "/images/incense2.jpg",
    tags: ["eco-friendly", "handmade", "chemical-free", "premium"],
    inStock: true,
    featured: false,
  },
  {
    id: "15",
    nameEn: "Gau Mata Idol",
    nameHi: "गौ माता मूर्ति",
    descriptionEn:
      "Beautiful cow and calf idol symbolizing motherly love and cow protection.",
    descriptionHi:
      "मातृत्व प्रेम और गौ संरक्षण का प्रतीक सुंदर गाय और बछड़े की मूर्ति।",
    price: 449,
    category: "home-decor-idols",
    image: "/images/ganesh1.jpg",
    hoverImage: "/images/ganesh2.jpg",
    tags: ["eco-friendly", "handmade", "premium"],
    inStock: true,
    featured: false,
  },
  {
    id: "16",
    nameEn: "Organic Manure Pack",
    nameHi: "जैविक खाद पैक",
    descriptionEn:
      "Enriched organic manure for healthy plants. Made from cow dung and temple flowers.",
    descriptionHi:
      "स्वस्थ पौधों के लिए समृद्ध जैविक खाद। गोबर और मंदिर के फूलों से बना।",
    price: 199,
    category: "gardening-nature",
    image: "/images/garden2.jpg",
    tags: ["eco-friendly", "organic"],
    inStock: true,
    featured: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    nameEn: "Priya Sharma",
    nameHi: "प्रिया शर्मा",
    locationEn: "Delhi",
    locationHi: "दिल्ली",
    quoteEn:
      "The fragrance of these incense sticks is absolutely divine! Unlike anything I've used before. You can truly feel the purity and natural essence.",
    quoteHi:
      "इन अगरबत्तियों की खुशबू बिल्कुल दिव्य है! पहले जो कुछ भी इस्तेमाल किया उससे बिल्कुल अलग। आप वास्तव में शुद्धता और प्राकृतिक सार महसूस कर सकते हैं।",
    rating: 5,
  },
  {
    id: "2",
    nameEn: "Rajesh Kumar",
    nameHi: "राजेश कुमार",
    locationEn: "Mumbai",
    locationHi: "मुंबई",
    quoteEn:
      "I love knowing that my purchase supports rural women and cow protection. The quality is exceptional and the products are truly chemical-free.",
    quoteHi:
      "मुझे यह जानकर खुशी है कि मेरी खरीद ग्रामीण महिलाओं और गौ संरक्षण का समर्थन करती है। गुणवत्ता असाधारण है और उत्पाद वास्तव में रसायन-मुक्त हैं।",
    rating: 5,
  },
  {
    id: "3",
    nameEn: "Anita Gupta",
    nameHi: "अनीता गुप्ता",
    locationEn: "Lucknow",
    locationHi: "लखनऊ",
    quoteEn:
      "The Ganesh idol I purchased is beautifully crafted. It adds such positive energy to my home. Highly recommend their home decor items!",
    quoteHi:
      "मैंने जो गणेश मूर्ति खरीदी वह बहुत खूबसूरती से बनाई गई है। यह मेरे घर में सकारात्मक ऊर्जा जोड़ती है। उनके होम डेकोर आइटम की अत्यधिक अनुशंसा करता हूं!",
    rating: 5,
  },
  {
    id: "4",
    nameEn: "Vikram Singh",
    nameHi: "विक्रम सिंह",
    locationEn: "Jaipur",
    locationHi: "जयपुर",
    quoteEn:
      "Best organic manure I've ever used! My plants are thriving and I feel good supporting such a noble cause. Will definitely order again.",
    quoteHi:
      "अब तक इस्तेमाल की सबसे अच्छी जैविक खाद! मेरे पौधे फल-फूल रहे हैं और ऐसे नेक काम का समर्थन करके अच्छा लगता है। निश्चित रूप से फिर से ऑर्डर करूंगा।",
    rating: 5,
  },
  {
    id: "5",
    nameEn: "Meera Patel",
    nameHi: "मीरा पटेल",
    locationEn: "Ahmedabad",
    locationHi: "अहमदाबाद",
    quoteEn:
      "The dhoop cups create such a serene atmosphere during my daily puja. The natural ingredients make all the difference. Pure and authentic!",
    quoteHi:
      "धूप कप मेरी दैनिक पूजा के दौरान ऐसा शांत वातावरण बनाते हैं। प्राकृतिक सामग्री सारा अंतर लाती है। शुद्ध और प्रामाणिक!",
    rating: 5,
  },
];

// Helper functions that we will use in your components
export const getFeaturedProducts = () => products.filter((p) => p.featured);
export const getProductsByCategory = (category: string) =>
  products.filter((p) => p.category === category);
export const getProductById = (id: string) => products.find((p) => p.id === id);
