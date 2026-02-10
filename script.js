/*
altura = 150 px
largura = 300 px
x = altura
y = largura
*/

let jogoIniciado = false;
let int;

function jogo() {
    if (jogoIniciado) {
        return;
    }

    jogoIniciado = true;

    const canvas = document.getElementById('tela');
    const cxt = canvas.getContext('2d');
    const texto = document.getElementById('texto');
    const tela = { y: canvas.width, x: canvas.height };
    const pc = { y: tela.y / 10, x: tela.x / 20 };
    const pos = { y: pc.y * 4, x: 0 };
    const pcs = [ld, le, i, quadrado, s, z, t];
    let lado = 1;
    const chao = pos.x + pc.x * 19;

    texto.textContent = 'Jogo iniciado! Use teclado ou botões de toque.';

    window.addEventListener('keydown', movimento);

    bindTouchControls();

    pos.x = pos.x - pc.x * 2;
    pcs[0](lado);
    int = setInterval(descer, 500);

    function ld(g) {
        switch (g) {
            case 1:
                cxt.fillRect(pos.y, pos.x, pc.y, pc.x + pc.x * 2);
                cxt.fillRect(pos.y + pc.y, pos.x + pc.x + pc.x, pc.y, pc.x);
                break;

            case 2:
                cxt.fillRect(pos.y, pos.x, pc.y + pc.y * 2, pc.x);
                cxt.fillRect(pos.y, pos.x + pc.x, pc.y, pc.x);
                break;

            case 3:
                cxt.fillRect(pos.y, pos.x, pc.y + pc.y, pc.x);
                cxt.fillRect(pos.y + pc.y, pos.x + pc.x, pc.y, pc.x + pc.x);
                break;

            case 4:
                cxt.fillRect(pos.y + pc.y * 2, pos.x + pc.x, pc.y, pc.x);
                cxt.fillRect(pos.y, pos.x + pc.x * 2, pc.y + pc.y * 2, pc.x);
                break;
        }
    }

    function le(g) {}

    function i(g) {}

    function quadrado(g) {}

    function s(g) {}

    function z(g) {}

    function t(g) {}

    function limpaTela() {
        cxt.clearRect(0, 0, tela.y, tela.x);
    }

    function descer() {
        limpaTela();
        pos.x = pos.x + pc.x;
        pcs[0](lado);
        if (pos.x + pc.x * 2 >= chao) {
            clearInterval(int);
            texto.textContent = 'Fim da rodada. Toque em Iniciar para jogar novamente.';
            jogoIniciado = false;
            document.getElementById('iniciar').disabled = false;
        }
    }

    function movimento(evento) {
        switch (evento.keyCode) {
            case 40:
                acao('down');
                break;

            case 38:
                acao('up');
                break;

            case 37:
                acao('left');
                break;

            case 39:
                acao('right');
                break;

            case 32:
                acao('rotate');
                break;
        }
    }

    function acao(tipo) {
        limpaTela();

        if (tipo === 'down') {
            pos.x = Math.min(chao - pc.x * 2, pos.x + pc.x);
        }

        if (tipo === 'up') {
            pos.x = Math.max(0, pos.x - pc.x);
        }

        if (tipo === 'left') {
            pos.y = Math.max(0, pos.y - pc.y);
        }

        if (tipo === 'right') {
            pos.y = Math.min(tela.y - pc.y * 3, pos.y + pc.y);
        }

        if (tipo === 'rotate') {
            lado = lado === 4 ? 1 : lado + 1;
        }

        pcs[0](lado);
    }

    function bindTouchControls() {
        const botoes = document.querySelectorAll('.controle[data-action]');

        botoes.forEach((botao) => {
            const tipo = botao.dataset.action;

            if (tipo === 'start' || botao.dataset.bound === '1') {
                return;
            }

            botao.dataset.bound = '1';

            botao.addEventListener('touchstart', function (evento) {
                evento.preventDefault();
                acao(tipo);
            }, { passive: false });

            botao.addEventListener('click', function () {
                acao(tipo);
            });
        });
    }
}

(function setup() {
    const iniciar = document.getElementById('iniciar');

    iniciar.addEventListener('click', function () {
        if (!jogoIniciado) {
            iniciar.disabled = true;
            jogo();
        }
    });
})();
