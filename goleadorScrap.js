const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://ge.globo.com/futebol/brasileirao-serie-a/';
axios(url).then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const tabelaStatus = $('.ranking-item-wrapper');
    const tabelaJogador = [];
    tabelaStatus.each(function(){
        const nomeJogador = $(this).find('.jogador-nome').text();
        const escudoTime = $(this).find('.jogador-escudo > img').attr('src');
        const posicaoJogador = $(this).find('.jogador-posicao').text()
        const gols = $(this).find('.jogador-gols').text();
        const timeJogador = $(this).find('.jogador-escudo > img').attr('alt');
  
      
    
        tabelaJogador.push({
            nomeJogador,
            escudoTime,
            posicaoJogador,
            gols,
            timeJogador
        });
    });
  console.log(tabelaJogador);
  }).catch(console.error);