export const i18n = createI18n({
  locale: "ja",
  fallbackLocale: "ja",
  messages: {
    ja: {
      title: "日本手話",
      あ: "あ",
      い: "い",
      う: "う",
      え: "え",
      お: "お",
      何も: "サインは検出されませんでした。",
      img: "static/svg/ja.svg",
      ja: "日本語",
      es: "スペイン語",
      en: "英語",
      settings: "カメラの予測間隔を調整します",
      developed: "開発：アシアル株式会社",
      version: "アプリバージョン：1.0.0",
    },
    es: {
      title: "Lengua de signos japonesa",
      あ: "A",
      い: "I",
      う: "U",
      え: "E",
      お: "O",
      何も: "No se detecta ningún signo.",
      img: "static/svg/es.svg",
      ja: "Japonés",
      es: "Español",
      en: "Inglés",
      settings: "Ajusta el intervalo de predicción de la cámara",
      developed: "Desarrollado por Asial Corporation",
      version: "Versión de la App: 1.0.0",
    },
    en: {
      title: "Japanese Sign Language",
      あ: "A",
      い: "I",
      う: "U",
      え: "E",
      お: "O",
      何も: "No sign detected.",
      img: "static/svg/en.svg",
      ja: "Japanese",
      es: "Spanish",
      en: "English",
      settings: "Adjust the prediction interval of the camera",
      developed: "Developed by Asial Corporation",
      version: "App Version: 1.0.0",
    },
  },
});

// Init App with i!8n
const app = createApp(App).use(i18n);

// Register Framework7 Vue Components
registerComponents(app);

// Mount the App
app.mount("#app");
