# Header com Paginação e Adição dos Componentes

## Configuração do projeto
```sh
instalação npm
```
### Compilar Desenvolvimento

```sh
npm run dev
```
### Compilar Produção
```sh
npm run build
```

# Tecnologia
- JavaScript
- Vue.js
- VueRouter
- Vuetify

# Sobre o Projeto
- O projeto é consistem um um header com paginação e edição de seus componentes, com menu de configuração e login.

# O que está Faltando
- Fantando as configurações de autenticaação
- As paginas
- Configuração dos formularios de troca dos componentes

# Configuração
- A configuração é feita toda no componente header.vue

```
 data() {
    return {
      numeroWhatsApp: "559999999999",
      colorIconeWhatsapp: "green",
      colorIconeLogin: "red",
      colorTextLogin: "text-red",
      colorIconeContato: "yellow",
      colorIconeInforme: "#AB47BC",
      colorIcoMenu: "red",
      colorIcoHome: "blue",
      obs: "Contabilidade Digital",
      imageHeader: false,
      colorBarra: "bg-black",
      colorText: "text-blue",
      altLogo: "70",
      lagLogo: "300",
      logo: "/logo.webp",
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
```

