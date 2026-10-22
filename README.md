# Portfólio de Marcos Farias

Portfólio profissional de Marcos André Díaz Farias, desenvolvedor backend Java. O site apresenta perfil, competências, trajetória profissional, formação e formas de contato.

**Site publicado:** <https://dev-marcos-farias.web.app>  
**Repositório:** <https://github.com/marcosadiazfarias-hub/cv-marcos-farias>

## Tecnologias

- React 19 e JavaScript (JSX)
- Vite 8
- Tailwind CSS 4
- Lucide React
- Vitest, Testing Library e cobertura V8
- Firebase Hosting

## Requisitos

- Node.js 20.19+ ou 22.12+
- npm
- Para publicar: Firebase CLI e acesso ao projeto Firebase `dev-marcos-farias`

## Começar a desenvolver

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/marcosadiazfarias-hub/cv-marcos-farias.git
cd cv-marcos-farias
npm install
```

Inicie o servidor local:

```bash
npm run dev
```

O Vite informa o endereço local no terminal; normalmente é <http://localhost:5173>. O servidor atualiza a página automaticamente quando os arquivos são alterados.

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run lint` | Executa o Oxlint |
| `npm test` | Executa os testes e gera os relatórios de cobertura |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Serve localmente a versão já compilada em `dist/` |

Os testes têm limites mínimos configurados em `vitest.config.js`: 90% para statements, branches e lines, e 100% para functions. O comando de testes gera relatórios em `coverage/`.

Antes de publicar, execute:

```bash
npm run lint
npm test
npm run build
```

Para conferir a versão de produção localmente após o build:

```bash
npm run preview
```

## Estrutura do projeto

```text
.
├── public/              # Imagens, favicon e outros arquivos estáticos
├── src/
│   ├── App.jsx          # Conteúdo e componentes principais do portfólio
│   ├── App.test.jsx     # Testes da aplicação
│   ├── index.css        # Estilos globais e importação do Tailwind
│   ├── main.jsx         # Inicialização do React
│   └── test/setup.js    # Configuração compartilhada dos testes
├── firebase.json        # Configuração do Firebase Hosting
├── .firebaserc          # Projeto Firebase padrão
├── index.html           # Idioma, título e metadados da página
├── vite.config.js       # Configuração do Vite
└── vitest.config.js     # Configuração dos testes e cobertura
```

## Atualizar o conteúdo do portfólio

Os dados principais estão definidos como constantes no início de `src/App.jsx`:

- `SKILLS`: categorias e tecnologias exibidas na seção de competências.
- `EXPERIENCES`: empresas, cargos, descrições e tags da trajetória profissional.
- `ACADEMIC`: cursos, instituições, tipo e status. O status `Concluído` recebe o selo visual de conclusão; os outros status usam o estilo de andamento.
- `QUOTES_DATABASE`: frases e autores disponíveis para exibição.

Mantenha os campos existentes ao adicionar itens. Exemplo de curso:

```jsx
{
  course: "Nova Certificação",
  institution: "Instituição",
  type: "Certificação",
  status: "Concluído"
}
```

O texto do perfil, o botão do currículo e os links de contato também estão em `src/App.jsx`. Para alterar título, idioma ou metadados de compartilhamento e busca, edite `index.html`.

### Imagens e arquivos estáticos

Os arquivos usados pelo site ficam em `public/`, incluindo:

- `1780665451143.png`: identidade visual e imagem ilustrada.
- `20260625_102255-IMG_STYLE.jpg`: foto da seção Sobre.
- `20260625_215054-IMG_STYLE.jpg`: foto profissional no rodapé.
- `favicon.svg`: ícone da página.

Referencie arquivos dessa pasta por caminho iniciado em `/`, por exemplo `/favicon.svg`. O currículo é aberto pelo link compartilhado do Google Drive configurado no botão do Hero; confirme que o arquivo permanece acessível para quem tem o link.

### Privacidade e métricas

O banner de privacidade e o consentimento do Google Analytics estão implementados em `src/App.jsx`. O consentimento é guardado no `localStorage` do navegador; a tag de Analytics só é inicializada após consentimento. Revise o texto do banner e a configuração de Analytics ao alterar as práticas de medição.

## Publicar no Firebase Hosting

O Firebase Hosting publica o conteúdo compilado de `dist/`. O projeto padrão configurado em `.firebaserc` é `dev-marcos-farias`, e o `firebase.json` redireciona as rotas da SPA para `index.html`.

1. Instale a Firebase CLI, se ainda não estiver instalada:

   ```bash
   npm install -g firebase-tools
   ```

2. Autentique-se:

   ```bash
   firebase login
   ```

3. Confira o projeto selecionado:

   ```bash
   firebase projects:list
   firebase use
   ```

   O deploy deste site deve ser feito para `dev-marcos-farias`. Caso necessário, selecione explicitamente:

   ```bash
   firebase use dev-marcos-farias
   ```

4. Valide e compile a versão a ser publicada:

   ```bash
   npm run lint
   npm test
   npm run build
   ```

5. Publique somente o Hosting:

   ```bash
   firebase deploy --only hosting --project dev-marcos-farias
   ```

6. Confirme a publicação em <https://dev-marcos-farias.web.app>.

O comando de deploy não compila o projeto automaticamente: execute `npm run build` antes para garantir que `dist/` contém a versão atualizada. Não publique se os testes, o lint ou o build falharem.

## Contato

- E-mail: [m.diazfarias@gmail.com](mailto:m.diazfarias@gmail.com)
- LinkedIn: <https://www.linkedin.com/in/marcosdiazfarias/>
- GitHub: <https://github.com/marcosadiazfarias-hub>
