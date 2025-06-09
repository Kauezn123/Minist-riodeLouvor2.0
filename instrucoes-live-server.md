# 🚀 Instruções Live Server - Sistema FEEDS

## ✅ Passo a Passo:

### 1. Abrir VS Code
- Abra o VS Code na pasta do projeto FEEDS
- Ou arraste a pasta para o VS Code

### 2. Iniciar Live Server
- Clique com botão direito no `index.html`
- Selecione "Open with Live Server"
- Ou use o atalho: `Alt + L + O`

### 3. Verificar Modo Online
- O navegador abrirá automaticamente
- URL será algo como: `http://127.0.0.1:5500/index.html`
- A notificação de "Modo Offline" NÃO aparecerá

### 4. Confirmar APIs Ativas
- Abra o Console do navegador (F12)
- Procure por mensagens como:
  - "🔑 API Key Google Calendar: ..."
  - "📅 Buscando eventos do calendário..."
  - "🤖 API Gemini funcionando..."

## 🎯 O que Deve Acontecer:

### ✅ Em Modo Online (Live Server):
- URL: `http://127.0.0.1:5500/...`
- APIs do Google Calendar funcionando
- Chat IA com Gemini real
- YouTube API ativa
- Sem notificação de offline

### ❌ Em Modo Offline (file://):
- URL: `file:///C:/Users/...`
- Notificação amarela de "Modo Offline"
- APIs usando dados locais
- Ainda funciona, mas sem APIs reais

## 🔧 Dicas:

### Live Server não aparece?
- Verifique se a extensão está instalada
- Reinicie o VS Code
- Instale: "Live Server" by Ritwick Dey

### Porta ocupada?
- Live Server usa porta 5500 por padrão
- Se ocupada, tentará 5501, 5502, etc.

### Para parar o servidor:
- Clique no "Port: 5500" na barra inferior do VS Code
- Ou feche a aba do navegador

## 🎵 Agora é só usar o Sistema FEEDS com todas as APIs ativas! 