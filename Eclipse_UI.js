
// ==UserScript==
// @name         Eclipse UI - Futurista Neon
// @namespace    EclipseLunar
// @version      1.0
// @description  Painel flutuante futurista com design neon dark elegante e animações suaves.
// @author       Gabriell2ls
// ==/UserScript==

(function() {
    const existingPanel = document.getElementById('eclipse-ui-panel');
    if (existingPanel) existingPanel.remove();

    const style = document.createElement('style');
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap');

        #eclipse-ui-panel {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 360px;
            background: rgba(25, 25, 35, 0.8);
            backdrop-filter: blur(12px);
            border: 2px solid rgba(0, 255, 255, 0.3);
            border-radius: 20px;
            box-shadow: 0 0 25px rgba(0, 255, 255, 0.3);
            color: white;
            font-family: 'Orbitron', sans-serif;
            text-align: center;
            padding: 25px;
            z-index: 999999;
            animation: fadeIn 0.6s ease-in-out;
        }

        #eclipse-ui-panel h2 {
            font-size: 1.5em;
            background: linear-gradient(90deg, #00ffff, #9b59b6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 20px;
        }

        .eclipse-btn {
            display: block;
            margin: 10px auto;
            width: 80%;
            padding: 10px 0;
            background: linear-gradient(90deg, #00ffff, #9b59b6);
            border: none;
            border-radius: 12px;
            color: white;
            font-weight: bold;
            font-size: 0.95em;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .eclipse-btn:hover {
            box-shadow: 0 0 15px #00ffff;
            transform: scale(1.05);
        }

        #eclipse-close {
            position: absolute;
            top: 8px;
            right: 12px;
            background: none;
            color: #fff;
            font-size: 18px;
            cursor: pointer;
            border: none;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, -60%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }
    `;
    document.head.appendChild(style);

    const panel = document.createElement('div');
    panel.id = 'eclipse-ui-panel';
    panel.innerHTML = `
        <button id="eclipse-close">✖</button>
        <h2>Eclipse UI</h2>
        <button class="eclipse-btn" id="btn1">Função 1</button>
        <button class="eclipse-btn" id="btn2">Função 2</button>
        <button class="eclipse-btn" id="btn3">Função 3</button>
        <p style="font-size: 0.8em; opacity: 0.7; margin-top: 15px;">Painel estilizado por Gabriell2ls</p>
    `;

    document.body.appendChild(panel);

    document.getElementById('eclipse-close').addEventListener('click', () => {
        panel.remove();
    });

    // Exemplo de ações dos botões
    document.getElementById('btn1').addEventListener('click', () => alert('Função 1 executada!'));
    document.getElementById('btn2').addEventListener('click', () => alert('Função 2 executada!'));
    document.getElementById('btn3').addEventListener('click', () => alert('Função 3 executada!'));
})();
