const translations = {
  en: { level: "Level", score: "Score", hint: "Hint:" },
  hi: { level: "लेवल", score: "स्कोर", hint: "संकेत:" },
  pa: { level: "ਲੈਵਲ", score: "ਸਕੋਰ", hint: "ਸੰਕੇਤ:" }
};

const questions = [
  { q: { en: "main() returns?", hi: "main() क्या है?", pa: "main() ਕੀ?" }, type: "mcq", o: ["void","int"], a: 1, hint: { en: "int", hi: "int", pa: "int" } },
  { q: { en: "HTML heading?", hi: "HTML हेडिंग?", pa: "HTML ਹੈੱਡਿੰਗ?" }, type: "mcq", o: ["<p>","<h1>"], a: 1, hint: { en: "<h1>", hi: "<h1>", pa: "<h1>" } },
  { q: { en: "printf(\"Hello\");", hi: "printf(\"Hello\");", pa: "printf(\"Hello\");" }, type: "fill", a: "Hello", hint: { en: "Hello", hi: "Hello", pa: "Hello" } }
];

const motivation = ["Keep Going!", "शाबाश!", "ਵਧੀਆ!"];
