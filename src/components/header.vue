<template> 
  <v-toolbar   
    :class="colorBarra"
    flat    
    :image=imagemfundoBarra  
    prominent
  >
  
    <!-- <v-btn icon :color="colorIcoMenu">
      <svg-icon type="mdi" :path="mdiMenu"></svg-icon>
    </v-btn> -->
    <bottomSheets/>
    <v-img :src="'/logo.webp'" :max-height="altLogo" :max-width="lagLogo"></v-img>
    <v-spacer class="d-flex justify-center">
      <h2 :class="colorObs">{{ obs }}</h2>
    </v-spacer>

    <v-btn 
    to="/"
    :color="colorIcoHome"
    >
      <svg-icon type="mdi" :path="mdiHomeAccount"></svg-icon>
     Home
    </v-btn>

    <v-btn 
    to="/contatos"
    :color="colorIconeContato">
      <svg-icon type="mdi" :path="mdiCardAccountMail"></svg-icon>
      Contatos
    </v-btn>

    <v-btn 
    :color="colorIconeInforme"
    to="/sobre"
    
    >
      <svg-icon type="mdi" :path="mdiInformation"></svg-icon>
      <span>Sobre Nós</span>

    </v-btn>   
          
      <dialogFormLogin  :colorIconeLogin="colorIconeLogin" :colorTextLogin="colorTextLogin"/>     
 

    <v-btn 
    icon :color="colorIconeWhatsapp"
    :href=linkWhatsapp
    target="blank"
    >
      <svg-icon type="mdi" :path="mdiWhatsapp"></svg-icon>
      
    </v-btn>
  </v-toolbar>

  <v-card flat>
    <v-card-text :v-text="text"></v-card-text>
  </v-card>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiAccount,
  mdiHomeAccount,
  mdiCardAccountMail,
  mdiInformation,
  mdiWhatsapp,
  mdiMenu,
} from '@mdi/js';
import dialogFormLogin from '@/components/dialogFormLogin.vue';
import bottomSheets from "@/components/bottomSheets.vue"

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
      numeroWhatsApp:"5591996293532",      
      colorIconeWhatsapp: "green",
      colorIconeLogin: "red",
      colorTextLogin:"text-red",
      colorIconeContato: "yellow",
      colorIconeInforme: "#AB47BC",
      colorIcoMenu: "red",
      colorIcoHome: "blue",
      obs: "Contabilidade Digital",
      imageHeader:false,
      colorBarra: "bg-black",
      colorText: "text-blue",
      altLogo: "70",
      lagLogo: "300",
      // logo: "/logo.webp",
      mdiAccount: mdiAccount,
      mdiHomeAccount: mdiHomeAccount,
      mdiCardAccountMail: mdiCardAccountMail,
      mdiInformation: mdiInformation,
      mdiWhatsapp: mdiWhatsapp,
      mdiMenu: mdiMenu,
      tabs: null,
      titulo: "Contadores Associados",
    };
  },
  computed:{
    linkWhatsapp(){
      return `https://wa.me/${this.numeroWhatsApp}?text=suporte`;
    },
    imagemfundoBarra(){

      if(this.imageHeader){
        return  "https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"

      }else{

        this.imageHeader=null
        
      }
      
    }
  }
};
</script>
