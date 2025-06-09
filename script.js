// Estado global da aplicação
const AppState = {
    currentUser: null,
    currentSection: 'home',
    schedules: [],
    members: [],
    songs: [],
    activities: [],
    playlists: {}
};
// Versículos bíblicos - Novo Testamento
const bibleVerses = [
    {
        text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
        reference: "João 3:16"
    },
    {
        text: "Posso todas as coisas em Cristo que me fortalece.",
        reference: "Filipenses 4:13"
    },
    {
        text: "Mas buscai primeiro o Reino de Deus, e a sua justiça, e todas essas coisas vos serão acrescentadas.",
        reference: "Mateus 6:33"
    },
    {
        text: "Sabemos que Deus age em todas as coisas para o bem daqueles que o amam, dos que foram chamados de acordo com o seu propósito.",
        reference: "Romanos 8:28"
    },
    {
        text: "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura os seus interesses, não se ira facilmente, não guarda rancor.",
        reference: "1 Coríntios 13:4-5"
    },
    {
        text: "Mas o fruto do Espírito é amor, alegria, paz, paciência, amabilidade, bondade, fidelidade, mansidão e domínio próprio.",
        reference: "Gálatas 5:22-23"
    },
    {
        text: "Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.",
        reference: "Hebreus 11:1"
    },
    {
        text: "Não andem ansiosos por coisa alguma, mas em tudo, pela oração e súplicas, e com ação de graças, apresentem seus pedidos a Deus.",
        reference: "Filipenses 4:6"
    },
    {
        text: "Respondeu Jesus: 'Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim.'",
        reference: "João 14:6"
    },
    {
        text: "Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês.",
        reference: "Mateus 11:28"
    },
    {
        text: "Porque onde estiverem dois ou três reunidos em meu nome, ali eu estou no meio deles.",
        reference: "Mateus 18:20"
    },
    {
        text: "Jesus Cristo é o mesmo ontem, hoje e para sempre.",
        reference: "Hebreus 13:8"
    },
    {
        text: "Portanto, se alguém está em Cristo, é nova criação. As coisas antigas já passaram; eis que surgiram coisas novas!",
        reference: "2 Coríntios 5:17"
    },
    {
        text: "Porque pela graça vocês são salvos, mediante a fé; e isto não vem de vocês, é dom de Deus.",
        reference: "Efésios 2:8"
    },
    {
        text: "E conhecerão a verdade, e a verdade os libertará.",
        reference: "João 8:32"
    },
    {
        text: "Não tenham medo! Eu sou o primeiro e o último. Sou aquele que vive. Estive morto, mas agora estou vivo para todo o sempre!",
        reference: "Apocalipse 1:17-18"
    },
    {
        text: "Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna em Cristo Jesus, nosso Senhor.",
        reference: "Romanos 6:23"
    },
    {
        text: "Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados, pois o Senhor, o seu Deus, vai com vocês.",
        reference: "Deuteronômio 31:6"
    },
    {
        text: "Alegrem-se sempre no Senhor. Novamente digo: alegrem-se!",
        reference: "Filipenses 4:4"
    },
    {
        text: "Eu sou a videira; vocês são os ramos. Se alguém permanecer em mim e eu nele, esse dará muito fruto.",
        reference: "João 15:5"
    },
    {
        text: "Não se turbe o seu coração. Creiam em Deus; creiam também em mim.",
        reference: "João 14:1"
    },
    {
        text: "Pois vocês são salvos pela graça, por meio da fé, e isto não vem de vocês, é dom de Deus.",
        reference: "Efésios 2:8"
    },
    {
        text: "Combati o bom combate, terminei a corrida, guardei a fé.",
        reference: "2 Timóteo 4:7"
    },
    {
        text: "Sejam bondosos e compassivos uns para com os outros, perdoando-se mutuamente, assim como Deus os perdoou em Cristo.",
        reference: "Efésios 4:32"
    },
    {
        text: "Porque Deus não nos deu espírito de covardia, mas de poder, de amor e de equilíbrio.",
        reference: "2 Timóteo 1:7"
    },
    {
        text: "Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês.",
        reference: "1 Pedro 5:7"
    },
    {
        text: "Mas aqueles que esperam no Senhor renovam as suas forças. Voam alto como águias; correm e não ficam exaustos.",
        reference: "Isaías 40:31"
    },
    {
        text: "Orem continuamente. Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus.",
        reference: "1 Tessalonicenses 5:17-18"
    },
    {
        text: "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano.",
        reference: "Jeremias 29:11"
    },
    {
        text: "Confiem no Senhor de todo o coração e não se apoiem em seu próprio entendimento.",
        reference: "Provérbios 3:5"
    },
    {
        text: "O Senhor é meu pastor; nada me faltará.",
        reference: "Salmos 23:1"
    },
    {
        text: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
        reference: "Salmos 46:1"
    },
    {
        text: "Entregue o seu caminho ao Senhor; confie nele, e ele agirá.",
        reference: "Salmos 37:5"
    },
    {
        text: "Pois eu sei em quem tenho crido e estou bem certo de que ele é poderoso para guardar o meu depósito até aquele dia.",
        reference: "2 Timóteo 1:12"
    },
    {
        text: "Tudo posso naquele que me fortalece.",
        reference: "Filipenses 4:13"
    },
    {
        text: "Mas os que esperam no Senhor renovarão as forças, subirão com asas como águias; correrão, e não se cansarão.",
        reference: "Isaías 40:31"
    },
    {
        text: "Porque onde está o seu tesouro, ali estará também o seu coração.",
        reference: "Mateus 6:21"
    },
    {
        text: "Não julguem, para que vocês não sejam julgados.",
        reference: "Mateus 7:1"
    },
    {
        text: "Peçam, e será dado a vocês; busquem, e encontrarão; batam, e a porta será aberta.",
        reference: "Mateus 7:7"
    },
    {
        text: "Bem-aventurados os puros de coração, pois verão a Deus.",
        reference: "Mateus 5:8"
    },
    {
        text: "Bem-aventurados os pacificadores, pois serão chamados filhos de Deus.",
        reference: "Mateus 5:9"
    },
    {
        text: "Vocês são a luz do mundo. Não se pode esconder uma cidade construída sobre um monte.",
        reference: "Mateus 5:14"
    },
    {
        text: "Assim brilhe a luz de vocês diante dos homens, para que vejam as suas boas obras e glorifiquem ao Pai de vocês, que está nos céus.",
        reference: "Mateus 5:16"
    },
    {
        text: "Não acumulem para vocês tesouros na terra, onde a traça e a ferrugem destroem, e onde os ladrões arrombam e furtam.",
        reference: "Mateus 6:19"
    },
    {
        text: "Portanto, não se preocupem com o amanhã, pois o amanhã trará as suas próprias preocupações. Basta a cada dia o seu próprio mal.",
        reference: "Mateus 6:34"
    },
    {
        text: "Entrem pela porta estreita, pois larga é a porta e amplo o caminho que leva à perdição, e são muitos os que entram por ela.",
        reference: "Mateus 7:13"
    },
    {
        text: "Nem todo aquele que me diz: 'Senhor, Senhor', entrará no Reino dos céus, mas apenas aquele que faz a vontade de meu Pai que está nos céus.",
        reference: "Mateus 7:21"
    },
    {
        text: "Portanto, quem ouve estas minhas palavras e as pratica é como um homem prudente que construiu a sua casa sobre a rocha.",
        reference: "Mateus 7:24"
    },
    {
        text: "Eu sou a ressurreição e a vida. Aquele que crê em mim, ainda que morra, viverá.",
        reference: "João 11:25"
    },
    {
        text: "Nisto conhecerão todos que vocês são meus discípulos: se vocês se amarem uns aos outros.",
        reference: "João 13:35"
    }
];
// Variáveis para controle dos versículos
let currentVerseIndex = 0;
let verseInterval = null;
// Dados simulados
const mockData = {
    users: [
        // === PASTORES === //
        { username: 'rodrigo', password: 'renovo2025', name: 'Pastor Rodrigo', role: 'Pastor', level: 'admin', photo: 'foto/Rodrigo.jpeg' },
        { username: 'lilian', password: 'batista2025', name: 'Pastora Lilian', role: 'Pastora', level: 'admin', photo: 'foto/Lilian.jpeg' },
        // === LÍDERES DO LOUVOR === //
        { username: 'dudu', password: 'louvor2025', name: 'Dudu', role: 'Líder de Louvor', level: 'leader', photo: 'foto/Dudu.jpeg' },
        { username: 'fernando', password: 'louvor25', name: 'Fernando', role: 'Líder de Louvor', level: 'leader', photo: 'foto/Fernando.jpeg' },
        // === LÍDER ROOTS (CULTO DE JOVENS) === //
        { username: 'rafael', password: 'roots2025', name: 'Rafael', role: 'Líder Roots', level: 'leader', photo: 'foto/Rafa.jpeg' },
        // === INSTRUMENTISTAS === //
        { username: 'vitoria', password: 'violao123', name: 'Vitória', role: 'Instrumentista', level: 'member', photo: 'foto/Vitoria.jpeg' },
        { username: 'daniel', password: 'guitarra456', name: 'Daniel', role: 'Instrumentista', level: 'member', photo: 'foto/Daniel.jpeg' },
        { username: 'luma', password: 'bateria789', name: 'Luma', role: 'Instrumentista', level: 'member', photo: 'foto/Luma.jpeg' },
        { username: 'kaue', password: 'batera2024', name: 'Kauê', role: 'Instrumentista', level: 'member', photo: 'foto/Kaue.jpeg' },
        { username: 'elo', password: 'teclado321', name: 'Elo', role: 'Instrumentista/Vocal', level: 'member', photo: 'foto/Elo.jpeg' },
        { username: 'juninho', password: 'baixo654', name: 'Juninho', role: 'Instrumentista', level: 'member', photo: 'foto/Juninho.jpeg' },
        // === VOCAIS === //
        { username: 'stephanie', password: 'vocal2024', name: 'Stephanie', role: 'Vocal', level: 'member', photo: 'foto/Stephanie.jpeg' },
        { username: 'kerbelin', password: 'louvor123', name: 'Kerbelin', role: 'Vocal', level: 'member', photo: 'foto/Kerbelin.jpeg' },
        { username: 'ana', password: 'cantar789', name: 'Ana', role: 'Vocal', level: 'member', photo: 'foto/Ana.jpeg' },
        { username: 'ane', password: 'worship321', name: 'Ane', role: 'Vocal', level: 'member', photo: 'foto/Ane.jpeg' },
        { username: 'eduarda', password: 'praise654', name: 'Eduarda', role: 'Vocal', level: 'member', photo: 'foto/Eduarda.jpeg' },
        { username: 'flavia', password: 'melodia987', name: 'Flávia', role: 'Vocal', level: 'member', photo: 'foto/Flavia.jpeg' },
        { username: 'dudinha', password: 'vocal2025', name: 'Dudinha', role: 'Vocal', level: 'member', photo: 'foto/Dudinha.jpeg' },
        { username: 'larissa', password: 'harmonia234', name: 'Larissa', role: 'Vocal', level: 'member', photo: 'foto/Larissa.jpeg' },
        // === CONTA ADMIN GERAL === //
        { username: 'admin', password: 'feeds2024!', name: 'Administrador', role: 'Administrador', level: 'admin', photo: 'foto/Admin.jpeg' }
    ],
    members: [
        // Instrumentistas - Violão
        { 
            id: 1, 
            name: 'Vitória', 
            role: 'Instrumentista', 
            instruments: ['Violão'],
            status: 'active',
            phone: '(13) 99999-1001',
            email: 'vitoria@email.com',
            photo: 'foto/Vitoria.jpeg'
        },
        { 
            id: 2, 
            name: 'Daniel', 
            role: 'Instrumentista', 
            instruments: ['Violão', 'Guitarra', 'Baixo'],
            status: 'active',
            phone: '(13) 99999-1002',
            email: 'daniel@email.com',
            photo: 'foto/Daniel.jpeg'
        },
        // Instrumentistas - Guitarra
        { 
            id: 3, 
            name: 'Fernando', 
            role: 'Instrumentista/Vocal', 
            instruments: ['Guitarra', 'Teclado', 'Vocal', 'Baixo'],
            status: 'active',
            phone: '(13) 99999-1003',
            email: 'fernando@email.com',
            photo: 'foto/Fernando.jpeg'
        },
        // Instrumentistas - Bateria
        { 
            id: 4, 
            name: 'Luma', 
            role: 'Instrumentista', 
            instruments: ['Bateria'],
            status: 'active',
            phone: '(13) 99999-1004',
            email: 'luma@email.com',
            photo: 'foto/Luma.jpeg'
        },
        { 
            id: 5, 
            name: 'Kauê', 
            role: 'Instrumentista', 
            instruments: ['Bateria', 'Baixo'],
            status: 'active',
            phone: '(13) 99999-1005',
            email: 'kaue@email.com',
            photo: 'foto/Kaue.jpeg'
        },
        { 
            id: 6, 
            name: 'Dudu', 
            role: 'Instrumentista/Vocal', 
            instruments: ['Bateria', 'Teclado', 'Baixo', 'Vocal'],
            status: 'active',
            phone: '(13) 99999-1006',
            email: 'dudu@email.com',
            photo: 'foto/Dudu.jpeg'
        },
        // Instrumentistas - Teclado
        { 
            id: 7, 
            name: 'Elo', 
            role: 'Instrumentista/Vocal/Projetor', 
            instruments: ['Teclado', 'Vocal', 'Projetor'],
            status: 'active',
            phone: '(13) 99999-1007',
            email: 'elo@email.com',
            photo: 'foto/Elo.jpeg'
        },
        // Instrumentistas - Baixo
        { 
            id: 8, 
            name: 'Juninho', 
            role: 'Instrumentista', 
            instruments: ['Baixo'],
            status: 'active',
            phone: '(13) 99999-1008',
            email: 'juninho@email.com',
            photo: 'foto/Juninho.jpeg'
        },
        // Vocais
        { 
            id: 9, 
            name: 'Pastora Lilian', 
            role: 'Vocal', 
            instruments: ['Vocal'],
            status: 'active',
            phone: '(13) 99999-2001',
            email: 'lilian@email.com',
            photo: 'foto/Lilian.jpeg'
        },
        { 
            id: 10, 
            name: 'Pastor Rodrigo', 
            role: 'Instrumentista/Vocal', 
            instruments: ['Violão', 'Vocal'],
            status: 'active',
            phone: '(13) 99999-2002',
            email: 'rodrigo@email.com',
            photo: 'foto/Rodrigo.jpeg'
        },
        { 
            id: 11, 
            name: 'Stephanie', 
            role: 'Vocal', 
            instruments: ['Vocal'],
            status: 'active',
            phone: '(13) 99999-2003',
            email: 'stephanie@email.com',
            photo: 'foto/Stephanie.jpeg'
        },
        { 
            id: 12, 
            name: 'Kerbelin', 
            role: 'Vocal', 
            instruments: ['Vocal'],
            status: 'active',
            phone: '(13) 99999-2004',
            email: 'kerbelin@email.com',
            photo: 'foto/Kerbelin.jpeg'
        },
        { 
            id: 14, 
            name: 'Ana', 
            role: 'Vocal/Projetor', 
            instruments: ['Vocal', 'Projetor'],
            status: 'active',
            phone: '(13) 99999-2006',
            email: 'ana@email.com',
            photo: 'foto/Ana.jpeg'
        },
        { 
            id: 15, 
            name: 'Ane', 
            role: 'Vocal', 
            instruments: ['Vocal'],
            status: 'active',
            phone: '(13) 99999-2007',
            email: 'ane@email.com',
            photo: 'foto/Ane.jpeg'
        },
        { 
            id: 16, 
            name: 'Eduarda', 
            role: 'Vocal/Projetor', 
            instruments: ['Vocal', 'Projetor'],
            status: 'active',
            phone: '(13) 99999-2008',
            email: 'eduarda@email.com',
            photo: 'foto/Eduarda.jpeg'
        },
        { 
            id: 17, 
            name: 'Flávia', 
            role: 'Vocal/Projetor', 
            instruments: ['Vocal', 'Projetor'],
            status: 'active',
            phone: '(13) 99999-2009',
            email: 'flavia@email.com',
            photo: 'foto/Flavia.jpeg'
        },
        { 
            id: 18, 
            name: 'Dudinha', 
            role: 'Vocal', 
            instruments: ['Vocal'],
            status: 'active',
            phone: '(13) 99999-2010',
            email: 'dudinha@email.com',
            photo: 'foto/Dudinha.jpeg'
        },
        { 
            id: 19, 
            name: 'Larissa', 
            role: 'Vocal', 
            instruments: ['Vocal'],
            status: 'active',
            phone: '(13) 99999-2011',
            email: 'larissa@email.com',
            photo: 'foto/Larissa.jpeg'
        },
        { 
            id: 20, 
            name: 'Thiago (Tio chico)', 
            role: 'Vocal', 
            instruments: ['Vocal'],
            status: 'active',
            phone: '(13) 99999-2012',
            email: 'thiago@email.com',
            photo: 'foto/Thiago.jpeg'
        },
        { 
            id: 21, 
            name: 'Rafael', 
            role: 'Líder Roots/Projetor', 
            instruments: ['Projetor'],
            status: 'active',
            phone: '(13) 99999-3001',
            email: 'rafael@email.com',
            photo: 'foto/Rafa.jpeg'
        },
        { 
            id: 22, 
            name: 'Murillo', 
            role: 'Projetor', 
            instruments: ['Projetor'],
            status: 'active',
            phone: '(13) 99999-4001',
            email: 'murillo@email.com',
            photo: 'foto/Murillo.jpeg'
        },
    ],
    schedules: [
        // Sistema iniciará sem escalas - os líderes criarão as escalas reais aqui
    ],
    songs: [
        { id: 1, title: 'Águas Purificadoras', artist: 'Diante do Trono', key: 'G', bpm: 72 },
        { id: 2, title: 'Bondade de Deus', artist: 'Bethel Music', key: 'C', bpm: 68 },
        { id: 3, title: 'Tua Graça Me Basta', artist: 'Hillsong', key: 'A', bpm: 76 },
        { id: 4, title: 'Reckless Love', artist: 'Cory Asbury', key: 'D', bpm: 120 },
        { id: 5, title: 'What A Beautiful Name', artist: 'Hillsong Worship', key: 'E', bpm: 68 },
        { id: 6, title: 'Oceans', artist: 'Hillsong United', key: 'B', bpm: 74 }
    ]
};
// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadMockData();
    
            // FORÇAR ATUALIZAÇÃO IMEDIATA DOS MEMBROS (bypass do setInterval)
        console.log('🚀 Forçando atualização imediata dos membros...');
        forceUpdateMembersDisplay();
        console.log('✅ Membros carregados imediatamente:', AppState.members.length);
    
    // Verificar se já existe uma sessão ativa
    const sessionResult = checkUserSession();
    if (sessionResult.isValid) {
        AppState.currentUser = sessionResult.user;
        showDashboard();
        // Atualizar dados da sessão
        updateSessionData();
        
        // FORÇAR ATUALIZAÇÃO COMPLETA IMEDIATA DO DASHBOARD
        updateDashboardData();
        console.log('✅ Dashboard atualizado imediatamente');
        
        // FORÇAR RENDERIZAÇÃO DOS MEMBROS IMEDIATAMENTE
        renderMembers();
        console.log('✅ Membros renderizados imediatamente na inicialização');
        
        // Update time every minute
        setInterval(updateCurrentDateTime, 60000);
        // Update dashboard data every 5 seconds (muito mais rápido)
        setInterval(updateDashboardData, 5000);
        // Verificar sessão a cada 5 minutos
        setInterval(checkAndMaintainSession, 5 * 60 * 1000);
    } else {
        // Se não há usuário logado ou sessão expirada, mostrar tela de login
        clearSession();
        showLoginScreen();
    }
});
function initializeApp() {
    // Verificar modo de execução e mostrar notificação se offline
    if (!isAPIAvailable()) {
        setTimeout(() => showOfflineNotification(), 1000);
    }
    // Adicionar classes de animação aos elementos
    setTimeout(() => {
        const elements = document.querySelectorAll('.fade-in, .slide-up');
        elements.forEach(el => {
            el.classList.add('animate');
        });
    }, 100);
}
// Função para mostrar notificação de modo offline
function showOfflineNotification() {
    const notification = document.createElement('div');
    notification.id = 'offline-notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ffc107, #ff8c00);
        color: #000;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: bold;
        max-width: 300px;
        border-left: 4px solid #ff6b35;
        animation: slideIn 0.5s ease-out;
        cursor: pointer;
    `;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 1.2em;">⚠️</span>
            <div>
                <div style="font-size: 14px; margin-bottom: 5px;">
                    <strong>Modo Offline</strong>
                </div>
                <div style="font-size: 12px; opacity: 0.8;">
                    APIs do Google desabilitadas. Usando dados locais.
                </div>
            </div>
            <span style="margin-left: auto; font-size: 18px; cursor: pointer;" onclick="this.parentElement.parentElement.remove()">×</span>
        </div>
    `;
    // Adicionar estilo da animação
    if (!document.querySelector('#offline-animation-style')) {
        const style = document.createElement('style');
        style.id = 'offline-animation-style';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    document.body.appendChild(notification);
    // Auto-remover após 8 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideIn 0.5s ease-out reverse';
            setTimeout(() => notification.remove(), 500);
        }
    }, 8000);
    // Adicionar clique para fechar
    notification.addEventListener('click', () => {
        notification.style.animation = 'slideIn 0.5s ease-out reverse';
        setTimeout(() => notification.remove(), 500);
    });
}
function loadMockData() {
    // Carregar dados do localStorage ou usar dados mockados
    const savedSchedules = localStorage.getItem('feedsSchedules');
    if (savedSchedules) {
        try {
            AppState.schedules = JSON.parse(savedSchedules);
        } catch (error) {
            AppState.schedules = [...mockData.schedules];
        }
    } else {
        AppState.schedules = [...mockData.schedules];
    }
    AppState.members = [...mockData.members];
    console.log('✅ Membros carregados em loadMockData():', AppState.members.length);
    console.log('🔧 Verificando se Murillo está incluído:', AppState.members.find(m => m.name === 'Murillo') ? 'SIM' : 'NÃO');
    
    const savedSongs = localStorage.getItem('feedsSongs');
    if (savedSongs) {
        try {
            AppState.songs = JSON.parse(savedSongs);
        } catch (error) {
            AppState.songs = [...mockData.songs];
        }
    } else {
        AppState.songs = [...mockData.songs];
    }
    const savedActivities = localStorage.getItem('feedsActivities');
    if (savedActivities) {
        try {
            AppState.activities = JSON.parse(savedActivities);
        } catch (error) {
            AppState.activities = [];
        }
    } else {
        AppState.activities = [];
    }
    const savedPlaylists = localStorage.getItem('feedsPlaylists');
    if (savedPlaylists) {
        try {
            AppState.playlists = JSON.parse(savedPlaylists);
        } catch (error) {
            AppState.playlists = {};
        }
    } else {
        AppState.playlists = {};
    }
    // Sempre garantir que as playlists estejam inicializadas
    if (!AppState.playlists || Object.keys(AppState.playlists).length === 0) {
        initializePlaylists();
    }
}
function saveToLocalStorage() {
    try {
        localStorage.setItem('feedsSchedules', JSON.stringify(AppState.schedules));
        localStorage.setItem('feedsSongs', JSON.stringify(AppState.songs));
        localStorage.setItem('feedsActivities', JSON.stringify(AppState.activities));
        localStorage.setItem('feedsPlaylists', JSON.stringify(AppState.playlists));
    } catch (error) {
        console.error('Erro ao salvar no localStorage:', error);
        showErrorMessage('Erro ao salvar dados localmente');
    }
}
// === SISTEMA DE SESSÃO PERSISTENTE === //
function createUserSession(user) {
    const sessionData = {
        user: user,
        loginTime: Date.now(),
        lastActivity: Date.now(),
        sessionId: generateSessionId(),
        browserInfo: getBrowserInfo(),
        expiresAt: Date.now() + (7 * 24 * 60 * 60 * 1000) // 7 dias
    };
    // Salvar dados da sessão
    localStorage.setItem('feedsUserSession', JSON.stringify(sessionData));
    localStorage.setItem('feedsUser', JSON.stringify(user)); // Manter compatibilidade
    return sessionData;
}
function checkUserSession() {
    try {
        const sessionData = localStorage.getItem('feedsUserSession');
        const userData = localStorage.getItem('feedsUser');
        if (!sessionData || !userData) {
            return { isValid: false, reason: 'no_session' };
        }
        const session = JSON.parse(sessionData);
        const user = JSON.parse(userData);
        const now = Date.now();
        // Verificar se a sessão expirou
        if (now > session.expiresAt) {
            return { isValid: false, reason: 'expired' };
        }
        // Verificar se não há atividade há mais de 24 horas
        const maxInactivity = 24 * 60 * 60 * 1000; // 24 horas
        if (now - session.lastActivity > maxInactivity) {
            return { isValid: false, reason: 'inactive' };
        }
        // Sessão válida
        return { 
            isValid: true, 
            user: user, 
            session: session 
        };
    } catch (error) {
        console.error('Erro ao verificar sessão:', error);
        return { isValid: false, reason: 'error' };
    }
}
function updateSessionData() {
    try {
        const sessionData = localStorage.getItem('feedsUserSession');
        if (sessionData) {
            const session = JSON.parse(sessionData);
            session.lastActivity = Date.now();
            localStorage.setItem('feedsUserSession', JSON.stringify(session));
        }
    } catch (error) {
        console.warn('Erro ao atualizar dados da sessão:', error);
    }
}
function clearSession() {
    try {
        localStorage.removeItem('feedsUserSession');
        localStorage.removeItem('feedsUser');
    } catch (error) {
        console.warn('Erro ao limpar sessão:', error);
    }
}
function generateSessionId() {
    return 'feeds_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}
function getBrowserInfo() {
    return {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
        timestamp: Date.now()
    };
}
function checkAndMaintainSession() {
    const sessionResult = checkUserSession();
    if (!sessionResult.isValid) {
        // Mostrar mensagem ao usuário
        showErrorMessage('Sua sessão expirou. Por favor, faça login novamente.');
        // Forçar logout
        AppState.currentUser = null;
        clearSession();
        showLoginScreen();
        return false;
    }
    return true;
}
function extendSession() {
    try {
        const sessionData = localStorage.getItem('feedsUserSession');
        if (sessionData) {
            const session = JSON.parse(sessionData);
            // Estender por mais 7 dias
            session.expiresAt = Date.now() + (7 * 24 * 60 * 60 * 1000);
            session.lastActivity = Date.now();
            localStorage.setItem('feedsUserSession', JSON.stringify(session));
        }
    } catch (error) {
        console.warn('Erro ao estender sessão:', error);
    }
}
function setupEventListeners() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    // Navigation - VERSÃO CORRIGIDA
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        const section = item.getAttribute('data-section');
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            // FORÇAR NAVEGAÇÃO IMEDIATAMENTE
            if (section) {
                // Navegação forçada com timeout
                setTimeout(() => {
                    navigateToSection(section);
                }, 50);
            }
            // Menu mobile fecha automaticamente na navegação direta
        });
    });
    // Schedule form
    const scheduleForm = document.querySelector('#scheduleModal .modal-form');
    if (scheduleForm) {
        scheduleForm.addEventListener('submit', handleScheduleSubmit);
    }
    // Search functionality with debounce
    const songSearch = document.getElementById('songSearch');
    if (songSearch) {
        let searchTimeout;
        songSearch.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => handleSongSearch(e), 500);
        });
    }
    // Modal close handlers
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeAllModals();
        }
    });
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Verificar se o modal de atividades está aberto
            const allActivitiesModal = document.getElementById('allActivitiesModal');
            if (allActivitiesModal && allActivitiesModal.classList.contains('show')) {
                closeAllActivitiesModal();
            } else {
                closeAllModals();
            }
        }
    });
}
// === AUTHENTICATION === //
function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.toLowerCase().trim();
    const password = document.getElementById('password').value;
    // Simular loading
    const loginBtn = document.querySelector('.login-btn');
    const originalText = loginBtn.innerHTML;
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';
    loginBtn.disabled = true;
    setTimeout(() => {
        const user = mockData.users.find(u => 
            u.username.toLowerCase() === username && u.password === password
        );
        if (user) {
            AppState.currentUser = user;
            // Criar sessão persistente
            createUserSession(user);
            // Mensagem personalizada baseada no nível
            let welcomeMessage = '';
            switch(user.level) {
                case 'admin':
                    welcomeMessage = `Bem-vindo(a), ${user.role} ${user.name}! Acesso total liberado.`;
                    break;
                case 'leader':
                    welcomeMessage = `Bem-vindo(a), ${user.name}! Acesso de liderança ativado.`;
                    break;
                default:
                    welcomeMessage = `Bem-vindo(a), ${user.name}! Que Deus abençoe o ministério.`;
            }
            showSuccessMessage(welcomeMessage);
            // Registrar atividade de login
            addActivity(
                'login',
                'Login realizado',
                `${user.name} entrou no sistema (Sessão: 7 dias)`,
                'success'
            );
            // Garantir que as playlists sejam inicializadas
            initializePlaylists();
            showDashboard();
            // Forçar atualização COMPLETA após login (bypass setInterval)
            setTimeout(() => {
                updateQuickActions();
                forceUpdateMembersDisplay(); // FORÇA exibição instantânea dos membros
                console.log('⚡ ATUALIZAÇÃO FORÇADA PÓS-LOGIN CONCLUÍDA');
            }, 100);
        } else {
            showErrorMessage('Usuário ou senha incorretos! Verifique suas credenciais.');
            loginBtn.innerHTML = originalText;
            loginBtn.disabled = false;
        }
    }, 1500);
}
function logout() {
    showConfirmDialog(
        'Deseja realmente sair?',
        'Você será redirecionado para a tela de login.',
        () => {
            // Registrar atividade de logout
            addActivity(
                'logout',
                'Logout realizado',
                `${AppState.currentUser.name} saiu do sistema`,
                'info'
            );
            AppState.currentUser = null;
            clearSession(); // Usar novo sistema de limpeza
            showLoginScreen();
            showSuccessMessage('Logout realizado com sucesso!');
        }
    );
}
// === VERSÍCULOS BÍBLICOS === //
function initializeBibleVerses() {
    // Parar qualquer intervalo anterior
    if (verseInterval) {
        clearInterval(verseInterval);
    }
    // Escolher um versículo aleatório para começar
    currentVerseIndex = Math.floor(Math.random() * bibleVerses.length);
    // Aguardar um pouco para garantir que os elementos estejam no DOM
    setTimeout(() => {
        // Mostrar o primeiro versículo
        displayVerse();
        // Configurar intervalo para trocar versículos a cada 5 segundos
        verseInterval = setInterval(() => {
            changeVerse();
        }, 5000);
    }, 100);
}
function displayVerse() {
    const verseTextElement = document.getElementById('verseText');
    const verseReferenceElement = document.getElementById('verseReference');
    const bibleVerseContainer = document.querySelector('.bible-verse');
    if (verseTextElement && verseReferenceElement) {
        const currentVerse = bibleVerses[currentVerseIndex];
        // Versão simples - apenas atualizar o conteúdo diretamente
        verseTextElement.textContent = currentVerse.text;
        verseReferenceElement.textContent = currentVerse.reference;
        // Garantir que o container esteja visível
        if (bibleVerseContainer) {
            bibleVerseContainer.style.display = 'block';
            bibleVerseContainer.style.opacity = '1';
        }
    } else {
        // Tentar encontrar todos os elementos relacionados
        const allVerseElements = document.querySelectorAll('[id*="verse"], .verse-content, .bible-verse');
        // Tentar criar os elementos se não existirem
        if (!verseTextElement || !verseReferenceElement) {
            const container = document.querySelector('.bible-verse .verse-content');
            if (container) {
                if (!verseTextElement) {
                    const p = document.createElement('p');
                    p.id = 'verseText';
                    container.appendChild(p);
                }
                if (!verseReferenceElement) {
                    const span = document.createElement('span');
                    span.id = 'verseReference';
                    container.appendChild(span);
                }
                // Tentar novamente
                setTimeout(() => displayVerse(), 100);
            }
        }
    }
}
function changeVerse() {
    // Escolher um novo versículo aleatório (diferente do atual)
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * bibleVerses.length);
    } while (newIndex === currentVerseIndex && bibleVerses.length > 1);
    currentVerseIndex = newIndex;
    displayVerse();
}
function stopBibleVerses() {
    if (verseInterval) {
        clearInterval(verseInterval);
        verseInterval = null;
    }
}
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}
function forgotPassword() {
    const phoneNumber = '11963755370';
    const message = 'Esqueci minha senha';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
// === NAVIGATION === //
function showLoginScreen() {
    document.getElementById('loginScreen').classList.remove('hidden');
    document.getElementById('dashboard').classList.add('hidden');
    // Reset form
    document.getElementById('loginForm').reset();
    // Inicializar versículos bíblicos
    initializeBibleVerses();
}
function showDashboard() {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    // Parar versículos bíblicos
    stopBibleVerses();
    // Update user info
    document.getElementById('userName').textContent = AppState.currentUser.name;
    document.querySelector('.user-role').textContent = AppState.currentUser.role;
    // Update user avatar
    updateUserAvatar();
    // Navigate to home section
    navigateToSection('home');
    // Load dashboard data IMEDIATAMENTE
    updateDashboardData();
    // FORÇAR contagem de membros imediata também (bypass do setInterval)
    forceUpdateMembersDisplay();
    console.log('✅ Dashboard e membros atualizados INSTANTANEAMENTE em showDashboard()');
    
    // Inicializar Google Calendar
    initializeGoogleCalendar();
    // Inicializar playlists após login
    setTimeout(() => {
        initializePlaylists();
        loadPlaylists();
    }, 100);
}
function navigateToSection(sectionName) {
    // Atualizar atividade da sessão
    updateSessionData();
    try {
        // Update navigation state - FORÇADO
        const allNavItems = document.querySelectorAll('.nav-item');
        allNavItems.forEach(item => {
            item.classList.remove('active');
        });
        const activeNavItem = document.querySelector(`[data-section="${sectionName}"]`);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        } else {
        }
        // Show corresponding section - FORÇADO
        const allSections = document.querySelectorAll('.content-section');
        allSections.forEach(section => {
            section.classList.remove('active');
        });
        const targetSection = document.getElementById(`${sectionName}Section`);
        if (targetSection) {
            targetSection.classList.add('active');
        } else {
            // Debugging - listar todas as seções
            allSections.forEach(section => {
                console.warn('Seção disponível:', section.id);
            });
        }
        AppState.currentSection = sectionName;
    } catch (error) {
        console.error('Erro ao navegar para seção:', sectionName, error);
    }
    // Load section-specific data and update UI based on permissions
    switch(sectionName) {
        case 'schedule':
            renderSchedules();
            updateSchedulePermissions();
            break;
        case 'members':
            renderMembers();
            updateMemberPermissions();
            break;
        case 'songs':
            renderSongs();
            break;
        case 'repertorio':
            // Carregar playlists quando navegar para repertório
            setTimeout(() => {
                loadPlaylists();
            }, 100);
            break;
    }
}
// Função para atualizar permissões da seção de escalas
function updateSchedulePermissions() {
    const newScheduleBtn = document.querySelector('#scheduleSection .btn-primary');
    if (newScheduleBtn) {
        if (hasPermission('create_schedule')) {
            newScheduleBtn.style.display = 'flex';
        } else {
            newScheduleBtn.style.display = 'none';
        }
    }
    // Atualizar permissões de eventos também
    if (typeof eventsSystem !== 'undefined') {
        eventsSystem.updateEventPermissions();
    }
}
// Função para atualizar permissões da seção de membros
function updateMemberPermissions() {
    const addMemberBtn = document.querySelector('#membersSection .btn-primary');
    if (addMemberBtn) {
        if (hasPermission('add_member')) {
            addMemberBtn.style.display = 'flex';
        } else {
            addMemberBtn.style.display = 'none';
        }
    }
}
// === MENU MOBILE MELHORADO === //
let mobileMenuActive = false;
function toggleMobileMenu() {
    // Toggle do estado
    mobileMenuActive = !mobileMenuActive;
    if (mobileMenuActive) {
        openMobileMenu();
    } else {
        closeMobileMenu();
    }
}
function openMobileMenu() {
    const body = document.body;
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    // Feedback visual instantâneo no botão
    if (mobileBtn) {
        mobileBtn.classList.add('opening');
    }
    // Criar menu mobile se não existir
    let mobileNav = document.querySelector('.nav-menu.mobile-active');
    if (!mobileNav) {
        mobileNav = createMobileMenu();
    }
    // Adicionar classe ao nav
    mobileNav.classList.add('mobile-active');
    // Bloquear scroll do body
    body.style.overflow = 'hidden';
    // Criar overlay se não existir
    let overlay = document.querySelector('.mobile-menu-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        overlay.style.cssText = `
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: rgba(0, 0, 0, 0.6) !important;
            backdrop-filter: blur(5px) !important;
            z-index: 998 !important;
            opacity: 0 !important;
            transition: opacity 0.15s ease !important;
        `;
        // Event listener com prevenção de propagação
        overlay.onclick = (e) => {
            e.preventDefault();
            closeMobileMenu();
        };
        document.body.appendChild(overlay);
        // Animar entrada do overlay
        requestAnimationFrame(() => {
            overlay.style.opacity = '1';
        });
    } else {
        overlay.style.display = 'block';
        overlay.style.opacity = '1';
    }
    // Botão de fechar removido - menu fecha apenas via overlay ou navegação
    // Adicionar event listeners para fechar
    document.addEventListener('keydown', handleEscapeKey);
}
function createMobileMenu() {
    const mobileNav = document.createElement('nav');
    mobileNav.className = 'nav-menu mobile-active';
    // Adicionar itens de navegação
    const navItems = [
        { section: 'home', icon: 'fas fa-home', text: 'Início' },
        { section: 'schedule', icon: 'fas fa-calendar-alt', text: 'Escalas' },
        { section: 'members', icon: 'fas fa-users', text: 'Membros' },
        { section: 'songs', icon: 'fas fa-music', text: 'Repertório' }
    ];
    navItems.forEach(item => {
        const navLink = document.createElement('a');
        navLink.href = '#';
        navLink.className = 'nav-item';
        navLink.setAttribute('data-section', item.section);
        // Verificar se é a seção ativa
        const currentSection = document.querySelector('.content-section.active')?.id.replace('Section', '');
        if (currentSection === item.section) {
            navLink.classList.add('active');
        }
        navLink.innerHTML = `
            <i class="${item.icon}"></i>
            <span>${item.text}</span>
        `;
        // Adicionar event listener
        navLink.addEventListener('click', (e) => {
            e.preventDefault();
            navigateToSection(item.section);
            // Fechar menu imediatamente após navegação
            closeMobileMenu();
        });
        mobileNav.appendChild(navLink);
    });
    // Adicionar ao DOM
    document.body.appendChild(mobileNav);
    return mobileNav;
}
function closeMobileMenu() {
    const mobileNav = document.querySelector('.nav-menu.mobile-active');
    const body = document.body;
    const overlay = document.querySelector('.mobile-menu-overlay');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    // Feedback visual instantâneo no botão
    if (mobileBtn) {
        mobileBtn.classList.remove('opening');
    }
    // Resetar estado imediatamente
    mobileMenuActive = false;
    // Animar fechamento e remover menu mobile
    if (mobileNav) {
        // Adicionar classe de fechamento para animação
        mobileNav.classList.add('closing');
        // Remover completamente após animação mais rápida
        setTimeout(() => {
            if (mobileNav && mobileNav.parentNode) {
                mobileNav.parentNode.removeChild(mobileNav);
            }
        }, 200); // Reduzido de 400ms para 200ms
    }
    // Restaurar scroll do body imediatamente
    body.style.overflow = '';
    // Remover overlay com fade out mais rápido
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => {
            if (overlay && overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
        }, 150); // Reduzido de 300ms para 150ms
    }
    // Remover event listeners
    document.removeEventListener('keydown', handleEscapeKey);
}
function handleEscapeKey(e) {
    if (e.key === 'Escape' && mobileMenuActive) {
        closeMobileMenu();
    }
}
// Função removida - menu fecha diretamente no clique dos itens
// Event listeners do menu mobile são configurados em setupEventListeners()
function updateUserAvatar() {
    const userAvatar = document.querySelector('.user-avatar');
    if (userAvatar && AppState.currentUser) {
        if (AppState.currentUser.photo) {
            // Se o usuário tem foto, criar elemento img
            userAvatar.innerHTML = `<img src="${AppState.currentUser.photo}" alt="${AppState.currentUser.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
        } else {
            // Se não tem foto, usar ícone padrão
            userAvatar.innerHTML = '<i class="fas fa-user"></i>';
        }
    }
}
// === DASHBOARD DATA === //
function updateDashboardData() {
    // === PRÓXIMA ESCALA REAL === //
    updateNextSchedule();
    // === CONTAGEM REAL DE MEMBROS === //
    updateMembersCount();
    // === REPERTÓRIO COM YOUTUBE INTEGRADO === //
    updateSongsCount();
    // === ESCALAS DO MÊS ATUAL === //
    updateMonthlySchedulesCount();
    // Initialize home section features
    updateCurrentDateTime();
    initializeTipsCarousel();
    updateRecentActivities();
    updateQuickActions();
}
function updateQuickActions() {
    if (!AppState.currentUser) return;
    const quickActionsGrid = document.querySelector('.quick-actions-grid');
    if (!quickActionsGrid) return;
    // Verificar se o usuário pode criar escalas e adicionar membros
    const canCreateSchedule = hasPermission('create_schedule');
    const canAddMember = hasPermission('add_member');
    // Encontrar os botões específicos pelos seus índices na grid
    const buttons = quickActionsGrid.querySelectorAll('.quick-action-btn');
    const scheduleButton = buttons[0]; // Primeiro botão (Nova Escala)
    const memberButton = buttons[1];   // Segundo botão (Adicionar Membro)
    if (scheduleButton) {
        const icon = scheduleButton.querySelector('i');
        const span = scheduleButton.querySelector('span');
        if (canCreateSchedule) {
            // Líderes e pastores: "Nova Escala"
            icon.className = 'fas fa-plus-circle';
            span.textContent = 'Nova Escala';
        } else {
            // Membros: "Ver Escalas"
            icon.className = 'fas fa-calendar-alt';
            span.textContent = 'Ver Escalas';
        }
        // Manter a mesma navegação para ambos os casos
        scheduleButton.onclick = () => navigateToSection('schedule');
    }
    if (memberButton) {
        const icon = memberButton.querySelector('i');
        const span = memberButton.querySelector('span');
        if (canAddMember) {
            // Líderes e pastores: "Adicionar Membro"
            icon.className = 'fas fa-user-plus';
            span.textContent = 'Adicionar Membro';
        } else {
            // Membros: "Ver Membros"
            icon.className = 'fas fa-users';
            span.textContent = 'Ver Membros';
        }
        // Manter a mesma navegação para ambos os casos
        memberButton.onclick = () => navigateToSection('members');
    }
}
function updateNextSchedule() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // Data de hoje sem horas
    // Filtrar escalas futuras e publicadas
    const allSchedules = AppState.schedules.map(schedule => {
        const scheduleDate = parseScheduleDate(schedule.date);
        return {
            ...schedule,
            parsedDate: scheduleDate,
            daysFromToday: Math.ceil((scheduleDate - today) / (1000 * 60 * 60 * 24))
        };
    });
    const futureSchedules = allSchedules
        .filter(schedule => {
            const isPublished = schedule.status === 'published';
            // Considerar escalas de hoje (dias >= 0) e futuras
            const isTodayOrFuture = schedule.daysFromToday >= 0;
            return isTodayOrFuture && isPublished;
        })
        .sort((a, b) => a.parsedDate - b.parsedDate);
    const nextScheduleElement = document.getElementById('nextSchedule');
    const nextScheduleDetail = nextScheduleElement?.parentElement.querySelector('.stat-detail');
    if (futureSchedules.length > 0) {
        const nextSchedule = futureSchedules[0];
        const daysUntil = nextSchedule.daysFromToday;
        if (nextScheduleElement) {
            nextScheduleElement.textContent = nextSchedule.date;
        }
        if (nextScheduleDetail) {
            if (daysUntil === 0) {
                const currentHour = now.getHours();
                if (currentHour < 6) {
                    nextScheduleDetail.textContent = '🌙 Hoje! (madrugada)';
                } else if (currentHour < 12) {
                    nextScheduleDetail.textContent = '🌅 Hoje! (manhã)';
                } else if (currentHour < 18) {
                    nextScheduleDetail.textContent = '☀️ Hoje! (tarde)';
                } else {
                    nextScheduleDetail.textContent = '🌆 Hoje! (noite)';
                }
                nextScheduleDetail.classList.add('live-data');
            } else if (daysUntil === 1) {
                nextScheduleDetail.textContent = '⏰ Amanhã';
                nextScheduleDetail.classList.add('live-data');
            } else {
                nextScheduleDetail.textContent = `📅 Em ${daysUntil} dias`;
                nextScheduleDetail.classList.add('live-data');
            }
        }
    } else {
        if (nextScheduleElement) {
            nextScheduleElement.textContent = 'Nenhuma escala';
        }
        if (nextScheduleDetail) {
            nextScheduleDetail.textContent = '⏳ Aguardando publicação';
            nextScheduleDetail.classList.add('live-data');
        }
    }
}
function updateMembersCount() {
    // Contar apenas membros ativos
    const activeMembers = AppState.members.filter(member => member.status === 'active');
    const memberCountElement = document.getElementById('activeMembersCount');
    const memberDetail = memberCountElement?.parentElement.querySelector('.stat-detail');
    if (memberCountElement) {
        memberCountElement.textContent = activeMembers.length;
    }
    // Contar por categoria
    const vocalists = activeMembers.filter(m => m.role === 'Vocal' || m.instruments?.includes('Vocal')).length;
    const instrumentalists = activeMembers.filter(m => m.role === 'Instrumentista' || m.instruments?.some(i => i !== 'Vocal')).length;
    const projectors = activeMembers.filter(m => m.role === 'Projetor' || m.instruments?.includes('Projetor')).length;
    if (memberDetail) {
        memberDetail.textContent = `👥 ${vocalists} vocais, ${instrumentalists} instrumentistas, ${projectors} projetores`;
        memberDetail.classList.add('live-data');
    }
}
function updateSongsCount() {
    const songsCountElement = document.getElementById('songsCount');
    const songsDetail = songsCountElement?.parentElement.querySelector('.stat-detail');
    // Contar músicas locais + base do YouTube
    const localSongs = AppState.songs.length;
    const youtubeDatabase = 3500; // Base estimada do YouTube integrado
    const totalSongs = localSongs + youtubeDatabase;
    if (songsCountElement) {
        songsCountElement.textContent = `${totalSongs.toLocaleString('pt-BR')}+`;
    }
    if (songsDetail) {
        songsDetail.textContent = `🎵 ${localSongs} locais + YouTube`;
        songsDetail.classList.add('live-data');
    }
}
function updateMonthlySchedulesCount() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    // Filtrar escalas do mês atual
    const monthlySchedules = AppState.schedules.filter(schedule => {
        const scheduleDate = parseScheduleDate(schedule.date);
        return scheduleDate.getMonth() === currentMonth && 
               scheduleDate.getFullYear() === currentYear;
    });
    const publishedSchedules = monthlySchedules.filter(s => s.status === 'published');
    // Atualizar elementos na interface
    const monthlyCountElement = document.getElementById('monthlySchedulesCount');
    const monthlyDetail = document.querySelector('.stat-card.info .stat-detail');
    if (monthlyCountElement) {
        monthlyCountElement.textContent = monthlySchedules.length;
    }
    if (monthlyDetail) {
        const draftSchedules = monthlySchedules.filter(s => s.status === 'draft');
        monthlyDetail.textContent = `📋 ${publishedSchedules.length} publicadas, ${draftSchedules.length} rascunhos`;
        monthlyDetail.classList.add('live-data');
    }
}
function parseScheduleDate(dateString) {
    // Converter formato "DOMINGO - 01/12" para Date
    const dateMatch = dateString.match(/(\d{1,2})\/(\d{1,2})/);
    if (dateMatch) {
        const day = parseInt(dateMatch[1]);
        const month = parseInt(dateMatch[2]) - 1; // JavaScript months são 0-indexed
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        // Lógica melhorada para determinar o ano
        let year = currentYear;
        // Se o mês é menor que o atual, assumir que é do próximo ano
        if (month < currentMonth) {
            year = currentYear + 1;
        }
        // Se é o mesmo mês, verificar o dia
        else if (month === currentMonth) {
            const currentDay = currentDate.getDate();
            // Se o dia já passou, assumir que é do próximo ano
            if (day < currentDay) {
                year = currentYear + 1;
            }
        }
        // Se é mês futuro no mesmo ano, manter o ano atual
        else if (month > currentMonth) {
            year = currentYear;
        }
        const scheduleDate = new Date(year, month, day);
        // Debug log
        return scheduleDate;
    }
    // Fallback para data atual se não conseguir parsear
    return new Date();
}
// === HOME SECTION FUNCTIONS === //
function updateCurrentDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const dateTimeElement = document.getElementById('currentDateTime');
    if (dateTimeElement) {
        dateTimeElement.textContent = now.toLocaleDateString('pt-BR', options);
    }
}
// Tips Carousel
let currentTipIndex = 0;
function initializeTipsCarousel() {
    showTip(0);
    // Auto-rotate tips every 5 seconds
    setInterval(() => {
        nextTip();
    }, 5000);
}
function showTip(index) {
    const tipCards = document.querySelectorAll('.tip-card');
    const indicators = document.querySelectorAll('.indicator');
    // Hide all tips
    tipCards.forEach(card => card.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    // Show current tip
    if (tipCards[index]) {
        tipCards[index].classList.add('active');
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
    currentTipIndex = index;
}
function nextTip() {
    const tipCards = document.querySelectorAll('.tip-card');
    const nextIndex = (currentTipIndex + 1) % tipCards.length;
    showTip(nextIndex);
}
function previousTip() {
    const tipCards = document.querySelectorAll('.tip-card');
    const prevIndex = currentTipIndex === 0 ? tipCards.length - 1 : currentTipIndex - 1;
    showTip(prevIndex);
}
// Quick Actions
function showUpcomingEvents() {
    showInfoMessage('Visualizando próximos eventos do ministério');
    // Scroll to upcoming events section
    const eventsSection = document.querySelector('.upcoming-events');
    if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
}
function showAllActivities() {
    // Verificar permissões - apenas líderes e pastores podem acessar
    if (!canViewAllActivities()) {
        showErrorMessage('Acesso negado. Apenas líderes e pastores podem visualizar todas as atividades.');
        return;
    }
    // Abrir modal de todas as atividades
    const modal = document.getElementById('allActivitiesModal');
    if (modal) {
        modal.classList.add('show');
        loadAllActivities();
        addActivity('system', 'Relatório de Atividades', 'Visualizou todas as atividades recentes', 'info');
    }
}
function canViewAllActivities() {
    if (!AppState.currentUser) return false;
    const allowedRoles = ['Líder de Louvor', 'Líder Roots', 'Pastor', 'Administrador'];
    return allowedRoles.includes(AppState.currentUser.role);
}
function closeAllActivitiesModal() {
    const modal = document.getElementById('allActivitiesModal');
    if (modal) {
        modal.classList.remove('show');
    }
}
function loadAllActivities() {
    const container = document.getElementById('allActivitiesList');
    if (!container) return;
    // Limpar filtros
    document.getElementById('activityTypeFilter').value = '';
    document.getElementById('activityStatusFilter').value = '';
    // Renderizar todas as atividades
    renderAllActivities();
}
function renderAllActivities() {
    const container = document.getElementById('allActivitiesList');
    if (!container) return;
    // Obter filtros
    const typeFilter = document.getElementById('activityTypeFilter').value;
    const statusFilter = document.getElementById('activityStatusFilter').value;
    // Filtrar atividades
    let filteredActivities = AppState.activities;
    if (typeFilter) {
        filteredActivities = filteredActivities.filter(activity => {
            return getActivityCategory(activity.type) === typeFilter;
        });
    }
    if (statusFilter) {
        filteredActivities = filteredActivities.filter(activity => {
            return activity.status === statusFilter;
        });
    }
    if (filteredActivities.length === 0) {
        container.innerHTML = `
            <div class="no-activities-found">
                <i class="fas fa-search"></i>
                <h3>Nenhuma atividade encontrada</h3>
                <p>Não há atividades que correspondam aos filtros selecionados.</p>
            </div>
        `;
        return;
    }
    container.innerHTML = filteredActivities.map(activity => {
        const timeAgo = getTimeAgo(activity.timestamp);
        const icon = getActivityIcon(activity.type);
        const statusClass = getActivityStatusClass(activity.status);
        const statusText = getActivityStatusText(activity.status);
        const categoryText = getActivityCategoryText(activity.type);
        return `
            <div class="activity-item">
                <div class="activity-icon ${activity.status}">
                    <i class="${icon}"></i>
                </div>
                <div class="activity-content">
                    <h4>${activity.title}</h4>
                    <p>${activity.description}</p>
                    <span class="activity-time">
                        <i class="fas fa-clock"></i> ${timeAgo} • 
                        <i class="fas fa-user"></i> ${activity.user} • 
                        <i class="fas fa-tag"></i> ${categoryText}
                    </span>
                </div>
                <div class="activity-status">
                    <span class="status-badge ${statusClass}">${statusText}</span>
                </div>
            </div>
        `;
    }).join('');
}
function getActivityCategory(type) {
    const categories = {
        'schedule_create': 'schedule',
        'schedule_edit': 'schedule',
        'schedule_delete': 'schedule',
        'schedule_publish': 'schedule',
        'member_add': 'member',
        'member_edit': 'member',
        'song_add': 'song',
        'song_search': 'song',
        'event_create': 'event',
        'event_edit': 'event',
        'event_delete': 'event',
        'login': 'system',
        'logout': 'system',
        'share': 'system'
    };
    return categories[type] || 'system';
}
function getActivityCategoryText(type) {
    const category = getActivityCategory(type);
    const texts = {
        'schedule': 'Escalas',
        'member': 'Membros',
        'song': 'Músicas',
        'event': 'Eventos',
        'system': 'Sistema'
    };
    return texts[category] || 'Sistema';
}
function filterActivities() {
    renderAllActivities();
}
function clearActivityFilters() {
    document.getElementById('activityTypeFilter').value = '';
    document.getElementById('activityStatusFilter').value = '';
    renderAllActivities();
}
function exportActivities() {
    if (!canViewAllActivities()) {
        showErrorMessage('Acesso negado para exportar relatórios.');
        return;
    }
    // Obter atividades filtradas
    const typeFilter = document.getElementById('activityTypeFilter').value;
    const statusFilter = document.getElementById('activityStatusFilter').value;
    let activitiesToExport = AppState.activities;
    if (typeFilter) {
        activitiesToExport = activitiesToExport.filter(activity => {
            return getActivityCategory(activity.type) === typeFilter;
        });
    }
    if (statusFilter) {
        activitiesToExport = activitiesToExport.filter(activity => {
            return activity.status === statusFilter;
        });
    }
    // Criar CSV
    const csvContent = generateActivitiesCSV(activitiesToExport);
    // Download do arquivo
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `atividades_feeds_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showSuccessMessage('Relatório de atividades exportado com sucesso!');
    addActivity('system', 'Exportação de Relatório', 'Exportou relatório de atividades em CSV', 'success');
}
function generateActivitiesCSV(activities) {
    const headers = ['Data/Hora', 'Título', 'Descrição', 'Usuário', 'Categoria', 'Status'];
    const csvRows = [headers.join(',')];
    activities.forEach(activity => {
        const row = [
            `"${new Date(activity.timestamp).toLocaleString('pt-BR')}"`,
            `"${activity.title}"`,
            `"${activity.description}"`,
            `"${activity.user}"`,
            `"${getActivityCategoryText(activity.type)}"`,
            `"${getActivityStatusText(activity.status)}"`
        ];
        csvRows.push(row.join(','));
    });
    return csvRows.join('\n');
}
// === SISTEMA DE ATIVIDADES === //
function addActivity(type, title, description, status = 'info') {
    // Criar ID único baseado em timestamp mais dados únicos
    const uniqueId = `${Date.now()}_${type}_${title}_${AppState.currentUser?.name || 'Sistema'}`;
    
    // Verificar se já existe uma atividade similar recente (últimos 5 segundos)
    const recentThreshold = Date.now() - 5000; // 5 segundos
    const isDuplicate = AppState.activities.some(activity => {
        const activityTime = new Date(activity.timestamp).getTime();
        return activityTime > recentThreshold && 
               activity.type === type && 
               activity.title === title && 
               activity.description === description;
    });
    
    if (isDuplicate) {
        console.log('🚫 Atividade duplicada detectada e ignorada:', title);
        return;
    }
    
    const activity = {
        id: uniqueId,
        type: type,
        title: title,
        description: description,
        status: status,
        user: AppState.currentUser ? AppState.currentUser.name : 'Sistema',
        timestamp: new Date().toISOString(),
        timeAgo: 'Agora mesmo'
    };
    
    // Adicionar no início da lista
    AppState.activities.unshift(activity);
    
    // Manter apenas as últimas 50 atividades
    if (AppState.activities.length > 50) {
        AppState.activities = AppState.activities.slice(0, 50);
    }
    
    // Salvar no localStorage
    saveToLocalStorage();
    
    // Atualizar interface se estivermos na seção home
    if (AppState.currentSection === 'home') {
        updateRecentActivities();
    }
    
    console.log('✅ Nova atividade adicionada:', title);
}
function updateRecentActivities() {
    const activityList = document.querySelector('.activity-list');
    if (!activityList) return;
    // Pegar as 4 atividades mais recentes
    const recentActivities = AppState.activities.slice(0, 4);
    if (recentActivities.length === 0) {
        activityList.innerHTML = `
            <div class="no-activities">
                <i class="fas fa-history"></i>
                <p>Nenhuma atividade recente</p>
            </div>
        `;
        return;
    }
    activityList.innerHTML = recentActivities.map(activity => {
        const timeAgo = getTimeAgo(activity.timestamp);
        const icon = getActivityIcon(activity.type);
        const statusClass = getActivityStatusClass(activity.status);
        const statusText = getActivityStatusText(activity.status);
        return `
            <div class="activity-item">
                <div class="activity-icon ${activity.status}">
                    <i class="${icon}"></i>
                </div>
                <div class="activity-content">
                    <h4>${activity.title}</h4>
                    <p>${activity.description}</p>
                    <span class="activity-time">${timeAgo}</span>
                </div>
                <div class="activity-status">
                    <span class="status-badge ${statusClass}">${statusText}</span>
                </div>
            </div>
        `;
    }).join('');
}
function getActivityIcon(type) {
    const icons = {
        'schedule_create': 'fas fa-calendar-plus',
        'schedule_edit': 'fas fa-calendar-edit',
        'schedule_delete': 'fas fa-calendar-times',
        'schedule_publish': 'fas fa-calendar-check',
        'member_add': 'fas fa-user-plus',
        'member_edit': 'fas fa-user-edit',
        'song_add': 'fas fa-music',
        'song_search': 'fas fa-search',
        'login': 'fas fa-sign-in-alt',
        'logout': 'fas fa-sign-out-alt',
        'share': 'fas fa-share-alt'
    };
    return icons[type] || 'fas fa-info-circle';
}
function getActivityStatusClass(status) {
    const classes = {
        'success': 'published',
        'info': 'new',
        'warning': 'music',
        'primary': 'updated',
        'danger': 'deleted'
    };
    return classes[status] || 'new';
}
function getActivityStatusText(status) {
    const texts = {
        'success': 'Concluído',
        'info': 'Novo',
        'warning': 'Atenção',
        'primary': 'Atualizado',
        'danger': 'Removido'
    };
    return texts[status] || 'Info';
}
function getTimeAgo(timestamp) {
    const now = new Date();
    const activityTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - activityTime) / (1000 * 60));
    if (diffInMinutes < 1) return 'Agora mesmo';
    if (diffInMinutes < 60) return `Há ${diffInMinutes} minuto${diffInMinutes > 1 ? 's' : ''}`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `Há ${diffInHours} hora${diffInHours > 1 ? 's' : ''}`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `Há ${diffInDays} dia${diffInDays > 1 ? 's' : ''}`;
    const diffInWeeks = Math.floor(diffInDays / 7);
    return `Há ${diffInWeeks} semana${diffInWeeks > 1 ? 's' : ''}`;
}
// === SCHEDULE MANAGEMENT === //
let currentEditingScheduleId = null;
let scheduleToDelete = null;
function renderSchedules() {
    const container = document.getElementById('schedulesList');
    const monthFilter = document.getElementById('monthFilter');
    if (!container) return;
    // Populate month filter
    populateMonthFilter();
    // Filter schedules by selected month
    const selectedMonth = monthFilter ? monthFilter.value : '';
    let filteredSchedules = AppState.schedules;
    if (selectedMonth) {
        filteredSchedules = AppState.schedules.filter(schedule => {
            // Extract month from format "DOMINGO - 15/12" -> "12"
            const dateMatch = schedule.date.match(/(\d{2})\/(\d{2})$/);
            if (dateMatch) {
                return dateMatch[2] === selectedMonth;
            }
            return false;
        });
    }
    // Sort schedules by date (extract day/month for comparison)
    filteredSchedules.sort((a, b) => {
        const getDateValue = (dateStr) => {
            const match = dateStr.match(/(\d{2})\/(\d{2})$/);
            if (match) {
                const day = parseInt(match[1]);
                const month = parseInt(match[2]);
                return month * 100 + day; // Simple numeric comparison
            }
            return 0;
        };
        return getDateValue(a.date) - getDateValue(b.date);
    });
    container.innerHTML = '';
    if (filteredSchedules.length === 0) {
        container.innerHTML = `
            <div class="no-schedules">
                <i class="fas fa-calendar-times"></i>
                <h3>Nenhuma escala encontrada</h3>
                <p>Não há escalas para o período selecionado.</p>
            </div>
        `;
        return;
    }
    filteredSchedules.forEach(schedule => {
        const scheduleItem = createScheduleItem(schedule);
        container.appendChild(scheduleItem);
    });
}
function populateMonthFilter() {
    const monthFilter = document.getElementById('monthFilter');
    if (!monthFilter) return;
    // Get unique months from schedules (extract from manual date format)
    const months = [...new Set(AppState.schedules.map(schedule => {
        // Extract month from format "DOMINGO - 15/12" -> "12"
        const dateMatch = schedule.date.match(/(\d{2})\/(\d{2})$/);
        if (dateMatch) {
            return dateMatch[2]; // Return month part
        }
        return null;
    }).filter(month => month !== null))].sort();
    // Clear existing options except first
    while (monthFilter.children.length > 1) {
        monthFilter.removeChild(monthFilter.lastChild);
    }
    months.forEach(month => {
        const option = document.createElement('option');
        option.value = month;
        const monthNames = {
            '01': 'Janeiro', '02': 'Fevereiro', '03': 'Março', '04': 'Abril',
            '05': 'Maio', '06': 'Junho', '07': 'Julho', '08': 'Agosto',
            '09': 'Setembro', '10': 'Outubro', '11': 'Novembro', '12': 'Dezembro'
        };
        option.textContent = monthNames[month] || `Mês ${month}`;
        monthFilter.appendChild(option);
    });
    // Add event listener for month filter
    monthFilter.onchange = renderSchedules;
}
function createScheduleItem(schedule) {
    const item = document.createElement('div');
    item.className = 'schedule-item slide-up';
    item.setAttribute('data-schedule-id', schedule.id);
    const formattedDate = formatScheduleDate(schedule.date);
    const statusClass = schedule.status === 'published' ? 'published' : 'draft';
    const statusText = schedule.status === 'published' ? 'Publicada' : 'Rascunho';
    // Verificar se foi editada recentemente (últimas 24 horas)
    const isRecentlyEdited = schedule.lastEdited && 
        (new Date() - new Date(schedule.lastEdited)) < 24 * 60 * 60 * 1000;
    const editedIndicator = isRecentlyEdited ? 
        '<span class="edited-indicator" title="Editada recentemente"><i class="fas fa-edit"></i></span>' : '';
    item.innerHTML = `
        <div class="schedule-basic-info" onclick="toggleScheduleDetails(${schedule.id})">
            <div class="schedule-date">Escala - ${formattedDate} ${editedIndicator}</div>
            <div class="schedule-info-right">
                <span class="schedule-status ${statusClass}">${statusText}</span>
                <i class="fas fa-chevron-down expand-icon" id="icon-${schedule.id}"></i>
            </div>
        </div>
        <div class="schedule-quick-actions">
            ${hasPermission('edit_schedule') ? `
                <button class="btn-icon-small" onclick="editSchedule(${schedule.id})" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
            ` : ''}
            <button class="btn-icon-small" onclick="shareSchedule(${schedule.id})" title="Compartilhar">
                <i class="fas fa-share"></i>
            </button>
            ${hasPermission('delete_schedule') ? `
                <button class="btn-icon-small danger" onclick="deleteSchedule(${schedule.id})" title="Excluir">
                    <i class="fas fa-trash"></i>
                </button>
            ` : ''}
        </div>
        <div class="schedule-expanded-content" id="details-${schedule.id}">
            <div class="team-overview">
                <div class="team-section vocals">
                    <div class="section-header">
                        <i class="fas fa-microphone"></i>
                        <span>Vocais</span>
                    </div>
                    <div class="members-list">
                        <div class="member-item ${getStatusClass(schedule.roles.ministro)}">
                            <span class="role">Ministro:</span>
                            <span class="name">${getDisplayValue(schedule.roles.ministro)}</span>
                        </div>
                        <div class="member-item ${getBackVocalStatusClass(schedule.roles.back_vocal)}">
                            <span class="role">Back Vocal:</span>
                            <span class="name">${getBackVocalDisplayValue(schedule.roles.back_vocal)}</span>
                        </div>
                    </div>
                </div>
                <div class="team-section instruments">
                    <div class="section-header">
                        <i class="fas fa-guitar"></i>
                        <span>Instrumentos</span>
                    </div>
                    <div class="members-list">
                        <div class="member-item ${getStatusClass(schedule.roles.violao)}">
                            <span class="role">Violão:</span>
                            <span class="name">${getDisplayValue(schedule.roles.violao)}</span>
                        </div>
                        <div class="member-item ${getStatusClass(schedule.roles.guitarra)}">
                            <span class="role">Guitarra:</span>
                            <span class="name">${getDisplayValue(schedule.roles.guitarra)}</span>
                        </div>
                        <div class="member-item ${getStatusClass(schedule.roles.teclado)}">
                            <span class="role">Teclado:</span>
                            <span class="name">${getDisplayValue(schedule.roles.teclado)}</span>
                        </div>
                        <div class="member-item ${getStatusClass(schedule.roles.bateria)}">
                            <span class="role">Bateria:</span>
                            <span class="name">${getDisplayValue(schedule.roles.bateria)}</span>
                        </div>
                        <div class="member-item ${getStatusClass(schedule.roles.baixo)}">
                            <span class="role">Baixo:</span>
                            <span class="name">${getDisplayValue(schedule.roles.baixo)}</span>
                        </div>
                    </div>
                </div>
                <div class="team-section projector">
                    <div class="section-header">
                        <i class="fas fa-desktop"></i>
                        <span>Projeção</span>
                    </div>
                    <div class="members-list">
                        <div class="member-item ${getStatusClass(schedule.roles.projetor)}">
                            <span class="role">Projetor:</span>
                            <span class="name">${getDisplayValue(schedule.roles.projetor)}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Seção de Louvores -->
            <div class="louvores-section">
                <div class="section-header">
                    <i class="fas fa-music"></i>
                    <span>Louvores Selecionados</span>
                    ${canManageLouvores(schedule) ? `
                        <button class="btn-add-louvor" onclick="openLouvorModal(${schedule.id})">
                            <i class="fas fa-plus"></i>
                            Adicionar Louvor
                        </button>
                    ` : ''}
                </div>
                <div class="louvores-list" id="louvores-${schedule.id}">
                    ${renderLouvoresList(schedule.louvores || [], schedule.id)}
                </div>
            </div>
            <div class="expanded-actions">
                ${hasPermission('edit_schedule') ? `
                    <button class="action-btn edit" onclick="editSchedule(${schedule.id})">
                        <i class="fas fa-edit"></i>
                        ${schedule.status === 'published' ? 'Editar' : 'Completar'}
                    </button>
                ` : ''}
                <button class="action-btn share" onclick="shareSchedule(${schedule.id})">
                    <i class="fas fa-share"></i>
                    Compartilhar
                </button>
            </div>
        </div>
    `;
    return item;
}
// === INTEGRAÇÃO GOOGLE CALENDAR === //
const GOOGLE_CALENDAR_API_KEY = 'AIzaSyBcpcu73o1yR60Z5MLrly31-nzEi09-mf0';
// Lista de calendários para tentar (do mais específico para o mais geral)
const CALENDAR_IDS = [
    'primary', // Calendário principal do usuário
    'pt.brazilian#holiday@group.v.calendar.google.com', // Feriados brasileiros
    'en.brazilian#holiday@group.v.calendar.google.com' // Feriados brasileiros (inglês)
];
// Função para verificar se as APIs estão disponíveis
function isAPIAvailable() {
    // Se estiver rodando via file://, as APIs não funcionarão devido ao CORS
    if (window.location.protocol === 'file:') {
        return false;
    }
    return true;
}
// Função para buscar eventos do Google Calendar
async function fetchGoogleCalendarEvents() {
    if (!isAPIAvailable()) {
        return [];
    }
    const now = new Date();
    const timeMin = now.toISOString();
    const timeMax = new Date(now.getTime() + (30 * 24 * 60 * 60 * 1000)).toISOString(); // Próximos 30 dias
    let allEvents = [];
    // Tentar buscar eventos de diferentes calendários
    for (const calendarId of CALENDAR_IDS) {
        try {
            const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?` +
                `key=${GOOGLE_CALENDAR_API_KEY}&` +
                `timeMin=${timeMin}&` +
                `timeMax=${timeMax}&` +
                `singleEvents=true&` +
                `orderBy=startTime&` +
                `maxResults=10`;
            const response = await fetch(url);
            if (!response.ok) {
                continue;
            }
            const data = await response.json();
            if (data.error) {
                if (data.error.code === 404) {
                console.warn('Calendário não encontrado:', calendarioId);
                }
                continue; // Tentar próximo calendário
            }
            if (data.items && data.items.length > 0) {
                allEvents = allEvents.concat(data.items);
            } else {
                console.log('Nenhum evento encontrado no calendário:', calendarioId);
            }
        } catch (error) {
            console.warn('Erro ao acessar calendário:', calendarioId, error);
            continue; // Tentar próximo calendário
        }
    }
    // Remover duplicatas e ordenar por data
    const uniqueEvents = allEvents.filter((event, index, self) => 
        index === self.findIndex(e => e.id === event.id)
    ).sort((a, b) => {
        const dateA = new Date(a.start.dateTime || a.start.date);
        const dateB = new Date(b.start.dateTime || b.start.date);
        return dateA - dateB;
    });
    return uniqueEvents;
}
// Função para filtrar escalas dos eventos
function filterScheduleEvents(events) {
    return events.filter(event => {
        const summary = event.summary?.toLowerCase() || '';
        const description = event.description?.toLowerCase() || '';
        return summary.includes('escala') || 
               summary.includes('louvor') || 
               summary.includes('ministério') ||
               summary.includes('culto') ||
               description.includes('escala') ||
               description.includes('louvor');
    });
}
// Função para filtrar outros eventos (não escalas)
function filterOtherEvents(events) {
    return events.filter(event => {
        const summary = event.summary?.toLowerCase() || '';
        const description = event.description?.toLowerCase() || '';
        return !(summary.includes('escala') || 
                summary.includes('louvor') || 
                summary.includes('ministério') ||
                summary.includes('culto') ||
                description.includes('escala') ||
                description.includes('louvor'));
    });
}
// Função para formatar data do evento
function formatEventDate(dateTime) {
    const date = new Date(dateTime);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const formattedDate = date.toLocaleDateString('pt-BR', options);
    if (diffDays === 0) {
        return `Hoje - ${formattedDate}`;
    } else if (diffDays === 1) {
        return `Amanhã - ${formattedDate}`;
    } else if (diffDays <= 7) {
        return `Em ${diffDays} dias - ${formattedDate}`;
    } else {
        return formattedDate;
    }
}
// Função para atualizar próxima escala com dados do Google Calendar
async function updateNextScheduleFromCalendar() {
    try {
        const events = await fetchGoogleCalendarEvents();
        const scheduleEvents = filterScheduleEvents(events);
        const nextScheduleCard = document.querySelector('.stat-card.primary');
        if (!nextScheduleCard) return;
        const contentElement = nextScheduleCard.querySelector('.stat-content h4');
        const detailElement = nextScheduleCard.querySelector('.stat-detail');
        if (scheduleEvents.length > 0) {
            const nextSchedule = scheduleEvents[0];
            const eventDate = nextSchedule.start.dateTime || nextSchedule.start.date;
            const formattedDate = formatEventDate(eventDate);
            contentElement.textContent = nextSchedule.summary;
            detailElement.innerHTML = `
                <span class="live-data"></span>
                📅 ${formattedDate}
            `;
        } else {
            // Fallback para dados locais se não houver eventos no calendário
            updateNextSchedule();
        }
    } catch (error) {
        console.warn('Erro ao atualizar escala do calendário:', error);
        // Fallback para dados locais
        updateNextSchedule();
    }
}
// Função para atualizar próximo evento com dados do Google Calendar
async function updateNextEventFromCalendar() {
    try {
        const events = await fetchGoogleCalendarEvents();
        const otherEvents = filterOtherEvents(events);
        const nextEventElement = document.getElementById('nextEvent');
        const eventCard = nextEventElement?.closest('.stat-card');
        if (!nextEventElement || !eventCard) return;
        const iconElement = eventCard.querySelector('.stat-icon i');
        const detailElement = eventCard.querySelector('.stat-detail');
        if (otherEvents.length > 0) {
            const nextEvent = otherEvents[0];
            const eventDate = nextEvent.start.dateTime || nextEvent.start.date;
            const formattedDate = formatEventDate(eventDate);
            // Atualizar ícone para evento
            if (iconElement) {
                iconElement.className = 'fas fa-calendar-alt';
            }
            nextEventElement.textContent = nextEvent.summary;
            detailElement.innerHTML = `
                <span class="live-data"></span>
                📅 ${formattedDate}
            `;
        } else {
            // Se não houver eventos, mostrar mensagem padrão
            if (iconElement) {
                iconElement.className = 'fas fa-calendar-check';
            }
            nextEventElement.textContent = 'Nenhum evento próximo';
            detailElement.innerHTML = `
                <span class="live-data"></span>
                📅 Agenda livre nos próximos dias
            `;
        }
    } catch (error) {
        console.warn('Erro ao atualizar próximo evento:', error);
    }
}
// Função para inicializar integração com Google Calendar
async function initializeGoogleCalendar() {
    // Atualizar dados iniciais
    await updateNextScheduleFromCalendar();
    await updateNextEventFromCalendar();
    // Atualizar a cada 5 minutos
    setInterval(async () => {
        await updateNextScheduleFromCalendar();
        await updateNextEventFromCalendar();
    }, 5 * 60 * 1000); // 5 minutos
}
// === SISTEMA DE LOUVORES POR ESCALA === //
function canManageLouvores(schedule) {
    if (!AppState.currentUser) return false;
    const userName = AppState.currentUser.name;
    const userLevel = AppState.currentUser.level;
    // Pastores e líderes sempre podem gerenciar
    if (userLevel === 'admin' || userLevel === 'leader') {
        return true;
    }
    // Ministro da escala pode adicionar louvores
    if (schedule.roles.ministro === userName) {
        return true;
    }
    return false;
}
function canEditLouvores(schedule) {
    if (!AppState.currentUser) return false;
    const userName = AppState.currentUser.name;
    const userLevel = AppState.currentUser.level;
    // Apenas pastores e líderes podem editar/remover louvores
    return userLevel === 'admin' || userLevel === 'leader';
}
function renderLouvoresList(louvores, scheduleId) {
    if (!louvores || louvores.length === 0) {
        return `
            <div class="no-louvores">
                <i class="fas fa-music"></i>
                <p>Nenhum louvor selecionado ainda</p>
            </div>
        `;
    }
    return louvores.map(louvor => `
        <div class="louvor-item">
            <div class="louvor-thumbnail">
                <img src="${louvor.thumbnail}" alt="${louvor.title}">
                <div class="play-overlay" onclick="playLouvor('${louvor.videoId}', '${louvor.title}', '${louvor.channel}', '${louvor.thumbnail}')">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="louvor-info">
                <h5>${louvor.title}</h5>
                <p>${louvor.channel}</p>
                <span class="louvor-duration">${louvor.duration || 'N/A'}</span>
            </div>
            ${canEditLouvores(AppState.schedules.find(s => s.id === scheduleId)) ? `
                <div class="louvor-actions">
                    <button class="btn-remove-louvor" onclick="removeLouvor(${scheduleId}, '${louvor.videoId}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            ` : ''}
        </div>
    `).join('');
}
function openLouvorModal(scheduleId) {
    // Criar modal para busca de louvores
    const modal = document.createElement('div');
    modal.id = 'louvorModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content louvor-modal">
            <div class="modal-header">
                <h3><i class="fas fa-music"></i> Adicionar Louvor à Escala</h3>
                <button class="modal-close" onclick="closeLouvorModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="search-bar-modern">
                    <div class="search-container-inner">
                        <div class="search-icon-left">
                            <i class="fas fa-search"></i>
                        </div>
                        <input type="text" placeholder="Digite o nome do louvor..." id="louvorSearch" class="search-input-modern">
                        <button class="btn-search-modern" onclick="searchLouvores()">
                            <i class="fas fa-search"></i>
                            <span>Buscar</span>
                        </button>
                    </div>
                </div>
                <div class="search-results" id="louvorSearchResults">
                    <div class="search-placeholder">
                        <i class="fas fa-search"></i>
                        <p>Digite o nome de um louvor para buscar</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    modal.classList.add('show');
    // Armazenar o ID da escala atual
    window.currentScheduleForLouvor = scheduleId;
    // Focar no campo de busca e adicionar evento Enter
    setTimeout(() => {
        const searchInput = document.getElementById('louvorSearch');
        searchInput.focus();
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchLouvores();
            }
        });
    }, 100);
}
function closeLouvorModal() {
    const modal = document.getElementById('louvorModal');
    if (modal) {
        modal.remove();
    }
    window.currentScheduleForLouvor = null;
}
async function searchLouvores() {
    const query = document.getElementById('louvorSearch').value.trim();
    if (!query) {
        return;
    }
    const resultsContainer = document.getElementById('louvorSearchResults');
    resultsContainer.innerHTML = `
        <div class="loading-modern">
            <div class="loading-spinner"></div>
            <h3>Buscando louvores...</h3>
            <p>Pesquisando no YouTube</p>
        </div>
    `;
    try {
        // Usar a mesma API do YouTube do repertório
        const results = await searchYouTubeAPI(query);
        if (results && results.length > 0) {
            displayLouvorResults(results);
        } else {
            throw new Error('Nenhum resultado da API');
        }
    } catch (error) {
        // Fallback para busca simulada se a API falhar
        try {
            const fallbackResults = await simulateYouTubeSearch(query);
            if (fallbackResults && fallbackResults.length > 0) {
                displayLouvorResults(fallbackResults);
            } else {
                throw new Error('Nenhum resultado do fallback');
            }
        } catch (fallbackError) {
            resultsContainer.innerHTML = `
                <div class="search-error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>Erro na busca</h3>
                    <p>Não foi possível buscar louvores. Tente novamente.</p>
                    <small>Erro: ${error.message}</small>
                </div>
            `;
        }
    }
}
function displayLouvorResults(results) {
    const resultsContainer = document.getElementById('louvorSearchResults');
    if (!results || results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Nenhum resultado encontrado</h3>
                <p>Tente buscar com outras palavras-chave</p>
            </div>
        `;
        return;
    }
    resultsContainer.innerHTML = results.map(video => {
        // Escapar aspas para evitar problemas no onclick
        const safeTitle = video.title.replace(/'/g, "\\'").replace(/"/g, '\\"');
        const safeChannel = video.channel.replace(/'/g, "\\'").replace(/"/g, '\\"');
        const safeThumbnail = video.thumbnail.replace(/'/g, "\\'").replace(/"/g, '\\"');
        const safeDuration = video.duration || 'N/A';
        const safeViews = video.views || '0';
        return `
            <div class="louvor-result-item">
                <div class="louvor-result-thumbnail">
                    <img src="${video.thumbnail}" alt="${safeTitle}" onerror="this.src='https://via.placeholder.com/120x90?text=Video'">
                    <span class="duration">${safeDuration}</span>
                </div>
                <div class="louvor-result-info">
                    <h4>${video.title}</h4>
                    <p>${video.channel}</p>
                    <span class="views">${safeViews} visualizações</span>
                </div>
                <div class="louvor-result-actions">
                    <button class="btn-preview" onclick="playLouvor('${video.videoId}', '${safeTitle}', '${safeChannel}', '${safeThumbnail}')">
                        <i class="fas fa-play"></i>
                        Ouvir
                    </button>
                    <button class="btn-add-to-schedule" onclick="addLouvorToSchedule('${video.videoId}', '${safeTitle}', '${safeChannel}', '${safeThumbnail}', '${safeDuration}')">
                        <i class="fas fa-plus"></i>
                        Adicionar
                    </button>
                </div>
            </div>
        `;
    }).join('');
}
function addLouvorToSchedule(videoId, title, channel, thumbnail, duration) {
    const scheduleId = window.currentScheduleForLouvor;
    if (!scheduleId) {
        showErrorMessage('Erro: ID da escala não encontrado');
        return;
    }
    const schedule = AppState.schedules.find(s => s.id === scheduleId);
    if (!schedule) {
        showErrorMessage('Erro: Escala não encontrada');
        return;
    }
    // Verificar se o louvor já foi adicionado
    if (schedule.louvores && schedule.louvores.some(l => l.videoId === videoId)) {
        showInfoMessage('Este louvor já foi adicionado à escala');
        return;
    }
    // Adicionar louvor à escala
    if (!schedule.louvores) {
        schedule.louvores = [];
    }
    const louvorData = {
        videoId: videoId,
        title: title,
        channel: channel,
        thumbnail: thumbnail,
        duration: duration || 'N/A',
        addedBy: AppState.currentUser ? AppState.currentUser.name : 'Usuário',
        addedAt: new Date().toISOString()
    };
    schedule.louvores.push(louvorData);
    // Salvar no localStorage
    try {
        saveToLocalStorage();
    } catch (error) {
        console.error('Erro ao salvar dados:', error);
        showErrorMessage('Erro ao salvar os dados');
        return;
    }
    // Atualizar a visualização
    const louvorsList = document.getElementById(`louvores-${scheduleId}`);
    if (louvorsList) {
        louvorsList.innerHTML = renderLouvoresList(schedule.louvores, scheduleId);
    } else {
        console.warn('Elemento louvores não encontrado para scheduleId:', scheduleId);
    }
    // Fechar modal
    closeLouvorModal();
    // Mostrar mensagem de sucesso
    showSuccessMessage(`Louvor "${title}" adicionado à escala!`);
    // Adicionar atividade
    try {
        addActivity('louvor_add', 'Louvor adicionado', `"${title}" foi adicionado à escala`, 'success');
    } catch (error) {
        console.warn('Erro ao adicionar atividade:', error);
    }
}
function removeLouvor(scheduleId, videoId) {
    const schedule = AppState.schedules.find(s => s.id === scheduleId);
    if (!schedule || !schedule.louvores) return;
    const louvorIndex = schedule.louvores.findIndex(l => l.videoId === videoId);
    if (louvorIndex === -1) return;
    const louvorTitle = schedule.louvores[louvorIndex].title;
    // Confirmar remoção
    showConfirmDialog(
        'Remover Louvor',
        `Tem certeza que deseja remover "${louvorTitle}" desta escala?`,
        () => {
            // Remover louvor
            schedule.louvores.splice(louvorIndex, 1);
            // Salvar no localStorage
            saveToLocalStorage();
            // Atualizar visualização
            const louvorsList = document.getElementById(`louvores-${scheduleId}`);
            if (louvorsList) {
                louvorsList.innerHTML = renderLouvoresList(schedule.louvores, scheduleId);
            }
            // Mostrar mensagem
            showSuccessMessage(`Louvor "${louvorTitle}" removido da escala`);
            // Adicionar atividade
            addActivity('louvor_remove', 'Louvor removido', `"${louvorTitle}" foi removido da escala`, 'warning');
        }
    );
}
function playLouvor(videoId, title, channel, thumbnail) {
    // Usar a mesma função de reprodução do YouTube
    playYouTubeVideo(videoId, title, channel, thumbnail);
}
function formatScheduleDate(dateString) {
    // Retorna a data exatamente como foi digitada pelo usuário
    return dateString;
}
function getStatusClass(value) {
    if (!value || value === '') return 'pending';
    if (value === 'N/A') return 'na-status';
    return '';
}
function getDisplayValue(value) {
    if (!value || value === '') return 'Não definido';
    if (value === 'N/A') return 'N/A';
    return value;
}
function getBackVocalStatusClass(backVocalArray) {
    if (!backVocalArray || backVocalArray.length === 0) return 'pending';
    if (backVocalArray.length === 1 && backVocalArray[0] === 'N/A') return 'na-status';
    return '';
}
function getBackVocalDisplayValue(backVocalArray) {
    if (!backVocalArray || backVocalArray.length === 0) return 'Não definido';
    if (backVocalArray.length === 1 && backVocalArray[0] === 'N/A') return 'N/A';
    return backVocalArray.join(', ');
}
function toggleScheduleDetails(scheduleId) {
    const detailsElement = document.getElementById(`details-${scheduleId}`);
    const scheduleItem = document.querySelector(`[data-schedule-id="${scheduleId}"]`);
    const expandIcon = document.getElementById(`icon-${scheduleId}`);
    if (detailsElement && scheduleItem) {
        const isExpanded = detailsElement.classList.contains('show');
        // Close all other expanded schedules
        document.querySelectorAll('.schedule-expanded-content.show').forEach(el => {
            el.classList.remove('show');
        });
        document.querySelectorAll('.schedule-item.expanded').forEach(el => {
            el.classList.remove('expanded');
        });
        document.querySelectorAll('.expand-icon').forEach(icon => {
            icon.style.transform = 'rotate(0deg)';
        });
        // Toggle current schedule
        if (!isExpanded) {
            detailsElement.classList.add('show');
            scheduleItem.classList.add('expanded');
            if (expandIcon) {
                expandIcon.style.transform = 'rotate(180deg)';
            }
        }
    }
}
function openScheduleModal() {
    // Verificar permissões apenas para criação (não para edição)
    if (!currentEditingScheduleId && !hasPermission('create_schedule')) {
        showErrorMessage('Apenas líderes e pastores podem criar escalas.');
        return;
    }
    const modal = document.getElementById('scheduleModal');
    modal.style.display = 'flex';
    modal.classList.add('show');
    // Populate member selects
    populateScheduleSelects();
    
    // Add event listener for date input
    setupDateInput();
}
// Função para verificar permissões
function hasPermission(action) {
    if (!AppState.currentUser) return false;
    const userLevel = AppState.currentUser.level;
    switch(action) {
        case 'create_schedule':
        case 'edit_schedule':
        case 'delete_schedule':
            return userLevel === 'admin' || userLevel === 'leader';
        case 'view_members':
        case 'view_songs':
            return true; // Todos podem ver
        case 'add_member':
        case 'edit_member':
            return userLevel === 'admin';
        default:
            return false;
    }
}
function closeScheduleModal() {
    const modal = document.getElementById('scheduleModal');
    modal.style.display = 'none';
    modal.classList.remove('show');
    // Reset form and modal state
    modal.querySelector('form').reset();
    document.getElementById('scheduleModalTitle').innerHTML = '<i class="fas fa-plus"></i> Nova Escala';
    document.getElementById('saveScheduleBtn').innerHTML = '<i class="fas fa-save"></i> Salvar Escala';
    document.getElementById('scheduleId').value = '';
    // Limpar seleções de backvocals
    clearAllBackVocalSelections();
    updateBackVocalHiddenInput();
    
    // Limpar campos de data
    const dateInput = document.getElementById('scheduleDateInput');
    const datePreview = document.getElementById('datePreview');
    if (dateInput) dateInput.value = '';
    if (datePreview) {
        datePreview.innerHTML = '<i class="fas fa-calendar-alt"></i><span>Selecione uma data acima</span>';
        datePreview.classList.remove('populated');
    }
    
    currentEditingScheduleId = null;
}
function populateScheduleSelects() {
    const vocalSelect = document.querySelector('select[name="ministro"]');
    const backVocalSelector = document.getElementById('backVocalSelector');
    const violaoSelect = document.querySelector('select[name="violao"]');
    const guitarraSelect = document.querySelector('select[name="guitarra"]');
    const tecladoSelect = document.querySelector('select[name="teclado"]');
    const bateriaSelect = document.querySelector('select[name="bateria"]');
    const baixoSelect = document.querySelector('select[name="baixo"]');
    const projetorSelect = document.querySelector('select[name="projetor"]');
    // Clear existing options (except first)
    [vocalSelect, violaoSelect, guitarraSelect, tecladoSelect, bateriaSelect, baixoSelect, projetorSelect].forEach(select => {
        if (select) {
            while (select.children.length > 1) {
                select.removeChild(select.lastChild);
            }
            // Add N/A option
            const naOption = document.createElement('option');
            naOption.value = 'N/A';
            naOption.textContent = 'N/A';
            select.appendChild(naOption);
        }
    });
    // Populate new backvocal selector
    if (backVocalSelector) {
        populateBackVocalSelector();
    }
    // Add member options
    AppState.members.forEach(member => {
        if (member.instruments.includes('Vocal')) {
            if (vocalSelect) {
                const option = document.createElement('option');
                option.value = member.name;
                option.textContent = member.name;
                vocalSelect.appendChild(option);
            }
        }
        if (member.instruments.includes('Violão')) {
            if (violaoSelect) {
                const option = document.createElement('option');
                option.value = member.name;
                option.textContent = member.name;
                violaoSelect.appendChild(option);
            }
        }
        if (member.instruments.includes('Guitarra')) {
            if (guitarraSelect) {
                const option = document.createElement('option');
                option.value = member.name;
                option.textContent = member.name;
                guitarraSelect.appendChild(option);
            }
        }
        if (member.instruments.includes('Teclado') || member.instruments.includes('Piano')) {
            if (tecladoSelect) {
                const option = document.createElement('option');
                option.value = member.name;
                option.textContent = member.name;
                tecladoSelect.appendChild(option);
            }
        }
        if (member.instruments.includes('Bateria')) {
            if (bateriaSelect) {
                const option = document.createElement('option');
                option.value = member.name;
                option.textContent = member.name;
                bateriaSelect.appendChild(option);
            }
        }
        if (member.instruments.includes('Baixo')) {
            if (baixoSelect) {
                const option = document.createElement('option');
                option.value = member.name;
                option.textContent = member.name;
                baixoSelect.appendChild(option);
            }
        }
        if (member.instruments.includes('Projetor') || ['Elo', 'Ana', 'Flávia', 'Eduarda', 'Murillo', 'Rafael'].includes(member.name)) {
            if (projetorSelect) {
                const option = document.createElement('option');
                option.value = member.name;
                option.textContent = member.name;
                projetorSelect.appendChild(option);
            }
        }
    });
}
// Nova função para popular o seletor de backvocals
function populateBackVocalSelector() {
    const backVocalSelector = document.getElementById('backVocalSelector');
    if (!backVocalSelector) return;
    backVocalSelector.innerHTML = '';
    // Adicionar opção N/A
    const naOption = createBackVocalOption('N/A', 'N/A', true);
    backVocalSelector.appendChild(naOption);
    // Adicionar membros vocais
    AppState.members.forEach(member => {
        if (member.instruments.includes('Vocal')) {
            const option = createBackVocalOption(member.name, member.name, false);
            backVocalSelector.appendChild(option);
        }
    });
}
// Função para criar uma opção do seletor de backvocals
function createBackVocalOption(value, label, isNA = false) {
    const option = document.createElement('div');
    option.className = `backvocal-option ${isNA ? 'na-option' : ''}`;
    option.dataset.value = value;
    // Checkbox visual
    const checkbox = document.createElement('div');
    checkbox.className = 'backvocal-checkbox';
    // Avatar
    const avatar = document.createElement('div');
    avatar.className = 'backvocal-avatar';
    if (isNA) {
        avatar.textContent = '✕';
    } else {
        avatar.textContent = label.charAt(0).toUpperCase();
    }
    // Label
    const labelEl = document.createElement('span');
    labelEl.className = 'backvocal-label';
    labelEl.textContent = label;
    option.appendChild(checkbox);
    option.appendChild(avatar);
    option.appendChild(labelEl);
    // Event listener para seleção
    option.addEventListener('click', () => toggleBackVocalOption(option));
    return option;
}
// Função para alternar seleção de backvocal
function toggleBackVocalOption(option) {
    const isNA = option.classList.contains('na-option');
    const isSelected = option.classList.contains('selected');
    if (isNA) {
        // Se é N/A, desmarcar todos os outros e marcar apenas N/A
        if (!isSelected) {
            clearAllBackVocalSelections();
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    } else {
        // Se não é N/A, desmarcar N/A e alternar este
        const naOption = document.querySelector('.backvocal-option.na-option');
        if (naOption) {
            naOption.classList.remove('selected');
        }
        if (isSelected) {
            option.classList.remove('selected');
        } else {
            option.classList.add('selected');
        }
    }
    updateBackVocalHiddenInput();
}
// Função para limpar todas as seleções
function clearAllBackVocalSelections() {
    const options = document.querySelectorAll('.backvocal-option');
    options.forEach(option => option.classList.remove('selected'));
}
// Função para atualizar o input hidden
function updateBackVocalHiddenInput() {
    const selectedOptions = document.querySelectorAll('.backvocal-option.selected');
    const values = Array.from(selectedOptions).map(option => option.dataset.value);
    const hiddenInput = document.getElementById('backVocalHidden');
    if (hiddenInput) {
        hiddenInput.value = values.join(',');
    }
}
// Função para definir valores selecionados (para edição)
function setBackVocalValues(values) {
    clearAllBackVocalSelections();
    if (!values || values.length === 0) return;
    values.forEach(value => {
        const option = document.querySelector(`.backvocal-option[data-value="${value}"]`);
        if (option) {
            option.classList.add('selected');
        }
    });
    updateBackVocalHiddenInput();
}
function handleScheduleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const scheduleId = formData.get('scheduleId');
    const isEditing = scheduleId && currentEditingScheduleId;
    // Obter valores dos backvocals do novo seletor
    const backVocalHidden = document.getElementById('backVocalHidden');
    const backVocalValues = backVocalHidden && backVocalHidden.value ? 
        backVocalHidden.value.split(',').filter(v => v.trim()) : [];
    const scheduleData = {
        date: formData.get('date') || document.querySelector('input[type="text"]').value,
        status: 'published',
        roles: {
            ministro: document.querySelector('select[name="ministro"]').value,
            back_vocal: backVocalValues,
            violao: document.querySelector('select[name="violao"]').value,
            guitarra: document.querySelector('select[name="guitarra"]').value,
            teclado: document.querySelector('select[name="teclado"]').value,
            bateria: document.querySelector('select[name="bateria"]').value,
            baixo: document.querySelector('select[name="baixo"]').value,
            projetor: document.querySelector('select[name="projetor"]').value
        }
    };
    if (isEditing) {
        // Update existing schedule
        const scheduleIndex = AppState.schedules.findIndex(s => s.id == currentEditingScheduleId);
        if (scheduleIndex !== -1) {
            AppState.schedules[scheduleIndex] = {
                ...AppState.schedules[scheduleIndex],
                ...scheduleData,
                lastEdited: new Date().toISOString()
            };
            // Registrar atividade de edição
            addActivity(
                'schedule_edit',
                'Escala editada',
                `${AppState.currentUser.name} editou a escala de ${scheduleData.date}`,
                'primary'
            );
            showSuccessMessage('Escala atualizada com sucesso!');
            // Destacar a escala editada após renderizar
            setTimeout(() => {
                highlightEditedSchedule(currentEditingScheduleId);
            }, 100);
        }
        currentEditingScheduleId = null;
    } else {
        // Create new schedule
        const newSchedule = {
            id: Date.now(),
            ...scheduleData
        };
        AppState.schedules.push(newSchedule);
        // Registrar atividade de criação
        addActivity(
            'schedule_create',
            'Nova escala criada',
            `${AppState.currentUser.name} criou escala para ${scheduleData.date}`,
            'success'
        );
        showSuccessMessage('Escala criada com sucesso!');
    }
    saveToLocalStorage();
    
    // Forçar sincronização imediata
    if (syncManager && syncManager.isInitialized) {
        syncManager.syncSchedules(AppState.schedules);
        console.log('🔄 Sincronização forçada após salvar escala');
    }
    
    closeScheduleModal();
    renderSchedules();
    updateDashboardData();
}
function editSchedule(id) {
    // Verificar permissões
    if (!hasPermission('edit_schedule')) {
        showErrorMessage('Apenas líderes e pastores podem editar escalas.');
        return;
    }
    // Chamar a função enhanced
    enhancedEditSchedule(id);
}
function shareSchedule(id) {
    const schedule = AppState.schedules.find(s => s.id === id);
    if (schedule) {
        const text = `ESCALA MINISTÉRIO DE LOUVOR - ${formatDate(schedule.date)}\n\n` +
                    `🎤 Ministro: ${schedule.roles.ministro || 'Não definido'}\n` +
                    `🎵 Back Vocal: ${schedule.roles.back_vocal.length ? schedule.roles.back_vocal.join(', ') : 'Não definido'}\n` +
                    `🎸 Violão: ${schedule.roles.violao || 'Não definido'}\n` +
                    `🎸 Guitarra: ${schedule.roles.guitarra || 'Não definido'}\n` +
                    `🎹 Teclado: ${schedule.roles.teclado || 'Não definido'}\n` +
                    `🥁 Bateria: ${schedule.roles.bateria || 'Não definido'}\n` +
                    `🎸 Baixo: ${schedule.roles.baixo || 'Não definido'}`;
        // Registrar atividade de compartilhamento
        addActivity(
            'share',
            'Escala compartilhada',
            `${AppState.currentUser.name} compartilhou escala de ${formatDate(schedule.date)}`,
            'info'
        );
        if (navigator.share) {
            navigator.share({
                title: 'Escala IBR',
                text: text
            });
        } else {
            navigator.clipboard.writeText(text).then(() => {
                showSuccessMessage('Escala copiada para área de transferência!');
            });
        }
    }
}
// === MEMBER MANAGEMENT === //
function renderMembers() {
    const container = document.querySelector('.members-grid');
    container.innerHTML = '';
    AppState.members.forEach(member => {
        const memberCard = createMemberCard(member);
        container.appendChild(memberCard);
    });
}
function createMemberCard(member) {
    const card = document.createElement('div');
    card.className = 'member-card slide-up';
    const instruments = member.instruments.map(inst => 
        `<span class="instrument">${inst}</span>`
    ).join('');
    // Avatar com foto ou ícone padrão
    const avatarContent = member.photo ? 
        `<img src="${member.photo}" alt="${member.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">` :
        '<i class="fas fa-user"></i>';
    card.innerHTML = `
        <div class="member-avatar">
            ${avatarContent}
        </div>
        <div class="member-info">
            <h3>${member.name}</h3>
            <p class="member-role">${member.role}</p>
            <div class="member-instruments">
                ${instruments}
            </div>
        </div>
        <div class="member-status ${member.status}">${member.status === 'active' ? 'Ativo' : 'Inativo'}</div>
    `;
    return card;
}
function openMemberModal() {
    showInfoMessage('Funcionalidade de adição de membros em desenvolvimento');
}
// === SONG MANAGEMENT === //
// Cache para resultados do Cifra Club
const cifraClubCache = new Map();
function renderSongs() {
    const container = document.querySelector('.songs-list');
    container.innerHTML = '';
    // Mostrar músicas locais primeiro
    AppState.songs.forEach(song => {
        const songItem = createSongItem(song, 'local');
        container.appendChild(songItem);
    });
}
function createSongItem(song, source = 'local') {
    const item = document.createElement('div');
    item.className = 'song-item slide-up';
    const sourceIcon = source === 'cifraclub' ? 
        '<i class="fas fa-external-link-alt cifra-icon" title="Cifra Club"></i>' : 
        '<i class="fas fa-music local-icon" title="Repertório Local"></i>';
    const keyInfo = song.key ? `<span class="song-key">Tom: ${song.key}</span>` : '';
    const bpmInfo = song.bpm ? `<span class="song-bpm">${song.bpm} BPM</span>` : '';
    item.innerHTML = `
        <div class="song-info">
            <div class="song-header">
                <h3>${song.title}</h3>
                ${sourceIcon}
            </div>
            <p class="song-artist">${song.artist}</p>
            <div class="song-details">
                ${keyInfo}
                ${bpmInfo}
                ${source === 'cifraclub' ? '<span class="cifra-badge">Cifra Club</span>' : ''}
            </div>
        </div>
        <div class="song-actions">
            ${source === 'cifraclub' ? `
                <button class="btn-icon" onclick="viewCifra('${song.url}')" title="Ver Cifra">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn-icon" onclick="addToLocal('${btoa(JSON.stringify(song))}')" title="Adicionar ao Repertório">
                    <i class="fas fa-plus"></i>
                </button>
            ` : `
                <button class="btn-icon" onclick="playSong(${song.id})" title="Reproduzir">
                    <i class="fas fa-play"></i>
                </button>
                <button class="btn-icon" onclick="editSong(${song.id})" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
            `}
        </div>
    `;
    return item;
}
async function handleSongSearch(e) {
    const searchTerm = e.target.value.trim();
    if (!searchTerm) {
        renderSongs();
        return;
    }
    // Registrar atividade de busca
    addActivity(
        'song_search',
        'Busca de música',
        `${AppState.currentUser.name} pesquisou por "${searchTerm}"`,
        'info'
    );
    const container = document.querySelector('.songs-list');
    // Mostrar loading
    container.innerHTML = `
        <div class="search-loading">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Pesquisando no Cifra Club...</p>
        </div>
    `;
    try {
        // Filtrar músicas locais
        const localFiltered = AppState.songs.filter(song => 
            song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchTerm.toLowerCase())
        );
        // Buscar no Cifra Club
        const cifraResults = await searchCifraClub(searchTerm);
        // Renderizar resultados
        container.innerHTML = '';
        // Adicionar seção de resultados locais
        if (localFiltered.length > 0) {
            const localSection = document.createElement('div');
            localSection.className = 'search-section';
            localSection.innerHTML = `
                <h4 class="search-section-title">
                    <i class="fas fa-music"></i>
                    Repertório Local (${localFiltered.length})
                </h4>
            `;
            container.appendChild(localSection);
            localFiltered.forEach(song => {
                const songItem = createSongItem(song, 'local');
                container.appendChild(songItem);
            });
        }
        // Adicionar seção do Cifra Club
        if (cifraResults.length > 0) {
            const cifraSection = document.createElement('div');
            cifraSection.className = 'search-section';
            cifraSection.innerHTML = `
                <h4 class="search-section-title">
                    <i class="fas fa-external-link-alt"></i>
                    Cifra Club (${cifraResults.length})
                </h4>
            `;
            container.appendChild(cifraSection);
            cifraResults.forEach(song => {
                const songItem = createSongItem(song, 'cifraclub');
                container.appendChild(songItem);
            });
        }
        // Nenhum resultado
        if (localFiltered.length === 0 && cifraResults.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>Nenhum resultado encontrado</h3>
                    <p>Tente pesquisar com outros termos</p>
                </div>
            `;
        }
    } catch (error) {
        container.innerHTML = `
            <div class="search-error">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>Erro na pesquisa</h3>
                <p>Não foi possível conectar ao Cifra Club. Mostrando apenas resultados locais.</p>
            </div>
        `;
        // Mostrar apenas resultados locais em caso de erro
        const localFiltered = AppState.songs.filter(song => 
            song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchTerm.toLowerCase())
        );
        localFiltered.forEach(song => {
            const songItem = createSongItem(song, 'local');
            container.appendChild(songItem);
        });
    }
}
function openSongModal() {
    showInfoMessage('Funcionalidade de adição de músicas em desenvolvimento');
}
function playSong(id) {
    const song = AppState.songs.find(s => s.id === id);
    showInfoMessage(`Tocando: ${song.title} - ${song.artist}`);
}
function editSong(id) {
    showInfoMessage('Funcionalidade de edição de músicas em desenvolvimento');
}
// === CIFRA CLUB INTEGRATION === //
async function searchCifraClub(query) {
    // Verificar cache primeiro
    if (cifraClubCache.has(query)) {
        return cifraClubCache.get(query);
    }
    try {
        // Simular busca no Cifra Club (dados mockados baseados no site real)
        const mockResults = await simulateCifraClubSearch(query);
        // Adicionar ao cache
        cifraClubCache.set(query, mockResults);
        return mockResults;
    } catch (error) {
        return [];
    }
}
async function simulateCifraClubSearch(query) {
    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 800));
    // Obter base de dados completa
    const cifraClubDatabase = getCompleteCifraClubDatabase();
    // Filtrar resultados baseados na pesquisa
    const results = cifraClubDatabase.filter(song => 
        song.title.toLowerCase().includes(query.toLowerCase()) ||
        song.artist.toLowerCase().includes(query.toLowerCase())
    );
    // Ordenar por relevância (primeiro por artista, depois por visualizações)
    results.sort((a, b) => {
        const aArtistMatch = a.artist.toLowerCase().includes(query.toLowerCase());
        const bArtistMatch = b.artist.toLowerCase().includes(query.toLowerCase());
        if (aArtistMatch && !bArtistMatch) return -1;
        if (!aArtistMatch && bArtistMatch) return 1;
        return parseInt(b.views.replace(/\./g, '')) - parseInt(a.views.replace(/\./g, ''));
    });
    // Limitar a 15 resultados para melhor experiência
    return results.slice(0, 15);
}
function viewCifra(url) {
    // Abrir cifra em nova aba
    window.open(url, '_blank');
    showSuccessMessage('Abrindo cifra no Cifra Club...');
}
function getCompleteCifraClubDatabase() {
    return [
        // === HARPA CRISTÃ ===
        { title: "Porque Ele Vive", artist: "Harpa Cristã", key: "G", url: "https://www.cifraclub.com.br/harpa-crista/porque-ele-vive/", views: "396.378", difficulty: "Iniciante" },
        { title: "Grandioso És Tu", artist: "Harpa Cristã", key: "C", url: "https://www.cifraclub.com.br/harpa-crista/grandioso-es-tu/", views: "285.442", difficulty: "Básico" },
        { title: "Quão Grande És Tu", artist: "Harpa Cristã", key: "D", url: "https://www.cifraclub.com.br/harpa-crista/quao-grande-es-tu/", views: "198.756", difficulty: "Básico" },
        { title: "Cristo Já Ressuscitou", artist: "Harpa Cristã", key: "F", url: "https://www.cifraclub.com.br/harpa-crista/cristo-ja-ressuscitou/", views: "156.889", difficulty: "Iniciante" },
        { title: "Eu Te Amo, Ó Deus", artist: "Harpa Cristã", key: "G", url: "https://www.cifraclub.com.br/harpa-crista/eu-te-amo-o-deus/", views: "143.221", difficulty: "Básico" },
        { title: "Marchai, Soldados de Cristo", artist: "Harpa Cristã", key: "D", url: "https://www.cifraclub.com.br/harpa-crista/marchai-soldados-de-cristo/", views: "124.665", difficulty: "Intermediário" },
        { title: "Castelo Forte", artist: "Harpa Cristã", key: "A", url: "https://www.cifraclub.com.br/harpa-crista/castelo-forte/", views: "118.332", difficulty: "Básico" },
        { title: "Santa a Santa", artist: "Harpa Cristã", key: "C", url: "https://www.cifraclub.com.br/harpa-crista/santa-a-santa/", views: "98.776", difficulty: "Iniciante" },
        { title: "Vem, Jesus", artist: "Harpa Cristã", key: "G", url: "https://www.cifraclub.com.br/harpa-crista/vem-jesus/", views: "87.443", difficulty: "Básico" },
        { title: "Face a Face", artist: "Harpa Cristã", key: "F", url: "https://www.cifraclub.com.br/harpa-crista/face-a-face/", views: "76.998", difficulty: "Intermediário" },
        // === FERNANDINHO ===
        { title: "Nada Além do Sangue", artist: "Fernandinho", key: "A", url: "https://www.cifraclub.com.br/fernandinho/nada-alem-do-sangue/", views: "231.825", difficulty: "Intermediário" },
        { title: "Uma Nova História", artist: "Fernandinho", key: "E", url: "https://www.cifraclub.com.br/fernandinho/uma-nova-historia/", views: "189.554", difficulty: "Básico" },
        { title: "Caia Fogo", artist: "Fernandinho", key: "G", url: "https://www.cifraclub.com.br/fernandinho/caia-fogo/", views: "178.332", difficulty: "Intermediário" },
        { title: "Yeshua", artist: "Fernandinho", key: "C", url: "https://www.cifraclub.com.br/fernandinho/yeshua/", views: "156.887", difficulty: "Avançado" },
        { title: "Galileu", artist: "Fernandinho", key: "D", url: "https://www.cifraclub.com.br/fernandinho/galileu/", views: "145.221", difficulty: "Básico" },
        { title: "Perdão", artist: "Fernandinho", key: "A", url: "https://www.cifraclub.com.br/fernandinho/perdao/", views: "134.776", difficulty: "Intermediário" },
        { title: "Derrama Tua Glória", artist: "Fernandinho", key: "F", url: "https://www.cifraclub.com.br/fernandinho/derrama-tua-gloria/", views: "128.443", difficulty: "Básico" },
        { title: "Teus Sonhos", artist: "Fernandinho", key: "G", url: "https://www.cifraclub.com.br/fernandinho/teus-sonhos/", views: "118.665", difficulty: "Intermediário" },
        { title: "Sede de Ti", artist: "Fernandinho", key: "C", url: "https://www.cifraclub.com.br/fernandinho/sede-de-ti/", views: "108.998", difficulty: "Básico" },
        { title: "Te Adorar", artist: "Fernandinho", key: "E", url: "https://www.cifraclub.com.br/fernandinho/te-adorar/", views: "98.332", difficulty: "Iniciante" },
        // === FHOP (Florianópolis House Of Prayer) ===
        { title: "Tu És / Águas Purificadoras", artist: "Florianópolis House Of Prayer (fhop music)", key: "A", url: "https://www.cifraclub.com.br/florianopolis-house-of-prayer-fhop-music/tu-es-aguas-purificadoras/", views: "230.669", difficulty: "Intermediário" },
        { title: "Liberdade", artist: "Florianópolis House Of Prayer (fhop music)", key: "G", url: "https://www.cifraclub.com.br/florianopolis-house-of-prayer-fhop-music/liberdade/", views: "178.443", difficulty: "Básico" },
        { title: "Não Pare", artist: "Florianópolis House Of Prayer (fhop music)", key: "C", url: "https://www.cifraclub.com.br/florianopolis-house-of-prayer-fhop-music/nao-pare/", views: "156.776", difficulty: "Intermediário" },
        { title: "Aviva-nos", artist: "Florianópolis House Of Prayer (fhop music)", key: "D", url: "https://www.cifraclub.com.br/florianopolis-house-of-prayer-fhop-music/aviva-nos/", views: "145.332", difficulty: "Básico" },
        { title: "Fogo", artist: "Florianópolis House Of Prayer (fhop music)", key: "E", url: "https://www.cifraclub.com.br/florianopolis-house-of-prayer-fhop-music/fogo/", views: "134.887", difficulty: "Intermediário" },
        { title: "Aleluia", artist: "Florianópolis House Of Prayer (fhop music)", key: "F", url: "https://www.cifraclub.com.br/florianopolis-house-of-prayer-fhop-music/aleluia/", views: "128.221", difficulty: "Básico" },
        { title: "Profetiza", artist: "Florianópolis House Of Prayer (fhop music)", key: "A", url: "https://www.cifraclub.com.br/florianopolis-house-of-prayer-fhop-music/profetiza/", views: "118.665", difficulty: "Avançado" },
        { title: "Vem Espírito de Deus", artist: "Florianópolis House Of Prayer (fhop music)", key: "G", url: "https://www.cifraclub.com.br/florianopolis-house-of-prayer-fhop-music/vem-espirito-de-deus/", views: "108.443", difficulty: "Intermediário" },
        // === MORADA ===
        { title: "Só Tu És Santo", artist: "MORADA", key: "E", url: "https://www.cifraclub.com.br/morada/so-tu-es-santo/", views: "156.442", difficulty: "Intermediário" },
        { title: "Eu Me Rendo", artist: "MORADA", key: "C", url: "https://www.cifraclub.com.br/morada/eu-me-rendo/", views: "145.887", difficulty: "Básico" },
        { title: "Lágrimas", artist: "MORADA", key: "A", url: "https://www.cifraclub.com.br/morada/lagrimas/", views: "134.332", difficulty: "Intermediário" },
        { title: "Quando Eu Chorar", artist: "MORADA", key: "G", url: "https://www.cifraclub.com.br/morada/quando-eu-chorar/", views: "128.776", difficulty: "Básico" },
        { title: "Nos Braços do Pai", artist: "MORADA", key: "D", url: "https://www.cifraclub.com.br/morada/nos-bracos-do-pai/", views: "118.443", difficulty: "Iniciante" },
        { title: "Bondade de Deus", artist: "MORADA", key: "F", url: "https://www.cifraclub.com.br/morada/bondade-de-deus/", views: "108.221", difficulty: "Básico" },
        { title: "Coração de Criança", artist: "MORADA", key: "C", url: "https://www.cifraclub.com.br/morada/coracao-de-crianca/", views: "98.665", difficulty: "Intermediário" },
        // === ALINE BARROS ===
        { title: "Ressuscita-me", artist: "Aline Barros", key: "G", url: "https://www.cifraclub.com.br/aline-barros/ressuscita-me/", views: "198.554", difficulty: "Básico" },
        { title: "Casa do Pai", artist: "Aline Barros", key: "C", url: "https://www.cifraclub.com.br/aline-barros/casa-do-pai/", views: "178.332", difficulty: "Intermediário" },
        { title: "Caminho da Fé", artist: "Aline Barros", key: "D", url: "https://www.cifraclub.com.br/aline-barros/caminho-da-fe/", views: "156.887", difficulty: "Básico" },
        { title: "Jeová Jireh", artist: "Aline Barros", key: "A", url: "https://www.cifraclub.com.br/aline-barros/jeova-jireh/", views: "145.221", difficulty: "Intermediário" },
        { title: "Vitória no Deserto", artist: "Aline Barros", key: "E", url: "https://www.cifraclub.com.br/aline-barros/vitoria-no-deserto/", views: "134.776", difficulty: "Básico" },
        { title: "Poder do Teu Amor", artist: "Aline Barros", key: "F", url: "https://www.cifraclub.com.br/aline-barros/poder-do-teu-amor/", views: "128.443", difficulty: "Intermediário" },
        { title: "Deus Cuida de Mim", artist: "Aline Barros", key: "G", url: "https://www.cifraclub.com.br/aline-barros/deus-cuida-de-mim/", views: "118.665", difficulty: "Iniciante" },
        { title: "Lugar Secreto", artist: "Aline Barros", key: "C", url: "https://www.cifraclub.com.br/aline-barros/lugar-secreto/", views: "108.998", difficulty: "Básico" },
        // === DIANTE DO TRONO ===
        { title: "Preciso de Ti", artist: "Diante do Trono", key: "G", url: "https://www.cifraclub.com.br/diante-do-trono/preciso-de-ti/", views: "187.664", difficulty: "Básico" },
        { title: "Águas Purificadoras", artist: "Diante do Trono", key: "A", url: "https://www.cifraclub.com.br/diante-do-trono/aguas-purificadoras/", views: "165.332", difficulty: "Intermediário" },
        { title: "Tu Reinas", artist: "Diante do Trono", key: "D", url: "https://www.cifraclub.com.br/diante-do-trono/tu-reinas/", views: "145.887", difficulty: "Básico" },
        { title: "Manancial", artist: "Diante do Trono", key: "C", url: "https://www.cifraclub.com.br/diante-do-trono/manancial/", views: "134.776", difficulty: "Intermediário" },
        { title: "Quero Mergulhar", artist: "Diante do Trono", key: "E", url: "https://www.cifraclub.com.br/diante-do-trono/quero-mergulhar/", views: "128.221", difficulty: "Básico" },
        { title: "Santo", artist: "Diante do Trono", key: "F", url: "https://www.cifraclub.com.br/diante-do-trono/santo/", views: "118.443", difficulty: "Iniciante" },
        { title: "Coração de Adorador", artist: "Diante do Trono", key: "G", url: "https://www.cifraclub.com.br/diante-do-trono/coracao-de-adorador/", views: "108.665", difficulty: "Básico" },
        { title: "A Ele a Glória", artist: "Diante do Trono", key: "A", url: "https://www.cifraclub.com.br/diante-do-trono/a-ele-a-gloria/", views: "98.998", difficulty: "Intermediário" },
        // === GABRIEL GUEDES ===
        { title: "Santo Pra Sempre", artist: "Gabriel Guedes", key: "C", url: "https://www.cifraclub.com.br/gabriel-guedes/santo-pra-sempre/", views: "180.244", difficulty: "Intermediário" },
        { title: "Vitorioso És", artist: "Gabriel Guedes", key: "G", url: "https://www.cifraclub.com.br/gabriel-guedes/vitorioso-es/", views: "156.887", difficulty: "Básico" },
        { title: "Jesus", artist: "Gabriel Guedes", key: "D", url: "https://www.cifraclub.com.br/gabriel-guedes/jesus/", views: "145.332", difficulty: "Intermediário" },
        { title: "Creio Que Tu És a Cura", artist: "Gabriel Guedes", key: "A", url: "https://www.cifraclub.com.br/gabriel-guedes/creio-que-tu-es-a-cura/", views: "134.776", difficulty: "Básico" },
        { title: "Filho do Fogo", artist: "Gabriel Guedes", key: "E", url: "https://www.cifraclub.com.br/gabriel-guedes/filho-do-fogo/", views: "128.221", difficulty: "Avançado" },
        { title: "Marca da Promessa", artist: "Gabriel Guedes", key: "F", url: "https://www.cifraclub.com.br/gabriel-guedes/marca-da-promessa/", views: "118.443", difficulty: "Intermediário" },
        // === GABRIELA ROCHA ===
        { title: "Atos 2", artist: "Gabriela Rocha", key: "A", url: "https://www.cifraclub.com.br/gabriela-rocha/atos-2/", views: "198.554", difficulty: "Avançado" },
        { title: "Eu Sou", artist: "Gabriela Rocha", key: "C", url: "https://www.cifraclub.com.br/gabriela-rocha/eu-sou/", views: "178.332", difficulty: "Intermediário" },
        { title: "A Ele a Glória", artist: "Gabriela Rocha", key: "G", url: "https://www.cifraclub.com.br/gabriela-rocha/a-ele-a-gloria/", views: "156.887", difficulty: "Básico" },
        { title: "Lugar Secreto", artist: "Gabriela Rocha", key: "D", url: "https://www.cifraclub.com.br/gabriela-rocha/lugar-secreto/", views: "145.221", difficulty: "Intermediário" },
        { title: "Pai Nosso", artist: "Gabriela Rocha", key: "E", url: "https://www.cifraclub.com.br/gabriela-rocha/pai-nosso/", views: "134.776", difficulty: "Básico" },
        { title: "Me Atraiu", artist: "Gabriela Rocha", key: "F", url: "https://www.cifraclub.com.br/gabriela-rocha/me-atraiu/", views: "128.443", difficulty: "Avançado" },
        // === COLO DE DEUS ===
        { title: "Além do Rio Azul", artist: "Colo de Deus", key: "G", url: "https://www.cifraclub.com.br/colo-de-deus/alem-do-rio-azul/", views: "145.887", difficulty: "Básico" },
        { title: "Quando a Tempestade Vem", artist: "Colo de Deus", key: "C", url: "https://www.cifraclub.com.br/colo-de-deus/quando-a-tempestade-vem/", views: "134.332", difficulty: "Intermediário" },
        { title: "O Céu se Abre", artist: "Colo de Deus", key: "D", url: "https://www.cifraclub.com.br/colo-de-deus/o-ceu-se-abre/", views: "128.776", difficulty: "Básico" },
        { title: "Yeshua", artist: "Colo de Deus", key: "A", url: "https://www.cifraclub.com.br/colo-de-deus/yeshua/", views: "118.443", difficulty: "Intermediário" },
        { title: "Deus de Promessas", artist: "Colo de Deus", key: "E", url: "https://www.cifraclub.com.br/colo-de-deus/deus-de-promessas/", views: "108.221", difficulty: "Básico" },
        // === ISAÍAS SAAD ===
        { title: "Bondade de Deus", artist: "Isaías Saad", key: "C", url: "https://www.cifraclub.com.br/isaias-saad/bondade-de-deus/", views: "195.332", difficulty: "Básico" },
        { title: "Oceanos", artist: "Isaías Saad", key: "B", url: "https://www.cifraclub.com.br/isaias-saad/oceanos/", views: "167.889", difficulty: "Avançado" },
        { title: "Vai Ser Tão Lindo", artist: "Isaías Saad", key: "G", url: "https://www.cifraclub.com.br/isaias-saad/vai-ser-tao-lindo/", views: "145.332", difficulty: "Básico" },
        { title: "Estou Contigo", artist: "Isaías Saad", key: "D", url: "https://www.cifraclub.com.br/isaias-saad/estou-contigo/", views: "134.776", difficulty: "Intermediário" },
        { title: "Ousado Amor", artist: "Isaías Saad", key: "A", url: "https://www.cifraclub.com.br/isaias-saad/ousado-amor/", views: "128.221", difficulty: "Básico" },
        // === RENASCER PRAISE ===
        { title: "Escape", artist: "Renascer Praise", key: "E", url: "https://www.cifraclub.com.br/renascer-praise/escape/", views: "178.554", difficulty: "Intermediário" },
        { title: "A Vitória da Cruz", artist: "Renascer Praise", key: "G", url: "https://www.cifraclub.com.br/renascer-praise/a-vitoria-da-cruz/", views: "156.332", difficulty: "Básico" },
        { title: "Digno", artist: "Renascer Praise", key: "C", url: "https://www.cifraclub.com.br/renascer-praise/digno/", views: "145.887", difficulty: "Intermediário" },
        { title: "Livre Sou", artist: "Renascer Praise", key: "D", url: "https://www.cifraclub.com.br/renascer-praise/livre-sou/", views: "134.221", difficulty: "Básico" },
        { title: "Como Agradecer", artist: "Renascer Praise", key: "A", url: "https://www.cifraclub.com.br/renascer-praise/como-agradecer/", views: "128.776", difficulty: "Intermediário" },
        // === DROPS INA ===
        { title: "É Ele", artist: "Drops INA", key: "G", url: "https://www.cifraclub.com.br/drops-ina/e-ele/", views: "167.443", difficulty: "Básico" },
        { title: "Tempo de Vitória", artist: "Drops INA", key: "C", url: "https://www.cifraclub.com.br/drops-ina/tempo-de-vitoria/", views: "145.887", difficulty: "Intermediário" },
        { title: "Autoridade", artist: "Drops INA", key: "D", url: "https://www.cifraclub.com.br/drops-ina/autoridade/", views: "134.332", difficulty: "Básico" },
        { title: "Overflow", artist: "Drops INA", key: "A", url: "https://www.cifraclub.com.br/drops-ina/overflow/", views: "128.776", difficulty: "Avançado" },
        // === CORINHOS EVANGÉLICOS ===
        { title: "Aleluia, Aleluia", artist: "Corinhos Evangélicos", key: "G", url: "https://www.cifraclub.com.br/corinhos-evangelicos/aleluia-aleluia/", views: "156.332", difficulty: "Iniciante" },
        { title: "Jesus Cristo é o Senhor", artist: "Corinhos Evangélicos", key: "C", url: "https://www.cifraclub.com.br/corinhos-evangelicos/jesus-cristo-e-o-senhor/", views: "145.887", difficulty: "Básico" },
        { title: "Glória, Glória, Aleluia", artist: "Corinhos Evangélicos", key: "D", url: "https://www.cifraclub.com.br/corinhos-evangelicos/gloria-gloria-aleluia/", views: "134.221", difficulty: "Iniciante" },
        { title: "Eu Navegarei", artist: "Corinhos Evangélicos", key: "A", url: "https://www.cifraclub.com.br/corinhos-evangelicos/eu-navegarei/", views: "128.776", difficulty: "Básico" },
        { title: "Louvar é Bom", artist: "Corinhos Evangélicos", key: "E", url: "https://www.cifraclub.com.br/corinhos-evangelicos/louvar-e-bom/", views: "118.443", difficulty: "Iniciante" },
        // === JULLIANY SOUZA ===
        { title: "Lindo Momento", artist: "Julliany Souza", key: "F", url: "https://www.cifraclub.com.br/julliany-souza/lindo-momento/", views: "145.887", difficulty: "Básico" },
        { title: "Adorarei", artist: "Julliany Souza", key: "G", url: "https://www.cifraclub.com.br/julliany-souza/adorarei/", views: "134.332", difficulty: "Intermediário" },
        { title: "Lugar da Tua Presença", artist: "Julliany Souza", key: "C", url: "https://www.cifraclub.com.br/julliany-souza/lugar-da-tua-presenca/", views: "128.776", difficulty: "Básico" },
        { title: "Eu Confio", artist: "Julliany Souza", key: "D", url: "https://www.cifraclub.com.br/julliany-souza/eu-confio/", views: "118.443", difficulty: "Intermediário" },
        // === LAURA SOUGUELLIS ===
        { title: "Em Teus Braços", artist: "Laura Souguellis", key: "F", url: "https://www.cifraclub.com.br/laura-souguellis/em-teus-bracos/", views: "143.228", difficulty: "Básico" },
        { title: "Nosso Deus", artist: "Laura Souguellis", key: "C", url: "https://www.cifraclub.com.br/laura-souguellis/nosso-deus/", views: "134.887", difficulty: "Intermediário" },
        { title: "Vem, Espírito Santo", artist: "Laura Souguellis", key: "G", url: "https://www.cifraclub.com.br/laura-souguellis/vem-espirito-santo/", views: "128.332", difficulty: "Básico" },
        { title: "Um Sonho de Deus", artist: "Laura Souguellis", key: "D", url: "https://www.cifraclub.com.br/laura-souguellis/um-sonho-de-deus/", views: "118.776", difficulty: "Intermediário" },
        { title: "Águas Profundas", artist: "Laura Souguellis", key: "A", url: "https://www.cifraclub.com.br/laura-souguellis/aguas-profundas/", views: "108.443", difficulty: "Avançado" },
        // === ALESSANDRO VILAS BOAS ===
        { title: "Há Poder", artist: "Alessandro Vilas Boas", key: "G", url: "https://www.cifraclub.com.br/alessandro-vilas-boas/ha-poder/", views: "134.887", difficulty: "Intermediário" },
        { title: "Tempo de Festa", artist: "Alessandro Vilas Boas", key: "C", url: "https://www.cifraclub.com.br/alessandro-vilas-boas/tempo-de-festa/", views: "128.332", difficulty: "Básico" },
        { title: "Fogo Santo", artist: "Alessandro Vilas Boas", key: "D", url: "https://www.cifraclub.com.br/alessandro-vilas-boas/fogo-santo/", views: "118.776", difficulty: "Intermediário" },
        { title: "Quebrantado", artist: "Alessandro Vilas Boas", key: "A", url: "https://www.cifraclub.com.br/alessandro-vilas-boas/quebrantado/", views: "108.443", difficulty: "Básico" },
        // === THALLES ROBERTO ===
        { title: "Deus da Minha Vida", artist: "Thalles Roberto", key: "G", url: "https://www.cifraclub.com.br/thalles-roberto/deus-da-minha-vida/", views: "156.887", difficulty: "Básico" },
        { title: "Arde Outra Vez", artist: "Thalles Roberto", key: "C", url: "https://www.cifraclub.com.br/thalles-roberto/arde-outra-vez/", views: "145.332", difficulty: "Intermediário" },
        { title: "Casa de Deus", artist: "Thalles Roberto", key: "D", url: "https://www.cifraclub.com.br/thalles-roberto/casa-de-deus/", views: "134.776", difficulty: "Básico" },
        { title: "Na Mesa do Rei", artist: "Thalles Roberto", key: "A", url: "https://www.cifraclub.com.br/thalles-roberto/na-mesa-do-rei/", views: "128.221", difficulty: "Intermediário" },
        { title: "Até Tocar o Céu", artist: "Thalles Roberto", key: "E", url: "https://www.cifraclub.com.br/thalles-roberto/ate-tocar-o-ceu/", views: "118.443", difficulty: "Básico" },
        // === FERNANDA BRUM ===
        { title: "Espírito Santo", artist: "Fernanda Brum", key: "A", url: "https://www.cifraclub.com.br/fernanda-brum/espirito-santo/", views: "167.554", difficulty: "Intermediário" },
        { title: "Profetizando às Nações", artist: "Fernanda Brum", key: "G", url: "https://www.cifraclub.com.br/fernanda-brum/profetizando-as-nacoes/", views: "145.887", difficulty: "Avançado" },
        { title: "Redentor", artist: "Fernanda Brum", key: "C", url: "https://www.cifraclub.com.br/fernanda-brum/redentor/", views: "134.332", difficulty: "Básico" },
        { title: "O Que Sua Glória Fez Comigo", artist: "Fernanda Brum", key: "D", url: "https://www.cifraclub.com.br/fernanda-brum/o-que-sua-gloria-fez-comigo/", views: "128.776", difficulty: "Intermediário" },
        { title: "Apenas um Toque", artist: "Fernanda Brum", key: "E", url: "https://www.cifraclub.com.br/fernanda-brum/apenas-um-toque/", views: "118.221", difficulty: "Básico" },
        // === ELI SOARES ===
        { title: "Deus Está Aqui", artist: "Eli Soares", key: "G", url: "https://www.cifraclub.com.br/eli-soares/deus-esta-aqui/", views: "178.554", difficulty: "Básico" },
        { title: "Todo Poderoso", artist: "Eli Soares", key: "C", url: "https://www.cifraclub.com.br/eli-soares/todo-poderoso/", views: "156.332", difficulty: "Intermediário" },
        { title: "Agindo Deus", artist: "Eli Soares", key: "D", url: "https://www.cifraclub.com.br/eli-soares/agindo-deus/", views: "145.887", difficulty: "Básico" },
        { title: "Tempo de Adorar", artist: "Eli Soares", key: "A", url: "https://www.cifraclub.com.br/eli-soares/tempo-de-adorar/", views: "134.221", difficulty: "Intermediário" },
        { title: "Pra Sempre", artist: "Eli Soares", key: "E", url: "https://www.cifraclub.com.br/eli-soares/pra-sempre/", views: "128.776", difficulty: "Básico" },
        // === FELIPE RODRIGUES ===
        { title: "Meu Respirar", artist: "Felipe Rodrigues", key: "G", url: "https://www.cifraclub.com.br/felipe-rodrigues/meu-respirar/", views: "134.887", difficulty: "Básico" },
        { title: "Tremenda Graça", artist: "Felipe Rodrigues", key: "C", url: "https://www.cifraclub.com.br/felipe-rodrigues/tremenda-graca/", views: "128.332", difficulty: "Intermediário" },
        { title: "Senhor dos Senhores", artist: "Felipe Rodrigues", key: "D", url: "https://www.cifraclub.com.br/felipe-rodrigues/senhor-dos-senhores/", views: "118.776", difficulty: "Básico" },
        { title: "Fogo Consumidor", artist: "Felipe Rodrigues", key: "A", url: "https://www.cifraclub.com.br/felipe-rodrigues/fogo-consumidor/", views: "108.443", difficulty: "Intermediário" },
        // === ISADORA POMPEO ===
        { title: "Bom Perfume", artist: "Isadora Pompeo", key: "C", url: "https://www.cifraclub.com.br/isadora-pompeo/bom-perfume/", views: "189.554", difficulty: "Básico" },
        { title: "Ovelhinha", artist: "Isadora Pompeo", key: "G", url: "https://www.cifraclub.com.br/isadora-pompeo/ovelhinha/", views: "167.332", difficulty: "Iniciante" },
        { title: "Jesus Cristo Basta", artist: "Isadora Pompeo", key: "D", url: "https://www.cifraclub.com.br/isadora-pompeo/jesus-cristo-basta/", views: "145.887", difficulty: "Básico" },
        { title: "Pra Você", artist: "Isadora Pompeo", key: "A", url: "https://www.cifraclub.com.br/isadora-pompeo/pra-voce/", views: "134.221", difficulty: "Intermediário" },
        { title: "Preciso Confiar", artist: "Isadora Pompeo", key: "E", url: "https://www.cifraclub.com.br/isadora-pompeo/preciso-confiar/", views: "128.776", difficulty: "Básico" },
        { title: "Peniel", artist: "Isadora Pompeo", key: "F", url: "https://www.cifraclub.com.br/isadora-pompeo/peniel/", views: "118.443", difficulty: "Intermediário" }
    ];
}
function addToLocal(encodedSong) {
    try {
        const song = JSON.parse(atob(encodedSong));
        // Verificar se já existe
        const exists = AppState.songs.some(s => 
            s.title.toLowerCase() === song.title.toLowerCase() &&
            s.artist.toLowerCase() === song.artist.toLowerCase()
        );
        if (exists) {
            showInfoMessage('Esta música já está no seu repertório local!');
            return;
        }
        // Adicionar ao repertório local
        const newSong = {
            id: Date.now(),
            title: song.title,
            artist: song.artist,
            key: song.key,
            source: 'cifraclub',
            url: song.url,
            addedAt: new Date().toISOString()
        };
        AppState.songs.push(newSong);
        // Registrar atividade
        addActivity(
            'song_add',
            'Música adicionada',
            `${AppState.currentUser.name} adicionou "${song.title}" - ${song.artist} ao repertório`,
            'success'
        );
        // Salvar no localStorage
        localStorage.setItem('feedsSongs', JSON.stringify(AppState.songs));
        showSuccessMessage(`"${song.title}" foi adicionada ao repertório local!`);
        // Atualizar estatísticas do dashboard
        updateDashboardData();
    } catch (error) {
        showErrorMessage('Erro ao adicionar música ao repertório');
    }
}
// === MODAL MANAGEMENT === //
function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('show');
    });
    // Fechar especificamente o modal de atividades se estiver aberto
    const allActivitiesModal = document.getElementById('allActivitiesModal');
    if (allActivitiesModal) {
        allActivitiesModal.classList.remove('show');
    }
}
// === UTILITY FUNCTIONS === //
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('pt-BR', options)
        .replace(/^\w/, c => c.toUpperCase());
}
// === NOTIFICATION SYSTEM === //
function showSuccessMessage(message) {
    showNotification(message, 'success');
}
function showErrorMessage(message) {
    showNotification(message, 'error');
}
function showInfoMessage(message) {
    showNotification(message, 'info');
}
function showNotification(message, type = 'info') {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    const icon = type === 'success' ? 'check-circle' : 
                 type === 'error' ? 'exclamation-circle' : 
                 'info-circle';
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: ${type === 'success' ? '#10B981' : 
                     type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 400px;
    `;
    notification.querySelector('button').style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        margin-left: auto;
    `;
    document.body.appendChild(notification);
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}
function showConfirmDialog(title, message, onConfirm) {
    const overlay = document.createElement('div');
    overlay.className = 'confirm-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease-out;
    `;
    const dialog = document.createElement('div');
    dialog.style.cssText = `
        background: white;
        border-radius: 16px;
        padding: 2rem;
        max-width: 400px;
        width: 90%;
        text-align: center;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        animation: slideUp 0.3s ease-out;
    `;
    dialog.innerHTML = `
        <h3 style="margin-bottom: 1rem; color: #1E293B;">${title}</h3>
        <p style="margin-bottom: 2rem; color: #64748B;">${message}</p>
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <button class="btn-secondary" onclick="this.closest('.confirm-overlay').remove()">
                Cancelar
            </button>
            <button class="btn-primary" id="confirmBtn">
                Confirmar
            </button>
        </div>
    `;
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
    // Adicionar event listener para o botão de confirmação
    const confirmBtn = dialog.querySelector('#confirmBtn');
    confirmBtn.addEventListener('click', () => {
        overlay.remove();
        onConfirm();
    });
}
// Add animation styles
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;
document.head.appendChild(animationStyles); 
// === ENHANCED SCHEDULE FUNCTIONS === //
function deleteSchedule(scheduleId) {
    // Verificar permissões
    if (!hasPermission('delete_schedule')) {
        showErrorMessage('Apenas líderes e pastores podem excluir escalas.');
        return;
    }
    const schedule = AppState.schedules.find(s => s.id === scheduleId);
    if (!schedule) return;
    scheduleToDelete = scheduleId;
    // Update delete modal info
    const formattedDate = new Date(schedule.date).toLocaleDateString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('deleteScheduleInfo').textContent = formattedDate;
    // Show confirmation modal
    document.getElementById('confirmDeleteModal').style.display = 'flex';
}
function confirmDeleteSchedule() {
    if (!scheduleToDelete) return;
    // Encontrar a escala antes de deletar para registrar atividade
    const schedule = AppState.schedules.find(s => s.id === scheduleToDelete);
    // Remove schedule from state
    AppState.schedules = AppState.schedules.filter(s => s.id !== scheduleToDelete);
    // Registrar atividade de exclusão
    if (schedule) {
        addActivity(
            'schedule_delete',
            'Escala excluída',
            `${AppState.currentUser.name} excluiu escala de ${schedule.date}`,
            'danger'
        );
    }
    // Save to localStorage
    saveToLocalStorage();
    // Re-render schedules
    renderSchedules();
    updateDashboardData();
    // Close modal and show notification
    closeConfirmDeleteModal();
    showNotification('Escala excluída com sucesso!', 'success');
    scheduleToDelete = null;
}
function closeConfirmDeleteModal() {
    document.getElementById('confirmDeleteModal').style.display = 'none';
    scheduleToDelete = null;
}
// Enhanced editSchedule function
function enhancedEditSchedule(scheduleId) {
    // Verificar permissões
    if (!hasPermission('edit_schedule')) {
        showErrorMessage('Apenas líderes e pastores podem editar escalas.');
        return;
    }
    const schedule = AppState.schedules.find(s => s.id === scheduleId);
    if (!schedule) {
        showErrorMessage('Escala não encontrada.');
        return;
    }
    currentEditingScheduleId = scheduleId;
    // Update modal title with visual indicator
    document.getElementById('scheduleModalTitle').innerHTML = '<i class="fas fa-edit"></i> Editar Escala';
    document.getElementById('saveScheduleBtn').innerHTML = '<i class="fas fa-save"></i> Atualizar Escala';
    // Fill form with schedule data
    document.getElementById('scheduleId').value = schedule.id;
    document.getElementById('scheduleDate').value = schedule.date;
    
    // Convert existing date format back to date input if needed
    parseExistingScheduleDate(schedule.date);
            document.getElementById('vocalPrincipal').value = schedule.roles.ministro || '';
    document.getElementById('violaoSelect').value = schedule.roles.violao || '';
    document.getElementById('guitarraSelect').value = schedule.roles.guitarra || '';
    document.getElementById('tecladoSelect').value = schedule.roles.teclado || '';
    document.getElementById('bateriaSelect').value = schedule.roles.bateria || '';
    document.getElementById('baixoSelect').value = schedule.roles.baixo || '';
    document.getElementById('projetorSelect').value = schedule.roles.projetor || '';
    // Handle back vocal (novo seletor)
    if (schedule.roles.back_vocal) {
        setBackVocalValues(schedule.roles.back_vocal);
    }
    // Registrar atividade de início de edição
    addActivity(
        'schedule_edit_start',
        'Edição iniciada',
        `${AppState.currentUser.name} iniciou edição da escala de ${schedule.date}`,
        'info'
    );
    openScheduleModal();
}
// Override the original editSchedule function
window.editSchedule = enhancedEditSchedule;
// Função para destacar escala editada
function highlightEditedSchedule(scheduleId) {
    const scheduleElement = document.querySelector(`[data-schedule-id="${scheduleId}"]`);
    if (scheduleElement) {
        scheduleElement.classList.add('recently-edited');
        // Remover o destaque após 3 segundos
        setTimeout(() => {
            scheduleElement.classList.remove('recently-edited');
        }, 3000);
        // Scroll suave até a escala editada
        scheduleElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}
// === SISTEMA DE PLAYLISTS === //
// Estado das playlists
let currentView = 'playlists'; // 'playlists' ou 'search'
// Inicializar playlists no estado da aplicação
function initializePlaylists() {
    if (!AppState.playlists) {
        AppState.playlists = {};
        // Criar playlist para cada usuário
        mockData.users.forEach(user => {
            AppState.playlists[user.username] = [];
        });
        // Adicionar algumas músicas de exemplo para alguns usuários
        AppState.playlists['kaue'] = [
            {
                videoId: 'bondade001',
                title: 'Bondade de Deus - Fernandinho',
                channel: 'Fernandinho',
                thumbnail: 'https://img.youtube.com/vi/bondade001/mqdefault.jpg',
                addedAt: new Date().toISOString()
            },
            {
                videoId: 'oceanos002',
                title: 'Oceanos - Gabriela Rocha',
                channel: 'Gabriela Rocha',
                thumbnail: 'https://img.youtube.com/vi/oceanos002/mqdefault.jpg',
                addedAt: new Date().toISOString()
            }
        ];
        AppState.playlists['dudu'] = [
            {
                videoId: 'reckless003',
                title: 'Reckless Love - Fernandinho',
                channel: 'Fernandinho',
                thumbnail: 'https://img.youtube.com/vi/reckless003/mqdefault.jpg',
                addedAt: new Date().toISOString()
            }
        ];
        AppState.playlists['fernando'] = [
            {
                videoId: 'jesus004',
                title: 'Jesus - Gabriela Rocha',
                channel: 'Gabriela Rocha',
                thumbnail: 'https://img.youtube.com/vi/jesus004/mqdefault.jpg',
                addedAt: new Date().toISOString()
            }
        ];
        saveToLocalStorage();
    } else {
    }
}
// Função para resetar playlists (para debug)
function resetPlaylists() {
    AppState.playlists = null;
    localStorage.removeItem('feedsAppState');
    initializePlaylists();
    loadPlaylists();
}
// Função de teste para debug (pode ser chamada no console)
function testPlaylists() {
    // Forçar carregamento
    loadPlaylists();
}
// Função para debug completo (pode ser chamada no console)
function debugPlaylists() {
    // Verificar elementos DOM
    // Forçar inicialização e carregamento
    initializePlaylists();
    loadPlaylists();
}
// Função para testar remoção de música (pode ser chamada no console)
function testRemoveMusic() {
    if (!AppState.currentUser) {
        return;
    }
    const username = AppState.currentUser.username;
    const playlist = AppState.playlists[username] || [];
    if (playlist.length === 0) {
        return;
    }
}
// Função para verificar fotos dos usuários (pode ser chamada no console)
function checkUserPhotos() {
    let usersWithPhotos = 0;
    let usersWithoutPhotos = 0;
    mockData.users.forEach(user => {
        if (user.photo) {
            usersWithPhotos++;
        } else {
            usersWithoutPhotos++;
        }
    });
    if (usersWithoutPhotos === 0) {
    }
}
// Carregar e exibir playlists
function loadPlaylists() {
    // Garantir que as playlists estejam inicializadas
    initializePlaylists();
    const container = document.getElementById('playlistsGrid');
    if (!container) {
        return;
    }
    // Limpar container
    container.innerHTML = '';
    // Verificar se há usuários
    if (!mockData.users || mockData.users.length === 0) {
        container.innerHTML = '<p style="color: white; text-align: center; padding: 2rem;">Nenhum usuário encontrado</p>';
        return;
    }
    // Criar cards para cada usuário
    let cardsCreated = 0;
    mockData.users.forEach((user, index) => {
        try {
            const userPlaylist = AppState.playlists[user.username] || [];
            const playlistCard = createPlaylistCard(user, userPlaylist);
            container.appendChild(playlistCard);
            cardsCreated++;
        } catch (error) {
        }
    });
}
// Criar card de playlist para um usuário
function createPlaylistCard(user, playlist) {
    const div = document.createElement('div');
    div.className = 'playlist-card';
    div.style.cursor = 'pointer';
    div.onclick = () => {
        openPlaylist(user.username);
    };
    // Verificar se o usuário tem foto
    let avatarContent;
    if (user.photo) {
        const avatarSrc = user.photo.startsWith('http') ? user.photo : user.photo;
        avatarContent = `<img src="${avatarSrc}" alt="${user.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <i class="fas fa-user" style="display: none;"></i>`;
    } else {
        avatarContent = `<i class="fas fa-user"></i>`;
    }
    div.innerHTML = `
        <div class="playlist-header">
            <div class="playlist-avatar">
                ${avatarContent}
            </div>
            <div class="playlist-info">
                <h4>${user.name || 'Usuário'}</h4>
                <p>${user.role || 'Membro'}</p>
            </div>
        </div>
        <div class="playlist-stats">
            <span class="song-count">
                <strong>${playlist.length}</strong> ${playlist.length === 1 ? 'música' : 'músicas'}
            </span>
        </div>
    `;
    return div;
}
// Abrir playlist de um usuário
function openPlaylist(username) {
    const user = mockData.users.find(u => u.username === username);
    const playlist = AppState.playlists[username] || [];
    if (!user) {
        return;
    }
    // Criar modal para exibir a playlist
    const modal = document.createElement('div');
    modal.className = 'modal playlist-modal';
    modal.id = 'playlistModal';
    const canEdit = AppState.currentUser.username === username;
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 800px;">
            <div class="modal-header">
                <h3>Playlist de ${user.name}</h3>
                <button class="modal-close" onclick="closePlaylistModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="playlist-songs" id="playlistSongs">
                ${playlist.length === 0 ? 
                    `<div class="no-results">
                        <i class="fas fa-music"></i>
                        <h3>Playlist vazia</h3>
                        <p>${canEdit ? 'Adicione músicas usando a busca do YouTube' : 'Este usuário ainda não adicionou músicas'}</p>
                    </div>` :
                    playlist.map(song => createPlaylistSongItem(song, canEdit, username)).join('')
                }
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}
// Criar item de música na playlist
function createPlaylistSongItem(song, canEdit, playlistOwner = null) {
    return `
        <div class="playlist-song-item">
            <img src="${song.thumbnail}" alt="${song.title}" class="playlist-song-thumbnail">
            <div class="playlist-song-info">
                <h5>${song.title}</h5>
                <p>${song.channel}</p>
            </div>
            <div class="playlist-song-actions">
                <button class="btn-icon-small" onclick="playYouTubeVideo('${song.videoId}', '${song.title}', '${song.channel}', '${song.thumbnail}')" title="Reproduzir">
                    <i class="fas fa-play"></i>
                </button>
                ${canEdit ? `
                    <button class="btn-icon-small danger" onclick="removeFromPlaylist('${song.videoId}', '${playlistOwner}')" title="Remover da minha playlist">
                        <i class="fas fa-trash"></i>
                    </button>
                ` : ''}
            </div>
        </div>
    `;
}
// Fechar modal da playlist
function closePlaylistModal() {
    const modal = document.getElementById('playlistModal');
    if (modal) {
        modal.remove();
    }
}
// Alternar entre visualizações
function showPlaylistView() {
    currentView = 'playlists';
    const playlistsView = document.getElementById('playlistsView');
    const searchView = document.getElementById('searchView');
    if (playlistsView) {
        playlistsView.classList.remove('hidden');
    } else {
    }
    if (searchView) {
        searchView.classList.add('hidden');
    }
    // Animação suave para mostrar mensagem do repertório e esconder do YouTube
    const repertorioInfo = document.getElementById('repertorioInfo');
    const youtubeInfo = document.getElementById('youtubeInfo');
    if (youtubeInfo) {
        youtubeInfo.classList.add('fade-out');
        setTimeout(() => {
            youtubeInfo.style.display = 'none';
            youtubeInfo.classList.remove('fade-out');
        }, 300);
    }
    setTimeout(() => {
        if (repertorioInfo) {
            repertorioInfo.style.display = 'block';
            repertorioInfo.style.opacity = '0';
            repertorioInfo.style.transform = 'translateY(20px)';
            setTimeout(() => {
                repertorioInfo.style.opacity = '1';
                repertorioInfo.style.transform = 'translateY(0)';
            }, 50);
        }
    }, 200);
    // Atualizar botões
    document.querySelector('[onclick="showPlaylistView()"]').classList.add('btn-primary');
    document.querySelector('[onclick="showPlaylistView()"]').classList.remove('btn-secondary');
    document.querySelector('[onclick="showSearchView()"]').classList.add('btn-secondary');
    document.querySelector('[onclick="showSearchView()"]').classList.remove('btn-primary');
    // Recarregar playlists quando mostrar a view
    setTimeout(() => {
        loadPlaylists();
    }, 300);
    // Forçar carregamento imediato também
    loadPlaylists();
}
function showSearchView() {
    currentView = 'search';
    document.getElementById('playlistsView').classList.add('hidden');
    document.getElementById('searchView').classList.remove('hidden');
    // Animação suave para esconder mensagem do repertório e mostrar do YouTube
    const repertorioInfo = document.getElementById('repertorioInfo');
    const youtubeInfo = document.getElementById('youtubeInfo');
    if (repertorioInfo) {
        repertorioInfo.classList.add('fade-out');
        setTimeout(() => {
            repertorioInfo.style.display = 'none';
            repertorioInfo.classList.remove('fade-out');
        }, 300);
    }
    setTimeout(() => {
        if (youtubeInfo) {
            youtubeInfo.style.display = 'block';
            youtubeInfo.style.opacity = '0';
            youtubeInfo.style.transform = 'translateY(20px)';
            setTimeout(() => {
                youtubeInfo.style.opacity = '1';
                youtubeInfo.style.transform = 'translateY(0)';
            }, 50);
        }
    }, 200);
    // Atualizar botões
    document.querySelector('[onclick="showSearchView()"]').classList.add('btn-primary');
    document.querySelector('[onclick="showSearchView()"]').classList.remove('btn-secondary');
    document.querySelector('[onclick="showPlaylistView()"]').classList.add('btn-secondary');
    document.querySelector('[onclick="showPlaylistView()"]').classList.remove('btn-primary');
}
// Busca rápida
function quickSearch(query) {
    const searchInput = document.getElementById('youtubeSearch');
    searchInput.value = query;
    // Adicionar efeito visual
    searchInput.focus();
    searchInput.style.background = 'linear-gradient(135deg, #f0f9ff, #e0f2fe)';
    setTimeout(() => {
        searchInput.style.background = 'transparent';
        searchYouTube();
    }, 300);
}
// Buscar no YouTube (API Real)
async function searchYouTube() {
    const searchInput = document.getElementById('youtubeSearch');
    const searchBtn = document.querySelector('.btn-search-modern');
    const query = searchInput.value.trim();
    if (!query) {
        showErrorMessage('Digite algo para pesquisar');
        // Efeito de shake no input vazio
        searchInput.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            searchInput.style.animation = '';
        }, 500);
        return;
    }
    // Efeitos de loading no botão
    const originalBtnContent = searchBtn.innerHTML;
    searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Buscando...</span>';
    searchBtn.disabled = true;
    searchInput.disabled = true;
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = `
        <div class="loading-modern">
            <div class="loading-spinner"></div>
            <h3>🎵 Buscando no YouTube...</h3>
            <p>Procurando por "<strong>${query}</strong>"</p>
            <small>Conectando com a API do YouTube</small>
        </div>
    `;
    try {
        // Buscar na API real do YouTube
        const results = await searchYouTubeAPI(query);
        // Pequeno delay para mostrar o loading
        await new Promise(resolve => setTimeout(resolve, 800));
        displayYouTubeResults(results);
        // Efeito de sucesso no botão
        searchBtn.innerHTML = '<i class="fas fa-check"></i><span>Encontrado!</span>';
        searchBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        setTimeout(() => {
            searchBtn.innerHTML = originalBtnContent;
            searchBtn.style.background = '';
        }, 1500);
        // Registrar atividade
        addActivity('search', `Pesquisou por '${query}'`, `${AppState.currentUser.name} pesquisou por '${query}' no YouTube`, 'success');
    } catch (error) {
        // Fallback para busca simulada
        try {
            const fallbackResults = await simulateYouTubeSearch(query);
            displayYouTubeResults(fallbackResults);
            // Efeito de aviso no botão
            searchBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i><span>Modo Offline</span>';
            searchBtn.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
            setTimeout(() => {
                searchBtn.innerHTML = originalBtnContent;
                searchBtn.style.background = '';
            }, 2000);
            showInfoMessage('Usando resultados locais (API temporariamente indisponível)');
            addActivity('search', `Pesquisou por '${query}'`, `${AppState.currentUser.name} pesquisou por '${query}' (modo local)`, 'warning');
        } catch (fallbackError) {
            resultsContainer.innerHTML = `
                <div class="search-error">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>Erro na pesquisa</h3>
                    <p>Não foi possível conectar ao YouTube. Tente novamente.</p>
                </div>
            `;
            // Efeito de erro no botão
            searchBtn.innerHTML = '<i class="fas fa-times"></i><span>Erro</span>';
            searchBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            setTimeout(() => {
                searchBtn.innerHTML = originalBtnContent;
                searchBtn.style.background = '';
            }, 2000);
        }
    } finally {
        // Restaurar botão e input
        searchBtn.disabled = false;
        searchInput.disabled = false;
    }
}
// Buscar na API real do YouTube
async function searchYouTubeAPI(query) {
    if (!isAPIAvailable()) {
        throw new Error('API não disponível em protocolo file://');
    }
    const API_KEY = 'AIzaSyAogW3oOFwshETDAW6B8BT4N6UZGclbJ3M';
    const searchQuery = `${query} gospel louvor`;
    // URL da API do YouTube
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?` +
        `part=snippet&` +
        `q=${encodeURIComponent(searchQuery)}&` +
        `type=video&` +
        `maxResults=12&` +
        `key=${API_KEY}&` +
        `regionCode=BR&` +
        `relevanceLanguage=pt`;
    try {
        const response = await fetch(searchUrl);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.error) {
            throw new Error(`YouTube API Error: ${data.error.message}`);
        }
        // Processar resultados
        const videos = await Promise.all(
            data.items.map(async (item) => {
                const videoDetails = await getVideoDetails(item.id.videoId, API_KEY);
                return {
                    videoId: item.id.videoId,
                    title: item.snippet.title,
                    channel: item.snippet.channelTitle,
                    thumbnail: item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default.url,
                    description: item.snippet.description,
                    publishedAt: item.snippet.publishedAt,
                    duration: videoDetails.duration,
                    views: videoDetails.viewCount,
                    tags: item.snippet.tags || []
                };
            })
        );
        return videos;
    } catch (error) {
        throw error;
    }
}
// Obter detalhes do vídeo (duração e views)
async function getVideoDetails(videoId, apiKey) {
    if (!isAPIAvailable()) {
        return { duration: '4:32', viewCount: '1.2M' }; // Valores padrão
    }
    try {
        const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?` +
            `part=contentDetails,statistics&` +
            `id=${videoId}&` +
            `key=${apiKey}`;
        const response = await fetch(detailsUrl);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.error) {
            throw new Error(`YouTube API Error: ${data.error.message}`);
        }
        if (data.items && data.items.length > 0) {
            const item = data.items[0];
            return {
                duration: formatDuration(item.contentDetails.duration),
                viewCount: formatViewCount(item.statistics.viewCount)
            };
        }
        return { duration: '0:00', viewCount: '0' };
    } catch (error) {
        return { duration: '4:32', viewCount: '1.2M' }; // Valores padrão em caso de erro
    }
}
// Formatar duração do YouTube (PT4M13S -> 4:13)
function formatDuration(duration) {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = (match[1] || '').replace('H', '');
    const minutes = (match[2] || '').replace('M', '');
    const seconds = (match[3] || '').replace('S', '');
    if (hours) {
        return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
    }
    return `${minutes || '0'}:${seconds.padStart(2, '0')}`;
}
// Formatar contagem de visualizações
function formatViewCount(count) {
    const num = parseInt(count);
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}
// Simular busca no YouTube (fallback)
async function simulateYouTubeSearch(query) {
    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Base de dados expandida do YouTube com centenas de músicas
    const youtubeDatabase = getExpandedYouTubeDatabase();
    // Algoritmo de busca mais inteligente
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 2);
    let results = [];
    // Busca exata primeiro
    const exactMatches = youtubeDatabase.filter(video => 
        video.title.toLowerCase().includes(query.toLowerCase()) ||
        video.channel.toLowerCase().includes(query.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    results = [...exactMatches];
    // Se não encontrou resultados exatos, busca por termos individuais
    if (results.length === 0 && searchTerms.length > 0) {
        const partialMatches = youtubeDatabase.filter(video => {
            const videoText = `${video.title} ${video.channel} ${video.tags.join(' ')}`.toLowerCase();
            return searchTerms.some(term => videoText.includes(term));
        });
        results = [...partialMatches];
    }
    // Se ainda não encontrou, gera resultados baseados na pesquisa
    if (results.length === 0) {
        results = generateDynamicResults(query);
    }
    // Ordenar por relevância e popularidade
    results.sort((a, b) => {
        const aViews = parseInt(a.views.replace(/[^\d]/g, ''));
        const bViews = parseInt(b.views.replace(/[^\d]/g, ''));
        return bViews - aViews;
    });
    return results.slice(0, 8); // Retornar até 8 resultados
}
// Base de dados expandida do YouTube
function getExpandedYouTubeDatabase() {
    return [
        // MÚSICAS GOSPEL POPULARES
        {
            videoId: 'bondade001',
            title: 'Bondade de Deus - Isaías Saad',
            channel: 'Isaías Saad',
            thumbnail: 'https://img.youtube.com/vi/bondade001/mqdefault.jpg',
            duration: '4:32',
            views: '12.5M',
            tags: ['bondade', 'deus', 'isaias', 'saad', 'gospel', 'adoracao']
        },
        {
            videoId: 'aguas002',
            title: 'Águas Purificadoras - Diante do Trono',
            channel: 'Diante do Trono',
            thumbnail: 'https://img.youtube.com/vi/aguas002/mqdefault.jpg',
            duration: '5:18',
            views: '8.3M',
            tags: ['aguas', 'purificadoras', 'diante', 'trono', 'gospel', 'louvor']
        },
        {
            videoId: 'santo003',
            title: 'Santo Pra Sempre - Gabriel Guedes',
            channel: 'Gabriel Guedes',
            thumbnail: 'https://img.youtube.com/vi/santo003/mqdefault.jpg',
            duration: '6:45',
            views: '15.2M',
            tags: ['santo', 'sempre', 'gabriel', 'guedes', 'gospel', 'adoracao']
        },
        {
            videoId: 'oceanos004',
            title: 'Oceanos - Isaías Saad',
            channel: 'Isaías Saad',
            thumbnail: 'https://img.youtube.com/vi/oceanos004/mqdefault.jpg',
            duration: '7:12',
            views: '22.1M',
            tags: ['oceanos', 'isaias', 'saad', 'gospel', 'adoracao', 'hillsong']
        },
        {
            videoId: 'sangue005',
            title: 'Nada Além do Sangue - Fernandinho',
            channel: 'Fernandinho',
            thumbnail: 'https://img.youtube.com/vi/sangue005/mqdefault.jpg',
            duration: '4:58',
            views: '9.7M',
            tags: ['nada', 'alem', 'sangue', 'fernandinho', 'gospel', 'louvor']
        },
        {
            videoId: 'morada006',
            title: 'Tu És Santo - MORADA',
            channel: 'MORADA',
            thumbnail: 'https://img.youtube.com/vi/morada006/mqdefault.jpg',
            duration: '5:33',
            views: '6.9M',
            tags: ['tu', 'es', 'santo', 'morada', 'gospel', 'adoracao']
        },
        {
            videoId: 'ressuscita007',
            title: 'Ressuscita-me - Aline Barros',
            channel: 'Aline Barros',
            thumbnail: 'https://img.youtube.com/vi/ressuscita007/mqdefault.jpg',
            duration: '4:21',
            views: '18.8M',
            tags: ['ressuscita', 'me', 'aline', 'barros', 'gospel', 'louvor']
        },
        {
            videoId: 'preciso008',
            title: 'Preciso de Ti - Diante do Trono',
            channel: 'Diante do Trono',
            thumbnail: 'https://img.youtube.com/vi/preciso008/mqdefault.jpg',
            duration: '5:47',
            views: '11.3M',
            tags: ['preciso', 'ti', 'diante', 'trono', 'gospel', 'adoracao']
        },
        // FERNANDINHO
        {
            videoId: 'caia009',
            title: 'Caia Fogo - Fernandinho',
            channel: 'Fernandinho',
            thumbnail: 'https://img.youtube.com/vi/caia009/mqdefault.jpg',
            duration: '4:15',
            views: '7.2M',
            tags: ['caia', 'fogo', 'fernandinho', 'gospel', 'louvor', 'avivamento']
        },
        {
            videoId: 'galileu010',
            title: 'Galileu - Fernandinho',
            channel: 'Fernandinho',
            thumbnail: 'https://img.youtube.com/vi/galileu010/mqdefault.jpg',
            duration: '3:58',
            views: '5.4M',
            tags: ['galileu', 'fernandinho', 'gospel', 'louvor']
        },
        {
            videoId: 'yeshua011',
            title: 'Yeshua - Fernandinho',
            channel: 'Fernandinho',
            thumbnail: 'https://img.youtube.com/vi/yeshua011/mqdefault.jpg',
            duration: '6:22',
            views: '8.9M',
            tags: ['yeshua', 'fernandinho', 'gospel', 'adoracao', 'jesus']
        },
        // GABRIELA ROCHA
        {
            videoId: 'atos012',
            title: 'Atos 2 - Gabriela Rocha',
            channel: 'Gabriela Rocha',
            thumbnail: 'https://img.youtube.com/vi/atos012/mqdefault.jpg',
            duration: '5:44',
            views: '13.7M',
            tags: ['atos', 'dois', 'gabriela', 'rocha', 'gospel', 'pentecostes']
        },
        {
            videoId: 'eusou013',
            title: 'Eu Sou - Gabriela Rocha',
            channel: 'Gabriela Rocha',
            thumbnail: 'https://img.youtube.com/vi/eusou013/mqdefault.jpg',
            duration: '4:33',
            views: '9.1M',
            tags: ['eu', 'sou', 'gabriela', 'rocha', 'gospel', 'adoracao']
        },
        {
            videoId: 'lugar014',
            title: 'Lugar Secreto - Gabriela Rocha',
            channel: 'Gabriela Rocha',
            thumbnail: 'https://img.youtube.com/vi/lugar014/mqdefault.jpg',
            duration: '6:18',
            views: '16.4M',
            tags: ['lugar', 'secreto', 'gabriela', 'rocha', 'gospel', 'intimidade']
        },
        // ALINE BARROS
        {
            videoId: 'casa015',
            title: 'Casa do Pai - Aline Barros',
            channel: 'Aline Barros',
            thumbnail: 'https://img.youtube.com/vi/casa015/mqdefault.jpg',
            duration: '4:47',
            views: '14.2M',
            tags: ['casa', 'pai', 'aline', 'barros', 'gospel', 'familia']
        },
        {
            videoId: 'jeova016',
            title: 'Jeová Jireh - Aline Barros',
            channel: 'Aline Barros',
            thumbnail: 'https://img.youtube.com/vi/jeova016/mqdefault.jpg',
            duration: '5:12',
            views: '10.8M',
            tags: ['jeova', 'jireh', 'aline', 'barros', 'gospel', 'provisao']
        },
        {
            videoId: 'vitoria017',
            title: 'Vitória no Deserto - Aline Barros',
            channel: 'Aline Barros',
            thumbnail: 'https://img.youtube.com/vi/vitoria017/mqdefault.jpg',
            duration: '4:29',
            views: '12.6M',
            tags: ['vitoria', 'deserto', 'aline', 'barros', 'gospel', 'fe']
        },
        // THALLES ROBERTO
        {
            videoId: 'deus018',
            title: 'Deus da Minha Vida - Thalles Roberto',
            channel: 'Thalles Roberto',
            thumbnail: 'https://img.youtube.com/vi/deus018/mqdefault.jpg',
            duration: '4:55',
            views: '8.3M',
            tags: ['deus', 'minha', 'vida', 'thalles', 'roberto', 'gospel']
        },
        {
            videoId: 'arde019',
            title: 'Arde Outra Vez - Thalles Roberto',
            channel: 'Thalles Roberto',
            thumbnail: 'https://img.youtube.com/vi/arde019/mqdefault.jpg',
            duration: '5:38',
            views: '11.9M',
            tags: ['arde', 'outra', 'vez', 'thalles', 'roberto', 'gospel', 'fogo']
        },
        // PRETO NO BRANCO
        {
            videoId: 'gratidao020',
            title: 'Gratidão - Preto no Branco',
            channel: 'Preto no Branco',
            thumbnail: 'https://img.youtube.com/vi/gratidao020/mqdefault.jpg',
            duration: '3:42',
            views: '7.1M',
            tags: ['gratidao', 'preto', 'branco', 'gospel', 'louvor']
        },
        {
            videoId: 'livre021',
            title: 'Livre Sou - Preto no Branco',
            channel: 'Preto no Branco',
            thumbnail: 'https://img.youtube.com/vi/livre021/mqdefault.jpg',
            duration: '4:18',
            views: '9.4M',
            tags: ['livre', 'sou', 'preto', 'branco', 'gospel', 'liberdade']
        },
        // PALAVRANTIGA
        {
            videoId: 'meu022',
            title: 'Meu Barquinho - Palavrantiga',
            channel: 'Palavrantiga',
            thumbnail: 'https://img.youtube.com/vi/meu022/mqdefault.jpg',
            duration: '4:03',
            views: '6.8M',
            tags: ['meu', 'barquinho', 'palavrantiga', 'gospel', 'confianca']
        },
        {
            videoId: 'historia023',
            title: 'História de Deus - Palavrantiga',
            channel: 'Palavrantiga',
            thumbnail: 'https://img.youtube.com/vi/historia023/mqdefault.jpg',
            duration: '5:27',
            views: '8.7M',
            tags: ['historia', 'deus', 'palavrantiga', 'gospel', 'testemunho']
        },
        // MÚSICAS VARIADAS
        {
            videoId: 'noite024',
            title: 'Meia Noite - Fernanda Brum',
            channel: 'Fernanda Brum',
            thumbnail: 'https://img.youtube.com/vi/noite024/mqdefault.jpg',
            duration: '4:44',
            views: '5.2M',
            tags: ['meia', 'noite', 'fernanda', 'brum', 'gospel', 'adoracao']
        },
        {
            videoId: 'espera025',
            title: 'A Espera - Fernanda Brum',
            channel: 'Fernanda Brum',
            thumbnail: 'https://img.youtube.com/vi/espera025/mqdefault.jpg',
            duration: '5:15',
            views: '4.9M',
            tags: ['espera', 'fernanda', 'brum', 'gospel', 'paciencia']
        },
        {
            videoId: 'terra026',
            title: 'Terra Seca - Priscilla Alcantara',
            channel: 'Priscilla Alcantara',
            thumbnail: 'https://img.youtube.com/vi/terra026/mqdefault.jpg',
            duration: '4:31',
            views: '7.6M',
            tags: ['terra', 'seca', 'priscilla', 'alcantara', 'gospel', 'renovacao']
        },
        {
            videoId: 'menina027',
            title: 'Menina dos Olhos - Priscilla Alcantara',
            channel: 'Priscilla Alcantara',
            thumbnail: 'https://img.youtube.com/vi/menina027/mqdefault.jpg',
            duration: '3:58',
            views: '6.3M',
            tags: ['menina', 'olhos', 'priscilla', 'alcantara', 'gospel', 'amor']
        },
        // MAIS MÚSICAS POPULARES
        {
            videoId: 'porque028',
            title: 'Porque Ele Vive - Harpa Cristã',
            channel: 'Harpa Cristã',
            thumbnail: 'https://img.youtube.com/vi/porque028/mqdefault.jpg',
            duration: '3:45',
            views: '15.8M',
            tags: ['porque', 'ele', 'vive', 'harpa', 'crista', 'gospel', 'classico']
        },
        {
            videoId: 'grandioso029',
            title: 'Grandioso És Tu - Harpa Cristã',
            channel: 'Harpa Cristã',
            thumbnail: 'https://img.youtube.com/vi/grandioso029/mqdefault.jpg',
            duration: '4:12',
            views: '12.4M',
            tags: ['grandioso', 'es', 'tu', 'harpa', 'crista', 'gospel', 'classico']
        },
                 {
             videoId: 'aleluia030',
             title: 'Aleluia - Gabriela Rocha',
             channel: 'Gabriela Rocha',
             thumbnail: 'https://img.youtube.com/vi/aleluia030/mqdefault.jpg',
             duration: '5:33',
             views: '19.2M',
             tags: ['aleluia', 'gabriela', 'rocha', 'gospel', 'adoracao', 'louvor']
         },
         // MAIS ARTISTAS E MÚSICAS
         {
             videoId: 'noite031',
             title: 'Meia Noite Eu Oro - Cassiane',
             channel: 'Cassiane',
             thumbnail: 'https://img.youtube.com/vi/noite031/mqdefault.jpg',
             duration: '4:28',
             views: '8.7M',
             tags: ['meia', 'noite', 'oro', 'cassiane', 'gospel', 'oracao']
         },
         {
             videoId: 'amigo032',
             title: 'Amigo - Cassiane',
             channel: 'Cassiane',
             thumbnail: 'https://img.youtube.com/vi/amigo032/mqdefault.jpg',
             duration: '5:12',
             views: '12.3M',
             tags: ['amigo', 'cassiane', 'gospel', 'amizade', 'jesus']
         },
         {
             videoId: 'milagres033',
             title: 'Milagres - Anderson Freire',
             channel: 'Anderson Freire',
             thumbnail: 'https://img.youtube.com/vi/milagres033/mqdefault.jpg',
             duration: '4:45',
             views: '16.8M',
             tags: ['milagres', 'anderson', 'freire', 'gospel', 'fe', 'sobrenatural']
         },
         {
             videoId: 'raridade034',
             title: 'Raridade - Anderson Freire',
             channel: 'Anderson Freire',
             thumbnail: 'https://img.youtube.com/vi/raridade034/mqdefault.jpg',
             duration: '4:33',
             views: '21.4M',
             tags: ['raridade', 'anderson', 'freire', 'gospel', 'amor', 'especial']
         },
         {
             videoId: 'familia035',
             title: 'Família - Kleber Lucas',
             channel: 'Kleber Lucas',
             thumbnail: 'https://img.youtube.com/vi/familia035/mqdefault.jpg',
             duration: '4:18',
             views: '9.2M',
             tags: ['familia', 'kleber', 'lucas', 'gospel', 'uniao', 'lar']
         },
         {
             videoId: 'deus036',
             title: 'Deus Cuida de Mim - Kleber Lucas',
             channel: 'Kleber Lucas',
             thumbnail: 'https://img.youtube.com/vi/deus036/mqdefault.jpg',
             duration: '5:07',
             views: '14.6M',
             tags: ['deus', 'cuida', 'mim', 'kleber', 'lucas', 'gospel', 'cuidado']
         },
         {
             videoId: 'promessas037',
             title: 'Promessas - Regis Danese',
             channel: 'Regis Danese',
             thumbnail: 'https://img.youtube.com/vi/promessas037/mqdefault.jpg',
             duration: '4:52',
             views: '11.8M',
             tags: ['promessas', 'regis', 'danese', 'gospel', 'fe', 'esperanca']
         },
         {
             videoId: 'faz038',
             title: 'Faz um Milagre em Mim - Regis Danese',
             channel: 'Regis Danese',
             thumbnail: 'https://img.youtube.com/vi/faz038/mqdefault.jpg',
             duration: '4:29',
             views: '18.3M',
             tags: ['faz', 'milagre', 'mim', 'regis', 'danese', 'gospel', 'transformacao']
         },
         {
             videoId: 'tempo039',
             title: 'Tempo de Deus - Bruna Karla',
             channel: 'Bruna Karla',
             thumbnail: 'https://img.youtube.com/vi/tempo039/mqdefault.jpg',
             duration: '4:41',
             views: '13.7M',
             tags: ['tempo', 'deus', 'bruna', 'karla', 'gospel', 'paciencia', 'espera']
         },
         {
             videoId: 'sou040',
             title: 'Sou Humano - Bruna Karla',
             channel: 'Bruna Karla',
             thumbnail: 'https://img.youtube.com/vi/sou040/mqdefault.jpg',
             duration: '4:15',
             views: '10.9M',
             tags: ['sou', 'humano', 'bruna', 'karla', 'gospel', 'humanidade', 'fraqueza']
         },
         {
             videoId: 'terremoto041',
             title: 'Terremoto - Eyshila',
             channel: 'Eyshila',
             thumbnail: 'https://img.youtube.com/vi/terremoto041/mqdefault.jpg',
             duration: '4:38',
             views: '7.4M',
             tags: ['terremoto', 'eyshila', 'gospel', 'poder', 'transformacao']
         },
         {
             videoId: 'na042',
             title: 'Na Minha Casa - Eyshila',
             channel: 'Eyshila',
             thumbnail: 'https://img.youtube.com/vi/na042/mqdefault.jpg',
             duration: '4:22',
             views: '6.8M',
             tags: ['na', 'minha', 'casa', 'eyshila', 'gospel', 'lar', 'familia']
         },
         {
             videoId: 'escolhidos043',
             title: 'Escolhidos - Damares',
             channel: 'Damares',
             thumbnail: 'https://img.youtube.com/vi/escolhidos043/mqdefault.jpg',
             duration: '5:03',
             views: '9.6M',
             tags: ['escolhidos', 'damares', 'gospel', 'eleicao', 'chamado']
         },
         {
             videoId: 'sabor044',
             title: 'Sabor de Mel - Damares',
             channel: 'Damares',
             thumbnail: 'https://img.youtube.com/vi/sabor044/mqdefault.jpg',
             duration: '4:47',
             views: '12.1M',
             tags: ['sabor', 'mel', 'damares', 'gospel', 'doce', 'palavra']
         },
         {
             videoId: 'filho045',
             title: 'Filho do Fogo - Gabriel Guedes',
             channel: 'Gabriel Guedes',
             thumbnail: 'https://img.youtube.com/vi/filho045/mqdefault.jpg',
             duration: '5:28',
             views: '8.9M',
             tags: ['filho', 'fogo', 'gabriel', 'guedes', 'gospel', 'poder', 'espirito']
         },
         {
             videoId: 'vitorioso046',
             title: 'Vitorioso És - Gabriel Guedes',
             channel: 'Gabriel Guedes',
             thumbnail: 'https://img.youtube.com/vi/vitorioso046/mqdefault.jpg',
             duration: '6:12',
             views: '15.7M',
             tags: ['vitorioso', 'es', 'gabriel', 'guedes', 'gospel', 'vitoria', 'jesus']
         },
         {
             videoId: 'creio047',
             title: 'Creio Que Tu És a Cura - Gabriel Guedes',
             channel: 'Gabriel Guedes',
             thumbnail: 'https://img.youtube.com/vi/creio047/mqdefault.jpg',
             duration: '5:44',
             views: '11.3M',
             tags: ['creio', 'tu', 'es', 'cura', 'gabriel', 'guedes', 'gospel', 'cura', 'fe']
         }
    ];
}
// Gerar resultados dinâmicos baseados na pesquisa
function generateDynamicResults(query) {
    const artists = [
        'Fernandinho', 'Gabriela Rocha', 'Aline Barros', 'Isaías Saad', 'Diante do Trono', 
        'MORADA', 'Gabriel Guedes', 'Thalles Roberto', 'Preto no Branco', 'Palavrantiga',
        'Fernanda Brum', 'Priscilla Alcantara', 'Harpa Cristã', 'Cassiane', 'Damares',
        'Bruna Karla', 'Eyshila', 'Soraya Moraes', 'Ludmila Ferber', 'Rose Nascimento',
        'Kleber Lucas', 'Davi Sacer', 'Anderson Freire', 'Regis Danese', 'Ministério Zoe',
        'Ministério Apascentar', 'Hillsong United', 'Jesus Culture', 'Bethel Music'
    ];
    const songPrefixes = [
        'Versão Acústica', 'Ao Vivo', 'Playback', 'Cover', 'Remix Gospel', 
        'Versão Estendida', 'Instrumental', 'Karaokê', 'Live Session'
    ];
    const results = [];
    // Gerar diferentes tipos de resultados
    for (let i = 0; i < 8; i++) {
        const randomArtist = artists[Math.floor(Math.random() * artists.length)];
        const randomViews = (Math.random() * 25 + 0.5).toFixed(1) + 'M';
        const randomDuration = Math.floor(Math.random() * 4 + 2) + ':' + String(Math.floor(Math.random() * 60)).padStart(2, '0');
        let title;
        if (i < 3) {
            // Resultados diretos com a pesquisa
            title = `${query} - ${randomArtist}`;
        } else if (i < 6) {
            // Resultados com prefixos
            const prefix = songPrefixes[Math.floor(Math.random() * songPrefixes.length)];
            title = `${query} (${prefix}) - ${randomArtist}`;
        } else {
            // Resultados relacionados
            title = `${query} e outras músicas - ${randomArtist}`;
        }
        results.push({
            videoId: `search_${query.replace(/\s+/g, '_').toLowerCase()}_${Date.now()}_${i}`,
            title: title,
            channel: randomArtist,
            thumbnail: `https://img.youtube.com/vi/search_${query.replace(/\s+/g, '_').toLowerCase()}_${Date.now()}_${i}/mqdefault.jpg`,
            duration: randomDuration,
            views: randomViews,
            tags: query.toLowerCase().split(' ').concat(['gospel', 'louvor', 'adoracao'])
        });
    }
    return results;
}
// Exibir resultados do YouTube
function displayYouTubeResults(results) {
    const container = document.getElementById('searchResults');
    if (results.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Nenhum resultado encontrado</h3>
                <p>Tente pesquisar com outros termos</p>
            </div>
        `;
        return;
    }
    container.innerHTML = results.map(video => `
        <div class="youtube-item">
            <img src="${video.thumbnail}" alt="${video.title}" class="youtube-thumbnail">
            <div class="youtube-info-content">
                <h4>${video.title}</h4>
                <p>${video.channel}</p>
                <span class="youtube-duration">${video.duration}</span>
            </div>
            <div class="youtube-actions">
                <button class="btn-icon" onclick="playYouTubeVideo('${video.videoId}', '${video.title}', '${video.channel}', '${video.thumbnail}')" title="Reproduzir">
                    <i class="fas fa-play"></i>
                </button>
                <button class="btn-icon" onclick="addToPlaylist('${video.videoId}', '${video.title}', '${video.channel}', '${video.thumbnail}')" title="Adicionar à playlist">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        </div>
    `).join('');
}
// Reproduzir vídeo do YouTube
function playYouTubeVideo(videoId, title, channel, thumbnail) {
    // Construir URL do YouTube
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    // Abrir no YouTube em nova aba
    window.open(youtubeUrl, '_blank');
    // Mostrar mensagem de confirmação
    showSuccessMessage(`🎵 Abrindo "${title}" no YouTube...`);
    // Registrar atividade
    addActivity('play', `Reproduziu "${title}"`, `${AppState.currentUser.name} reproduziu "${title}" no YouTube`, 'info');
}
// Funções removidas - agora abre diretamente no YouTube
// Adicionar música à playlist
function addToPlaylist(videoId, title, channel, thumbnail) {
    const username = AppState.currentUser.username;
    if (!AppState.playlists[username]) {
        AppState.playlists[username] = [];
    }
    // Verificar se já existe na playlist
    const exists = AppState.playlists[username].some(song => song.videoId === videoId);
    if (exists) {
        showErrorMessage('Esta música já está na sua playlist');
        return;
    }
    // Adicionar à playlist
    const song = { videoId, title, channel, thumbnail, addedAt: new Date().toISOString() };
    AppState.playlists[username].push(song);
    saveToLocalStorage();
    
    // Forçar sincronização imediata com Firebase
    if (syncManager && syncManager.isInitialized) {
        syncManager.syncPlaylists(AppState.playlists);
        console.log('🔄 Playlist sincronizada após adicionar música');
    }
    
    // Recarregar para atualizar contadores
    setTimeout(() => {
        loadPlaylists();
    }, 100);
    
    showSuccessMessage(`"${title}" adicionada à sua playlist`);
    // Registrar atividade
    addActivity('playlist', `Adicionou "${title}" ao repertório`, `${AppState.currentUser.name} adicionou "${title}" ao repertório`, 'success');
}
// Remover música da playlist
function removeFromPlaylist(videoId, playlistOwner = null) {
    // Verificar se há usuário logado
    if (!AppState.currentUser) {
        showErrorMessage('❌ Você precisa estar logado para remover músicas');
        return;
    }
    const username = AppState.currentUser.username;
    // Se playlistOwner foi especificado, verificar se o usuário atual é o dono
    if (playlistOwner && playlistOwner !== username) {
        showErrorMessage('🚫 Você só pode remover músicas da sua própria playlist!');
        return;
    }
    // Verificar se o usuário tem playlist
    if (!AppState.playlists[username]) {
        showErrorMessage('❌ Playlist não encontrada');
        return;
    }
    // Encontrar a música na playlist
    const songIndex = AppState.playlists[username].findIndex(song => song.videoId === videoId);
    if (songIndex === -1) {
        showErrorMessage('❌ Música não encontrada na sua playlist');
        return;
    }
    const songToRemove = AppState.playlists[username][songIndex];
    // Mostrar diálogo de confirmação personalizado
    showConfirmDialog(
        'Remover Música',
        `Tem certeza que deseja remover "${songToRemove.title}" da sua playlist?`,
        () => {
            // Remover a música da playlist
            AppState.playlists[username].splice(songIndex, 1);
            // Salvar no localStorage
            saveToLocalStorage();
            
            // Forçar sincronização imediata com Firebase
            if (syncManager && syncManager.isInitialized) {
                syncManager.syncPlaylists(AppState.playlists);
                console.log('🔄 Playlist sincronizada após remover música');
            }
            
            // Mostrar notificação de sucesso personalizada
            showSuccessMessage(`🎵 "${songToRemove.title}" foi removida da sua playlist!`);
            // Registrar atividade detalhada
            addActivity(
                'playlist_remove',
                'Música removida da playlist',
                `${AppState.currentUser.name} removeu "${songToRemove.title}" da sua playlist`,
                'warning'
            );
            // Recarregar modal se estiver aberto
            const modal = document.getElementById('playlistModal');
            if (modal) {
                closePlaylistModal();
                // Pequeno delay para animação suave
                setTimeout(() => {
                    openPlaylist(username);
                }, 300);
            }
            // Recarregar lista de playlists para atualizar contadores
            setTimeout(() => {
                loadPlaylists();
            }, 500);
        }
    );
}
// Inicializar visibilidade das mensagens
function initializeMessageVisibility() {
    // Por padrão, mostrar mensagem do repertório e esconder do YouTube
    const repertorioInfo = document.getElementById('repertorioInfo');
    const youtubeInfo = document.getElementById('youtubeInfo');
    if (repertorioInfo) {
        repertorioInfo.style.display = 'block';
    }
    if (youtubeInfo) {
        youtubeInfo.style.display = 'none';
    }
}
// Buscar com Enter e efeitos visuais
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('youtubeSearch');
    if (searchInput) {
        // Enter para buscar
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchYouTube();
            }
        });
        // Efeitos de foco
        searchInput.addEventListener('focus', function() {
            const container = this.closest('.search-container-inner');
            if (container) {
                container.style.transform = 'translateY(-2px)';
                container.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.25)';
            }
        });
        searchInput.addEventListener('blur', function() {
            const container = this.closest('.search-container-inner');
            if (container) {
                container.style.transform = 'translateY(0)';
                container.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
            }
        });
        // Efeito de digitação
        searchInput.addEventListener('input', function() {
            if (this.value.length > 0) {
                this.style.fontWeight = '600';
                this.style.color = '#1e293b';
            } else {
                this.style.fontWeight = '500';
                this.style.color = '#64748b';
            }
        });
    }
    // Carregar playlists na inicialização
    setTimeout(() => {
        if (AppState.currentUser) {
            loadPlaylists();
        } else {
        }
    }, 500);
    // Configurar estado inicial das mensagens
    initializeMessageVisibility();
    // Forçar carregamento das playlists após um delay maior
    setTimeout(() => {
        if (document.getElementById('playlistsGrid')) {
            loadPlaylists();
        }
    }, 1000);
});
// === SISTEMA DE IA ASSISTENTE CRISTÃ (GEMINI) === //
// Configuração da API Gemini
const GEMINI_CONFIG = {
    apiKey: 'AIzaSyAcPKYirfipTtuDJe03H3-y7KZY5iFbTdY',
    apiUrl: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    systemPrompt: `Você é a Gemini Renovada, uma assistente cristã pessoal, inteligente e carinhosa do Ministério de Louvor da Igreja Batista Renovo (IBR). Você conhece cada membro pelo nome e trata todos com muito carinho e proximidade.
PERSONALIDADE E COMPORTAMENTO:
- Seja MUITO amigável, carinhosa e próxima - como uma irmã na fé
- Use linguagem natural e descontraída, sem formalidades excessivas
- Chame as pessoas pelo nome quando possível
- Seja empática e compreensiva com as dificuldades
- Tenha senso de humor cristão quando apropriado
- Seja encorajadora e edificante sempre
INTELIGÊNCIA E COMPREENSÃO:
- Entenda QUALQUER mensagem, mesmo com erros de ortografia, gírias ou abreviações
- Interprete o contexto e a intenção por trás das palavras
- Se não entender algo, pergunte de forma carinhosa
- Corrija erros sutilmente, sem ser pedante
- Adapte sua resposta ao nível de formalidade da pessoa
ÁREAS DE AJUDA:
- Louvor e adoração (repertório inteligente, técnicas, ministração)
- Vida cristã e crescimento espiritual
- Relacionamentos e família
- Trabalho e estudos (com perspectiva cristã)
- Dúvidas bíblicas e teológicas
- Organização do ministério (escalas, eventos)
- Conselhos pessoais e emocionais
- Questões práticas do dia a dia
- QUALQUER assunto que a pessoa queira conversar
SISTEMA DE RECOMENDAÇÃO MUSICAL:
- Quando alguém pedir sugestões de música, SEMPRE varie as recomendações
- Considere o contexto: adoração, celebração, comunhão, evangelismo, natal, páscoa
- Detecte o momento do culto: entrada, oferta, ceia, apelo, encerramento
- Nunca repita as mesmas músicas para a mesma pessoa
- Ofereça alternativas e dicas específicas para cada momento
- Considere o estado emocional da pessoa (triste, alegre, etc.)
ESTILO DE RESPOSTA:
- Use emojis com moderação para expressar carinho
- Cite versículos quando relevante, mas naturalmente
- Conte experiências ou exemplos quando ajudar
- Faça perguntas para entender melhor a situação
- Ofereça ajuda prática e específica
- Termine sempre oferecendo mais ajuda
Lembre-se: Você é uma amiga cristã que está sempre disponível para conversar, aconselhar e edificar. Seja genuína, carinhosa e sábia.`
};
// Estado do chat
let chatState = {
    isOpen: false,
    messages: [],
    isLoading: false
};
// Função para inicializar o chat da IA
function initializeAIChat() {
    // Criar botão flutuante
    const chatButton = document.createElement('div');
    chatButton.id = 'ai-chat-button';
    chatButton.innerHTML = `
        <div class="chat-button-icon">
            <img src="foto/IA.jpeg" alt="Gemini Renovada" class="ai-avatar">
            <div class="chat-button-text">Gemini Renovada</div>
        </div>
    `;
    chatButton.onclick = toggleAIChat;
    document.body.appendChild(chatButton);
    // Criar container do chat
    const chatContainer = document.createElement('div');
    chatContainer.id = 'ai-chat-container';
    chatContainer.innerHTML = `
        <div class="chat-header">
            <div class="chat-title">
                <img src="foto/IA.jpeg" alt="Gemini Renovada" class="chat-header-avatar">
                <span>Gemini Renovada</span>
            </div>
            <button class="chat-close" onclick="toggleAIChat()">×</button>
        </div>
        <div class="chat-messages" id="chat-messages">
            <div class="message ai-message">
                <div class="message-content">
                    <img src="foto/IA.jpeg" alt="Gemini Renovada" class="message-avatar">
                    <div class="message-text" id="initial-message">
                        <!-- Mensagem será personalizada dinamicamente -->
                    </div>
                </div>
            </div>
        </div>
        <div class="chat-input-container">
            <input type="text" id="chat-input" placeholder="Digite qualquer pergunta... Posso ajudar com tudo! 😊" onkeypress="handleChatKeyPress(event)">
            <button id="chat-send" onclick="sendChatMessage()">
                <span id="send-icon">📤</span>
                <span id="loading-icon" style="display: none;">⏳</span>
            </button>
        </div>
    `;
    document.body.appendChild(chatContainer);
    // Personalizar mensagem inicial baseada no usuário logado
    const currentUser = getCurrentUser();
    const personalizedMessage = getPersonalizedWelcomeMessage(currentUser);
    // Atualizar mensagem inicial na interface
    setTimeout(() => {
        const initialMessageElement = document.getElementById('initial-message');
        if (initialMessageElement) {
            initialMessageElement.innerHTML = personalizedMessage.replace(/\n/g, '<br>');
        }
    }, 100);
    // Adicionar mensagem inicial ao estado
    chatState.messages.push({
        type: 'ai',
        content: personalizedMessage,
        timestamp: new Date()
    });
}
// Função para obter usuário atual
function getCurrentUser() {
    const savedUser = localStorage.getItem('feedsUser');
    if (savedUser) {
        return JSON.parse(savedUser);
    }
    return { name: 'Irmão(ã)', role: 'Membro' };
}
// Função para criar mensagem de boas-vindas personalizada
function getPersonalizedWelcomeMessage(user) {
    const firstName = user.name.split(' ')[0];
    const timeOfDay = getTimeOfDay();
    const roleMessage = getRoleSpecificMessage(user.role);
    return `${timeOfDay}, ${firstName}! 🙏✨
Que alegria te ver aqui! Sou a Gemini Renovada, sua assistente pessoal do Ministério de Louvor da IBR! 
${roleMessage}
Pode me falar qualquer coisa - estou aqui para te ajudar, aconselhar e edificar! Não precisa ser formal comigo, pode conversar naturalmente! 😊
Como posso te ajudar hoje?`;
}
// Função para determinar período do dia
function getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bom dia';
    if (hour < 18) return 'Boa tarde';
    return 'Boa noite';
}
// Função para mensagem específica por função
function getRoleSpecificMessage(role) {
    switch (role.toLowerCase()) {
        case 'administrador':
        case 'admin':
            return 'Vi que você é administrador! Posso te ajudar com gestão da equipe, relatórios, configurações e qualquer coisa que precisar para liderar bem o ministério! 👑';
        case 'líder de louvor':
        case 'lider de louvor':
            return 'Que honra falar com um líder de louvor! Estou aqui para te apoiar na liderança musical, organização de escalas, desenvolvimento da equipe e orientações bíblicas! 🎯';
        case 'líder roots':
        case 'lider roots':
            return 'Oi, líder do Roots! Que alegria ter você aqui! Posso te ajudar com ideias para o culto de jovens, dinâmicas, mensagens inspiradoras e tudo sobre ministério jovem! 🔥';
        case 'líder':
        case 'lider':
            return 'Que honra falar com um líder! Estou aqui para te apoiar na liderança, organização de escalas, desenvolvimento da equipe e orientações bíblicas! 🎯';
        case 'músico':
        case 'musicista':
            return 'Oi, músico! Posso te ajudar com repertório, técnicas, escalas, conselhos sobre ministração e tudo relacionado à música no Reino! 🎵';
        case 'vocal':
        case 'vocalista':
            return 'Que bom ter um vocalista aqui! Posso te ajudar com repertório vocal, técnicas de canto, ministração e tudo sobre louvor! 🎤';
        default:
            return 'Seja qual for sua função no ministério, estou aqui para te apoiar em tudo! Louvor, vida cristã, dúvidas práticas - pode contar comigo! 💝';
    }
}
// Função para alternar o chat
function toggleAIChat() {
    const container = document.getElementById('ai-chat-container');
    const button = document.getElementById('ai-chat-button');
    chatState.isOpen = !chatState.isOpen;
    if (chatState.isOpen) {
        container.classList.add('open');
        button.classList.add('active');
        document.getElementById('chat-input').focus();
    } else {
        container.classList.remove('open');
        button.classList.remove('active');
    }
}
// Função para lidar com Enter no input
function handleChatKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendChatMessage();
    }
}
// Função para enviar mensagem
async function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (!message || chatState.isLoading) return;
    // Adicionar mensagem do usuário
    addChatMessage('user', message);
    input.value = '';
    // Mostrar animação de digitação
    showTypingIndicator();
    try {
        // Simular tempo de processamento realista
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
        // Fazer requisição para Gemini com contexto do usuário
        const currentUser = getCurrentUser();
        const response = await callGeminiAPI(message, currentUser);
        // Remover indicador de digitação
        removeTypingIndicator();
        // Verificar se é uma pergunta objetiva para resposta curta
        const shortResponse = getShortResponse(message);
        if (shortResponse) {
            await typeMessage('ai', shortResponse);
        } else {
            // Dividir resposta longa em partes menores
            await typeMessageInParts('ai', response);
        }
    } catch (error) {
        // Remover indicador de digitação
        removeTypingIndicator();
        // Tentar resposta de fallback baseada na mensagem
        const currentUser = getCurrentUser();
        let fallbackResponse = getFallbackResponse(message, currentUser);
        if (!fallbackResponse) {
            const userName = currentUser && currentUser.name !== 'Irmão(ã)' ? currentUser.name.split(' ')[0] : '';
            fallbackResponse = `Perdão, ${userName}, estou com uma dificuldade técnica no momento. 😔
Que tal tentarmos novamente? O Senhor nos dá força para superar todos os obstáculos! 🙏`;
        }
        await typeMessage('ai', fallbackResponse);
    }
}
// Função para chamar a API do Gemini
async function callGeminiAPI(userMessage, user = null) {
    if (!isAPIAvailable()) {
        return getFallbackResponse(userMessage, user);
    }
    try {
        // Criar contexto personalizado do usuário
        let userContext = '';
        if (user && user.name !== 'Irmão(ã)') {
            const firstName = user.name.split(' ')[0];
            userContext = `\n\nCONTEXTO DO USUÁRIO:
- Nome: ${user.name} (pode chamar de ${firstName})
- Função: ${user.role}
- Membro do Ministério de Louvor da IBR
Trate esta pessoa pelo nome e seja carinhosa como uma amiga próxima.`;
        }
        const requestBody = {
            contents: [{
                parts: [{
                    text: `${GEMINI_CONFIG.systemPrompt}${userContext}\n\nUsuário: ${userMessage}\n\nAssistente:`
                }]
            }],
            generationConfig: {
                temperature: 0.7,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: 1024,
            },
            safetySettings: [
                {
                    category: "HARM_CATEGORY_HARASSMENT",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    category: "HARM_CATEGORY_HATE_SPEECH",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                    threshold: "BLOCK_MEDIUM_AND_ABOVE"
                }
            ]
        };
        const response = await fetch(`${GEMINI_CONFIG.apiUrl}?key=${GEMINI_CONFIG.apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erro na API: ${response.status} - ${errorText}`);
        }
        const data = await response.json();
        if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
            return data.candidates[0].content.parts[0].text;
        } else if (data.candidates && data.candidates[0] && data.candidates[0].finishReason === 'SAFETY') {
            return 'Desculpe, não posso responder a essa pergunta por questões de segurança. Que tal perguntarmos algo sobre louvor e adoração? 🙏';
        } else {
            throw new Error('Resposta inválida da API');
        }
    } catch (error) {
        throw error;
    }
}
// Função para adicionar mensagem ao chat
function addChatMessage(type, content) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    const icon = type === 'ai' ? '<img src="foto/IA.jpeg" alt="Gemini Renovada" class="message-avatar">' : '<span class="message-icon">👤</span>';
    messageDiv.innerHTML = `
        <div class="message-content">
            ${icon}
            <div class="message-text">${content.replace(/\n/g, '<br>')}</div>
        </div>
        <div class="message-time">${new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</div>
    `;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    // Adicionar ao estado
    chatState.messages.push({
        type: type,
        content: content,
        timestamp: new Date()
    });
}
// Função para mostrar indicador de digitação
function showTypingIndicator() {
    const messagesContainer = document.getElementById('chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typing-indicator';
    typingDiv.className = 'message ai-message typing';
    typingDiv.innerHTML = `
        <div class="message-content">
            <img src="foto/IA.jpeg" alt="Gemini Renovada" class="message-avatar">
            <div class="message-text typing-animation">
                <span class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <span class="typing-text">digitando...</span>
            </div>
        </div>
    `;
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    // Desabilitar input
    const input = document.getElementById('chat-input');
    input.disabled = true;
    input.placeholder = 'Aguarde, estou pensando... 🤔';
}
// Função para remover indicador de digitação
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
    // Reabilitar input
    const input = document.getElementById('chat-input');
    input.disabled = false;
    input.placeholder = 'Digite qualquer pergunta... Posso ajudar com tudo! 😊';
}
// Função para digitar mensagem com efeito de digitação
async function typeMessage(type, content) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    const icon = type === 'ai' ? '<img src="foto/IA.jpeg" alt="Gemini Renovada" class="message-avatar">' : '<span class="message-icon">👤</span>';
    messageDiv.innerHTML = `
        <div class="message-content">
            ${icon}
            <div class="message-text"></div>
        </div>
        <div class="message-time">${new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</div>
    `;
    messagesContainer.appendChild(messageDiv);
    const textElement = messageDiv.querySelector('.message-text');
    // Efeito de digitação
    const words = content.split(' ');
    let currentText = '';
    for (let i = 0; i < words.length; i++) {
        currentText += (i > 0 ? ' ' : '') + words[i];
        // Adicionar cursor piscando durante digitação
        textElement.innerHTML = currentText.replace(/\n/g, '<br>') + '<span class="typing-cursor"></span>';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        // Velocidade de digitação variável baseada no tamanho da palavra
        let delay = 80; // Base delay
        if (words[i].length > 6) delay = 120;
        if (words[i].includes(',') || words[i].includes('.')) delay += 200;
        if (words[i].includes('!') || words[i].includes('?')) delay += 300;
        await new Promise(resolve => setTimeout(resolve, delay));
    }
    // Remover cursor após terminar de digitar
    textElement.innerHTML = currentText.replace(/\n/g, '<br>');
    // Adicionar ao estado
    chatState.messages.push({
        type: type,
        content: content,
        timestamp: new Date()
    });
}
// Função para dividir mensagem longa em partes
async function typeMessageInParts(type, content) {
    // Dividir por parágrafos ou sentenças longas
    const parts = content.split(/\n\n|\. (?=[A-Z])/);
    for (let i = 0; i < parts.length; i++) {
        let part = parts[i].trim();
        if (!part) continue;
        // Adicionar ponto final se necessário
        if (i < parts.length - 1 && !part.endsWith('.') && !part.endsWith('!') && !part.endsWith('?') && !part.endsWith(':')) {
            part += '.';
        }
        await typeMessage(type, part);
        // Pausa entre partes (exceto na última)
        if (i < parts.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 800));
        }
    }
}
// Função para respostas curtas e objetivas
function getShortResponse(message) {
    const msg = message.toLowerCase().trim();
    // Saudações simples
    if (msg === 'oi' || msg === 'olá' || msg === 'ola' || msg === 'e ai' || msg === 'eai') {
        const greetings = [
            'Oi! Paz do Senhor! 🙏 Sou a Gemini Renovada, como posso ajudar?',
            'Olá! Que alegria te ver aqui! 😊 Em que posso ajudar?',
            'Oi! Deus abençoe! ✨ Como posso edificar seu dia?'
        ];
        return greetings[Math.floor(Math.random() * greetings.length)];
    }
    if (msg.includes('bom dia')) {
        return 'Bom dia! Que o Senhor abençoe seu dia! ☀️ Em que posso ajudar?';
    }
    if (msg.includes('boa tarde')) {
        return 'Boa tarde! Paz do Senhor! 🌅 Como posso edificar seu ministério?';
    }
    if (msg.includes('boa noite')) {
        return 'Boa noite! Que Deus te abençoe! 🌙 Em que posso ajudar?';
    }
    // Agradecimentos
    if (msg.includes('obrigad') || msg.includes('valeu') || msg.includes('brigad')) {
        const thanks = [
            'De nada! Foi um prazer ajudar! 😊 Deus abençoe! 🙏',
            'Fico feliz em ajudar! Que Deus te abençoe! ✨',
            'Por nada! Estou aqui sempre que precisar! 🤗'
        ];
        return thanks[Math.floor(Math.random() * thanks.length)];
    }
    // Perguntas simples sobre o ministério
    if ((msg.includes('como funciona') || msg.includes('como usar')) && (msg.includes('sistema') || msg.includes('ministério') || msg.includes('feeds'))) {
        return 'O sistema do Ministério de Louvor é bem simples! Use o menu para navegar: Escalas, Membros, Repertório. Quer que eu explique alguma parte específica? 😊';
    }
    // Perguntas sobre horários
    if (msg.includes('que horas') || msg.includes('horário') || msg.includes('hora')) {
        return `Agora são ${new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}! ⏰ Precisa de ajuda com horários de culto?`;
    }
    // Confirmações simples
    if (msg === 'sim' || msg === 'ok' || msg === 'certo' || msg === 'entendi' || msg === 'beleza') {
        return 'Ótimo! 😊 Mais alguma coisa que posso ajudar?';
    }
    if (msg === 'não' || msg === 'nao' || msg === 'nada') {
        return 'Tudo bem! Estou aqui se precisar de algo! 🙏';
    }
    // Perguntas sobre música específica
    if (msg.includes('qual música') || msg.includes('que música') || msg.includes('música para') || 
        msg.includes('louvor para') || msg.includes('sugestão') || msg.includes('dica de música')) {
        return getSmartMusicRecommendation(msg, userName);
    }
    // Perguntas sobre ajuda
    if (msg === 'ajuda' || msg === 'help' || msg === 'socorro') {
        return 'Claro! Estou aqui para ajudar! 😊 Me diga o que você precisa e vamos resolver juntos! 💪';
    }
    // Perguntas sobre escalas
    if (msg.includes('escala') && (msg.includes('como') || msg.includes('criar') || msg.includes('fazer'))) {
        return 'Para criar uma escala, clique em "Escalas" no menu e depois no botão "+" 📅 Quer que eu te guie passo a passo?';
    }
    // Expressões de emoção
    if (msg.includes('legal') || msg.includes('show') || msg.includes('top') || msg.includes('massa')) {
        return 'Que bom que gostou! 😄 Glória a Deus! Precisa de mais alguma coisa?';
    }
    if (msg.includes('difícil') || msg.includes('complicado') || msg.includes('não entendi')) {
        return 'Sem problemas! Vamos com calma! 😊 Me diga qual parte está difícil que eu explico melhor!';
    }
    // Perguntas sobre membros
    if (msg.includes('membro') && (msg.includes('adicionar') || msg.includes('cadastrar'))) {
        return 'Para adicionar membros, vá em "Membros" no menu e clique no "+" 👥 Quer ajuda com isso?';
    }
    // Despedidas
    if (msg.includes('tchau') || msg.includes('até') || msg.includes('fui') || msg.includes('bye')) {
        return 'Até mais! Que Deus te abençoe! 🙏✨ Volte sempre que precisar!';
    }
    return null; // Retorna null para respostas longas normais
}
// Função para controlar estado de loading (simplificada)
function setLoadingState(loading) {
    chatState.isLoading = loading;
}
// Função de fallback inteligente para respostas quando a API não funciona
function getFallbackResponse(message, user = null) {
    const msg = message.toLowerCase();
    const userName = user && user.name !== 'Irmão(ã)' ? user.name.split(' ')[0] : '';
    // Interpretação inteligente de mensagens com erros
    const interpretedMessage = interpretMessageWithErrors(msg);
    // Respostas sobre louvor e adoração
    if (msg.includes('louvor') || msg.includes('adoração') || msg.includes('música') || msg.includes('cantar')) {
        // Se for pedido de sugestão específica, usar sistema inteligente
        if (msg.includes('sugestão') || msg.includes('dica') || msg.includes('qual') || msg.includes('para')) {
            return getSmartMusicRecommendation(msg, userName);
        }
        return `🎵 **Sobre Louvor e Adoração:**
O louvor é uma expressão de gratidão e amor a Deus! Aqui estão algumas dicas:
**📖 Base Bíblica:**
"Louvai ao Senhor, porque é bom cantar louvores ao nosso Deus" - Salmos 147:1
**💡 Dicas práticas:**
- Prepare seu coração antes de ministrar
- Escolha músicas que edifiquem a congregação
- Mantenha a simplicidade e a reverência
- Considere o momento do culto (entrada, adoração, ceia, etc.)
**🎼 Quer sugestões específicas?**
Me diga para que momento você precisa:
• "Música para adoração"
• "Louvor para celebração" 
• "Música para comunhão"
• "Louvor para evangelismo"
Como posso ajudar mais especificamente, ${userName}? 🙏`;
    }
    // Respostas sobre escalas
    if (msg.includes('escala') || msg.includes('ministério') || msg.includes('equipe')) {
        return `📅 **Sobre Escalas e Ministério:**
**Organização da equipe:**
- Defina funções claras (vocal, instrumentos, som)
- Mantenha comunicação constante
- Faça ensaios regulares
**📋 Dicas para escalas:**
- Confirme presença com antecedência
- Tenha sempre um plano B
- Considere o nível de cada músico
- Varie as oportunidades de ministrar
**🙏 Aspectos espirituais:**
- Ore pela equipe regularmente
- Mantenha o foco na adoração, não na performance
- Cultive a unidade e humildade
"Tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor" - Colossenses 3:23
Precisa de ajuda com algo específico da escala? 🎵`;
    }
    // Respostas sobre conselhos
    if (msg.includes('conselho') || msg.includes('ajuda') || msg.includes('como') || msg.includes('dica')) {
        return `💝 **Conselhos Cristãos:**
**🙏 Para a vida espiritual:**
- Mantenha uma vida de oração constante
- Leia a Palavra diariamente
- Busque comunhão com outros irmãos
- Pratique o amor e o perdão
**🎵 Para o ministério musical:**
- Desenvolva seus talentos com dedicação
- Sirva com humildade e alegria
- Busque sempre a excelência para Deus
- Lembre-se: é adoração, não show
**📖 Versículo de encorajamento:**
"Posso todas as coisas naquele que me fortalece" - Filipenses 4:13
Conte-me mais sobre sua situação específica para que eu possa ajudar melhor! 🤗`;
    }
    // Respostas sobre o ministério
    if (msg.includes('sistema') || msg.includes('feeds') || msg.includes('ministério') || msg.includes('como usar') || msg.includes('funciona')) {
        return `💻 **Sobre o Ministério de Louvor da IBR:**
**🎯 Principais funcionalidades:**
- Gerenciamento de escalas musicais
- Cadastro de membros da equipe
- Repertório de músicas
- Integração com YouTube
- Chat com assistente cristã (eu! 😊)
**📱 Como usar:**
- Use o menu superior para navegar
- Clique em "Escalas" para gerenciar cronogramas
- "Membros" para ver a equipe
- "Repertório" para buscar músicas
**🆘 Precisa de ajuda específica?**
Me diga qual funcionalidade você quer usar e eu te oriento passo a passo!
"A sabedoria do prudente é entender o seu caminho" - Provérbios 14:8 🙏`;
    }
    // Saudações personalizadas
    if (msg.includes('oi') || msg.includes('olá') || msg.includes('paz') || msg.includes('bom dia') || msg.includes('boa tarde') || msg.includes('boa noite')) {
        const timeOfDay = getTimeOfDay();
        return `${timeOfDay}, ${userName}! 🙏✨
Que alegria ter você aqui! Sou a Gemini Renovada, sua assistente cristã do Ministério de Louvor da IBR e estou aqui para ajudar com:
🎵 **Louvor e adoração**
📅 **Escalas musicais** 
👥 **Ministério musical**
💝 **Conselhos bíblicos**
💻 **Uso do sistema**
Como posso edificar seu ministério hoje, ${userName}? Pode me perguntar qualquer coisa! 😊
"Este é o dia que fez o Senhor; regozijemo-nos e alegremo-nos nele!" - Salmos 118:24`;
    }
    return null; // Retorna null se não encontrar uma resposta específica
}
// Função para interpretar mensagens com erros ortográficos
function interpretMessageWithErrors(message) {
    const corrections = {
        // Saudações com erros
        'oi': ['oi', 'oii', 'oie', 'oy', 'hoi'],
        'olá': ['ola', 'olah', 'olaa', 'olar'],
        'bom dia': ['bom dia', 'bomdia', 'bon dia', 'bom dya', 'bom dya'],
        'boa tarde': ['boa tarde', 'boatarde', 'boa trd', 'boa tard', 'boa trd'],
        'boa noite': ['boa noite', 'boanoite', 'boa noit', 'boa nyt', 'boa noyt'],
        // Agradecimentos
        'obrigado': ['obrigado', 'obrigada', 'obrigad', 'brigado', 'brigada', 'obg', 'vlw'],
        'valeu': ['valeu', 'vlw', 'valeo', 'vale', 'valew'],
        // Louvor e música
        'louvor': ['louvor', 'lovor', 'louv', 'luvr', 'louvr'],
        'música': ['musica', 'music', 'muzica', 'musika', 'msc'],
        'cantar': ['cantar', 'cantr', 'kantar', 'canta'],
        'adoração': ['adoracao', 'adoraçao', 'adorasao', 'adoraçao'],
        // Palavras cristãs
        'jesus': ['jesus', 'jezus', 'jeus', 'jesu'],
        'deus': ['deus', 'deos', 'dius', 'deos'],
        'oração': ['oracao', 'oraçao', 'orasao', 'oraçao'],
        'bíblia': ['biblia', 'byblia', 'bibla', 'bybia'],
        // Perguntas comuns
        'como': ['como', 'komo', 'com', 'cmo'],
        'porque': ['porque', 'pq', 'por que', 'porq', 'pq'],
        'quando': ['quando', 'qnd', 'quand', 'qndo'],
        'onde': ['onde', 'ond', 'aonde', 'onde'],
        // Ajuda e problemas
        'ajuda': ['ajuda', 'ajudar', 'help', 'socorro', 'auxilio'],
        'problema': ['problema', 'poblema', 'poblm', 'dificuldade'],
        'não entendi': ['nao entendi', 'n entendi', 'naum entendi', 'num entendi'],
        // Escalas e ministério
        'escala': ['escala', 'eskala', 'escal', 'escalas'],
        'ministério': ['ministerio', 'ministério', 'ministeryo', 'ministery']
    };
    let bestMatch = null;
    let matchType = 'unknown';
    let correctedMessage = message;
    // Verificar cada categoria
    for (const [correct, variants] of Object.entries(corrections)) {
        for (const variant of variants) {
            if (message.includes(variant)) {
                bestMatch = correct;
                correctedMessage = message.replace(variant, correct);
                // Determinar tipo da mensagem
                if (['oi', 'olá', 'bom dia', 'boa tarde', 'boa noite'].includes(correct)) {
                    matchType = 'greeting';
                } else if (['obrigado', 'valeu'].includes(correct)) {
                    matchType = 'thanks';
                } else if (['louvor', 'música', 'cantar', 'adoração'].includes(correct)) {
                    matchType = 'worship';
                } else if (['jesus', 'deus', 'oração', 'bíblia'].includes(correct)) {
                    matchType = 'biblical';
                } else if (['ajuda', 'problema', 'não entendi'].includes(correct)) {
                    matchType = 'help';
                } else if (['escala', 'ministério'].includes(correct)) {
                    matchType = 'ministry';
                }
                break;
            }
        }
        if (bestMatch) break;
    }
    // Detectar contexto pessoal
    const personalKeywords = ['triste', 'feliz', 'preocupado', 'ansioso', 'nervoso', 'alegre'];
    if (personalKeywords.some(keyword => message.includes(keyword))) {
        matchType = 'personal';
    }
    return {
        type: matchType,
        corrected: correctedMessage,
        original: message,
        hasCorrection: bestMatch !== null
    };
}
// Sistema inteligente de recomendação de músicas
const musicRecommendationSystem = {
    // Histórico de recomendações por usuário
    userHistory: new Map(),
    // Base de dados de músicas por categoria
    musicDatabase: {
        adoracao: [
            { titulo: "Como Zaqueu", artista: "Bruna Karla", momento: "intimidade" },
            { titulo: "Mais Perto Quero Estar", artista: "Hinário", momento: "intimidade" },
            { titulo: "Preciso de Ti", artista: "Diante do Trono", momento: "súplica" },
            { titulo: "Águas Purificadoras", artista: "Diante do Trono", momento: "purificação" },
            { titulo: "Chuvas de Bênçãos", artista: "Hinário", momento: "renovação" },
            { titulo: "Santo Espírito", artista: "Fernandinho", momento: "intimidade" },
            { titulo: "Tua Graça Me Basta", artista: "Fernandinho", momento: "dependência" },
            { titulo: "Oceanos", artista: "Hillsong", momento: "confiança" },
            { titulo: "Reckless Love", artista: "Cory Asbury", momento: "amor de Deus" },
            { titulo: "Bondade de Deus", artista: "Aline Barros", momento: "gratidão" }
        ],
        celebracao: [
            { titulo: "Quão Grande é o meu Deus", artista: "Aline Barros", momento: "exaltação" },
            { titulo: "Aleluia", artista: "Gabriela Rocha", momento: "vitória" },
            { titulo: "Deus Cuida de Mim", artista: "Kleber Lucas", momento: "confiança" },
            { titulo: "Ressuscitou", artista: "Aline Barros", momento: "páscoa" },
            { titulo: "Hosana", artista: "Gabriela Rocha", momento: "entrada" },
            { titulo: "Vencedor", artista: "Thalles Roberto", momento: "vitória" },
            { titulo: "Deus do Impossível", artista: "Aline Barros", momento: "milagres" },
            { titulo: "Way Maker", artista: "Sinach", momento: "declaração" },
            { titulo: "Goodness of God", artista: "Bethel Music", momento: "gratidão" },
            { titulo: "Ruja o Leão", artista: "Davi Sacer", momento: "guerra espiritual" }
        ],
        comunhao: [
            { titulo: "Eis-me Aqui", artista: "Aline Barros", momento: "entrega" },
            { titulo: "Família", artista: "Titãs (versão gospel)", momento: "união" },
            { titulo: "Juntos Somos Mais", artista: "Oficina G3", momento: "unidade" },
            { titulo: "Irmão", artista: "Ministério Zoe", momento: "fraternidade" },
            { titulo: "Comunhão", artista: "Diante do Trono", momento: "fellowship" },
            { titulo: "Somos Um", artista: "Vineyard", momento: "unidade" },
            { titulo: "Casa do Pai", artista: "Aline Barros", momento: "acolhimento" },
            { titulo: "Mesa do Rei", artista: "Bruna Karla", momento: "ceia" },
            { titulo: "Família de Deus", artista: "Ministério Zoe", momento: "pertencimento" },
            { titulo: "Laços de Amor", artista: "Diante do Trono", momento: "relacionamentos" }
        ],
        evangelismo: [
            { titulo: "Ide", artista: "Oficina G3", momento: "missões" },
            { titulo: "Pescador de Homens", artista: "Hinário", momento: "chamado" },
            { titulo: "Vai Valer a Pena", artista: "Shirley Carvalhaes", momento: "perseverança" },
            { titulo: "Soldado Ferido", artista: "Ministério Zoe", momento: "restauração" },
            { titulo: "Levanta e Anda", artista: "Emerson Pinheiro", momento: "cura" },
            { titulo: "Deus Está Aqui", artista: "Hinário", momento: "presença" },
            { titulo: "Jesus Chorou", artista: "Cassiane", momento: "compaixão" },
            { titulo: "Há Poder", artista: "Aline Barros", momento: "libertação" },
            { titulo: "Breakthrough", artista: "Red Rocks Worship", momento: "rompimento" },
            { titulo: "Rescue", artista: "Lauren Daigle", momento: "salvação" }
        ],
        natal: [
            { titulo: "Noite Feliz", artista: "Hinário", momento: "nascimento" },
            { titulo: "Glória in Excelsis Deo", artista: "Diante do Trono", momento: "anjos" },
            { titulo: "Vem Jesus", artista: "Aline Barros", momento: "esperança" },
            { titulo: "Emanuel", artista: "Fernandinho", momento: "encarnação" },
            { titulo: "Mary Did You Know", artista: "Pentatonix", momento: "reflexão" },
            { titulo: "O Holy Night", artista: "Hillsong", momento: "adoração natalina" },
            { titulo: "Nasceu Jesus", artista: "Cassiane", momento: "celebração" },
            { titulo: "Estrela de Belém", artista: "Aline Barros", momento: "guia" }
        ],
        pascoa: [
            { titulo: "Ressuscitou", artista: "Aline Barros", momento: "ressurreição" },
            { titulo: "Vivo Está", artista: "Diante do Trono", momento: "vitória" },
            { titulo: "Porque Ele Vive", artista: "Hinário", momento: "esperança" },
            { titulo: "Cristo Vive", artista: "Fernandinho", momento: "vida nova" },
            { titulo: "Alive", artista: "Hillsong Young & Free", momento: "celebração" },
            { titulo: "Living Hope", artista: "Phil Wickham", momento: "esperança viva" },
            { titulo: "Glorious Day", artista: "Passion", momento: "glorificação" }
        ]
    },
    // Detectar contexto da mensagem
    detectContext(message) {
        const msg = message.toLowerCase();
        // Momentos específicos
        if (msg.includes('adoração') || msg.includes('intimidade') || msg.includes('quieto')) return 'adoracao';
        if (msg.includes('celebração') || msg.includes('alegre') || msg.includes('animado') || msg.includes('festa')) return 'celebracao';
        if (msg.includes('comunhão') || msg.includes('união') || msg.includes('família') || msg.includes('juntos')) return 'comunhao';
        if (msg.includes('evangelismo') || msg.includes('missões') || msg.includes('evangelizar')) return 'evangelismo';
        if (msg.includes('natal') || msg.includes('dezembro') || msg.includes('nascimento')) return 'natal';
        if (msg.includes('páscoa') || msg.includes('ressurreição') || msg.includes('abril')) return 'pascoa';
        // Momentos do culto
        if (msg.includes('entrada') || msg.includes('abertura') || msg.includes('início')) return 'celebracao';
        if (msg.includes('oferta') || msg.includes('dízimo')) return 'adoracao';
        if (msg.includes('ceia') || msg.includes('santa ceia')) return 'comunhao';
        if (msg.includes('apelo') || msg.includes('convite') || msg.includes('altar')) return 'evangelismo';
        if (msg.includes('encerramento') || msg.includes('final') || msg.includes('despedida')) return 'adoracao';
        // Emoções/estados
        if (msg.includes('triste') || msg.includes('difícil') || msg.includes('consolação')) return 'adoracao';
        if (msg.includes('vitória') || msg.includes('conquista') || msg.includes('alegria')) return 'celebracao';
        return 'adoracao'; // padrão
    },
    // Obter recomendação inteligente
    getRecommendation(message, userName) {
        const context = this.detectContext(message);
        const availableSongs = this.musicDatabase[context] || this.musicDatabase.adoracao;
        // Obter histórico do usuário
        if (!this.userHistory.has(userName)) {
            this.userHistory.set(userName, []);
        }
        const userHistory = this.userHistory.get(userName);
        // Filtrar músicas não recomendadas recentemente
        const recentSongs = userHistory.slice(-3); // últimas 3 recomendações
        const availableOptions = availableSongs.filter(song => 
            !recentSongs.some(recent => recent.titulo === song.titulo)
        );
        // Se todas foram recomendadas recentemente, usar todas
        const songsToChoose = availableOptions.length > 0 ? availableOptions : availableSongs;
        // Escolher aleatoriamente
        const randomIndex = Math.floor(Math.random() * songsToChoose.length);
        const selectedSong = songsToChoose[randomIndex];
        // Adicionar ao histórico
        userHistory.push(selectedSong);
        if (userHistory.length > 10) { // manter apenas últimas 10
            userHistory.shift();
        }
        return {
            song: selectedSong,
            context: context,
            alternatives: songsToChoose.slice(0, 3).filter(s => s.titulo !== selectedSong.titulo)
        };
    }
};
// Função para obter recomendação inteligente de música
function getSmartMusicRecommendation(message, userName = '') {
    const recommendation = musicRecommendationSystem.getRecommendation(message, userName);
    const { song, context, alternatives } = recommendation;
    // Mapear contextos para descrições
    const contextDescriptions = {
        adoracao: 'momentos de adoração e intimidade com Deus',
        celebracao: 'momentos de celebração e alegria',
        comunhao: 'momentos de comunhão e união',
        evangelismo: 'momentos de evangelismo e missões',
        natal: 'celebrações natalinas',
        pascoa: 'celebrações da Páscoa'
    };
    const contextDesc = contextDescriptions[context] || 'este momento';
    let response = `🎵 **Recomendação para ${contextDesc}:**\n\n`;
    response += `**"${song.titulo}"** - ${song.artista}\n`;
    response += `💡 *Perfeita para: ${song.momento}*\n\n`;
    if (alternatives.length > 0) {
        response += `🎼 **Outras opções que também ficam lindas:**\n`;
        alternatives.forEach(alt => {
            response += `• "${alt.titulo}" - ${alt.artista}\n`;
        });
        response += '\n';
    }
    // Dicas contextuais
    const tips = {
        adoracao: 'Lembre-se: em momentos de adoração, o importante é criar um ambiente de intimidade. Toque com suavidade e dê espaço para o Espírito Santo ministrar! 🙏',
        celebracao: 'Para celebração, capriche na energia! Use instrumentos mais marcantes e convide a congregação a participar ativamente! 🎉',
        comunhao: 'Momentos de comunhão pedem músicas que unam os corações. Escolha tonalidades que todos possam cantar juntos! 🤝',
        evangelismo: 'Para evangelismo, escolha músicas que toquem o coração e falem do amor de Jesus de forma clara e impactante! ❤️',
        natal: 'No Natal, misture tradicionais com contemporâneas para alcançar todas as gerações! 🎄',
        pascoa: 'Na Páscoa, enfatize a vitória de Cristo! Use arranjos que transmitam esperança e vida nova! ✝️'
    };
    response += `💝 **Dica especial:** ${tips[context] || tips.adoracao}`;
    if (userName) {
        response += `\n\nPrecisa de mais sugestões, ${userName}? Posso recomendar outras músicas ou te ajudar com arranjos! 😊`;
    }
    return response;
}
// Sistema de gerenciamento de eventos
const eventsSystem = {
    events: [],
    // Inicializar sistema de eventos
    init() {
        this.loadEvents();
        this.updateEventPermissions();
        this.renderEvents();
    },
    // Carregar eventos do localStorage
    loadEvents() {
        const savedEvents = localStorage.getItem('ministryEvents');
        if (savedEvents) {
            this.events = JSON.parse(savedEvents);
        }
    },
    // Salvar eventos no localStorage
    saveEvents() {
        localStorage.setItem('ministryEvents', JSON.stringify(this.events));
    },
    // Verificar permissões para gerenciar eventos
    canManageEvents() {
        const currentUser = getCurrentUser();
        const allowedRoles = ['Líder de Louvor', 'Líder Roots', 'Pastor', 'Administrador'];
        return allowedRoles.includes(currentUser.role);
    },
    // Atualizar visibilidade dos botões baseado nas permissões
    updateEventPermissions() {
        const canManage = this.canManageEvents();
        const addEventBtn = document.querySelector('.btn-add-event');
        if (addEventBtn) {
            addEventBtn.style.display = canManage ? 'flex' : 'none';
        }
    },
    // Adicionar novo evento
    addEvent(eventData) {
        const newEvent = {
            id: Date.now().toString(),
            title: eventData.title,
            description: eventData.description,
            date: eventData.date,
            time: eventData.time,
            type: eventData.type,
            team: eventData.team || [],
            status: eventData.status,
            createdAt: new Date().toISOString(),
            createdBy: getCurrentUser().name
        };
        this.events.push(newEvent);
        this.saveEvents();
        this.renderEvents();
        showSuccessMessage('Evento adicionado com sucesso!');
        addActivity('event', `Evento "${newEvent.title}" criado`, `Agendado para ${this.formatEventDate(newEvent.date)}`, 'success');
    },
    // Editar evento existente
    editEvent(eventId, eventData) {
        const eventIndex = this.events.findIndex(event => event.id === eventId);
        if (eventIndex > -1) {
            const oldEvent = { ...this.events[eventIndex] };
            this.events[eventIndex] = {
                ...this.events[eventIndex],
                title: eventData.title,
                description: eventData.description,
                date: eventData.date,
                time: eventData.time,
                type: eventData.type,
                team: eventData.team || [],
                status: eventData.status,
                updatedAt: new Date().toISOString(),
                updatedBy: getCurrentUser().name
            };
            this.saveEvents();
            this.renderEvents();
            showSuccessMessage('Evento atualizado com sucesso!');
            addActivity('event', `Evento "${eventData.title}" editado`, `Atualizado por ${getCurrentUser().name}`, 'info');
        }
    },
    // Remover evento
    removeEvent(eventId) {
        const eventIndex = this.events.findIndex(event => event.id === eventId);
        if (eventIndex > -1) {
            const removedEvent = this.events[eventIndex];
            this.events.splice(eventIndex, 1);
            this.saveEvents();
            this.renderEvents();
            showSuccessMessage('Evento removido com sucesso!');
            addActivity('event', `Evento "${removedEvent.title}" removido`, 'Evento cancelado', 'warning');
        }
    },
    // Renderizar lista de eventos
    renderEvents() {
        const eventsList = document.getElementById('eventsList');
        const noEventsMessage = document.getElementById('noEventsMessage');
        if (!eventsList) return;
        // Filtrar eventos futuros e ordenar por data
        const upcomingEvents = this.events
            .filter(event => new Date(event.date) >= new Date())
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .slice(0, 3); // Mostrar apenas os próximos 3 eventos
        if (upcomingEvents.length === 0) {
            noEventsMessage.style.display = 'block';
            // Limpar eventos antigos se existirem
            const existingEvents = eventsList.querySelectorAll('.event-item');
            existingEvents.forEach(event => event.remove());
        } else {
            noEventsMessage.style.display = 'none';
            // Limpar eventos existentes
            const existingEvents = eventsList.querySelectorAll('.event-item');
            existingEvents.forEach(event => event.remove());
            // Renderizar novos eventos
            upcomingEvents.forEach(event => {
                const eventElement = this.createEventElement(event);
                eventsList.appendChild(eventElement);
            });
        }
    },
    // Criar elemento HTML do evento
    createEventElement(event) {
        const eventDate = new Date(event.date);
        const day = eventDate.getDate().toString().padStart(2, '0');
        const month = eventDate.toLocaleDateString('pt-BR', { month: 'short' }).toUpperCase();
        const eventDiv = document.createElement('div');
        eventDiv.className = 'event-item';
        eventDiv.innerHTML = `
            <div class="event-header">
                <div class="event-date">
                    <span class="day">${day}</span>
                    <span class="month">${month}</span>
                </div>
                <div class="event-status ${event.status}">
                    <i class="fas ${this.getStatusIcon(event.status)}"></i>
                </div>
            </div>
            <div class="event-content">
                <h4>${event.title}</h4>
                <p>${event.description}${event.time ? ` - ${event.time}` : ''}</p>
                ${event.team.length > 0 ? `
                    <div class="event-team">
                        ${event.team.slice(0, 2).map(member => `<span class="team-member">${member}</span>`).join('')}
                        ${event.team.length > 2 ? `<span class="team-more">+${event.team.length - 2}</span>` : ''}
                    </div>
                ` : ''}
            </div>
            ${this.canManageEvents() ? `
                <div class="event-actions">
                    <button class="btn-edit-event" onclick="eventsSystem.openEditEventModal('${event.id}')" title="Editar evento">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-remove-event" onclick="eventsSystem.confirmRemoveEvent('${event.id}')" title="Remover evento">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            ` : ''}
        `;
        return eventDiv;
    },
    // Obter ícone do status
    getStatusIcon(status) {
        const icons = {
            'ready': 'fa-check-circle',
            'pending': 'fa-clock',
            'draft': 'fa-edit'
        };
        return icons[status] || 'fa-calendar';
    },
    // Abrir modal de edição
    openEditEventModal(eventId) {
        const event = this.events.find(e => e.id === eventId);
        if (event) {
            openEventModal(event);
        }
    },
    // Confirmar remoção de evento
    confirmRemoveEvent(eventId) {
        const event = this.events.find(e => e.id === eventId);
        if (event) {
            showConfirmDialog(
                'Remover Evento',
                `Tem certeza que deseja remover o evento "${event.title}"?`,
                () => this.removeEvent(eventId)
            );
        }
    },
    // Formatar data do evento
    formatEventDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
    },
    // Popular select de membros no modal
    populateTeamSelect() {
        const teamSelect = document.getElementById('eventTeam');
        if (!teamSelect) return;
        teamSelect.innerHTML = '';
        // Usar dados mockados dos membros
        const members = [
            'Ana Santos', 'João Silva', 'Pedro Costa', 'Maria Oliveira',
            'Lucas Ferreira', 'Rafael Santos', 'Carla Lima', 'Bruno Alves'
        ];
        members.forEach(member => {
            const option = document.createElement('option');
            option.value = member;
            option.textContent = member;
            teamSelect.appendChild(option);
        });
    }
};
// Funções para o modal de eventos
function openEventModal(eventToEdit = null) {
    if (!eventsSystem.canManageEvents()) {
        showErrorMessage('Você não tem permissão para gerenciar eventos.');
        return;
    }
    const modal = document.getElementById('eventModal');
    const form = document.getElementById('eventForm');
    const modalTitle = document.getElementById('eventModalTitle');
    // Limpar formulário
    form.reset();
    // Definir data mínima como hoje (apenas para novos eventos)
    const today = new Date().toISOString().split('T')[0];
    if (!eventToEdit) {
        document.getElementById('eventDate').min = today;
    } else {
        document.getElementById('eventDate').removeAttribute('min');
    }
    // Popular select de membros
    eventsSystem.populateTeamSelect();
    // Se é edição, preencher campos
    if (eventToEdit) {
        modalTitle.textContent = 'Editar Evento';
        document.getElementById('eventTitle').value = eventToEdit.title;
        document.getElementById('eventDescription').value = eventToEdit.description || '';
        document.getElementById('eventDate').value = eventToEdit.date;
        document.getElementById('eventTime').value = eventToEdit.time || '';
        document.getElementById('eventType').value = eventToEdit.type;
        document.getElementById('eventStatus').value = eventToEdit.status;
        // Selecionar membros da equipe
        const teamSelect = document.getElementById('eventTeam');
        Array.from(teamSelect.options).forEach(option => {
            option.selected = eventToEdit.team.includes(option.value);
        });
        // Armazenar ID do evento sendo editado
        form.dataset.editingEventId = eventToEdit.id;
    } else {
        modalTitle.textContent = 'Adicionar Evento';
        delete form.dataset.editingEventId;
    }
    modal.classList.add('show');
}
function closeEventModal() {
    const modal = document.getElementById('eventModal');
    modal.classList.remove('show');
}
function handleEventSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const teamSelect = document.getElementById('eventTeam');
    const selectedTeam = Array.from(teamSelect.selectedOptions).map(option => option.value);
    const eventData = {
        title: formData.get('title'),
        description: formData.get('description'),
        date: formData.get('date'),
        time: formData.get('time'),
        type: formData.get('type'),
        team: selectedTeam,
        status: formData.get('status')
    };
    // Verificar se é edição ou criação
    const editingEventId = form.dataset.editingEventId;
    if (editingEventId) {
        eventsSystem.editEvent(editingEventId, eventData);
    } else {
        eventsSystem.addEvent(eventData);
    }
    closeEventModal();
}
// === SISTEMA DE SINCRONIZAÇÃO FIREBASE === //

class FirebaseSyncManager {
    constructor() {
        this.isOnline = navigator.onLine;
        this.userId = this.getUserId();
        this.database = null;
        this.listeners = new Map();
        this.isInitialized = false;
        
        // Detectar mudanças de conectividade
        window.addEventListener('online', () => this.handleOnline());
        window.addEventListener('offline', () => this.handleOffline());
        
        // Aguardar Firebase estar disponível
        this.initializeWhenReady();
    }
    
    initializeWhenReady() {
        const checkFirebase = () => {
            if (window.firebaseDB) {
                this.database = window.firebaseDB;
                this.isInitialized = true;
                this.setupRealtimeSync();
                showSuccessMessage('🔥 Sincronização Firebase ativada!');
            } else {
                setTimeout(checkFirebase, 500);
            }
        };
        
        // Verificar se Firebase já está carregado ou aguardar evento
        if (window.firebaseDB) {
            checkFirebase();
        } else {
            window.addEventListener('firebaseReady', checkFirebase);
            setTimeout(checkFirebase, 2000); // Fallback
        }
    }
    
    getUserId() {
        // ID FIXO PARA TODA A BANDA - TODOS COMPARTILHAM OS MESMOS DADOS
        const BAND_SHARED_ID = 'ministerio_louvor_ibr_shared';
        localStorage.setItem('feeds_user_id', BAND_SHARED_ID);
        return BAND_SHARED_ID;
    }
    
    // Sincronização em tempo real
    setupRealtimeSync() {
        if (!this.database || !this.isInitialized) return;
        
        try {
            // Listener para playlists
            const playlistsRef = window.firebaseRef(this.database, `data/${this.userId}/playlists`);
            const playlistsListener = window.firebaseOnValue(playlistsRef, (snapshot) => {
                const serverData = snapshot.val();
                if (serverData && JSON.stringify(serverData) !== JSON.stringify(AppState.playlists)) {
                    console.log('🔄 Playlists atualizadas do Firebase:', serverData);
                    AppState.playlists = serverData;
                    localStorage.setItem('feedsPlaylists', JSON.stringify(serverData));
                    
                    // Atualizar interface sempre
                    setTimeout(() => {
                        loadPlaylists();
                        updateDashboardData(); // Atualizar dashboard também
                        
                        // Se estiver na seção de repertório, forçar update visual
                        if (AppState.currentSection === 'songs') {
                            // Forçar refresh da página de repertório
                            const playlistsGrid = document.getElementById('playlistsGrid');
                            if (playlistsGrid) {
                                loadPlaylists();
                            }
                        }
                    }, 200);
                    
                    // Log silencioso ao invés de notificação
                    console.log('🔄 Playlists atualizadas por outro membro da banda');
                }
            });
            
            this.listeners.set('playlists', playlistsListener);
            
            // Listener para escalas
            const schedulesRef = window.firebaseRef(this.database, `data/${this.userId}/schedules`);
            const schedulesListener = window.firebaseOnValue(schedulesRef, (snapshot) => {
                const serverData = snapshot.val();
                if (serverData) {
                    const currentDataString = JSON.stringify(AppState.schedules);
                    const serverDataString = JSON.stringify(serverData);
                    
                    if (serverDataString !== currentDataString) {
                        console.log('🔄 Escalas atualizadas do Firebase:', serverData);
                        
                        // Evitar loops - comparar último timestamp
                        const hasRealChanges = !AppState.schedules.length || 
                                             serverData.length !== AppState.schedules.length ||
                                             serverData.some((item, index) => 
                                                 !AppState.schedules[index] || 
                                                 item.id !== AppState.schedules[index].id ||
                                                 JSON.stringify(item) !== JSON.stringify(AppState.schedules[index])
                                             );
                        
                        if (hasRealChanges) {
                            AppState.schedules = [...serverData]; // Clonar array
                            localStorage.setItem('feedsSchedules', JSON.stringify(serverData));
                            
                                                // Atualizar interface sempre
                    setTimeout(() => {
                        renderSchedules();
                        updateDashboardData(); // Atualizar dashboard também
                    }, 100);
                    
                    // Log silencioso ao invés de notificação
                    console.log('🔄 Escalas atualizadas por outro membro da banda');
                        }
                    }
                }
            });
            
            this.listeners.set('schedules', schedulesListener);
            
            // Listener para atividades  
            const activitiesRef = window.firebaseRef(this.database, `data/${this.userId}/activities`);
            const activitiesListener = window.firebaseOnValue(activitiesRef, (snapshot) => {
                const serverData = snapshot.val();
                if (serverData && Array.isArray(serverData)) {
                    // Verificar se há mudanças reais antes de atualizar
                    const currentDataString = JSON.stringify(AppState.activities);
                    const serverDataString = JSON.stringify(serverData);
                    
                    if (serverDataString !== currentDataString) {
                        // Mesclar atividades sem duplicar
                        const mergedActivities = [...serverData];
                        
                        // Adicionar atividades locais que não estão no servidor
                        AppState.activities.forEach(localActivity => {
                            const existsInServer = mergedActivities.some(serverActivity => 
                                serverActivity.id === localActivity.id ||
                                (serverActivity.timestamp === localActivity.timestamp &&
                                 serverActivity.type === localActivity.type &&
                                 serverActivity.title === localActivity.title)
                            );
                            
                            if (!existsInServer) {
                                mergedActivities.unshift(localActivity);
                            }
                        });
                        
                        // Ordenar por timestamp (mais recente primeiro)
                        mergedActivities.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                        
                        // Manter apenas as últimas 50
                        const finalActivities = mergedActivities.slice(0, 50);
                        
                        AppState.activities = finalActivities;
                        localStorage.setItem('feedsActivities', JSON.stringify(finalActivities));
                        
                        // Atualizar interface se necessário
                        updateRecentActivities();
                        
                        // Log silencioso ao invés de notificação
                        console.log('🔄 Atividades sincronizadas sem duplicação');
                    }
                }
            });
            
            this.listeners.set('activities', activitiesListener);
            
        } catch (error) {
            console.warn('⚠️ Erro na configuração do sync em tempo real:', error);
        }
    }
    
    // Sincronizar playlists
    async syncPlaylists(playlists) {
        if (!this.database || !this.isOnline || !this.isInitialized) {
            console.warn('⚠️ Sincronização de playlists cancelada - Firebase não disponível');
            return;
        }
        
        try {
            console.log('📤 Sincronizando playlists para Firebase:', playlists);
            const playlistsRef = window.firebaseRef(this.database, `data/${this.userId}/playlists`);
            await window.firebaseSet(playlistsRef, playlists);
            console.log('✅ Playlists sincronizadas com sucesso');
        } catch (error) {
            console.error('❌ Erro na sincronização das playlists:', error);
            showErrorMessage('Erro ao sincronizar playlists com o servidor');
        }
    }
    
    // Sincronizar escalas
    async syncSchedules(schedules) {
        if (!this.database || !this.isOnline || !this.isInitialized) {
            console.warn('⚠️ Sincronização de escalas cancelada - Firebase não disponível');
            return;
        }
        
        try {
            console.log('📤 Sincronizando escalas para Firebase:', schedules);
            const schedulesRef = window.firebaseRef(this.database, `data/${this.userId}/schedules`);
            await window.firebaseSet(schedulesRef, schedules);
            console.log('✅ Escalas sincronizadas com sucesso');
        } catch (error) {
            console.error('❌ Erro na sincronização das escalas:', error);
            showErrorMessage('Erro ao sincronizar escalas com o servidor');
        }
    }
    
    // Sincronizar atividades
    async syncActivities(activities) {
        if (!this.database || !this.isOnline || !this.isInitialized) {
            return;
        }
        
        try {
            const activitiesRef = window.firebaseRef(this.database, `data/${this.userId}/activities`);
            await window.firebaseSet(activitiesRef, activities);
        } catch (error) {
            console.warn('⚠️ Erro na sincronização das atividades:', error);
        }
    }
    
    // Carregar dados do servidor
    async loadFromServer() {
        if (!this.database || !this.isOnline || !this.isInitialized) {
            return this.loadFromLocal();
        }
        
        try {
            const dataRef = window.firebaseRef(this.database, `data/${this.userId}`);
            const snapshot = await window.firebaseGet(dataRef);
            const serverData = snapshot.val();
            
            if (serverData) {
                // Priorizar dados do servidor se existirem
                if (serverData.playlists) {
                    AppState.playlists = serverData.playlists;
                    localStorage.setItem('feedsPlaylists', JSON.stringify(serverData.playlists));
                }
                
                if (serverData.schedules) {
                    AppState.schedules = serverData.schedules;
                    localStorage.setItem('feedsSchedules', JSON.stringify(serverData.schedules));
                }
                
                if (serverData.activities) {
                    AppState.activities = serverData.activities;
                    localStorage.setItem('feedsActivities', JSON.stringify(serverData.activities));
                }
                
                showSuccessMessage('📥 Dados carregados do Firebase');
                return serverData;
            }
        } catch (error) {
            console.warn('⚠️ Erro ao carregar do servidor, usando dados locais:', error);
        }
        
        return this.loadFromLocal();
    }
    
    // Carregar dados locais
    loadFromLocal() {
        const localPlaylists = JSON.parse(localStorage.getItem('feedsPlaylists') || '{}');
        const localSchedules = JSON.parse(localStorage.getItem('feedsSchedules') || '[]');
        
        return {
            playlists: localPlaylists,
            schedules: localSchedules
        };
    }
    
    // Evento: voltou online
    handleOnline() {
        this.isOnline = true;
        showSuccessMessage('🌐 Conectado! Sincronizando dados...');
        
        // Sincronizar dados pendentes
        if (this.isInitialized) {
            this.syncPlaylists(AppState.playlists);
            this.syncSchedules(AppState.schedules);
            this.syncActivities(AppState.activities);
        }
    }
    
    // Evento: ficou offline
    handleOffline() {
        this.isOnline = false;
        showInfoMessage('📴 Modo offline ativado');
    }
    
    // Limpar listeners (quando necessário)
    cleanup() {
        this.listeners.forEach((listener, key) => {
            const ref = window.firebaseRef(this.database, `data/${this.userId}/${key}`);
            window.firebaseOff(ref, listener);
        });
        this.listeners.clear();
    }
}

// Instanciar o gerenciador de sincronização
let syncManager = null;

// Interceptar saveToLocalStorage para adicionar sync Firebase
const originalSaveToLocalStorage = saveToLocalStorage;
saveToLocalStorage = function() {
    // Executar salvamento local original
    originalSaveToLocalStorage();
    
    // Sincronizar com Firebase se disponível
    if (syncManager && syncManager.isInitialized) {
        syncManager.syncPlaylists(AppState.playlists);
        syncManager.syncSchedules(AppState.schedules);
        syncManager.syncActivities(AppState.activities);
    }
};

// Interceptar loadMockData para carregar do Firebase primeiro
const originalLoadMockData = loadMockData;
loadMockData = async function() {
    console.log('🔄 Iniciando carregamento de dados...');
    
    // Aguardar sincronização estar pronta (máximo 5 segundos)
    let attempts = 0;
    while (!syncManager && attempts < 20) {
        await new Promise(resolve => setTimeout(resolve, 250));
        attempts++;
    }
    
    // Tentar carregar do Firebase primeiro se disponível
    if (syncManager && syncManager.isInitialized) {
        console.log('📡 Carregando dados do Firebase...');
        const serverData = await syncManager.loadFromServer();
        if (serverData && (Object.keys(serverData.playlists || {}).length > 0 || (serverData.schedules || []).length > 0)) {
            console.log('✅ Dados encontrados no Firebase, usando dados do servidor');
            // Se há dados no servidor, usá-los
            if (serverData.playlists) AppState.playlists = serverData.playlists;
            if (serverData.schedules) AppState.schedules = serverData.schedules;
            
            // Ainda precisamos carregar outros dados locais
            try {
                // MEMBROS SEMPRE VÊM DO MOCKDATA (dados fixos da banda)
                AppState.members = [...mockData.members];
                console.log('✅ Membros carregados do mockData:', AppState.members.length);
                
                const savedSongs = localStorage.getItem('feedsSongs');
                if (savedSongs) {
                    AppState.songs = JSON.parse(savedSongs);
                } else {
                    AppState.songs = mockData.songs;
                }
                
                const savedActivities = localStorage.getItem('feedsActivities');
                if (savedActivities) {
                    AppState.activities = JSON.parse(savedActivities);
                } else {
                    AppState.activities = [];
                }
                
                // Limpar atividades duplicadas ao carregar
                if (AppState.activities.length > 0) {
                    setTimeout(() => {
                        console.log('🧹 Verificando atividades duplicadas...');
                        const originalLength = AppState.activities.length;
                        const cleaned = [];
                        const seen = new Map();
                        
                        AppState.activities.forEach(activity => {
                            const key = `${activity.type}_${activity.title}_${activity.description}_${activity.timestamp}`;
                            if (!seen.has(key)) {
                                seen.set(key, true);
                                cleaned.push(activity);
                            }
                        });
                        
                        if (cleaned.length !== originalLength) {
                            AppState.activities = cleaned;
                            saveToLocalStorage();
                            console.log(`✅ ${originalLength - cleaned.length} atividades duplicadas removidas automaticamente`);
                        }
                    }, 1000);
                }
            } catch (error) {
                console.error('Erro ao carregar dados complementares:', error);
            }
            
            console.log('📊 Estado final:', { 
                schedules: AppState.schedules.length, 
                playlists: Object.keys(AppState.playlists).length 
            });
            return;
        } else {
            console.log('📭 Nenhum dado encontrado no Firebase');
        }
    } else {
        console.log('⚠️ Firebase não disponível, usando dados locais');
    }
    
    // Se não há dados no Firebase ou não está disponível, executar carregamento original
    console.log('📂 Carregando dados locais/mockados');
    originalLoadMockData();
};

// Função para mostrar status da sincronização
function showSyncStatus() {
    if (!syncManager) {
        showInfoMessage('📴 Firebase não inicializado - funcionando offline');
        return;
    }
    
    const status = {
        online: syncManager.isOnline,
        initialized: syncManager.isInitialized,
        userId: syncManager.userId,
        listeners: syncManager.listeners.size
    };
    
    const statusMsg = `🔥 Firebase Status:\n• Online: ${status.online ? '✅' : '❌'}\n• Inicializado: ${status.initialized ? '✅' : '❌'}\n• User ID: ${status.userId}\n• Listeners ativos: ${status.listeners}`;
    
    showInfoMessage(statusMsg);
}

// Função para limpar atividades duplicadas existentes
function cleanDuplicateActivities() {
    const cleaned = [];
    const seen = new Map();
    
    AppState.activities.forEach(activity => {
        // Criar chave única baseada em conteúdo
        const key = `${activity.type}_${activity.title}_${activity.description}_${activity.timestamp}`;
        
        if (!seen.has(key)) {
            seen.set(key, true);
            cleaned.push(activity);
        } else {
            console.log('🧹 Removendo atividade duplicada:', activity.title);
        }
    });
    
    if (cleaned.length !== AppState.activities.length) {
        AppState.activities = cleaned;
        saveToLocalStorage();
        updateRecentActivities();
        showSuccessMessage(`🧹 ${AppState.activities.length - cleaned.length} atividades duplicadas removidas!`);
        console.log(`✅ Limpeza concluída: ${cleaned.length} atividades únicas mantidas`);
    } else {
        showInfoMessage('✅ Nenhuma atividade duplicada encontrada');
    }
}

// Inicializar Firebase IMEDIATAMENTE quando disponível
window.addEventListener('firebaseReady', function() {
    console.log('🔥 Firebase pronto! Inicializando sincronização...');
    
    // Inicializar Firebase Sync imediatamente
    if (!syncManager) {
        syncManager = new FirebaseSyncManager();
        console.log('✅ FirebaseSyncManager criado');
    }
});

// Aguardar Firebase estar disponível com polling
function waitForFirebase() {
    const checkFirebase = () => {
        if (window.firebaseDB) {
            console.log('🔥 Firebase detectado via polling, inicializando...');
            if (!syncManager) {
                syncManager = new FirebaseSyncManager();
                console.log('✅ FirebaseSyncManager criado via polling');
            }
        } else {
            setTimeout(checkFirebase, 500);
        }
    };
    checkFirebase();
}

// Inicializar sistema de eventos quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Aguardar um pouco para garantir que tudo carregou
    setTimeout(() => {
        initializeAIChat();
        eventsSystem.init();
        
        // Tentar inicializar Firebase imediatamente ou aguardar
        if (window.firebaseDB) {
            if (!syncManager) {
                syncManager = new FirebaseSyncManager();
                console.log('✅ FirebaseSyncManager criado no DOMContentLoaded');
            }
        } else {
            // Se Firebase não está pronto, aguardar
            waitForFirebase();
        }
    }, 1000);
});

// Comandos globais para debug
window.showFirebaseStatus = showSyncStatus;
window.cleanDuplicateActivities = cleanDuplicateActivities;
window.syncManager = () => syncManager;

// Função para debug das atividades
window.debugActivities = function() {
    console.log('📊 Total de atividades:', AppState.activities.length);
    console.log('📋 Últimas 10 atividades:', AppState.activities.slice(0, 10));
    
    // Verificar duplicatas potenciais
    const grouped = {};
    AppState.activities.forEach(activity => {
        const key = `${activity.type}_${activity.title}`;
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(activity);
    });
    
    const duplicates = Object.entries(grouped).filter(([key, activities]) => activities.length > 1);
    if (duplicates.length > 0) {
        console.warn('⚠️ Possíveis duplicatas detectadas:', duplicates);
        showInfoMessage(`⚠️ ${duplicates.length} grupos de atividades com possíveis duplicatas encontrados - verifique o console`);
    } else {
        console.log('✅ Nenhuma duplicata detectada');
        showInfoMessage('✅ Nenhuma duplicata de atividades encontrada');
    }
};

// Função para testar sincronização
window.testSync = function() {
    if (!syncManager || !syncManager.isInitialized) {
        console.error('❌ Firebase não inicializado');
        return;
    }
    
    console.log('🧪 Testando sincronização...');
    console.log('Current schedules:', AppState.schedules);
    console.log('Current playlists:', AppState.playlists);
    
    // Forçar sincronização manual
    syncManager.syncSchedules(AppState.schedules);
    syncManager.syncPlaylists(AppState.playlists);
    
    showInfoMessage('🧪 Teste de sincronização executado - verifique o console');
};

// Função para limpar dados Firebase
window.clearFirebaseData = function() {
    if (!syncManager || !syncManager.isInitialized) {
        console.error('❌ Firebase não inicializado');
        return;
    }
    
    const confirm = window.confirm('⚠️ ATENÇÃO: Isso irá apagar TODOS os dados do Firebase. Continuar?');
    if (!confirm) return;
    
    // Limpar escalas
    syncManager.syncSchedules([]);
    // Limpar playlists
    syncManager.syncPlaylists({});
    
    showInfoMessage('🗑️ Dados do Firebase limpos');
};

// Função para forçar recarregamento dos dados
window.forceReload = function() {
    if (syncManager && syncManager.isInitialized) {
        console.log('🔄 Forçando recarregamento dos dados...');
        syncManager.loadFromServer().then(() => {
            renderSchedules();
            updateDashboardData();
            loadPlaylists();
            showSuccessMessage('✅ Dados recarregados com sucesso!');
        });
    } else {
        console.log('📂 Recarregando dados locais...');
        loadMockData();
        renderSchedules();
        updateDashboardData();
        loadPlaylists();
        showInfoMessage('✅ Dados locais recarregados!');
    }
};

// Função para debug completo
window.debugState = function() {
    console.log('=== DEBUG DO ESTADO COMPLETO ===');
    console.log('🔥 Firebase Manager:', syncManager);
    console.log('📊 AppState:', AppState);
    console.log('🌐 Firebase DB:', window.firebaseDB);
    console.log('📋 Current Section:', AppState.currentSection);
    console.log('👤 Current User:', AppState.currentUser);
    
    if (syncManager) {
        console.log('🔄 Sync Status:', {
            initialized: syncManager.isInitialized,
            online: syncManager.isOnline,
            userId: syncManager.userId,
            listeners: syncManager.listeners.size
        });
    }
    
    showInfoMessage('🔍 Estado debugado - verifique o console');
};

// Função para forçar atualização das playlists (incluindo contadores)
window.forcePlaylistUpdate = function() {
    console.log('🎵 Forçando atualização das playlists...');
    
    if (AppState.currentSection === 'songs') {
        loadPlaylists();
        showInfoMessage('✅ Playlists atualizadas!');
    } else {
        console.log('ℹ️ Não está na seção de repertório');
    }
    
    // Forçar sincronização também
    if (syncManager && syncManager.isInitialized) {
        syncManager.syncPlaylists(AppState.playlists);
    }
};

// === FUNÇÃO PARA LIMPEZA COMPLETA DO SISTEMA === //
window.resetSystemCompletely = function() {
    console.log('🧹 INICIANDO LIMPEZA COMPLETA DO SISTEMA...');
    
    // Confirmação dupla antes de limpar
    const confirm1 = window.confirm('⚠️ ATENÇÃO: Isso irá apagar TODAS as escalas e atividades do sistema. Continuar?');
    if (!confirm1) return;
    
    const confirm2 = window.confirm('🚨 ÚLTIMA CHANCE: Todos os dados serão perdidos. Tem certeza absoluta?');
    if (!confirm2) return;
    
    // 1. Limpar localStorage
    console.log('🗑️ Limpando localStorage...');
    localStorage.removeItem('feedsSchedules');
    localStorage.removeItem('feedsActivities');
    localStorage.removeItem('feedsPlaylists');
    localStorage.removeItem('feedsSongs');
    localStorage.removeItem('feedsMembers');
    localStorage.removeItem('feedsUserSession');
    localStorage.removeItem('feedsUser');
    
    // 2. Resetar AppState para dados limpos
    console.log('🔄 Resetando dados do sistema...');
    AppState.schedules = [...mockData.schedules]; // Array vazio agora
    AppState.activities = [];
    AppState.playlists = [];
    
    // 3. Forçar sincronização com Firebase (dados limpos)
    console.log('🔥 Sincronizando com Firebase...');
    if (syncManager && syncManager.isInitialized) {
        syncManager.syncSchedules([]);
        syncManager.syncActivities([]);
        syncManager.syncPlaylists([]);
    }
    
    // 4. Atualizar interface
    console.log('🖥️ Atualizando interface...');
    if (AppState.currentSection === 'schedules') {
        renderSchedules();
    }
    if (AppState.currentSection === 'home') {
        updateRecentActivities();
        updateNextSchedule();
    }
    
    // 5. Salvar estado limpo
    saveToLocalStorage();
    
    console.log('✅ SISTEMA COMPLETAMENTE LIMPO!');
    console.log('📋 Escalas:', AppState.schedules.length);
    console.log('📋 Atividades:', AppState.activities.length);
    
    showSuccessMessage('🧹 Sistema completamente limpo! Recarregando página...');
    
    // 6. Recarregar página após 2 segundos
    setTimeout(() => {
        window.location.reload();
    }, 2000);
};

// Função para debug rápido
window.checkSystemData = function() {
    console.log('📊 DADOS ATUAIS DO SISTEMA:');
    console.log('Escalas (mockData):', mockData.schedules.length);
    console.log('Escalas (AppState):', AppState.schedules.length);
    console.log('Atividades:', AppState.activities.length);
    console.log('localStorage schedules:', localStorage.getItem('feedsSchedules') ? JSON.parse(localStorage.getItem('feedsSchedules')).length : 'vazio');
    console.log('localStorage activities:', localStorage.getItem('feedsActivities') ? JSON.parse(localStorage.getItem('feedsActivities')).length : 'vazio');
    
    // Mostrar detalhes das escalas
    console.log('📋 Escalas detalhadas:', AppState.schedules);
};

// === FUNÇÃO PARA FORÇAR EXCLUSÃO DE ESCALAS ESPECÍFICAS === //
window.forceDeleteAllSchedules = function() {
    console.log('🗑️ FORÇANDO EXCLUSÃO DE TODAS AS ESCALAS...');
    
    const confirm1 = window.confirm('⚠️ Isso irá forçar a exclusão de TODAS as escalas, incluindo as que não conseguem ser excluídas normalmente. Continuar?');
    if (!confirm1) return;
    
    // 1. Limpar completamente AppState.schedules
    AppState.schedules = [];
    console.log('✅ AppState.schedules limpo');
    
    // 2. Sobrescrever localStorage com array vazio
    localStorage.setItem('feedsSchedules', JSON.stringify([]));
    console.log('✅ localStorage limpo');
    
    // 3. Forçar sincronização Firebase com array vazio
    if (syncManager && syncManager.isInitialized) {
        syncManager.syncSchedules([]);
        console.log('✅ Firebase sincronizado com array vazio');
    }
    
    // 4. Atualizar interface imediatamente
    renderSchedules();
    updateDashboardData();
    updateNextSchedule();
    console.log('✅ Interface atualizada');
    
    showSuccessMessage('🗑️ Todas as escalas foram forçadamente excluídas!');
    
    // 5. Recarregar página para garantir
    setTimeout(() => {
        console.log('🔄 Recarregando página para confirmar limpeza...');
        window.location.reload();
    }, 2000);
};

// Função para excluir uma escala específica (bypass das permissões)
window.forceDeleteSchedule = function(scheduleId) {
    console.log(`🗑️ Forçando exclusão da escala ID: ${scheduleId}`);
    
    // Encontrar a escala
    const scheduleIndex = AppState.schedules.findIndex(s => s.id == scheduleId);
    
    if (scheduleIndex === -1) {
        console.log('❌ Escala não encontrada no AppState');
        return;
    }
    
    const schedule = AppState.schedules[scheduleIndex];
    console.log('📋 Escala encontrada:', schedule);
    
    // Remover do AppState
    AppState.schedules.splice(scheduleIndex, 1);
    console.log('✅ Escala removida do AppState');
    
    // Salvar no localStorage
    saveToLocalStorage();
    console.log('✅ localStorage atualizado');
    
    // Sincronizar com Firebase
    if (syncManager && syncManager.isInitialized) {
        syncManager.syncSchedules(AppState.schedules);
        console.log('✅ Firebase sincronizado');
    }
    
    // Atualizar interface
    renderSchedules();
    updateDashboardData();
    
    showSuccessMessage(`🗑️ Escala "${schedule.date}" foi forçadamente excluída!`);
    
    console.log('✅ Exclusão forçada concluída');
};

// === FUNÇÕES PARA DEBUG E RESTAURAÇÃO DE MEMBROS === //
window.debugMembers = function() {
    console.log('👥 === DEBUG DOS MEMBROS ===');
    console.log('📊 mockData.members (dados originais):', mockData.members.length, 'membros');
    console.log('📊 AppState.members (dados carregados):', AppState.members.length, 'membros');
    
    console.log('📋 Detalhes do mockData.members:');
    mockData.members.forEach((member, index) => {
        console.log(`${index + 1}. ${member.name} - ${member.role} - Status: ${member.status}`);
    });
    
    console.log('📋 Detalhes do AppState.members:');
    AppState.members.forEach((member, index) => {
        console.log(`${index + 1}. ${member.name} - ${member.role} - Status: ${member.status}`);
    });
    
    // Verificar membros ativos
    const activeMockMembers = mockData.members.filter(m => m.status === 'active');
    const activeAppMembers = AppState.members.filter(m => m.status === 'active');
    
    console.log('✅ Membros ativos no mockData:', activeMockMembers.length);
    console.log('✅ Membros ativos no AppState:', activeAppMembers.length);
    
    // Verificar localStorage
    const savedMembers = localStorage.getItem('feedsMembers');
    console.log('💾 localStorage feedsMembers:', savedMembers ? 'Existe' : 'Não existe');
    if (savedMembers) {
        try {
            const parsed = JSON.parse(savedMembers);
            console.log('💾 Membros no localStorage:', parsed.length);
        } catch (e) {
            console.log('❌ Erro ao parsear localStorage:', e);
        }
    }
    
    showInfoMessage('👥 Debug dos membros concluído - verifique o console');
};

window.restoreMembers = function() {
    console.log('🔄 RESTAURANDO MEMBROS DO SISTEMA...');
    
    // 1. Forçar carregamento dos membros do mockData
    AppState.members = [...mockData.members];
    console.log('✅ AppState.members restaurado do mockData:', AppState.members.length, 'membros');
    
    // 2. Remover qualquer dados de membros do localStorage (se existir)
    localStorage.removeItem('feedsMembers');
    console.log('✅ localStorage feedsMembers removido');
    
    // 3. Verificar se todos os membros estão ativos
    const activeMembers = AppState.members.filter(m => m.status === 'active');
    console.log('✅ Membros ativos após restauração:', activeMembers.length);
    
    // 4. Forçar atualização do contador no dashboard
    updateMembersCount();
    console.log('✅ Contador de membros atualizado');
    
    // 5. Se estiver na seção de membros, atualizar a renderização
    if (AppState.currentSection === 'members') {
        renderMembers();
        console.log('✅ Lista de membros re-renderizada');
    }
    
    // 6. Atualizar dashboard completo
    updateDashboardData();
    console.log('✅ Dashboard atualizado');
    
    showSuccessMessage(`🔄 Membros restaurados! Total: ${AppState.members.length} membros (${activeMembers.length} ativos)`);
    
    console.log('✅ RESTAURAÇÃO DOS MEMBROS CONCLUÍDA!');
};

window.forceMembersUpdate = function() {
    console.log('🔄 FORÇANDO ATUALIZAÇÃO DOS MEMBROS...');
    
    // Forçar recarga dos dados
    loadMockData();
    console.log('✅ Dados recarregados');
    
    // Forçar atualização do contador
    updateMembersCount();
    console.log('✅ Contador atualizado');
    
    // Verificar resultado
    const activeMembers = AppState.members.filter(m => m.status === 'active');
    console.log(`📊 Resultado: ${activeMembers.length} membros ativos de ${AppState.members.length} total`);
    
    showInfoMessage(`🔄 Atualização forçada: ${activeMembers.length} membros ativos`);
};

// Função para verificar e corrigir o problema dos membros
window.fixMembersCount = function() {
    console.log('🔧 DIAGNÓSTICO E CORREÇÃO DOS MEMBROS...');
    
    // 1. Verificar se existe dados de membros corrompidos
    debugMembers();
    
    // 2. Se não há membros no AppState, restaurar
    if (AppState.members.length === 0) {
        console.log('🚨 PROBLEMA: AppState.members está vazio! Restaurando...');
        restoreMembers();
        return;
    }
    
    // 3. Se há membros mas nenhum está ativo, verificar status
    const activeMembers = AppState.members.filter(m => m.status === 'active');
    if (activeMembers.length === 0) {
        console.log('🚨 PROBLEMA: Nenhum membro está com status "active"!');
        console.log('🔧 Corrigindo status dos membros...');
        
        AppState.members.forEach(member => {
            if (!member.status || member.status !== 'active') {
                member.status = 'active';
                console.log(`✅ Status corrigido para: ${member.name}`);
            }
        });
        
        updateMembersCount();
        showSuccessMessage('🔧 Status dos membros corrigido!');
        return;
    }
    
    // 4. Se há membros ativos mas o contador não atualiza, forçar update
    console.log('🔧 Forçando atualização do contador...');
    updateMembersCount();
    
    console.log('✅ DIAGNÓSTICO CONCLUÍDO');
};

// Função para limpar dados corrompidos do localStorage e forçar correção
window.fixMembersPermanently = function() {
    console.log('🔧 CORREÇÃO PERMANENTE DOS MEMBROS...');
    
    // 1. Remover qualquer dados de membros do localStorage
    localStorage.removeItem('feedsMembers');
    console.log('✅ localStorage feedsMembers removido');
    
    // 2. Garantir que AppState tenha os dados corretos
    AppState.members = [...mockData.members];
    console.log('✅ AppState.members restaurado:', AppState.members.length, 'membros');
    
    // 3. Verificar se todos estão ativos
    const activeMembers = AppState.members.filter(m => m.status === 'active');
    console.log('✅ Membros ativos:', activeMembers.length);
    
    // 4. Atualizar dashboard
    updateMembersCount();
    updateDashboardData();
    console.log('✅ Dashboard atualizado');
    
    showSuccessMessage(`🔧 Correção permanente aplicada! ${activeMembers.length} membros ativos`);
    
    console.log('✅ CORREÇÃO PERMANENTE CONCLUÍDA - Problema não deve mais ocorrer no F5');
};

// Função para forçar exibição INSTANTÂNEA dos membros
window.fixMembersInstantly = function() {
    console.log('⚡ CORREÇÃO INSTANTÂNEA DOS MEMBROS...');
    
    // 1. Limpar localStorage corrompido
    localStorage.removeItem('feedsMembers');
    
    // 2. Forçar carregamento do mockData
    AppState.members = [...mockData.members];
    
    // 3. FORÇAR atualização IMEDIATA do DOM (sem esperar setInterval)
    forceUpdateMembersDisplay();
    
    // 4. Verificar resultado
    const activeMembers = AppState.members.filter(m => m.status === 'active');
    
    console.log('⚡ RESULTADO INSTANTÂNEO:');
    console.log('📊 Total de membros:', AppState.members.length);
    console.log('✅ Membros ativos:', activeMembers.length);
    
    showSuccessMessage(`⚡ Membros exibidos instantaneamente! ${activeMembers.length} ativos`);
    
    return activeMembers.length;
};

// Função que FORÇA atualização imediata do display sem depender de setInterval
window.forceUpdateMembersDisplay = function() {
    console.log('🔥 FORÇANDO ATUALIZAÇÃO IMEDIATA DO DISPLAY...');
    
    // Garantir que os dados estão corretos
    if (AppState.members.length === 0) {
        AppState.members = [...mockData.members];
        console.log('🔄 Dados dos membros restaurados:', AppState.members.length);
    }
    
    // Contar membros ativos
    const activeMembers = AppState.members.filter(member => member.status === 'active');
    console.log('✅ Membros ativos encontrados:', activeMembers.length);
    
    // ATUALIZAR DOM DIRETAMENTE (bypass do setInterval)
    const memberCountElement = document.getElementById('activeMembersCount');
    const memberDetail = memberCountElement?.parentElement.querySelector('.stat-detail');
    
    if (memberCountElement) {
        memberCountElement.textContent = activeMembers.length;
        console.log('✅ Elemento activeMembersCount atualizado:', activeMembers.length);
    } else {
        console.warn('❌ Elemento activeMembersCount não encontrado');
        // Tentar encontrar por alternativa
        const alternativeElement = document.querySelector('[id*="member"], [class*="member-count"]');
        if (alternativeElement) {
            alternativeElement.textContent = activeMembers.length;
            console.log('✅ Elemento alternativo encontrado e atualizado');
        }
    }
    
    // Atualizar detalhes
    if (memberDetail) {
        const vocalists = activeMembers.filter(m => m.role === 'Vocal' || m.instruments?.includes('Vocal')).length;
        const instrumentalists = activeMembers.filter(m => m.role === 'Instrumentista' || m.instruments?.some(i => i !== 'Vocal')).length;
        const projectors = activeMembers.filter(m => m.role === 'Projetor' || m.instruments?.includes('Projetor')).length;
        memberDetail.textContent = `👥 ${vocalists} vocais, ${instrumentalists} instrumentistas, ${projectors} projetores`;
        memberDetail.classList.add('live-data');
        console.log('✅ Detalhes atualizados:', `${vocalists} vocais, ${instrumentalists} instrumentistas, ${projectors} projetores`);
    }
    
    console.log('🔥 ATUALIZAÇÃO FORÇADA CONCLUÍDA!');
    return activeMembers.length;
};

// === FUNÇÕES DE DATA SEMI-AUTOMÁTICA === //
function setupDateInput() {
    const dateInput = document.getElementById('scheduleDateInput');
    const datePreview = document.getElementById('datePreview');
    const hiddenDateInput = document.getElementById('scheduleDate');
    
    if (dateInput) {
        dateInput.addEventListener('change', function() {
            updateDatePreview(this.value);
        });
    }
}

function updateDatePreview(dateValue) {
    const datePreview = document.getElementById('datePreview');
    const hiddenDateInput = document.getElementById('scheduleDate');
    
    if (!dateValue) {
        datePreview.innerHTML = '<i class="fas fa-calendar-alt"></i><span>Selecione uma data acima</span>';
        datePreview.classList.remove('populated');
        hiddenDateInput.value = '';
        return;
    }
    
    // Converter date para formato brasileiro
    const selectedDate = new Date(dateValue + 'T12:00:00');
    const dayOfWeek = selectedDate.getDay();
    const day = selectedDate.getDate().toString().padStart(2, '0');
    const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
    
    // Array de dias da semana
    const weekDays = [
        'DOMINGO', 'SEGUNDA-FEIRA', 'TERÇA-FEIRA', 'QUARTA-FEIRA', 
        'QUINTA-FEIRA', 'SEXTA-FEIRA', 'SÁBADO'
    ];
    
    // Gerar formato final: "DOMINGO - 15/12"
    const formattedDate = `${weekDays[dayOfWeek]} - ${day}/${month}`;
    
    // Atualizar preview
    datePreview.innerHTML = `<i class="fas fa-check-circle"></i><span>${formattedDate}</span>`;
    datePreview.classList.add('populated');
    
    // Atualizar campo hidden
    hiddenDateInput.value = formattedDate;
}

function getDayName(dayIndex) {
    const days = [
        'DOMINGO', 'SEGUNDA-FEIRA', 'TERÇA-FEIRA', 'QUARTA-FEIRA', 
        'QUINTA-FEIRA', 'SEXTA-FEIRA', 'SÁBADO'
    ];
    return days[dayIndex];
}

function parseExistingScheduleDate(dateString) {
    // Função para converter data no formato "DOMINGO - 15/12" para date input
    const dateInput = document.getElementById('scheduleDateInput');
    const datePreview = document.getElementById('datePreview');
    
    if (!dateString || !dateInput) return;
    
    // Extrair dia e mês da string (ex: "DOMINGO - 15/12")
    const dateMatch = dateString.match(/(\d{1,2})\/(\d{1,2})/);
    if (dateMatch) {
        const day = dateMatch[1].padStart(2, '0');
        const month = dateMatch[2].padStart(2, '0');
        const currentYear = new Date().getFullYear();
        
        // Criar formato YYYY-MM-DD para o input date
        const inputDateValue = `${currentYear}-${month}-${day}`;
        
        // Preencher o input
        dateInput.value = inputDateValue;
        
        // Atualizar preview
        datePreview.innerHTML = `<i class="fas fa-check-circle"></i><span>${dateString}</span>`;
        datePreview.classList.add('populated');
    }
}

// Função para TESTAR se a atualização instantânea está funcionando
window.testInstantUpdate = function() {
    console.log('🧪 INICIANDO TESTE DE ATUALIZAÇÃO INSTANTÂNEA...');
    
    const startTime = Date.now();
    
    // 1. Limpar e restaurar dados
    fixMembersInstantly();
    
    // 2. Verificar se foi realmente instantâneo
    const endTime = Date.now();
    const timeTaken = endTime - startTime;
    
    // 3. Verificar resultado no DOM
    const memberCountElement = document.getElementById('activeMembersCount');
    const currentCount = memberCountElement ? memberCountElement.textContent : 'não encontrado';
    
    console.log('🧪 RESULTADO DO TESTE:');
    console.log('⏱️ Tempo decorrido:', timeTaken + 'ms');
    console.log('📊 Valor exibido:', currentCount);
    console.log('✅ Dados no AppState:', AppState.members.filter(m => m.status === 'active').length);
    
    // 4. Diagnóstico
    if (timeTaken < 500 && currentCount == '21') {
        console.log('🎉 SUCESSO! Atualização instantânea funcionando perfeitamente!');
        showSuccessMessage(`🎉 Teste aprovado! Atualizou em ${timeTaken}ms - ${currentCount} membros`);
        return true;
    } else {
        console.warn('⚠️ FALHA! Ainda há problemas na atualização instantânea');
        showErrorMessage(`⚠️ Teste falhou: ${timeTaken}ms, mostra ${currentCount}`);
        return false;
    }
};

// === FUNÇÃO PARA TESTAR OS UPGRADES === //
window.testUpgrades = function() {
    console.log('🚀 TESTANDO UPGRADES IMPLEMENTADOS...');
    
    // Teste 1: Verificar se Murillo foi adicionado
    const murillo = AppState.members.find(m => m.name === 'Murillo');
    console.log('📋 Teste 1 - Murillo adicionado:', murillo ? '✅ SIM' : '❌ NÃO');
    if (murillo) {
        console.log('   - Role:', murillo.role);
        console.log('   - Instruments:', murillo.instruments);
    }
    
    // Teste 2: Verificar contagem de projetores
    const projectors = AppState.members.filter(m => 
        m.role === 'Projetor' || 
        m.instruments?.includes('Projetor') ||
        ['Elo', 'Ana', 'Flávia', 'Eduarda', 'Murillo', 'Rafael'].includes(m.name)
    );
    console.log('📋 Teste 2 - Membros disponíveis para Projetor:', projectors.length);
    projectors.forEach(p => console.log(`   - ${p.name} (${p.role})`));
    
    // Teste 3: Verificar se campo de data existe
    const dateInput = document.getElementById('scheduleDateInput');
    const datePreview = document.getElementById('datePreview');
    console.log('📋 Teste 3 - Campo de data semi-automática:', dateInput ? '✅ SIM' : '❌ NÃO');
    console.log('📋 Teste 4 - Preview de data:', datePreview ? '✅ SIM' : '❌ NÃO');
    
    // Teste 5: Verificar se campo Projetor existe no formulário
    const projetorSelect = document.getElementById('projetorSelect');
    console.log('📋 Teste 5 - Campo Projetor no formulário:', projetorSelect ? '✅ SIM' : '❌ NÃO');
    
    // Resumo
    const totalTests = 5;
    const passedTests = [murillo, projectors.length > 0, dateInput, datePreview, projetorSelect].filter(Boolean).length;
    
    console.log(`🎯 RESULTADO: ${passedTests}/${totalTests} testes aprovados`);
    
    if (passedTests === totalTests) {
        showSuccessMessage('🎉 Todos os upgrades funcionando perfeitamente!');
        return true;
    } else {
        showErrorMessage(`⚠️ ${totalTests - passedTests} testes falharam. Verifique o console.`);
        return false;
    }
};

// === FUNÇÃO PARA VERIFICAR PROJETORES === //
window.verificarProjetores = function() {
    console.log('📽️ VERIFICANDO TODOS OS PROJETORES...');
    
    const projetoresEsperados = ['Elo', 'Ana', 'Flávia', 'Eduarda', 'Murillo', 'Rafael'];
    const projetoresEncontrados = [];
    
    projetoresEsperados.forEach(nome => {
        const membro = AppState.members.find(m => m.name === nome);
        if (membro && membro.instruments.includes('Projetor')) {
            projetoresEncontrados.push({
                nome: membro.name,
                role: membro.role,
                instruments: membro.instruments
            });
            console.log(`✅ ${nome}: ${membro.role} - Instrumentos: [${membro.instruments.join(', ')}]`);
        } else {
            console.log(`❌ ${nome}: NÃO encontrado ou sem cargo de Projetor`);
        }
    });
    
    console.log(`\n📊 RESULTADO:`);
    console.log(`📽️ Projetores encontrados: ${projetoresEncontrados.length}/${projetoresEsperados.length}`);
    console.log(`📋 Total de membros: ${AppState.members.length}`);
    
    if (projetoresEncontrados.length === projetoresEsperados.length) {
        showSuccessMessage(`🎉 Todos os ${projetoresEsperados.length} projetores foram adicionados com sucesso!`);
        console.log('🎯 Status: TODOS OS PROJETORES CONFIGURADOS ✅');
        return true;
    } else {
        showErrorMessage(`⚠️ Apenas ${projetoresEncontrados.length} de ${projetoresEsperados.length} projetores configurados`);
        return false;
    }
};

// === FUNÇÃO PARA DIAGNOSTICAR PROBLEMAS NO DASHBOARD === //
window.diagnosticarDashboard = function() {
    console.log('🔍 INICIANDO DIAGNÓSTICO COMPLETO DO DASHBOARD...');
    
    const problemas = [];
    const sucessos = [];
    
    // 1. Verificar elemento de data/hora
    const dateTimeElement = document.getElementById('currentDateTime');
    if (dateTimeElement) {
        if (dateTimeElement.textContent && dateTimeElement.textContent.trim() !== '') {
            sucessos.push('✅ Data/Hora: funcionando (' + dateTimeElement.textContent.substring(0, 20) + '...)');
            console.log('✅ Data/Hora elemento:', dateTimeElement.textContent);
        } else {
            problemas.push('❌ Data/Hora: elemento vazio');
            console.log('❌ Data/Hora elemento encontrado mas vazio');
            // Tentar forçar atualização
            updateCurrentDateTime();
        }
    } else {
        problemas.push('❌ Data/Hora: elemento não encontrado');
        console.log('❌ Elemento currentDateTime não encontrado no DOM');
    }
    
    // 2. Verificar contagem de membros
    const memberCountElement = document.getElementById('activeMembersCount');
    if (memberCountElement) {
        if (memberCountElement.textContent && memberCountElement.textContent.trim() !== '' && memberCountElement.textContent !== 'Carregando...') {
            sucessos.push('✅ Membros: funcionando (' + memberCountElement.textContent + ')');
            console.log('✅ Membros:', memberCountElement.textContent);
        } else {
            problemas.push('❌ Membros: carregando infinito');
            console.log('❌ Membros carregando infinito:', memberCountElement.textContent);
        }
    } else {
        problemas.push('❌ Membros: elemento não encontrado');
    }
    
    // 3. Verificar repertório musical
    const songsCountElement = document.getElementById('songsCount');
    if (songsCountElement) {
        if (songsCountElement.textContent && songsCountElement.textContent.trim() !== '' && songsCountElement.textContent !== 'Carregando...') {
            sucessos.push('✅ Repertório: funcionando (' + songsCountElement.textContent + ')');
            console.log('✅ Repertório:', songsCountElement.textContent);
        } else {
            problemas.push('❌ Repertório: carregando infinito');
            console.log('❌ Repertório carregando infinito:', songsCountElement.textContent);
        }
    } else {
        problemas.push('❌ Repertório: elemento não encontrado');
    }
    
    // 4. Verificar próximo evento
    const nextEventElement = document.getElementById('nextEvent');
    if (nextEventElement) {
        if (nextEventElement.textContent && nextEventElement.textContent.trim() !== '' && nextEventElement.textContent !== 'Carregando...') {
            sucessos.push('✅ Próximo Evento: funcionando (' + nextEventElement.textContent + ')');
            console.log('✅ Próximo Evento:', nextEventElement.textContent);
        } else {
            problemas.push('❌ Próximo Evento: carregando infinito');
            console.log('❌ Próximo Evento carregando infinito:', nextEventElement.textContent);
        }
    } else {
        problemas.push('❌ Próximo Evento: elemento não encontrado');
    }
    
    // 5. Verificar próxima escala
    const nextScheduleElement = document.getElementById('nextSchedule');
    if (nextScheduleElement) {
        if (nextScheduleElement.textContent && nextScheduleElement.textContent.trim() !== '' && nextScheduleElement.textContent !== 'Carregando...') {
            sucessos.push('✅ Próxima Escala: funcionando (' + nextScheduleElement.textContent + ')');
            console.log('✅ Próxima Escala:', nextScheduleElement.textContent);
        } else {
            problemas.push('❌ Próxima Escala: carregando infinito');
            console.log('❌ Próxima Escala carregando infinito:', nextScheduleElement.textContent);
        }
    } else {
        problemas.push('❌ Próxima Escala: elemento não encontrado');
    }
    
    // Relatório final
    console.log('\n📊 RELATÓRIO DO DIAGNÓSTICO:');
    console.log(`✅ Sucessos: ${sucessos.length}`);
    sucessos.forEach(s => console.log('  ' + s));
    console.log(`❌ Problemas: ${problemas.length}`);
    problemas.forEach(p => console.log('  ' + p));
    
    if (problemas.length === 0) {
        showSuccessMessage('🎉 Dashboard funcionando perfeitamente!');
        return true;
    } else {
        showErrorMessage(`⚠️ ${problemas.length} problemas detectados no dashboard. Verifique o console.`);
        return false;
    }
};

// === FUNÇÃO PARA CORRIGIR PROBLEMAS DO DASHBOARD === //
window.corrigirDashboard = function() {
    console.log('🛠️ INICIANDO CORREÇÃO DO DASHBOARD...');
    
    // Forçar atualização de tudo
    try {
        console.log('🔄 Forçando atualização de data/hora...');
        updateCurrentDateTime();
        
        console.log('🔄 Forçando atualização do dashboard...');
        updateDashboardData();
        
        console.log('🔄 Forçando atualização instantânea de membros...');
        fixMembersInstantly();
        
        setTimeout(() => {
            diagnosticarDashboard();
        }, 1000);
        
        showSuccessMessage('🛠️ Tentativa de correção executada!');
        
    } catch (error) {
        console.error('❌ Erro durante correção:', error);
        showErrorMessage('❌ Erro durante a correção: ' + error.message);
    }
};

// === FUNÇÃO PARA VERIFICAR FOTOS DOS MEMBROS === //
window.verificarFotosMembros = function() {
    console.log('📸 VERIFICANDO FOTOS DE TODOS OS MEMBROS...');
    
    const membrosComFoto = [];
    const membrosSemFoto = [];
    
    AppState.members.forEach(membro => {
        if (membro.photo && membro.photo.trim() !== '') {
            membrosComFoto.push({
                nome: membro.name,
                role: membro.role,
                foto: membro.photo
            });
            console.log(`✅ ${membro.name}: ${membro.photo}`);
        } else {
            membrosSemFoto.push({
                nome: membro.name,
                role: membro.role
            });
            console.log(`❌ ${membro.name}: SEM FOTO`);
        }
    });
    
    console.log(`\n📊 RESULTADO DAS FOTOS:`);
    console.log(`✅ Membros COM foto: ${membrosComFoto.length}`);
    membrosComFoto.forEach(m => console.log(`   - ${m.nome}: ${m.foto}`));
    
    console.log(`❌ Membros SEM foto: ${membrosSemFoto.length}`);
    membrosSemFoto.forEach(m => console.log(`   - ${m.nome} (${m.role})`));
    
    console.log(`📋 Total de membros: ${AppState.members.length}`);
    
    if (membrosSemFoto.length === 0) {
        showSuccessMessage(`🎉 Todos os ${AppState.members.length} membros têm fotos configuradas!`);
        console.log('🎯 Status: TODAS AS FOTOS CONFIGURADAS ✅');
        return true;
    } else {
        showInfoMessage(`📸 ${membrosComFoto.length} membros com fotos, ${membrosSemFoto.length} sem fotos. Verifique o console.`);
        return false;
    }
};
