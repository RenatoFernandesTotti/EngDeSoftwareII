package br.com.value.projects.service;

import static org.junit.Assert.*;

import java.util.Arrays;
import java.util.List;

import org.junit.Test;
import static org.hamcrest.CoreMatchers.*;
import br.com.value.projects.builder.CriadorDeJogo;
import br.com.value.projects.dominio.Jogo;
import br.com.value.projects.dominio.Participante;
import br.com.value.projects.dominio.Resultado;

public class JogoTeste {
	
		
	@Test
	public void deveTerJogoComUnicoParticipante() {
		Jogo jogo = new Jogo("Jogo de corrida");
		assertEquals(0, jogo.getResultados().size());

		jogo.anota(new Resultado(new Participante("Leonardo"), 150));

		assertEquals(1, jogo.getResultados().size());

		assertEquals(150.0, jogo.getResultados().get(0).getMetrica(), 0.00001);
	}
	
	

	@Test
	public void deveTerVariosResultados() {
		Jogo jogo = new CriadorDeJogo()
        .para("Cata moedas")
        .resultado(new Participante("Nelson"), 150.0)
        .resultado(new Participante("Pedro"), 200.0)
        .constroi();

		assertEquals(2, jogo.getResultados().size());
		assertEquals(150.0, jogo.getResultados().get(0).getMetrica(), 0.00001);
		assertEquals(200.0, jogo.getResultados().get(1).getMetrica(), 0.00001);
		
	}
	
	@Test
	public void naoDeveAceitarDoisResultadosDoMesmoParticipante(){

		Jogo jogo = new Jogo("Caça peças");
		Participante leonardo = new Participante("Leonardo");

		jogo.anota(new Resultado(leonardo, 500.0));
		//deve ser ignorado
		jogo.anota(new Resultado(leonardo, 600.0));

		assertEquals(1, jogo.getResultados().size());
        assertEquals(500, jogo.getResultados().get(0).getMetrica(), 0.00001);
		}
	
	
	//Tarefa 2 (AC1): Teste de Unidade - Estudo de Caso - Gestão de Jogos
	
	//todo: 1) Equipe faz UM caso de teste e entrega
	
	//2) Cada integrante da equipe sugere um caso de teste e implementa 
	
	
	//renato Aurélio Fernandes Totti
	//Qual seria um caso de teste para identificar todas as colocações do jogo, começando pelo primeiro colocado (vencedor)?
	@Test
	public void deveClassificarJogadores() {
		Jogo jogo = new Jogo("Futebol");
		
		Participante thiago = new Participante("thiago");
		Participante renato = new Participante("renato");
		Participante leticia = new Participante("leticia");
		
		List<Resultado> shouldBeThis = Arrays.asList(new Resultado[] {new Resultado(renato,800.0),new Resultado(thiago,500.0),new Resultado(leticia,200.0)});
		
		jogo.anota(new Resultado(thiago,500.0));
		jogo.anota(new Resultado(renato,800.0));
		jogo.anota(new Resultado(leticia,200.0));
		List<Resultado> willBeThis=jogo.getColocacoes();
		assertEquals(shouldBeThis.toArray().length, willBeThis.toArray().length);
		for(int i = 0; i < shouldBeThis.toArray().length; i++ ) {
			assertEquals(shouldBeThis.get(i).getMetrica(), willBeThis.get(i).getMetrica(), 0.00001);
		}
		//assertThat(willBeThis.toArray(),hasItems(shouldBeThis.toArray()));
	}
	
	///Thiago Pereira Correa
	/// O jogo deve ter sido criado
	@Test
	public void oJogoDeveTerSidoCriado() {
		Jogo jogo = null;
		assertEquals(true,!(jogo instanceof Jogo));
		jogo = new Jogo("Futebol");
		assertEquals(true,jogo instanceof Jogo);
	}
	
	
	//Giovanne Prestes Dias
	//Qual seria um caso de teste para identificar se os resultados não são negativos?
	@Test
	public void naoDeveTerResultadoNegativo() {
		Jogo jogo = new CriadorDeJogo()
		        .para("Volei")
		        .resultado(new Participante("thiago"), 500.0)
		        .resultado(new Participante("giovanne"), -350.0)
		        .constroi();
		
		assertEquals(true, jogo.getResultados().get(0).getMetrica() >= 0);
		assertEquals(false, jogo.getResultados().get(1).getMetrica() >= 0);
		
		
	}
	
	//Tarefa 3 (AC1): Aprendendo TDD
	@Test
	public void calculoDeMedia() {
		/*Classe de quivalencia: média deve ser >0 para qualquer entrada positiva*/
		Jogo jogo = new Jogo("Futebol");
		
		Participante thiago = new Participante("thiago");
		Participante renato = new Participante("renato");
		Participante leticia = new Participante("leticia");
		
		
		jogo.anota(new Resultado(thiago,500.0));
		jogo.anota(new Resultado(renato,800.0));
		jogo.anota(new Resultado(leticia,200.0));
		
		assertEquals(1366,jogo.getMedia(),0.6);

	}

}