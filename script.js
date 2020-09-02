/*
altura = 150 px
largura = 300 px
x = altura
y = largura
ld 1 = 0    2 = 0 0 0  3 = 0 0  4 = 
       0        0            0          0
       0 0                   0      0 0 0

le 1 =   0  2 =        3 = 0 0  4 = 0 0 0
         0      0          0            0
       0 0      0 0 0      0

i 1 =  0   2 =  
       0        0 0 0 0
       0
       0

quadrado = 0 0
           0 0

s 1 =   0 0  2 = 0
      0 0        0 0
                   0

z 1 = 0 0    2 =    0
        0 0       0 0
                  0

t 1 = 0 0 0  2 =   0  3 =         4 = 0
        0        0 0         0        0 0
                   0       0 0 0      0

*/ 

function jogo() {
    
    var canvas = document.getElementById('tela');
    var cxt = canvas.getContext('2d');
    var tela = {y: canvas.width, x: canvas.height}
    var pc = {y: tela.y / 20, x: tela.x / 30}
    var pos = {y: pc.y*10, x: 0}
    var pcs = [ld, le, i, quadrado, s, z, t]
    var lado = 1
    var chao = pos.x + pc.x*29
    var colisao = {y: pos.y, x: pos.x}
    var colisaoX = []
    var colisaoY = []
    var pcx = 30[pc.x, pc.x+pc.x, pc.x+pc.x*2, pc.x+pc.x*3, pc.x+pc.x*4, pc.x+pc.x*5, pc.x+pc.x*6, pc.x+pc.x*7, pc.x+pc.x*8, pc.x+pc.x*9, pc.x+pc.x*10, pc.x+pc.x*11, pc.x+pc.x*12, pc.x+pc.x*13, pc.x+pc.x*14, pc.x+pc.x*15, pc.x+pc.x*16, pc.x+pc.x*17, pc.x+pc.x*18, pc.x+pc.x*19, pc.x+pc.x*20, pc.x+pc.x*21, pc.x+pc.x*22, pc.x+pc.x*23, pc.x+pc.x*24, pc.x+pc.x*25, pc.x+pc.x, pc.x+pc.x, pc.x+pc.x, pc.x+pc.x]
    var pcy = 20[]
    
    //var objPcs = {ld: function ld(), le: le(), i: i(), quadrado: quadrado(), s: s(), z: z(), t: t()}
    
    window.addEventListener('keydown', movimento)
    
    function ld(g) {
        switch (g) {
            case 1: 
                cxt.fillRect(pos.y, pos.x, pc.y, pc.x+pc.x*2);
                cxt.fillRect(pos.y+pc.y, pos.x+pc.x+pc.x, pc.y, pc.x);
                break

            case 2:
                cxt.fillRect(pos.y, pos.x, pc.y+pc.y*2, pc.x)
                cxt.fillRect(pos.y, pos.x+pc.x, pc.y, pc.x)
                break
            
            case 3:
                cxt.fillRect(pos.y, pos.x, pc.y+pc.y, pc.x)
                cxt.fillRect(pos.y+pc.y, pos.x+pc.x, pc.y, pc.x+pc.x)
                break

            case 4:
                cxt.fillRect(pos.y+pc.y*2, pos.x+pc.x, pc.y, pc.x)
                cxt.fillRect(pos.y, pos.x+pc.x*2, pc.y+pc.y*2, pc.x)
                break
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

    int = setInterval(descer, 500)
    
    pos.x = pos.x-pc.y*2
    pcs[0](lado)

    function descer() {
        limpaTela()
        pos.x = pos.x + pc.x;
        pcs[0](lado)
        if (pos.x+pc.x*2 == chao) {
            clearInterval(int)
        }

    }

    function movimento() {
        switch (event.keyCode) {
            case 40:
                limpaTela()
                pos.x = pos.x + pc.x;
                pcs[0](lado)
                break;
            
            case 38:
                limpaTela()
                pos.x = pos.x - pc.x;
                pcs[0](lado)
                break;
            
            case 37:
                limpaTela()
                pos.y = pos.y - pc.y
                pcs[0](lado)
                break;

            case 39:
                limpaTela()
                pos.y = pos.y + pc.y
                pcs[0](lado)
                break;

            
            
            case 32:
                limpaTela()
                if (lado == 4) {
                    lado = 1
                    pcs[0](lado)
                } else {
                    lado++
                    pcs[0](lado)
                }
                break;
        }
            
        }
        
    }

