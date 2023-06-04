<script>
import { i18n } from "../js/app";
export default {
  setup() {
    let selectedLang = i18n.global.locale;
    const langs = ["ja", "es", "en"];
    // Change language function
    const changeLanguage = (event) => {
      i18n.global.locale = event.target.value;
      selectedLang = event.target.value;
    };
    return {
      changeLanguage,
      selectedLang,
      langs,
    };
  },
};
</script>
