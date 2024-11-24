<template>
  <v-toolbar :class="colorBarra" flat :image="imagemfundoBarra" prominent>
    <!-- Menu -->

    <bottomSheets :colorIconeMenu="colorIconeMenu" />

    <!-- Logo -->
    <v-img v-once :src="logo" :max-height="altLogo" :max-width="lagLogo"></v-img>

    <!-- Texto Central -->
    <v-spacer v-if="!visibleObs"></v-spacer>
    <v-spacer v-if="visibleObs" class="d-flex justify-left">
      <h4 :class="colorObs" v-text="obs"></h4>
    </v-spacer>

    <!-- Botões de Navegação -->
    <v-btn v-once to="/">
      <svg-icon :color="colorIcoHome" type="mdi" :path="mdiHomeAccount"></svg-icon>
      <h4 :class="colorAba1" v-text="textoAba1"></h4>
    </v-btn>

    <v-btn v-once to="/contatos" :color="colorIconeContato">
      <svg-icon type="mdi" :path="mdiCardAccountMail"></svg-icon>
      <h4 :class="colorAba2" v-text="textoAba2"></h4>
    </v-btn>

    <v-btn v-once :color="colorIconeInforme" to="/sobre">
      <svg-icon type="mdi" :path="mdiInformation"></svg-icon>
      <h4 :class="colorAba3" v-text="textoAba3"></h4>
    </v-btn>

    <!-- Botão de Login -->
    <dialogFormLogin
      :colorIconeLogin="colorIconeLogin"
      :colorTextLogin="colorTextLogin"
    />

    <!-- WhatsApp -->
    <v-btn v-once icon :color="colorIconeWhatsapp" :href="linkWhatsapp" target="_blank">
      <svg-icon type="mdi" :path="mdiWhatsapp"></svg-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiAccount,
  mdiHomeAccount,
  mdiCardAccountMail,
  mdiInformation,
  mdiWhatsapp,
  mdiMenu,
} from "@mdi/js";
import dialogFormLogin from "../../src/components/dialogFormLogin.vue";
import bottomSheets from "../../src/components/bottomSheets.vue";

export default {
  components: {
    SvgIcon,
    dialogFormLogin,
    bottomSheets,
  },

  props: {
    colorObs: {
      type: String,
      required: false,
      default: "text-white",
    },
  },

  data() {
    return {
      // Textos Dinâmicos
      textoAba1: "Home",
      textoAba2: "Contatos",
      textoAba3: "Sobre Nós",
      visibleObs: true,
      obs: "empresa@gmail.com / (91)9 9629-3532",

      // Cores Dinâmicas
      colorAba1: "text-white",
      colorAba2: "text-white",
      colorAba3: "text-white",
      colorIcoHome: "blue",
      colorIconeMenu: "blue",
      colorIconeWhatsapp: "green",
      colorIconeLogin: "blue",
      colorTextLogin: "#AB47BC",
      colorIconeContato: "blue",
      colorIconeInforme: "blue",
      colorBarra: "bg-black",

      // Imagem e Logo
      logo: "logo.webp",
      altLogo: "70",
      lagLogo: "300",
      imageHeader: false,

      // WhatsApp
      numeroWhatsApp: "559999999999",

      // Ícones MDI
      mdiAccount: mdiAccount,
      mdiHomeAccount: mdiHomeAccount,
      mdiCardAccountMail: mdiCardAccountMail,
      mdiInformation: mdiInformation,
      mdiWhatsapp: mdiWhatsapp,
      mdiMenu: mdiMenu,

      // Título
      titulo: "Header Reative",
    };
  },
  computed: {
    linkWhatsapp() {
      return `https://wa.me/${this.numeroWhatsApp}?text=suporte`;
    },
    imagemfundoBarra() {
      return this.imageHeader
        ? "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        : null;
    },
  },
};
</script>
