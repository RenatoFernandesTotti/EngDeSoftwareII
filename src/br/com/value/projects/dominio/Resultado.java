package br.com.value.projects.dominio;

public class Resultado implements Comparable<Resultado> {

	private Participante participante;
	private double metrica;
	
	public Resultado(Participante participante, double metrica) {
		this.participante = participante;
		this.metrica = metrica;
	}

	public Participante getParticipante() {
		return participante;
	}

	public double getMetrica() {
		return metrica;
	}
	
	public int compareTo(Resultado r) {
		if(r.getMetrica() > this.getMetrica()) return 1;
		if(r.getMetrica() < this.getMetrica()) return -1;
		return 0;
	}

	
	
	
}
