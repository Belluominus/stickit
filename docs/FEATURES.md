# ⚡Funcionalidades

### 1. **Quadro Interativo**

| Funcionalidade            | Descrição                                  |
| ------------------------- | ------------------------------------------ |
| **Drag & Drop nativo**    | Arraste post-its entre ilha e quadro       |
| **Posições persistentes** | O app lembra onde você deixou cada post-it |
| **Zoom contextual**       | Clique duplo para ver detalhes da meta     |
| **Filtro visual**         | Mostrar/ocultar post-its por categoria     |

<!-- IMAGEM: Demonstração das posições dos post-its no quadro --><!-- GIF: Interação de drag and drop funcionando -->

### 2. **Tipos de Post-it (Técnicas de Execução)**

Cada post-it pode ser configurado com uma técnica diferente:

|Tipo|Ícone|Para que serve|Comportamento|
|---|---|---|---|
|**Pomodoro**|🍅|Estudo, trabalho focado|Timer com ciclos|
|**Tempo Livre**|⏱️|Academia, caminhada|Cronômetro simples|
|**Check-in**|✅|Alimentação, medicação|Botão "Concluído"|

<!-- IMAGEM: Os três tipos de post-it lado a lado com seus ícones --><!-- GIF: Cada tipo sendo utilizado -->

### 3. **Configuração do Post-it**

Ao arrastar um post-it para o quadro, o modal de configuração aparece:

<!-- IMAGEM: Modal de configuração aberto --><!-- GIF: Preenchendo e salvando uma configuração -->

### 4. **Execução e Check-in**

|Momento|Ação|Registro|
|---|---|---|
|**Iniciar**|Click no post-it|Salva horário real de início|
|**Executar**|Timer/Pomodoro rodando|Interface adaptada ao tipo|
|**Concluir**|Click em "Concluir"|Salva horário de fim|
|**Check-in**|Modal rápido aparece|Pergunta: "Conseguiu concluir?" + observação|

<!-- GIF: Ciclo completo de execução com check-in -->

### 5. **Feedbacks Visuais (Easter Eggs)**

| Situação                 | Efeito Visual                                    |
| ------------------------ | ------------------------------------------------ |
| **Meta não cumprida**    | Post-it começa a "descolar" (cantinho levantado) |
| **Sequência de sucesso** | Post-it fica mais "grudado" (sombra mais forte)  |
| **Arrastar sobre outro** | Cria uma "pilha" de hábitos relacionados         |
| **Concluir tarefa**      | Post-it "amassa" levemente e desaparece          |

<!-- GIF: Cada feedback visual em ação -->

---

# 📊 Coleta de Dados

Na versão 1.0, vamos coletar tudo para na versão 2.0 implementar inteligência:

|Dado|Onde|Uso futuro|
|---|---|---|
|Horário planejado|Configuração|Saber sua intenção|
|Horário real início|Execução|Calcular desvio|
|Horário real fim|Execução|Calcular duração|
|Check-in "concluiu?"|Pós-execução|Taxa de sucesso|
|Observações|Pós-execução|Análise qualitativa|
|Dados da técnica|Durante execução|Ex: pomodoros feitos|
|Posição do post-it|Quadro|Preferências visuais|

<!-- IMAGEM: Exemplo de como esses dados serão apresentados em gráficos futuros -->
