# 🌐 Guia de Publicação - BRIZZIO CAPTAÇÕES

Complete este guia antes de publicar seu site.

## ✅ CHECKLIST PRÉ-PUBLICAÇÃO

### 1. Validação de Arquivos
- [ ] Todos os arquivos HTML validados (https://validator.w3.org/)
- [ ] CSS sem erros (https://jigsaw.w3.org/css-validator/)
- [ ] Imagens otimizadas e presentes em `images/`
- [ ] Links internos funcionando
- [ ] Formulário de contato testado

### 2. SEO e Metadata
- [ ] Título e descrição únicos em todas as páginas
- [ ] Keywords apropriadas em cada página
- [ ] Sitemap.xml atualizado com seu domínio
- [ ] robots.txt configurado
- [ ] Google Search Console - Adicionar propriedade
- [ ] Google Analytics - Código adicionado (opcional)

### 3. Performance
- [ ] Imagens em formato otimizado (.webp, .png)
- [ ] CSS minificado (opcional mas recomendado)
- [ ] Teste de velocidade: https://pagespeed.web.dev/
- [ ] Teste responsividade: https://responsivedesignchecker.com/

### 4. Segurança
- [ ] Certificado SSL/HTTPS ativado
- [ ] Formulário com validação servidor
- [ ] Headers de segurança configurados
- [ ] CORS configurado se necessário

---

## 🚀 OPÇÃO 1: Publicar em Netlify (Recomendado)

### Passo 1: Preparar repositório Git
```bash
# Se ainda não tiver git inicializado
cd c:\Users\joaomarcos\Desktop\site-captacao
git init
git add .
git commit -m "Initial commit - BRIZZIO website"
```

### Passo 2: Criar conta Netlify
- Acesse https://www.netlify.com
- Clique "Sign up"
- Usar GitHub, GitLab ou Bitbucket

### Passo 3: Conectar repositório
1. Login no Netlify
2. Clique "New site from Git"
3. Selecione seu repositório
4. Deixe configurações padrões
5. Clique "Deploy site"

### Passo 4: Configurar domínio
1. Vá para "Site settings"
2. Clique "Domain management"
3. "Add custom domain"
4. Insira seu domínio
5. Configure DNS nos registros do seu domain provider

### Passo 5: Formulário automático
- Netlify detecta `<form>` automaticamente
- Nenhuma configuração necessária!
- Receba emails em sua caixa de entrada

### Vantagens:
✅ Gratuito e fácil
✅ HTTPS automático
✅ Deploy contínuo com Git
✅ Forms automáticos
✅ CDN incluído
✅ Deploy em segundos

---

## 🚀 OPÇÃO 2: Publicar em Vercel

### Passo 1: Preparar repositório Git
```bash
git init
git add .
git commit -m "Initial commit"
```

### Passo 2: Criar conta Vercel
- Acesse https://vercel.com
- Clique "Sign Up"
- Use GitHub/GitLab

### Passo 3: Importar projeto
1. Clique "New Project"
2. Importar repositório
3. Clique "Deploy"

### Passo 4: Configurar domínio
1. Vá para "Project Settings"
2. "Domains"
3. "Add domain"
4. Configure DNS

**Nota:** Para formulários em Vercel, use Formspree ou alternativa.

---

## 🚀 OPÇÃO 3: Publicar em Hospedagem Tradicional (cPanel)

### Passo 1: Upload de arquivos
1. Acesse cPanel de sua hospedagem
2. Abra "File Manager"
3. Navegue para `/public_html/`
4. Upload de todos os arquivos

### Passo 2: Configurar SSL/HTTPS
1. Procure por "AutoSSL" ou "Let's Encrypt"
2. Clique instalar certificado (geralmente gratuito)
3. Aguarde ativação

### Passo 3: Configurar formulário

**Opção A: Usar Formspree**
```html
<!-- Em contato.html, mude a action do form -->
<form method="POST" action="https://formspree.io/f/SEU_ID">
```
1. Visite https://formspree.io
2. Crie conta
3. Link seu email
4. Copie o ID fornecido

**Opção B: Usar backend PHP**
- Solicite ao seu provedor que configure um backend
- Ou adicione script PHP para processar forms

### Passo 4: .htaccess
- Arquivo `.htaccess` já foi criado
- Ativa compressão GZIP
- Configura caching
- Redireciona HTTP para HTTPS

---

## 🚀 OPÇÃO 4: GitHub Pages (Gratuito e Simples)

### Passo 1: Criar repositório
```bash
# No GitHub.com, crie repositório nomeado:
# seu-usuario.github.io
```

### Passo 2: Push dos arquivos
```bash
git remote add origin https://github.com/seu-usuario/seu-usuario.github.io.git
git branch -M main
git push -u origin main
```

### Passo 3: Seu site estará em
```
https://seu-usuario.github.io/
```

### Passo 4: Domínio customizado
1. Settings do repositório
2. "Pages"
3. "Custom domain"
4. Configure DNS

**Limitação:** GitHub Pages é estático. Para formulários, use Formspree.

---

## 📋 CONFIGURAÇOES IMPORTANTES ANTES DE PUBLICAR

### 1. Atualizar Email do Formulário

Em `contato.html`, encontre:
```html
<form method="POST" action="https://formspree.co/f/SEU_ID">
```

E substitua `SEU_ID` com seu ID do Formspree.

### 2. Atualizar Sitemap

Em `sitemap.xml`, substitua:
```xml
https://www.seu-dominio.com/
```
Pelo seu domínio real.

### 3. Atualizar Robots.txt

Em `robots.txt`, substitua:
```
Sitemap: https://www.seu-dominio.com/sitemap.xml
```
Pelo seu domínio real.

### 4. Adicionar Analytics (Opcional)

Em cada página HTML, adicione antes de `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXX');
</script>
```

Substitua `G-XXXXXXXX` pelo seu Google Analytics ID.

---

## 🔗 PRÓXIMOS PASSOS APÓS PUBLICAÇÃO

### 1. Google Search Console
- Acesse https://search.google.com/search-console
- Adicionar propriedade (seu domínio)
- Enviar sitemap.xml
- Monitorar performance

### 2. Google Business Profile
- Acesse https://business.google.com
- Crie/complemente seu perfil
- Atualize informações de contato
- Adicione fotos e descrição

### 3. Backlinks
- Busque menções em diretórios locais
- Parcerianças com sites relacionados
- Citações em redes sociais

### 4. Redes Sociais
- Crie perfis no Facebook, Instagram, LinkedIn
- Compartilhe conteúdo regularmente
- Link para o site

### 5. Blog/News (Futuro)
- Adicione seção de notícias
- Poste regularmente
- Melhora SEO naturalmente

---

## 🆘 Solução de Problemas

### Formulário não funciona
- Verifique se email está correto em `action`
- Teste com Formspree: https://formspree.io
- Verifique spam/lixo eletrônico

### Site lento
- Comprima imagens em https://tinypng.com
- Use CDN (Cloudflare)
- Minifique CSS/JS

### Links quebrados
- Use https://www.broken-link-checker.com
- Verifique caminhos de arquivos
- Teste em diferentes navegadores

### HTTPS não ativa
- Solicitar ao provedor de hospedagem
- Usar Cloudflare (setup automático)
- Aguardar 24-48 horas para SSL renovar

---

## 📈 Métricas para Acompanhar

- **Google Analytics:** Visitantes, páginas mais acessadas
- **Search Console:** Posição nos resultados, clicks
- **PageSpeed:** Velocidade do site
- **Mobile-Friendly Test:** Responsividade
- **Formulários:** Conversões (mensagens recebidas)

---

## ✉️ Seu Site Está Pronto!

Parabéns! 🎉 Seu site BRIZZIO CAPTAÇÕES está completo e otimizado.

**Qualquer dúvida, consulte o README.md ou as documentações dos serviços.**

Boa publicação! 🚀
