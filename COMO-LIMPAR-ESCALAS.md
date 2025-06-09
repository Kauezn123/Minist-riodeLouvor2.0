# 🧹 Como Limpar Escalas de Teste

## 🚨 **Problema**: As escalas de teste ainda aparecem no sistema

Isso acontece porque os dados estão salvos no **localStorage** do navegador ou no **Firebase**, mesmo após limparmos o código.

## ✅ **Solução Rápida**:

### **Método 1: Função Automática (Recomendado)**

1. **Abra o Console do Navegador**:
   - Pressione `F12` 
   - Ou clique com botão direito → "Inspecionar" → aba "Console"

2. **Execute o comando**:
```javascript
resetSystemCompletely()
```

3. **Confirme as duas perguntas** que aparecem
4. **Aguarde** - o sistema irá recarregar automaticamente

---

### **Método 2: Manual (Se o Método 1 não funcionar)**

No Console do navegador, execute:
```javascript
// Limpar tudo do localStorage
localStorage.clear();

// OU limpar apenas os dados específicos:
localStorage.removeItem('feedsSchedules');
localStorage.removeItem('feedsActivities');
localStorage.removeItem('feedsPlaylists');

// Depois recarregar a página
window.location.reload();
```

---

### **Método 3: Limpar Firebase (Para Administradores)**

```javascript
clearFirebaseData()
```

## 🔍 **Para Verificar se Funcionou**:

Execute no console:
```javascript
checkSystemData()
```

Deve mostrar:
- ✅ Escalas (mockData): 0
- ✅ Escalas (AppState): 0  
- ✅ localStorage schedules: vazio

## 📱 **No Smartphone**:

1. Abra o site
2. **Android**: Menu (⋮) → "Configurações do site" → "Armazenamento" → "Limpar dados"
3. **iPhone**: Configurações → Safari → "Limpar Histórico e Dados"

---

## ✅ **Resultado Final**:

Após a limpeza, o sistema estará **completamente limpo** e pronto para criação das escalas reais pelos líderes!

**🎯 O sistema funcionará perfeitamente, mas sem dados de teste.** 