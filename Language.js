// Translations for English, Hindi, Punjabi
const translations = {
  en: { level: "Level", score: "Score", hint: "Hint:" },
  hi: { level: "लेवल", score: "स्कोर", hint: "संकेत:" },
  pa: { level: "ਲੈਵਲ", score: "ਸਕੋਰ", hint: "ਸੰਕੇਤ:" }
};

// All Questions (C + Web Dev)
const questions = [
  // C Language
  {
    q: { en: "main() function returns?", hi: "main() फंक्शन क्या लौटाता है?", pa: "main() ਫੰਕਸ਼ਨ ਕੀ ਵਾਪਸ ਕਰਦਾ?" },
    type: "mcq",
    o: ["void", "int", "char", "float"],
    a: 1,
    hint: { en: "int", hi: "int", pa: "int" }
  },
  {
    q: { en: "printf(\"Hello\"); prints what?", hi: "printf(\"Hello\"); क्या प्रिंट करता है?", pa: "printf(\"Hello\"); ਕੀ ਪ੍ਰਿੰਟ ਕਰਦਾ?" },
    type: "fill",
    a: "Hello",
    hint: { en: "Hello", hi: "Hello", pa: "Hello" }
  },

  // Web Development
  {
    q: { en: "HTML heading tag is?", hi: "HTML हेडिंग टैग कौन सा है?", pa: "HTML ਹੈੱਡਿੰਗ ਟੈਗ ਕਿਹੜਾ?" },
    type: "mcq",
    o: ["<p>", "<h1>", "<div>", "<img>"],
    a: 1,
    hint: { en: "<h1>", hi: "<h1>", pa: "<h1>" }
  },
  {
    q: { en: "CSS full form?", hi: "CSS का पूरा नाम?", pa: "CSS ਦਾ ਪੂਰਾ ਨਾਮ?" },
    type: "truefalse",
    a: true,
    hint: { en: "Cascading Style Sheets", hi: "कैस्केडिंग स्टाइल शीट्स", pa: "ਕੈਸਕੇਡਿੰਗ ਸਟਾਈਲ ਸ਼ੀਟਸ" }
  }
];

// Motivational Quotes
const motivation = {
  en: ["Keep Going!", "You're Awesome!", "One Step Closer!"],
  hi: ["जारी रखो!", "तुम कमाल हो!", "एक कदम और!"],
  pa: ["ਜਾਰੀ ਰੱਖੋ!", "ਤੁਸੀਂ ਵਧੀਆ ਹੋ!", "ਇੱਕ ਕਦਮ ਹੋਰ!"]
};
