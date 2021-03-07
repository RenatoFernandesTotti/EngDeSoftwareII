package br.com.value.projects.builder;

import java.util.List;
import java.util.Random;

import br.com.value.projects.dominio.Jogo;
import br.com.value.projects.dominio.Participante;
import br.com.value.projects.dominio.Resultado;

public class CriadorDeJogo {
	
	private Jogo jogo;

    public CriadorDeJogo() { }

    public CriadorDeJogo para(String descricao) {
        this.jogo = new Jogo(descricao);
        return this;
    }
    
    public Participante joga() {
    	return jogo.getColocacoes().get(0).getParticipante();
    }

    public CriadorDeJogo resultado(Participante participante, double metrica) {
        jogo.anota(new Resultado(participante, metrica));
        return this;
    }

    public Jogo constroi() { 
        return jogo;
    }

}
