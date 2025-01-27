# ESTE PROJETO FOI FEITO EM REACT.JS

Este projeto foi desenvolvido com o objetivo de criar um portfólio interativo e bem organizado, utilizando React.js como tecnologia principal.

---

## Organização do Projeto

A estrutura do projeto foi planejada para ser modular e escalável, facilitando a manutenção e o crescimento do código. Abaixo explico como organizei os arquivos:

### Estrutura de Componentes

- **`Components`**: Diretório principal para componentes reutilizáveis e globais.
  - Cada seção do portfólio está organizada em pastas dentro de `Pages/Home/HomeComponents`. Cada uma dessas pastas contém:
    - Um componente React responsável por implementar a lógica e a interface.
    - Um arquivo CSS exclusivo para estilização, garantindo que o design seja organizado e coeso.

- **`Pages/Home`**: Dentro da pasta `HomeComponents`, encontram-se os seguintes componentes principais:
  - **Certifications**: Seção que mostra as minhas certificações.
  - **Footer**: Representa o rodapé do portfólio.
  - **Introduction**: Apresenta uma introdução sobre mim e sobre o site.
  - **Navbar**: Barra de navegação do site.
  - **Networking**: Contém fotos e informações sobre os eventos de Networking que participei.
  - **Perfil**: Mostra informações pessoais.
  - **Projects**: Seção dedicada aos meus projetos.
  - **Skills**: Exibe as minhas habilidades técnicas.

- **`homePage.js`**: Centraliza a renderização de todos os componentes listados acima, montando a página inicial do portfólio.
- **`homePage.css`**: Define as regras de estilização globais para a página inicial, garantindo um layout harmonioso.

- **`App.js`**: Este arquivo é o ponto de entrada da aplicação e é responsável por renderizar `homePage.js` como o componente principal.

### Benefícios da Organização
- **Manutenção facilitada**: Cada seção tem seus próprios arquivos de lógica e estilo, permitindo edições sem interferências em outras partes do projeto.
- **Reutilização**: Componentes bem definidos podem ser usados em outros projetos ou páginas.
- **Escalabilidade**: Adicionar novas funcionalidades ou seções é simples e eficiente.

---

## Bibliotecas Utilizadas

Listo abaixo algumas das bibliotecas que utilizei para criar o projeto:

### **Animações e Transições**
- `@emotion/react` - Estilização dinâmica e animações baseadas em Emotion.
- `@emotion/styled` - Estilização com CSS-in-JS para componentes React.
- `@motionone/utils` - Utilitários para animações no Motion One.
- `@react-spring/web` - Biblioteca para animações no React baseada em física.
- `framer-motion` - Criação de animações complexas no React.
- `motion` - Biblioteca focada em animações modernas no navegador.
- `aos` - Animações de scroll com efeitos visuais como "fade in".

### **Gráficos e Visualização de Dados**
- `@mui/x-charts` - Componentes para gráficos baseados no Material-UI.
- `@syncfusion/ej2-react-charts` - Biblioteca robusta para gráficos e visualização de dados.
- `chart.js` - Criação de gráficos interativos usando Canvas.

### **Estilização de UI e Componentes**
- `@mui/material` - Biblioteca Material-UI para componentes estilizados no React.

### **Requisições HTTP**
- `axios` - Cliente HTTP popular para realizar requisições REST API.

### **Otimização e Análises**
- `@vercel/analytics` - Análise de tráfego para aplicações hospedadas na Vercel.
- `@vercel/speed-insights` - Insights sobre o desempenho da aplicação.
- `web-vitals` - Coleta de métricas de desempenho como LCP e FID.

### **React (Core e Funcionalidades Adicionais)**
- `react` - Biblioteca principal para criação de interfaces.
- `react-dom` - Integração do React com o DOM no navegador.
- `react-icons` - Pacote de ícones populares para React.
- `react-modal-image` - Exibição de imagens em modais no React.
- `react-scripts` - Scripts padrão para projetos React criados com Create React App.
- `react-scroll` - Animações e manipulação de scroll no React.

---

## Créditos

### **Imagens e Ilustrações**
Algumas imagens e ilustrações utilizadas no projeto foram obtidas nos seguintes sites, que oferecem recursos gratuitos e de alta qualidade:
- [Storyset](https://storyset.com/) - Ilustrações customizáveis que enriqueceram o design do portfólio.
- [Pexels](https://pexels.com) - Banco de imagens gratuito com fotografias de alta resolução.
- [Unsplash](https://unsplash.com) - Imagens gratuitas de fotógrafos ao redor do mundo.

### **Background Animado**
Para o background animado do meu site, utilizei recursos e inspirações do site:
- [RPJ Animated Backgrounds](https://rpj.bembi.dev/#bubbles) - Uma ferramenta incrível para criar animações de fundo personalizáveis.


Se tiver dúvidas ou sugestões, fique à vontade para contribuir ou entrar em contato!
