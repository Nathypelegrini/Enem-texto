const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você começa um novo projeto de programação, qual é a sua abordagem inicial?",
        alternativas: [
            {
                texto: "Gosto de planejar detalhadamente antes de começar a codificar.",
                afirmacao: "<b>Organização</b> é uma característica forte sua, valorizando o planejamento detalhado."
            },
            {
                texto: "Prefiro começar a codificar logo e ajustar o plano conforme avanço.",
                afirmacao: "Você se destaca pela <b>dinamismo</b>, gostando de aprender e ajustar durante o processo."
            }
        ]
