function mostrarOcultarElemento(botaoClicado) {
	// pega o elemento button que contém o atributo aria-expanded com o valor true
	let botaoExpandido = document.querySelector('button[aria-expanded="true"]');
	// verifica se o botão existe, se é verdadeiro, se não é nulo
	if (botaoExpandido) {
		// pega o pai do pai do botão e busca dentro dele com um seletor o elemento que tenha a classe corpo-perfil e o oculta:
		botaoExpandido.parentNode.parentNode.querySelector('[class*="corpo-"]').style.display = "none";
		// coloca o atributo aria-expanded com o valor falso, ou seja, recolhido:
		botaoExpandido.setAttribute("aria-expanded", "false");
	}
	// verifica se o botão que foi clicado é diferente daquele que estava expandido:
	if (botaoClicado != botaoExpandido) {
		// se for diferente, então coloca o clicado como expandido:
		botaoClicado.setAttribute("aria-expanded", "true");
		// pega o pai do pai do botão e busca dentro dele com um seletor o elemento que tenha a classe corpo-perfil e o deixa visível:
		botaoClicado.parentNode.parentNode.querySelector('[class*="corpo-"]').style.display = "block";
	}
}
